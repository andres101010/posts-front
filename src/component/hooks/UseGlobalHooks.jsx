import { useState } from 'react';
import { cargarDatos } from '../servicesAxios/ServicesAxios';

export const UseGlobalHooks = () => {
    const [idposts, setIdPosts] = useState("")
    const [isAllowed, setIsAllowed] = useState(false);
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [showAlertError, setShowAlertError] = useState(false)
    const [data, setData] = useState([]);
    const [serch, setSerch] = useState("");
    const [posts, setPosts] = useState([]);
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
    idposts,
    setIdPosts,
    posts,
    setPosts
  }
}
