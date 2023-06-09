
import { Button, Grid,Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { UseGlobalHooks } from '../../component/hooks/UseGlobalHooks';

import { inicioSecion } from '../../component/servicesAxios/ServicesAxios';
import { useState } from 'react';
 const Login = ({setIsAllowed}) => {
 const [showAlertUserNoExiste, setShowAlertUserNoExiste] = useState(false);
 const {
  user,
  setUser,
  password,
  setPassword,
  onchangeUser,
  onchangePassword,
  showAlert,
  setShowAlert,
  showAlertError,
  setShowAlertError,
  timeAlert,
  timeAlertError,
  getDataAllowed
 } = UseGlobalHooks();

 const timeAlertNoexiste = () => {
  setTimeout(()=>{
    setShowAlertUserNoExiste(false)
  }, 3000)
 }
  const navegar = () => {
  setTimeout(() => {
   navigate('/')
  },3001)
 }
  const inicio = async () => {
    
   try {
    if(user === "" || password === ""){
      setShowAlertError(true);
      timeAlertError();
    }else{
      const dataUser = { user, password };
      const data = await inicioSecion(dataUser);
      console.log(data);
      getDataAllowed(data);
      setShowAlert(true);
      timeAlert()
      navegar()
      setIsAllowed(true);
    }
   } catch (error) {
    setShowAlertUserNoExiste(true);
    timeAlertNoexiste();
    setUser("")
    setPassword("")
   }
  };

  const register = () => {
    navigate('/register')
  };
 const navigate = useNavigate();
 
  return (
    <Grid container>
      <Grid item md={12} xs={12} textAlign={'center'} mb={'20px'} >
          <Typography variant='h1' color={'gray'} m={'15px'}>Login</Typography>
      </Grid>
      {
        showAlertUserNoExiste &&
        <Grid item md={8} xs={12}  style={{width:'200px' ,margin:'auto'}}>
             <Alert severity="error">Usuario no existe !!!</Alert>
        </Grid>
      }
      {
        showAlert &&
        <Grid item md={8} xs={12}  style={{width:'200px' ,margin:'auto'}}>
             <Alert severity="success">Inicio de sesion exitoso!!!</Alert>
        </Grid>
      }
      {
       showAlertError &&
     <Grid item md={8} xs={12}  style={{width:'200px' ,margin:'auto'}}>
       <Alert severity="error">Debes de completar todos los campos!!!</Alert>
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
      
      <TextField id="user" value={user} label="user" variant="filled" onChange={onchangeUser}/>
      <TextField id="password" value={password} type='password' label="password" variant="filled" onChange={onchangePassword} />
     
    </Box>
    <Button variant='contained' onClick={()=>{inicio()}} style={{margin:'5px'}} >iniciar sesion</Button>
    <Button variant='contained' onClick={()=>{register()}}>Registrarse</Button>
      </Grid>
    </Grid>
  )
}
export default Login
