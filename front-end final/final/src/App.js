import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Users from './pages/Users'
import Home from './pages/Home'
import About from './pages/About';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Admin from './pages/Admin';
import Navigation from './components/Navigation';







function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      const resp = await axios.get('https://63b4129c9f50390584a5def3.mockapi.io/user/users')
      console.log(resp.data);
      setUsers(resp.data)
    }
    getUsers()



  }, [])








  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users userList={users} />} />
          <Route path='/admin' element={<Admin userList={users} setUserList={setUsers} />} />

        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
