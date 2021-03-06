import * as React from "react";
import {todoContext} from '../context/todoContext'
import {TextInput} from '../elements/input'
import {ButtonEl} from '../elements/button'
import {ErrorAlert} from '../elements/errorAlert'
import { LangsContext } from "../context/langsContext";


export function AddForm() {
    const [todoTask, setTodoTask] = React.useState('')
    const [lastId, setLastId] = React.useState(0)
    const [isError, setIsError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')
    const taskContext = React.useContext(todoContext)
    const {stringLocal} = React.useContext(LangsContext)


    React.useEffect(() => {
        taskContext.tasks.length > 0 && 
        setLastId(taskContext.tasks.sort((a,b)=>a.id-b.id)[taskContext.tasks.length-1].id)
    }, [taskContext])

    function onValueChange(e:any){
        setIsError(false)
        setTodoTask(e.target.value)
    }

    function addFn(e:any){
        e.preventDefault();
        if(todoTask.trim().length>0){
            setIsError(false)
            setTodoTask('')
            taskContext.dispatchTasks({
                type: "ADD_TASK",
                task: {
                    id: lastId + 1,
                    description: todoTask,
                    complete: false
                }
            })
            
        }else{
            setIsError(true)
            setErrorMessage(stringLocal.addFormMessage)
        }
    }

    return(
        <div className="w-full my-3">
            <div className="flex">
                <TextInput value = {todoTask} changeFn={onValueChange} placeholderTxt={stringLocal.whatWillYouDo} />
                <ButtonEl label= {stringLocal.add} actionFn={addFn} />
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