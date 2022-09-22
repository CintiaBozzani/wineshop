import React from "react"
import "../styles/NavBar.css"

const NavBar = () => {

    return (
        <nav className="nav flexcenter">
            <div className="nav-container-button">
                <button className="nav-button">Home</button>
                <button className="nav-button">Catalogo</button>
                <button className="nav-button">Accesorios</button>
                <button className="nav-button">Contacto</button>
            </div>
        </nav>
    )
}
export default NavBar;