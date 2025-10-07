import React from "react"

function DemoButton() {
  return (
    <>
      <button
        className="group w-[60%] h-[60%] bg-black rounded-2xl transition-all duration-400
         hover:bg-white hover:ring-black hover:ring-2 hover:text-black button-shadow">

        <p className="text-xl font-bold text-white group-hover:text-black">Demo Login</p>
      </button>
    </>
  )
}

export default DemoButton
