import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Cart({ product }) {
    const [total, setTotal] = useState()
    const [count, setCount] = useState(product.cantidad);
    const ctx = useContext(CartContext);

    async  function  increment() {
        //setCount(prevCount => prevCount+=1);
       await  setCount(function (prevCount) {
            if(prevCount < product.stock)
            return (prevCount += 1)
            else{
                return(product.stock)
            }
        });
       ctx.totalCart()

    }

   async function decrement() {
     await   setCount(function (prevCount) {
            if (prevCount > 1) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
        ctx.totalCart()
    }
    async function incQ() {
        let prodTotal = count * product.precio
        setTotal(prodTotal)       
    }
    useEffect(() => {
        incQ()
        product.cantidad = count
    }, [count])

    return (
        <Card sx={{ width: 250, height: 500, marginTop: 2 }}style={{position:"relative"}}>
            <CardContent sx={{ height: "65%", padding: 0 }}>
                <CardMedia
                    component="img"
                    height="260"
                    image={product.imagen}
                    alt={product.nombre}
                />
                <CardContent sx={{ height: "40%", padding: 0 }}>
                    <Typography gutterBottom variant="subtitle2" component="div" sx={{ height: "30%" }}>
                        {product.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        {product.marca}
                    </Typography>
                </CardContent>
            </CardContent>
            <CardActions sx={{ height: "20%", display: "flex", flexDirection: "column" }}>
                <Grid container spacing={2} >
                    <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 0, paddingBottom: 0 }}>
                        <Button size="small" color="primary" >
                            <Link to={"/item/" + product.id} style={{ fontWeight: "bolder", color: "inherit", paddingTop: 0, paddingBottom: 0 }}>Detalle</Link>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 0, paddingBottom: 0 }}>
                        <Typography variant="h4" color="orange" >
                            ${product.precio}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                        <IconButton color="error" aria-label="add to shopping cart" onClick={() => { ctx.deleteItem(product.id) }}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>

                </Grid>
                <Grid container spacing={2} style={{position:"absolute", top:0, justifyContent: "space-between"}}>
                    <Grid item xs={7} style={{ display: "flex", justifyContent: "left", alignItem: "center" }}>
                        <div style={{ display: "flex-start", flexDirection: "row" }}>
                            <IconButton color="secondary" aria-label="add an alarm" onClick={increment}>
                                <KeyboardArrowUpIcon sx={{ fontSize: 40 }}/>
                            </IconButton>
                            <p style={{ fontSize: "30px", marginBottom: 0, marginTop: 0 }}>{count}</p>
                            <IconButton color="secondary" aria-label="add an alarm" onClick={decrement}>
                                <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={5} style={{ display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
                            <p style={{ fontSize: "15px", margin: 0, alignSelf: "center", fontWeight:"bolder" }}><strong>Stock</strong></p>
                            <p style={{ fontSize: "25px", margin: 0, alignSelf: "center" }}>{product.stock}</p>
                        </div>
                    </Grid>             
                </Grid>
                <Grid>
                <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <p style={{ fontSize: "15px", margin: 0, alignSelf: "center" }}>Total producto</p>
                            <p style={{ fontSize: "25px", margin: 0, alignSelf: "center" }}>${total}</p>
                        </div>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}
