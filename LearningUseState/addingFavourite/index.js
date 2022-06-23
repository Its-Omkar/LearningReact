function Star(props){
    let starIcon = props.isFilled ? "star-filled.jpg" : "star-empty.png"
    return(
        <img 
            src={`./${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}  // passed and used state of parent function in child function
        />

    )
}




function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    
    
    function toggleFavorite() {
        setContact(function(prevObject){
            return {
                ...prevObject,
                isFavorite : !prevObject.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./photo1.jpg" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite}  handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))