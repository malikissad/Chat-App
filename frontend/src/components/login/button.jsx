function Button({text}) {
    return (
        <div className="w-full h-[50%] flex justify-center">
            <button className="w-[80%] h-full bg-white rounded-lg font-semibold shadow-xl
             hover:bg-purple-200 hover:text-purple-800 transition hover:duration-400 ">{text}</button>
        </div>
    )
}
export default Button