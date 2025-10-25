import React from "react"

function TextArea({text}){
    return (
        <>
            <textarea 
             placeholder="Tell us about your self...."
             className="w-[80%] h-[100%] rounded-xl bg-blue-100 ring-bleu-100 ring-1 pl-3 focus:ring-2
              focus:ring-[#e11d74] transition-all duartion-300 focus:outline-none pt-2"></textarea>
          <label className="absolute left-[13%] -top-8 text-lg font-semibold text-gray-700">{text}</label>
        </>
    )
}
export default TextArea