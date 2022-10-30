import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


export default function Product({ product }) {

  const ctx = useContext(CartContext);

  function checkCartList(id) {
    let check = ctx.cartList.filter(item => item.id === id)
    if (check.length > 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <Card sx={{ width: 250, height: 400, marginTop: 2 }}>
      <CardContent sx={{ height: "75%" }}>
        <CardMedia
          component="img"
          height="260"
          image={product.imagen}
          alt={product.nombre}
        />
        <CardContent sx={{ height: "40%" }}>
          <Typography gutterBottom variant="subtitle2" component="div" sx={{ height: "30%" }}>
            {product.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {product.marca}
          </Typography>


        </CardContent>
      </CardContent>
      <CardActions sx={{ height: "20%" }}>
        <Grid container spacing={2} >
          <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button size="small" color="primary" >
              <Link to={"/item/" + product.id} style={{ fontWeight: "bolder", color: "inherit" }}>Detalle</Link>
            </Button>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography variant="h4" color="orange" >
              ${product.precio}
            </Typography>
          </Grid>

          {checkCartList(product.id) ?
            (<Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
              <IconButton color="success" aria-label="add to shopping cart" onClick={() => { ctx.deleteItem(product.id) }}>
                <CheckCircleOutlineIcon />
              </IconButton>
            </Grid>) :

            (<Grid item xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
              <IconButton color="primary" aria-label="add to shopping cart" onClick={() => { ctx.addToCart(product, 1) }}>
                <AddShoppingCartIcon />
              </IconButton>
            </Grid>)
          }

        </Grid>
      </CardActions>
    </Card>

  );
}
