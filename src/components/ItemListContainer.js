import React, { useEffect, useState } from "react";
import "../styles/Products.css"
import data from "./data";
import Product from "./Product";
import { useParams } from "react-router-dom";


function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState(data)
    const { id } = useParams();

    useEffect(() => {
        if (id === "Tintos") {
            const tintos = data.filter(producto => producto.categoria == "Tinto")
            setProductos(tintos)
        }
        else if (id === "Blancos") {
            const blancos = data.filter(producto => producto.categoria == "Blanco")
            setProductos(blancos)
        }
        else if (id === "Espumantes") {
            const espumantes = data.filter(producto => producto.categoria == "Espumante")
            setProductos(espumantes)
        }
        else {
            setProductos(data)
        }
    }, [id])

    return (
        <div >
            <h1>{greeting}</h1>
            <div className="products-container">
                {productos.map((product, index) =>
                    <Product product={product} key={index} />)}
            </div>
        </div>
    )
}
export default ItemListContainer