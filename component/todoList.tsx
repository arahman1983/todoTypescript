import * as React from "react";
import {CheckBox} from '../elements/chexkbox'
import {todoContext} from '../context/todoContext'
import {IconButton} from '../elements/button'


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
        <div className="w-100 px-4">
            <ul className="divide-y divide-gray-300">
                {
                    taskContext.tasks.map((task:any)=> ( 
                        <li className="py-3 flex" key={task.id}>
                            <CheckBox 
                            checked={task.complete} 
                            labelTxt ={task.description} 
                            changeFn ={() => changeStatue(task.id)}/>
                            <IconButton label="x" actionFn={()=> deleteTask(task.id)} />
                        </li>
                        )
                    )
                }
                
            </ul>
        </div>
    )
}