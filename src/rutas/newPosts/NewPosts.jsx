import { Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const NewPosts = () => {
  const enviar = (e)=>{
    e.preventDefault();
    axios.get('http://localhost:3001/posts',{
      
    })
    console.log('enviado')
  }
 const cargarDatos =  () =>{
  axios.get('http://localhost:3001/login')
  .then(response => console.log(response))
}
  useEffect(()=>{
//   // Hacer una solicitud al servidor para obtener el ID de usuario
//   fetch('/http://localhost:3001/login')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   // const loginid = data.loginid;

//   // // Almacenar el ID de usuario en el localStorage
//   // localStorage.setItem('userId', loginid);

//   // console.log('ID de usuario almacenado en el localStorage:', userId);
// })
// .catch(error => {
//   console.error('Error al obtener el ID de usuario:', error);
// });
cargarDatos();

  },[])
  return (
    <Grid container>
     <Grid item md={12} textAlign={'center'} margin={'5px'}>
    <Typography variant="h2" color={'gray'}> Que estas pensando?</Typography>
      </Grid>
        <Button variant='outline' onClick={(e)=>{enviar(e)}}>Enviar</Button>
    </Grid>
  )
}

export default NewPosts