import * as React from "react";

type ContextProps = {
    tasks : any[]
    dispatchTasks : any
}

export const todoContext = React.createContext<Partial<ContextProps>>({});