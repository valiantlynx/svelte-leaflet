import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import LogoutGun from '../../components/gun/LogoutGun';



export function Logout() {

    const { setAuth } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        setAuth({ role: null, name: null, email: null });
        navigate('/', { replace: true });
        
        <LogoutGun/>
    }, []);

 

}