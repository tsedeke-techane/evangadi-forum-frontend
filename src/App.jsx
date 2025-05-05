// import React from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import { useEffect } from 'react'
// import axios from './axiosConfig.js'




// function App() {

//   const token = localStorage.getItem('token')
//   const navigate = useNavigate()

//   async function CheckUser() {
//     try {
//       const response = await axios.get('/users/check', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//       console.log('Response:', response)
//       if (response.status === 200) {
//         console.log('User is logged in')
//         console.log('Response:', response)
//         navigate('/')
//       }
//     }
//     catch (error) {
//       if (error.response && error.response.status === 401) {
//         console.log('User is not logged in')
//         navigate('/login')
//       } else {
//         console.error('Error checking user:', error)
//       }
//     }
//   }
  
//   useEffect(() => {
//     CheckUser();
//   }
//   , [])


//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//       </Routes>
     
//     </div>
//   )
// }

// export default App








import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from './axiosConfig.js';

export const AppState = createContext(); 

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  async function CheckUser() {
    try {
      const response = await axios.get('/users/check', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data);
        console.log('User is logged in');
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('User is not logged in');
        navigate('/login');
      } else {
        console.error('Error checking user:', error);
      }
    }
  }

  useEffect(() => {
    CheckUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AppState.Provider>
  );
}

export default App;
