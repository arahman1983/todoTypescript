import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToDoList } from "../pages/todoListPage";
import { UnFoundPage } from "../pages/404";
import { tasksReducer } from "../context/tasksReducer";
import { todoContext } from "../context/todoContext";

export function RouterComponent() {
  let localData = localStorage.getItem("localTasks")
  const [tasks, dispatchTasks] = React.useReducer(tasksReducer, localData ? JSON.parse(localData) : []);

  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <todoContext.Provider value={{ tasks, dispatchTasks }}>
              <ToDoList />
            </todoContext.Provider>
          </Route>
        <Route path="*">
        <UnFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}
