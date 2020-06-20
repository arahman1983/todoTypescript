import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToDoList } from "../pages/todoListPage";
import { UnFoundPage } from "../pages/404";
import { tasksReducer } from "../context/tasksReducer";
import { todoContext } from "../context/todoContext";

export function RouterComponent() {
  const [tasks, dispatchTasks] = React.useReducer(tasksReducer, [
    {
      id: 1,
      description: "Sports ",
      complete: false,
    },
    {
      id: 2,
      description: "Reading",
      complete: false,
    },
    {
      id: 3,
      description: "Watch TV",
      complete: false,
    },
  ]);

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
