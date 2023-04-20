
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {   //edit file sample
  const[data,setData] =useState({
    name:'',
    fname:'',
    location:''
  })

  useEffect(()=>{
    axios.get(`http://localhost:8888/employee/singleEmployee/`+`63a6d36bba991a1a68191aa9`).then(res=>{
      console.log(res.data)
      setData(res.data)
    })
},[])
  function changeHandler(e){
    const newdata = {...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
  }

  function updateHandler(e){
      e.preventDefault()
      // console.log(data)
      axios.put(`http://localhost:8888/employee/updateEmployee/`+`63a6d36bba991a1a68191aa9`,data).then(res=>{
        console.log(res)
      })
  }
function editHandler(id)
{
  
      alert(id)
      // axios.get(`http://localhost:8888/employee/singleEmployee/`+id,).then(res=>{
      //             console.log(res.data)
      //             setEmployees(res.data)
      //           })
}

function deleteHandler(id)
{
      
}


  return(
  
  <div>
                <form  align="center" onSubmit={(e)=>updateHandler(e)}>
                <input type="text" name="name" id='name' value={data.name} onChange={(e)=>changeHandler(e)} /><br />
                <input type="text" name="fname" id='fname' value={data.fname} onChange={(e)=>changeHandler(e)} /><br />
                <input type="text" name="location" id='location' value={data.location} onChange={(e)=>changeHandler(e)}  /><br />
              <button type='submit'> Submit</button>
      </form>
  </div>

)
  
}

export default App;
