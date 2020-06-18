import * as React from "react";

type Props = {
    value: string
    changeFn: any,
  }


export function TextInput({value, changeFn}:Props) {
    return(
        <input
        className= "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mx-4 block w-full appearance-none leading-normal"
        value={value} onChange={changeFn} />
    )
}