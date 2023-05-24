
import './App.css'
import Inicio from './rutas/inicio/Inicio'
import Login from './rutas/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
function App() {


 return( 
    <Grid container>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/login' element={<Login />}></Route>
     </Routes>
      </BrowserRouter>
    </Grid>
  )
}

export default App
