import { Link } from "react-router-dom"
function Navbar(){

return(
<nav className="navbar">
            <div className="nav-center">
            {/* Cambia a usar <Link> para la navegación interna */}
            <ul className="nav-links"><span>Cocktail DWEC-DB</span></ul>
            <ul className="nav-links">
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>
            </div>
    </nav>
)}
export default Navbar