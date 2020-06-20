import * as React from "react";

type Props = {
    label: string
    actionFn: any,
  }


export function ButtonEl({label, actionFn}:Props) {
    return(
        <button 
            className="bg-teal-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded"
            onClick={actionFn}
        >
            {label}
        </button>
    )
}

export function IconButton({label, actionFn}:Props) {
    return(
        <button 
            className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded"
            onClick={actionFn}
        >
            {label}
        </button>
    )
}