import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Admin = (props) => {
    const usersFromApp=props.setUserList
    const [users, setUsers]=useState([])
    useEffect(()=>{
const getUsers=async()=>{
const resp=await axios.get('https://63b4129c9f50390584a5def3.mockapi.io/user/users')
setUsers(resp.data)
}
getUsers()


    },[])
    const [logAdmin, setLogAdmin] = useState(true)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const LoginHandler = (e) => {
        setUserName(e.target.value)

    }
    const PasswordHandler = (e) => {

        setPassword(e.target.value)

    }

    const accessHandler = () => {
        if (userName === 'admin' && password === 'admin') {
            setLogAdmin(false)
        }
        else {
            alert('Username or/and Password is not correct')
        }

    }


    const [newFullname, setNewFullname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newAddDate, setNewAddDate] = useState('')

const addUserFullname=(e)=>{
setNewFullname(e.target.value)

}
const addUserAddingDate=(e)=>{
setNewAddDate(e.target.value)
}

const addUserEmail=(e)=>{
setNewEmail(e.target.value)

}
    
const addUserHandler=()=>{
axios.post('https://63b4129c9f50390584a5def3.mockapi.io/user/users',{
    "fullname": newFullname,
    "addingdate": newAddDate,
    "email": newEmail,
   })
   alert('New User Added')
   const getUsers=async()=>{
    const resp=await axios.get('https://63b4129c9f50390584a5def3.mockapi.io/user/users')
    setUsers(resp.data)
    usersFromApp(resp.data)
    }
    getUsers()

}



const deleteHandler=(id)=>{
axios.delete(`https://63b4129c9f50390584a5def3.mockapi.io/user/users/${id}`)
alert(`User with id:${id} has been removed`)
const getUsers=async()=>{
    const resp=await axios.get('https://63b4129c9f50390584a5def3.mockapi.io/user/users')
    setUsers(resp.data)
    usersFromApp(resp.data)
    }
    getUsers()


}


    return (
        <div>
            {logAdmin ? <div>
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card bg-dark text-white" >
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">

                                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                            <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                            <div className="form-outline form-white mb-4">
                                                <input onChange={LoginHandler} type="text" id="typeEmailX" className="form-control form-control-lg" />
                                                <label className="form-label" >Username</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input onChange={PasswordHandler} type="password" id="typePasswordX" className="form-control form-control-lg" />
                                                <label className="form-label" >Password</label>
                                            </div>



                                            <button onClick={accessHandler} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>



                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div> : <div><div className='AddDiv'>
                <h3 className='addUserText'>Add New User</h3>
                <div>
                    <input onChange={addUserFullname} type="text" placeholder='Fullname' />
                    <input onChange={addUserAddingDate} type="date" placeholder='Adding Date' />
                    <input onChange={addUserEmail} type="text" placeholder='E-Mail' />
                    <button onClick={addUserHandler} className="AddUserBtn" type="submit">Add User</button>



                </div>


            </div>
            <div>
            <h3 className='addUserText'>Delete User</h3>

<table className="table">
  <thead>
    <tr>
      <th className='col-lg-1' scope="col">ID</th>
      <th className='col-lg-3' scope="col">Full Name</th>
      <th className='col-lg-3' scope="col">Adding Date</th>
      <th className='col-lg-3' scope="col">E-Mail</th>
      <th className='col-lg-2' scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {users && users.map(x=>{
return(<tr key={x.id}>
  <th className='col-lg-1' scope="row">{x.id}</th>
  <td className='col-lg-3'>{x.fullname}</td>
  <td className='col-lg-3'>{x.addingdate}</td>
  <td className='col-lg-3'>{x.email}</td>
  <td className='col-lg-2'><button className='btn btn-danger' onClick={()=>deleteHandler(x.id)}>Delete</button></td>
  
</tr>)


    })}
    
  </tbody>
</table>




    </div>
            
            </div>}





        </div>
    )
}

export default Admin