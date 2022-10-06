import React from "react"
import Logo from '../image/logo.png'
import CartWidget from "./CartWidget"
import "../styles/NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="nav">

            <Link className="logo-container" to="/">
                <h3 className="brand">Black Cave</h3>
                <img className="logo" src={Logo} alt="Logo Marca" />
            </Link>

            <div className="nav-container-button">
                <Link className="nav-button" to="/category/Tintos">Tintos</Link>
                <Link className="nav-button" to="/category/Blancos">Blancos</Link>
                <Link className="nav-button" to="/category/Espumantes">Espumantes</Link>
            </div>
            <div className="cart">
                <CartWidget />
            </div>

        </nav >
    )
}
export default NavBar;