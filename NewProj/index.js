function Navbar(){
    return (
        <nav>
            <img src="./logo.png" className="nav-logo"></img>
            <h3 className="nav-logotext">ReactFacts</h3>
            <h4 className="nav-text">React Course-Project 1 </h4>
        </nav>
        
    )
}

function Maincomponent(){
    return(
        <main className="main">
        <h1 className="main--title">Fun facts about React</h1>
        <ul className="main--facts">
            <li>Was first released in 2013</li>
            <li>Was originally created bt Jordan Walke</li>
            <li>gas well over 100K starts on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps,including mobile apps </li>
        </ul>
        </main>
    )
}

const page=(
    <div>
        <Navbar />
        <Maincomponent />
    </div>
)

ReactDOM.render(page,document.getElementById("root"))