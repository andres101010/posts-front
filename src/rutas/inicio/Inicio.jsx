import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import axios from 'axios';
 const Inicio = () => {
    const [data, setData] = useState([]);

  const getData = async () =>{
   const resp = await axios.get('http://localhost:3001/posts/cargar-post')
    setData(resp.data);
    console.log(resp.data);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <Grid container>
        <Grid item md={12} textAlign={'center'}>
         <Typography variant='h1' color={'red'} >foro</Typography>
        </Grid>
        <Grid item md={12}>
        {
            data.length === 0 ? <h1>no hay datos</h1> : data.map((row)=>(
                <h1>{row.titulo}</h1>
            ))
        }
        </Grid>
    </Grid>
  )
}

export default Inicio
