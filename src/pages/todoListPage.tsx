import * as React from 'react';
import { Link } from "react-router-dom";
import {LangsContext} from '../context/langsContext'
import { TodoList } from '../component/todoList';
import { AddForm } from '../component/addForm';
import { OutlineBtn } from '../elements/button';



export function ToDoList() {
  const {stringLocal,lang, setLang} = React.useContext(LangsContext)
  
  const changeLang = () => {
    if(lang === "en"){
      setLang("ar")
    }else{
      setLang("en")
    }
  }
  
    return (
        <div>

        <div className="w-1/2 mx-auto p-5 border-solid border border-1 border-teal-500 bg-white rounded shadow-md">
          <OutlineBtn label={stringLocal.langBtn} actionFn={changeLang} />
            <h1 className="text-center text-teal-500 text-3xl my-5">{stringLocal.ToDoList}</h1>
            <TodoList />
            <AddForm />
        </div>
        <div className="w-50 mx-auto flex my-5">
            <Link
          to="notFound"
          className=" hover:text-teal-300 text-teal-500 mx-auto text-xs"
          >
          {stringLocal.notFoundLink}
        </Link>
        </div>
          </div>
    )
}