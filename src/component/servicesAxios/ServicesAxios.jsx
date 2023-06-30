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
    console.log(datos.data)
    return datos.data
}
export const enviarDatosPosts = async (data) =>{
    const datos = await axios.post(`http://localhost:3001/posts/crear-post`, data,{
        headers: {
            'Content-Type': 'multipart/form-data',
          },
    })
    console.log(datos.data)
    return datos.data
}

export const ComentarioPosts = async (idposts, data) =>{
    const datos = await axios.post(`http://localhost:3001/comentarios/${idposts}`,data)
    return datos.data
}

export const cargarDatosComentariosById = async (idposts) =>{
    const datos = await axios.get(`http://localhost:3001/comentarios/cargar/${idposts}`)
    return datos.data
}

export const sendSubComentario = async (idcomentario, data) =>{
    const datos = await axios.post(`http://localhost:3001/subComentarios/${idcomentario}`,data)
    console.log(datos.data)
    return datos.data
}
export const cargarSubComentario = async (idcomentario) =>{
    const datos = await axios.get(`http://localhost:3001/subComentarios/${idcomentario}`)
    console.log(datos.data)
    return datos.data
}
export const cargarArchivos = async () =>{
    const datos = await axios.get('http://localhost:3001/archivos')
    console.log(datos.data)
    return datos.data
}