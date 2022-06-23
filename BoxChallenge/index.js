const boxes=[
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: false
    },   
]

function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
        <div style={styles} className="box" onClick={props.toggle}></div>
    )
}

function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id){
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    

    
    const squareElements = squares.map(square => (
        <Box key={square.id} id={square.id} on={square.on} toggle={() => toggle(square.id)} />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))