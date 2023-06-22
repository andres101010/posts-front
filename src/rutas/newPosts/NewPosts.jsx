import { Button, Grid, TextField, Typography } from '@mui/material'
import Textarea from '@mui/joy/Textarea'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { UseGlobalHooks } from '../../component/hooks/UseGlobalHooks';
import { enviarDatosPosts } from '../../component/servicesAxios/ServicesAxios';
import Alert from '@mui/material/Alert';
const NewPosts = () => {
 const [alertNewPosts, setAlertNewPosts] = useState(false)
  const { 
    titulo,
    setTitulo,
    contenido,
    setContenido,
    fecha,
    setFecha,
    userPosts,
    setUserPosts,
    file,
    setFile
  } = UseGlobalHooks();

  const navegar = () => {
    setTimeout(() => {
     navigate('/')
    },3001)
   }

  const handleTitulo = (e) => {setTitulo(e.target.value)};
  const handleContenido = (e) => {setContenido(e.target.value)};
  const handFecha = (e) => {setFecha(e.target.value)};
  const handleUserPosts = (e) => {setUserPosts(e.target.value)};
  const handleFile = (e)=> {
    setFile(e.target.files[0]);
  };
  const formData = new FormData();
  formData.append('file', file)

  const enviarDatos = async (e) => {
  try {
    e.preventDefault();
    if(titulo === "" || fecha === "" || userPosts === "" || contenido === ""){
      alert("Debes completar los campos")
    }else{
      const data = {titulo, fecha, userPosts,contenido, file};
      const send = await enviarDatosPosts(data)
      console.log(send)
      setAlertNewPosts(true)
      navegar()
    }
  } catch (error) {
    console.log(error, "Error sending")
  }
  };

  const regresar = () => {
    navigate('/')
  }
 
 const navigate = useNavigate();
  return (
    <Grid container>

     <Grid item md={12} textAlign={'center'} margin={'5px'}>
    <Typography variant="h2" color={'gray'}> Que estas pensando?</Typography>
      </Grid>

      <Grid item md={12} textAlign={'center'} margin={'5px'}>
        <Typography variant='h3' color={'gray'}>Agrega un mensaje nuevo al foro.</Typography>
      </Grid>
    {
      alertNewPosts &&
         <Grid item md={8} xs={12}  style={{width:'200px' ,margin:'auto'}}>
             <Alert severity="success">POSTS ENVIADO EXITOSAMENTE!!!</Alert>
        </Grid>
    }
      <Grid item md={12}><Button variant='contained'style={{margin:'8px', float:'right'}} onClick={()=>{regresar()}}>Regresar</Button></Grid>
      <Grid item md={12} textAlign={'center'} style={{border:'solid 2px black', backgroundColor:'gray',padding:'10px', margin:'10px', borderRadius:'5px'}}>
      <Box component="form" noValidate autoComplete="off" >
      <FormControl sx={{ width: '50ch' }}>
       <TextField type="text" placeholder='titulo' onChange={handleTitulo} />
       <TextField type="date" placeholder='fecha' onChange={handFecha } />
       <TextField type="text" placeholder='usuario' onChange={handleUserPosts}/>
       <Textarea  placeholder="Escribe el contenido" style={{height:'300px'}} onChange={ handleContenido} />
       <TextField type="file" name='file' onChange={handleFile}/>
       <Button variant='contained'style={{margin:'8px'}} onClick={(e)=>{enviarDatos(e)}}>Publicar</Button>
      </FormControl>
    </Box>
      </Grid>
        
    </Grid>
  )
}

export default NewPosts