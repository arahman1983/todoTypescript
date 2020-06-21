import * as React from "react";
import {RouterComponent} from './src/router/routerComp'
import { stringLocal } from "./src/local/data"
import { LangsContext } from './src/context/langsContext'

function App() {
    const [lang, setLang] = React.useState("en");
    const [direction, setDirection] = React.useState("ltr");


    React.useEffect(() => {
        stringLocal.setLanguage(lang);
        if(lang === "ar"){
            setDirection("rtl")
            document.getElementsByTagName("body")[0].style.direction = "rtl"
        }else{
            setDirection("ltr")
            document.getElementsByTagName("body")[0].style.direction = "ltr"
        }
      }, [lang])

    return(
        <div dir={direction} className="bg-gray-200 h-full p-5 flex flex-col justify-center" style={{height:'100vh'}}>
            <LangsContext.Provider value = {{lang, setLang, stringLocal}}>
                <RouterComponent />
            </LangsContext.Provider>
        </div>
    )
    
}

export default App;