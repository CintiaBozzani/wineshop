import React from "react"
import Logo from '../image/logo.png'
import CartWidget from "./CartWidget"
import "../styles/NavBar.css"

const NavBar = () => {

    return (
        <nav className="nav flexcenter">
            <div className="nav-container-button">
                <div className="logo-container">
                    <h3 className="brand">Black Cave</h3>
                    <img className="logo" src={Logo} alt="Logo Marca" />
                </div>

                <button className="nav-button">Home</button>
                <button className="nav-button">Catalogo</button>
                <button className="nav-button">Accesorios</button>  
                <button className="nav-button">Contacto</button>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar;