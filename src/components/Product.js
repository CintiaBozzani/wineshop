import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Product({product}) {

  return (
    <Card sx={{ width: 250, height: 400, marginTop: 2 }}>
      <CardContent sx={{height:"75%"}}>
        <CardMedia
          component="img"
          height="260"
          image={product.imagen}
          alt={product.nombre}
        />
        <CardContent sx={{height:"40%"}}>
          <Typography gutterBottom variant="subtitle2" component="div" sx={{height:"30%"}}>
            {product.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {product.marca}
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions sx={{height:"20%"}}>
        <Button size="small" color="primary" >
          <Link to={"/item/"+product.id}>Detalle</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
