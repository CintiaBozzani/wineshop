import React, { useContext, useEffect } from "react";
import "../styles/Products.css"
import { CartContext } from '../context/CartContext';
import Cart from "./Cart";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

function ItemCartContainer({ greeting }) {
    const ctx = useContext(CartContext)

    useEffect(() => {
     ctx.totalCart()
         // eslint-disable-next-line
    }, [ctx.cartList])

    return (
        <div >
            <h1>{greeting}</h1>

            <Grid container spacing={2}>
                <Grid item xs={8} sx={{ display: "flex", spacing: 2, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                    {ctx.cartList.length > 0 ? ctx.cartList?.map((product, index) =>
                        <Cart product={product} key={index} />)
                        : <h1>No posees productos en tu carrito</h1>
                    }
                </Grid>
               
                <Grid item xs={4} sx={{ display: "flex", spacing: 2, flexDirection: "column", flexWrap: "wrap", justifyContent: "flex-start" }}>
                    <div style={{width:"80%"}}>
                    <h2>Total en carrido</h2>
                    <h1>${ctx.totalCarrito}</h1>
                    </div>
                    <Button variant="outlined" color="error" sx={{width:"80%", marginBottom:2}} onClick={()=>{ctx.removeList()}}>
                        Clear
                    </Button>
                    <Button variant="contained" color="success" sx={{width:"80%", paddingBottom:2}}>
                        Confirm
                    </Button>
            </Grid>
        </Grid>
        </div >
    )
}
export default ItemCartContainer