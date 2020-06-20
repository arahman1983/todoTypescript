import * as React from "react";

type ContextProps = {
    lang : string
    stringLocal: any
    setLang : any
}

export const LangsContext = React.createContext<Partial<ContextProps>>({});