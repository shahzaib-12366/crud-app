
  
// import logo from './logo.svg';
// import './App.css';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const[employees,setEmployees] = useState([])
//   useEffect(()=>{
//     axios.get(`http://localhost:8888/employee/getEmployee`).then(res=>{
//       console.log(res.data)
//       setEmployees(res.data)
//     })
// },[])

// function editHandler(id)
// {
  
//       alert(id)
//       // axios.get(`http://localhost:8888/employee/singleEmployee/`+id,).then(res=>{
//       //             console.log(res.data)
//       //             setEmployees(res.data)
//       //           })
// }

// function deleteHandler(id)
// {
      
// }


//   return(
  
//   <div>
//                      <table className='table' border={1} align="center">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Father Name</th>
//                 <th>Location</th>
//                 </tr>
//             <tbody>
//                 {
//                   employees.map(employee =>(
//                       <tr>
//                           <td>{employee._id}</td>
//                           <td>{employee.name}</td>
//                           <td>{employee.fname}</td>
//                           <td>{employee.location}</td>
//                           <td className='text-black btn btn-primary' onClick = {(e)=>{editHandler(employee._id)}}>Edit</td>
//                            <td className='text-black btn btn-danger' onClick = {(e)=>{deleteHandler(employee._id)}}>Delete</td>

//                       </tr>
  
//                   ))}
  
//             </tbody>
//             </table>
//   </div>

// )
  
// }

// export default App;
