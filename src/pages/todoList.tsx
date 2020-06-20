import * as React from 'react';
import { TodoList } from '../component/todoList';
import { AddForm } from '../component/addForm';
import { Link } from "react-router-dom";


export function ToDoList() {
    return (
        <div>

        <div className="w-1/2 mx-auto p-5 border-solid border border-1 border-teal-500 bg-white rounded shadow-md">
            <h1 className="text-center text-teal-500 text-3xl my-5">To Do List </h1>
            <TodoList />
            <AddForm />
        </div>
        <div className="w-50 mx-auto flex my-5">
            <Link
          to="notFound"
          className=" hover:text-teal-300 text-teal-500 mx-auto text-xs"
          >
          page not found link to test router
        </Link>
        </div>
          </div>
    )
}