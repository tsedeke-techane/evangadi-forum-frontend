import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from './axiosConfig.js';

export const AppState = createContext(); 

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Add loading state
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
    } finally {
      setLoading(false); // ✅ Set loading to false whether it fails or succeeds
    }
  }

  useEffect(() => {
    CheckUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser, loading }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AppState.Provider>
  );
}

export default App;
