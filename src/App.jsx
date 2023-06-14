
import './App.css'
import Inicio from './rutas/inicio/Inicio'
import Login from './rutas/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import Navbar from '../src/component/navbar/Navbar'
import NewPosts from './rutas/newPosts/NewPosts'
import Registrar from './rutas/registrar/Registrar'
import { UseGlobalHooks } from './component/hooks/UseGlobalHooks'
import NuevoComentario from './rutas/nuevoComentario/NuevoComentario'
function App() {
 
 return( 
    <Grid container>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/newPosts' element={<NewPosts />}></Route>
      <Route path='/register' element={<Registrar />}></Route>
      <Route path='/comentario/:idposts' element={<NuevoComentario />}></Route>
     </Routes>
      </BrowserRouter>
    </Grid>
  )
}

export default App
