import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { UseGlobalHooks } from '../../component/hooks/UseGlobalHooks';
import { useParams } from 'react-router-dom';
import { cargarDatosPosts } from '../../component/servicesAxios/ServicesAxios';
import {useNavigate} from 'react-router-dom'
const NuevoComentario = () => {
  const {
    posts,
    setPosts
  } = UseGlobalHooks();
 
  const  id  = useParams();
  const idposts = id.idposts
  console.log(idposts)
  const cargarPostsid = async () =>{
    try {
      console.log(idposts)
      const response = await cargarDatosPosts(idposts)
      setPosts(response)
      console.log(posts)
    } catch (error) {
      new Error(error,"Error al cargar datos")
    }
  };
  useEffect(()=>{
    cargarPostsid();
  },[]);
  const navigat = ()=>{
    navigate('/newPosts')
  }
  const navigatInicio = ()=>{
    navigate('/')
  }
  const navigate = useNavigate();
  return (
   <Grid container>
     <Grid item md={12} textAlign={'center'} mt={4}>
       <Typography variant='h2' color={'gray'}>Nuevo comentario</Typography>
     </Grid>
     <Grid item md={12} xs={12} display={'flex'} style={{flexDirection: 'row-reverse'}}>
      <Button onClick={()=>{navigat()}} variant='contained'  style={{ margin:'5px'}}>Nuevo posteo</Button>
      <Button onClick={()=>{navigatInicio()}} variant='contained'  style={{ margin:'5px'}}>Regresar</Button>
      </Grid>
     <Grid item md={12} textAlign={'center'} mt={4}>
        {
          
          posts.map((row)=>(
            <Grid container 
            key={row.idposts}
            style={{border:'solid 2px black', width:'800px', height:'auto',padding:'10px', backgroundColor:'gray', color:'white',margin:'auto'}}
            justifyContent={'center'}
            
            >
              <Grid item md={12} style={{display:'block'}}>
              <h1>{row.titulo}</h1>
              <p>{row.fecha_publicacion}</p>
              <p>Contenido publicado por: {row.user_posts}</p>
              </Grid >
              <Grid item md={12} style={{display:'block', fontSize:'20px'}}>
                <p>{row.contenido_posts}</p>
              </Grid>
              <Grid item md={12}><h1>Comentarios:</h1></Grid>
              <Grid item md={12} style={{backgroundColor:'white',color:'black', fontSize:'15px', border:'solid 2px black'}}>
                <p style={{fontSize:'18px'}}>{row.contenido_comentario}</p> 
                <img>{row.data}</img>
                <p> Comentario pubiclicado: {row.fecha_publicacion_comentarios}</p>
                <p> Usuario: {row.usuario_comentario}</p>
                 </Grid>
                <Button variant='contained'style={{margin:'8px'}}>Comentar</Button>
            </Grid>
          ))
        }
     </Grid>
   </Grid>
  )
}

export default NuevoComentario