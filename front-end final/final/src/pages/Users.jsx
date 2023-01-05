import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Users = (props) => {
const [users, setUsers]=useState([])
useEffect(()=>{
const getUsers=async()=>{
  const resp=await axios.get('https://63b4129c9f50390584a5def3.mockapi.io/user/users')
  setUsers(resp.data)
  


}
getUsers()



},[])
const searchHandler=(e)=>{
  setUsers(props.userList.filter(x=>x.fullname.toLowerCase().includes(e.target.value.toLowerCase())))


}






  return (

    <div>
      <input onChange={searchHandler} className='searchInput' type="text" placeholder='Search User By Fullname'/>
<table className="table">
  <thead>
    <tr>
      <th className='col-lg-2' scope="col">ID</th>
      <th className='col-lg-3' scope="col">Full Name</th>
      <th className='col-lg-3' scope="col">Adding Date</th>
      <th className='col-lg-4' scope="col">E-Mail</th>
      
    </tr>
  </thead>
  <tbody>
    {users && users.map(x=>{
return(<tr key={x.id}>
  <th className='col-lg-2' scope="row">{x.id}</th>
  <td className='col-lg-3'>{x.fullname}</td>
  <td className='col-lg-3'>{x.addingdate}</td>
  <td className='col-lg-4'>{x.email}</td>
  
  
</tr>)


    })}
    
  </tbody>
</table>




    </div>
  )
}

export default Users