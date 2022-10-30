import React, { useEffect, useState, useContext } from "react";
import "../styles/Products.css"
import Product from "./Product";
import { useParams } from "react-router-dom";
import { CategoryContext} from '../context/CategoryContext';

function ItemListContainer({ greeting, dataMock }) {
    
    const [productos, setProductos] = useState()
    const { id } = useParams();
    const ctx = useContext(CategoryContext)

    const categoryAssign =()=>{
        if (id !== undefined){
        let fixCategory = id.substring(0,id.length -1)          
        let categoria = dataMock?.filter(producto => producto.categoria === fixCategory)
        setProductos(categoria)
        ctx.setCategory(id)
        }else{
            setProductos(dataMock)
        }
    }
    
    useEffect(() => {
      categoryAssign()
        // eslint-disable-next-line
    },[id])

    return (
        <div >
            <h1>{greeting}</h1>
            <div className="products-container">
                {productos?.map((product, index) =>
                    <Product product={product} key={index} />)}
            </div>
        </div>
    )
}
export default ItemListContainer