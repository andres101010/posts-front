import { Button, Grid, Typography,TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea'
import React, { useEffect } from 'react';
import { UseGlobalHooks } from '../../component/hooks/UseGlobalHooks';
import { useParams } from 'react-router-dom';
import { cargarDatosPosts, ComentarioPosts,cargarDatosComentariosById } from '../../component/servicesAxios/ServicesAxios';
import {useNavigate} from 'react-router-dom';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
const NuevoComentario = () => {
  const {
    idpostsState,
    setIdPostState,
    posts,
    setPosts,
    showForm,
    setShowForm,
    contenidoComentario,
    setContenidoComentario,
    fechaPublicacionComentarios,
    setFechaPublicacionComentario,
    usuarioComentario,
    setUsuarioComentario,
    dataComentario,
    setDataComentario
  } = UseGlobalHooks();
 
  const  id  = useParams();
  const idposts = id.idposts
  
  const getDataComentarioById = async () =>{
    try {
      const response = await cargarDatosComentariosById(idposts) 
      setDataComentario(response)
      console.log(response)
    } catch (error) {
      throw new Error(error)
    }
  }

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

  const sendComentario = async (e) => {
    e.preventDefault();
    try {
      if(fechaPublicacionComentarios === "" || usuarioComentario === "" || contenidoComentario === ""){
        alert("Debes completar todos los campos")
      }else{
        const data = { fechaPublicacionComentarios, usuarioComentario, contenidoComentario};
        const resp = await ComentarioPosts(idposts,data)
        alert("Enviado con exito!!")
        dataComentario()
      }
    } catch (error) {
      new Error ("Error: " + error)
    }
  };

  useEffect(()=>{
    cargarPostsid();
    getDataComentarioById();
  },[]);

  const cargarFormComentario = () => {
    setShowForm(true);
  }

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
       <Typography variant='h2' color={'gray'}>Haz un nuevo comentario</Typography>
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
              <Grid item md={12} style={{display:'block', width:'200px'}}>
                <img src={'http://localhost:3001/' + row.data} alt="" />
              </Grid>
                <Button variant='contained'style={{margin:'8px'}} onClick={()=>{cargarFormComentario()}}>Comentar</Button>
        
                </Grid>

              ))
            }
     </Grid>

     <Grid item md={12} textAlign={'center'}>
      { 
      showForm ? 

      <Grid item md={12} textAlign={'center'} style={{border:'solid 2px black', backgroundColor:'gray',padding:'10px', margin:'auto',marginTop:'5px', borderRadius:'5px', width:'800px'}}>
      <Box component="form" noValidate autoComplete="off" >
      <FormControl sx={{ width: '50ch' }}>
       <TextField type="date" placeholder='fecha' onChange={(e)=>{setFechaPublicacionComentario(e.target.value)}} />
       <TextField type="text" placeholder='usuario' onChange={(e)=>{setUsuarioComentario(e.target.value)}}/>
       <Textarea  placeholder="Escribe el contenido" style={{height:'300px'}} onChange={(e)=>{setContenidoComentario(e.target.value)}} />
       <Button variant='contained'style={{margin:'8px'}} onClick={(e)=>{sendComentario(e)}}>Publicar</Button>
      </FormControl>
    </Box>
      </Grid>
      :
      
     dataComentario.map((row)=>(
            <Grid container 
            key={row.idcomentarios}
            style={{border:'solid 2px black', width:'800px', height:'auto',padding:'10px', backgroundColor:'gray', color:'white',margin:'auto'}}
            justifyContent={'center'}
            >
              <Grid item md={12} style={{backgroundColor:'white',color:'black', fontSize:'15px', border:'solid 2px black'}}>
                <p style={{fontSize:'18px'}}>{row.contenido_comentario}</p> 
                <p>  {row.fecha_publicacion_comentarios}</p>
                <p> {row.usuario_comentario}</p>
                <Button variant='contained'style={{margin:'8px'}}>Responder</Button>
             </Grid>
             </Grid>
     ))
     }
     </Grid>
   </Grid>
  )
}

export default NuevoComentario