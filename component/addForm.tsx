import * as React from "react";
import {TextInput} from '../elements/input'
import {ButtonEl} from '../elements/button'
import {ErrorAlert} from '../elements/errorAlert'


export function AddForm() {
    const [todoTask, setTodoTask] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')

    function onValueChange(e:any){
        setIsError(false)
        setTodoTask(e.target.value)
    }

    function addFn(e:any){
        e.preventDefault();
        if(todoTask.trim().length>0){
            setIsError(false)
            setTodoTask('')
            
        }else{
            setIsError(true)
            setErrorMessage("You must write something to add")
        }
    }

    return(
        <div className="w-full my-3">
            <div className="flex">
                <TextInput value = {todoTask} changeFn={onValueChange} />
                <ButtonEl label= "Add" actionFn={addFn} />
            </div>
            {
                isError && 
                <div className="flex">
                    <ErrorAlert errorMessage={errorMessage}/>
                </div>
            }
            
        </div>

    )
    
}