function App() {
    const [count,setCount]=React.useState(0)
    function add(){
        // setCount(count+1) wrong practice
        setCount(function(oldValue){
            return oldValue+1
        })
    }

    function sub(){
         // setCount(count+1) wrong practice
        setCount(function(oldValue){
            return oldValue-10
        })
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={sub} >–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
