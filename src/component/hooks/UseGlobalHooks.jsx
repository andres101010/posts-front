import { useState } from 'react';
import { cargarDatos } from '../servicesAxios/ServicesAxios';

export const UseGlobalHooks = () => {
    const [dataComentario, setDataComentario] = useState([]);
    const [contenidoComentario, setContenidoComentario] = useState("");
    const [fechaPublicacionComentarios, setFechaPublicacionComentario] = useState("");
    const [usuarioComentario, setUsuarioComentario] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [idpostState, setIdPostState] = useState("");
    const [isAllowed, setIsAllowed] = useState(false);
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [showAlertError, setShowAlertError] = useState(false)
    const [data, setData] = useState([]);
    const [serch, setSerch] = useState("");
    const [posts, setPosts] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [fecha, setFecha] = useState("");
    const [userPosts, setUserPosts] = useState("");
    const [file, setFile] = useState(null);
    const onchangeUser = (e) => {setUser(e.target.value);}
    const onchangePassword = (e) => {setPassword(e.target.value);}
    const timeAlert = () =>{
      setTimeout(() =>{
        setShowAlert(false);
      },3000)
    };
    const timeAlertError = () =>{
      setTimeout(() =>{
        setShowAlertError(false);
      },3000)
    };
    const getData = async () =>{
      const response = await cargarDatos();
      setData(response)
      console.log(response)
     }
    const getDataAllowed = (value)=>{
      if(value === ""){
        setIsAllowed(false)
      }else{
        setIsAllowed(true)
      }
    };
    
  return { 
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
    timeAlertError,
    timeAlert,
    data,
    setData,
    serch,
    setSerch,
    getData,
    isAllowed,
    setIsAllowed,
    getDataAllowed,
    idpostState,
    setIdPostState,
    posts,
    setPosts,
    titulo,
    setTitulo,
    contenido,
    setContenido,
    fecha,
    setFecha,
    userPosts,
    setUserPosts,
    file,
    setFile,
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
  }
};
