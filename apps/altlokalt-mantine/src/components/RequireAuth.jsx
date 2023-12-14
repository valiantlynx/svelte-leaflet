import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { server } from './api/axios';
import { useEffect } from 'react';

const RequireAuth = (allowedRoles) => {
    const { auth } = useAuth();
    const location = useLocation();

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

    //console.log("auth", auth);

    // return (
    //     auth?.role?.find(role => allowedRoles.allowedRoles?.includes(role))
    //         ? <Outlet />
    //         : auth?.email
    //             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
    //             : <Navigate to="/home" state={{ from: location }} replace />
    // );

    return auth === null ? (
        <div>Loading...</div>
    ) : auth?.role?.find(role => allowedRoles.allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : auth?.email ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
    

}
export default RequireAuth;

