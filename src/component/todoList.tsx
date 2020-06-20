import * as React from "react";
import {todoContext} from '../context/todoContext'
import {CheckBox} from '../elements/chexkbox'
import {IconButton} from '../elements/button'
import {NoDataAlert} from '../elements/errorAlert'


export function TodoList(){
    const taskContext = React.useContext(todoContext)
    
    const changeStatue = (id:Number)=> {
            let modifiedTask = taskContext.tasks.find(task => task.id === id)
        taskContext.dispatchTasks({
            type:"EDIT_TASK", 
            task: {...modifiedTask, complete: !modifiedTask.complete}
        })
    }

    const deleteTask = (id:Number)=> {
        taskContext.dispatchTasks({
            type:"DELETE_TASK", 
            task: taskContext.tasks.find(task => task.id === id)
        })
    }

    return(
        <div className="w-100 pl-4">
            <ul className="divide-y divide-gray-300">
                {
                    taskContext.tasks.length > 0 ? (

                        taskContext.tasks.map((task:any)=> ( 
                            <li className="pb-2 pt-5 flex" key={task.id}>
                                <CheckBox 
                                customStyle="line-through"
                                checked={task.complete} 
                                labelTxt ={task.description} 
                                changeFn ={() => changeStatue(task.id)}/>
                                <IconButton label="x" actionFn={()=> deleteTask(task.id)} />
                            </li>
                            )
                        )
                    )
                    :
                    (
                        <NoDataAlert errorMessage="Theres nothing todo" />
                    )
                    
                }
                
            </ul>
        </div>
    )
}