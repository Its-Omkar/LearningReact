import './index.css';
import logo from './logo.jpg'

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" />
                <ul className="nav-items">       {/* For styling we use className instead of class */}
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li> 
                </ul>
            </nav> 
            
        </header>
    )

}


export default Header;

