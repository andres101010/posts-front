import React from 'react'
import { Grid,Typography, Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import { UseGlobalHooks } from '../../component/hooks/UseGlobalHooks'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { registrar } from '../../component/servicesAxios/ServicesAxios'
import Alert from '@mui/material/Alert';
const Registrar = () => {
  const {
    onchangeUser,
    onchangePassword,
    user,
    password,
    showAlert,
    setShowAlert,
    showAlertError,
    setShowAlertError,
    timeAlert,
    timeAlertError
  } = UseGlobalHooks();
  const navegar = () => {
    setTimeout(() => {
     navigate('/')
    },3001)
   }
  console.log(user,password)
  const register = async (e) => {
    e.preventDefault();
   try {
    if(user === ""  || password === ""){
      setShowAlertError(true);
      timeAlertError()
    }else{
      const dataUser = {user,password}
      const datos = await registrar(dataUser)
      setShowAlert(true)
      timeAlert();
      navegar()
    }
   } catch (error) {
    new Error("Error al enviar datos :(")
   }
  }
  const regresar = () => {
    navigate('/login');
  };
  const navigate = useNavigate();
  return (
    <Grid container>
        <Grid item  md={12} xs={12} textAlign={'center'} mb={'20px'}>
        <Typography variant='h2' color={'gray'} m={'15px'}>Registrate!</Typography>
       </Grid>

      {
        showAlert &&
        <Grid item md={8} xs={12}  style={{width:'200px' ,margin:'auto'}}>
            <Alert severity="success">Tu registro exitoso!!!</Alert>
        </Grid>
      }

      {
        showAlertError &&
        <Grid item md={8} xs={12}  style={{width:'200px' ,margin:'auto'}}>
            <Alert severity="error">Debes completar todos los datos!!!</Alert>
        </Grid>
      }
        <Grid item md={6} textAlign={'center'} style={{border:'solid 2px black', maxWidth:'300', maxHeight:'800px',margin:'auto',padding:'10px', backgroundColor:'gray', color:'white'}}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch',padding: '10px'},
      
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="user" label="Escribe tu nuevo usuario" variant="filled" onChange={onchangeUser}/>
      <TextField id="password" type='password' label="Escribe tu nuevo password" variant="filled" onChange={onchangePassword} />
     
    </Box>
    <Button variant='contained' onClick={(e)=>{register(e)}} style={{margin:'5px'}}>Registrar</Button>
    <Button variant='contained' onClick={()=>{regresar()}}>Regresar</Button>
      </Grid>
    </Grid>
  )
}

export default Registrar