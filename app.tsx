import * as React from "react";
import {RouterComponent} from './src/router/routerComp'


function App() {
    return(
        <div className="bg-gray-200 h-full p-5 flex flex-col justify-center" style={{height:'100vh'}}>
            <RouterComponent />
        </div>
    )
    
}

export default App;