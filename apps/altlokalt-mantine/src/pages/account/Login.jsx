import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import {  useNavigate, useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { login } from '../../components/api/axios';
import { server } from '../../components/api/axios';


const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 900,
        backgroundSize: 'cover',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },

    form: {
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        minHeight: 900,
        maxWidth: 450,
        paddingTop: 80,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    logo: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        width: 120,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export function Login() {
    const { classes } = useStyles();
    const { setAuth } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //console.log(login())
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        keepMeLoggedIn: false,
    })

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
    
          async function checkToken() {
            try {
              const response = await server.post('/api/validateToken', { token });
              const userData = response.data;
              console.log("user data", userData);
              setAuth(userData);
              
              const from = location.state?.from?.pathname || '/dashboard';


              setErrorMessage("logged in");
              //alert('Login successful');
              navigate(from, { replace: true });

            } catch (error) {
              console.error(error);
            }
          }
          checkToken();
    
        }
      }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(data)
        try {
            const response = await login.post('/', data);
            const result = response.data;
            console.log(result.user)
         
            // console.log(result.message)
            if (result.user) {
                localStorage.setItem('token' , result.user);
                const base64Url = result.user.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const decodedToken = JSON.parse(atob(base64));
    
                //console.log("roles", decodedToken.role)
    
                setAuth({ role: decodedToken.role, name: decodedToken.name, email: decodedToken.email  });

                
                const from = location.state?.from?.pathname || '/dashboard';

                setErrorMessage(result.message);
                //alert('Login successful');
                navigate(from, { replace: true });
             
            } else {
                setErrorMessage(result.message);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred while logging in. Please try again later.');
        }
    };


    return (
        <form className={classes.wrapper} type="submit" onSubmit={handleSubmit} >
            <Paper className={classes.form} radius={0} p={30}  >
                <Title order={2} className={classes.title} align="center" mt="md" mb={50}   >
                    Welcome back to animevariant!
                </Title>
                {/* <TextInput label="name" placeholder="john doe" size="md" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} /> */}
                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" onChange={(e) => setData({ ...data, email: e.target.value })} />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={(e) => setData({ ...data, password: e.target.value })} />
                <Checkbox label="Keep me logged in" mt="xl" size="md" onChange={(e) => setData({ ...data, keepMeLoggedIn: e.target.checked })} />
                {errorMessage && (
                    <Text color="error" mt="sm">
                        {errorMessage}
                    </Text>
                )}
                <Button fullWidth mt="xl" size="md" type="submit" >
                    Login
                </Button>


                <Text align="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Anchor as="a" href="/register" weight={700} >
                        Register
                    </Anchor>
                </Text>
            </Paper>
            <Footer />
        </form>
    );
}