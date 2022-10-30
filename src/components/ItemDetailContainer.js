import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer({ greeting, dataMock }) {
  const [producto, setProducto] = useState()
  const { id } = useParams()

  async function getDetail() {
    let idNumber =  parseInt(id)
    let producto = await dataMock?.filter(producto => producto.id === idNumber)   
    setProducto(...producto)
  }

  useEffect(() => {
    getDetail()
    // eslint-disable-next-line
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginTop: 10 }}>
      <h1>{greeting}</h1>
      {producto &&
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
      }
    </div>
  );
}
