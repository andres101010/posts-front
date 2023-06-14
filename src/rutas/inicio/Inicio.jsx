import React, { useEffect, useState } from 'react'
import { Grid,Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { UseGlobalHooks } from '../../component/hooks/UseGlobalHooks';

 const Inicio = ({isAllowed}) => {
 const {
  data,
  serch,
  setSerch,
  getData,
  setIdPosts,
  idposts
 } = UseGlobalHooks();

 useEffect(()=>{
   getData();
  },[])
  const cargarTodo = ((obj)=>{
    setIdPosts(obj.idposts)
    const id = obj.idposts
    console.log(id) 
    
    navigate(`/comentario/${id}`)
  })
  
  // const ir = (idposts)=>{
  //   console.log(idposts)
  // }
  const navigat = ()=>{
    navigate('/newPosts')
  }
  const navigate = useNavigate();
  const result = !serch ? data : data.filter((datos)=> datos.titulo.toLocaleLowerCase().includes(serch.toLocaleLowerCase()));
  return (
    <Grid container >
      <Grid item md={12} xs={12} textAlign={'center'} margin={'5px'}>
      <Typography variant="h3" color={'gray'}> BIENVENIDOS!</Typography>
      </Grid>
      <Grid item md={12} xs={12} display={'flex'} style={{flexDirection: 'row-reverse'}}>
      <Button onClick={()=>{navigat()}} variant='contained'  style={{ margin:'5px'}}>Nuevo posteo</Button>
      </Grid>
      
        <Grid item md={12} xs={12} textAlign={'-webkit-center'}>
          <Grid item md={12} xs={12} textAlign={'end'}>
          <TextField type="input" id="outlined-basic" label="Busca un posts" onChange={(e)=>{setSerch(e.target.value)}} style={{margin:'5px'}} InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />    
      </InputAdornment>
    ),
  }} ></TextField>
          </Grid>
        {
          result.length === 0 ? <h1>no hay datos</h1> : result.map((row)=>(
              <Grid
              container
              key={row.idposts}
              style={{border:'solid 2px black', width:'500px', height:'230px',margin:'5px',padding:'10px', backgroundColor:'gray', color:'white'}}
              justifyContent={'center'}
              
              >
              
                <p style={{float:'left'}}>Fecha de publicacion: {row.fecha_publicacion}</p>
                 <Grid item md={12} xs={12} textAlign={'center'} ><h1>{row.titulo}</h1></Grid>
                 <p>Usuario: {row.user_posts}</p>
                 <Grid item md={12} xs={12}>
                 <Button variant='contained' size="small" style={{float:'right'}} onClick={()=>{cargarTodo(row)}}>Ir al comentario</Button>
                 </Grid>
              </Grid>
                
            ))
        }
        </Grid>
    </Grid>
  )
}

export default Inicio
