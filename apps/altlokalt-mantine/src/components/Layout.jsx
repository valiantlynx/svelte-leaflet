import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { server } from './api/axios';
import { useEffect } from 'react';

// wraps around app.js and renders the routes
const Layout = () => {

    const { setAuth } = useAuth()


    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
  
        async function checkToken() {
          try {
            const response = await server.post('/api/validateToken', { token });
            const userData = response.data;
            //console.log("user data", userData);
            setAuth({isLoggedIn: true, role: userData.role, name: userData.name, email: userData.email});
         
          } catch (error) {
            console.error(error);
          }
        }
        checkToken();
  
      }
    }, []);

  
    return (
        <main className="App">
            <Outlet />
        </main>
    );
}

export default Layout;