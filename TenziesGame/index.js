

function Dice(props){
    return(
            <div className={props.isHeld ? "dice-face-clicked": "dice-face"} onClick={props.holdDice} >
                <h2>{props.value}</h2>
            </div>
    )
}
// 





function App(){
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])

    function generateNewDice(die){
        return {...die,value:Math.ceil(Math.random() * 6), isHeld:false}
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({value:Math.ceil(Math.random() * 6), isHeld:false,id:{i}})
        }
        return newDice
    }

    

    const diceElements = dice.map(die => <Dice value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/>)

    function rollDice(){
        if(!tenzies){
            setDice(oldDice=>oldDice.map(die=> die.isHeld ? die : generateNewDice(die)))
        }
        else{
            setDice(allNewDice)
        }
    }

    function holdDice(id){
        setDice(oldDice=>oldDice.map(die=>die.id===id ? {...die,isHeld:!die.isHeld}:die))

    }
    
    return(
        <main>
            <h1 className="Title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" :"Roll"}</button>
        </main>
    )

}


ReactDOM.render(  <App />,document.getElementById("root"))