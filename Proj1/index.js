

// const page =(
//         <div>
//             <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-BpvNzwkSx9w9LdAK1qzcgHaGo%26pid%3DApi&f=1" width="150px"/>
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well ober 100K stars on GitHub</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise aapps,including mobile apps</li>
//             </ul>
//         </div>
//     )
    
//     ReactDOM.render(page, document.getElementById("root"))


// Better Way of writing react components

// header function in header.js file vaha se export kiya aur ab yaha import karenge

// import Header from './Header';
//  ... not working but ese hi karna hai 


function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-BpvNzwkSx9w9LdAK1qzcgHaGo%26pid%3DApi&f=1" className="nav-logo" />
                <ul className="nav-items">       {/* For styling we use className instead of class */}
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li> 
                </ul>
            </nav> 
            
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))








