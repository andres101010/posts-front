import axios from 'axios';

export const inicioSecion = async (dataUser) =>{
    const datos = await axios.post('http://localhost:3001/login', dataUser)
    return datos.data
}
export const registrar = async (dataUser) =>{
    const datos = await axios.post('http://localhost:3001/login/create-user', dataUser)
    return datos.data
}
export const cargarDatos = async () =>{
    const datos = await axios.get('http://localhost:3001/posts/cargar-post')
    return datos.data
}
export const cargarDatosPosts = async (idposts) =>{
    const datos = await axios.get(`http://localhost:3001/posts/cargar-post/${idposts}`)
    return datos.data
}

