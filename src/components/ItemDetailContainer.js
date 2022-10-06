import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import data from "./data";
import { height } from '@mui/system';

export default function ItemDetailContainer({ greeting }) {

  const { id } = useParams()

  const producto = data.filter(producto => producto.id == id)[0]
  console.log(producto)
  return (
    <div style={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems:"center", width: "100vw", marginTop: 10 }}>
      <h1>{greeting}</h1>
      <Card sx={{ width: 600, height: "auto" }}>
        <CardContent>

          <img src={producto.imagen} alt={producto.nombre} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.marca}
            </Typography>
            <Typography variant="h3" color="orange">
              ${producto.precio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.descripcion}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}
