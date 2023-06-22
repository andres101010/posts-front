
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
import { ProtectedRoute } from './component/isAllowed/ProtectedRoute'
function App() {
 const {
  isAllowed,
  setIsAllowed
 } = UseGlobalHooks();
 return( 
    <Grid container>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/login' element={<Login setIsAllowed={setIsAllowed} />}></Route>
      <Route path='/register' element={<Registrar />}></Route>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
      <Route path='/newPosts' element={<NewPosts />}></Route>
      <Route path='/comentario/:idposts' element={<NuevoComentario />}></Route>
      </Route>
     </Routes>
      </BrowserRouter>
    </Grid>
  )
}

export default App
