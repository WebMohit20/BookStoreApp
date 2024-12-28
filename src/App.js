import React from "react";
import "./style/style.css"
import Provider from "./Cotntext/Provider";
import Api from "./component/Api";
import Nav from "./component/Nav";
import Books from "./component/Books";
const App = ()=>{
    
    return (
        <div className="container">
            <Provider>
                <Api/>
                <Nav/>
                <Books/>
            </Provider>
        </div>
    )
}

export default App;