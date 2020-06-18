import * as React from "react";

type Props = {
    checked: boolean
    labelTxt: String
    changeFn: any
  }


export function CheckBox({checked, labelTxt, changeFn}:Props) {
    return(

        <label className="w-full px-4 text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" checked={checked} onChange={changeFn} />
            <span className="text-sm">
                {labelTxt}
            </span>
        </label>
    )
}