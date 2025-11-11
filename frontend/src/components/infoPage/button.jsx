import React, { useContext } from "react";
import { AddInformationFetch } from "../../services/AddInformationFetch";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../authContext/authContext";
function Button({
  text,
  className,
  avatar,
  image,
  bio,
  tel,
  loading,
  setloading,
}) {
  const { Protected, Refresh } = useContext(AuthContext);
  const navigate = useNavigate();
  async function handleclick() {
    try {
      const testAccess = await Protected();
      const resultTestAccess = await testAccess.json();
      console.log(testAccess);
      if (testAccess.status == 401) {
        console.log("access token invalid");
        const testRefresh = await Refresh();
        if (testRefresh.status == 400 || testRefresh.status == 403) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }
        const resultTestRefresh = await testRefresh.json();
        localStorage.setItem("token", resultTestRefresh.AccessToken);
      }

      if (localStorage.getItem('token')){
        setloading(true);
        const response = await AddInformationFetch(avatar, bio, tel);
        const data = await response.json();
        setloading(false)
      }
    } catch (err) {
      return err.message;
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-[10%] mt-3">
      <button
        onClick={async (e) => {
          await handleclick();
          if (localStorage.getItem("token")) {
            console.log(localStorage.getItem("token"));
          } else {
            console.log("pas de token");
          }
        }}
        className={className}
      >
        {loading ? (
          <BeatLoader color="white" size={8}></BeatLoader>
        ) : (
          <p className="text-white font font-semibold text-meduim">{text}</p>
        )}
      </button>
    </div>
  );
}
export default Button;
