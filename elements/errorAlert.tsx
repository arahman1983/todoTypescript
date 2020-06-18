import * as React from "react"

type Props = {
    errorMessage:String
}

export function ErrorAlert ({errorMessage}:Props){
    return(
        <div className="w-full my-3 mx-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                <p>{errorMessage}</p>
            </div>
    )
}