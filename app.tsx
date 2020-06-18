import * as React from "react";
import {AddForm} from './component/addForm'
import {TodoList} from './component/todoList'
import {tasksReducer} from './context/tasks'
import {todoContext} from './context/todoContext'


function App() {
    const [tasks, dispatchTasks] = React.useReducer(tasksReducer, [
        {
            id: 1,
            description: "Sports ",
            complete: false
        },
        {
            id: 2,
            description: "Reading",
            complete: false
        },
        {
            id: 3,
            description: "Watch TV",
            complete: false
        }
    ])
    return(
        <div className="bg-gray-200 h-full p-5">
            <div className="w-1/2 mx-auto p-5 border-solid border border-1 border-teal-500 bg-white rounded">
                <h1 className="text-center text-teal-500 text-3xl my-5">To Do List </h1>
                <todoContext.Provider value={{tasks, dispatchTasks}}>
                    <TodoList />
                    <AddForm />
                </todoContext.Provider>
            </div>
        </div>
    )
    
}

export default App;