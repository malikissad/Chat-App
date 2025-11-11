export async function AddInformationFetch(avatar, bio, tel) {
  const formData = new FormData();
  formData.append("avatar", avatar);
  formData.append("bio", bio);
  formData.append("tel", tel);
  const response = await fetch("http://localhost:3000/Profile/addInformation", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  });
  return response;
}
