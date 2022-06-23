function App(){
    const [darkMode,setDarkMode]=React.useState(true)
    function toggle(){
        setDarkMode(prevData=>!prevData)
    }

    return(
        <div className={darkMode ? "dark":"light"}>
            <h1>Light</h1>
            <div className={darkMode ? "slider-dark":"slider"} onClick={toggle}>
                <div className={darkMode ? "toggle-right":"toggle-left"}></div>
            </div>
            <h1>Dark</h1>
        </div>
    )

}


ReactDOM.render(    
        

        
        
        <App />,


        document.getElementById("root"))