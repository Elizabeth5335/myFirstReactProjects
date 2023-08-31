import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./style.css"

export default function App(){

    const [darkMode, setDarkMode] = React.useState(true);

    function handleClick (){
        setDarkMode(prevDarkMode => !prevDarkMode);
        console.log(darkMode);
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={handleClick}/>
            <Main darkMode={darkMode} />
        </div>
    ) 
}
