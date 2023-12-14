// register on the server as well as on gun db
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
import { useNavigate } from 'react-router-dom';
import { register } from '../../components/api/axios';
import Footer from '../../components/footer/Footer';
import Gun from 'gun';
import 'gun/sea';
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

const gun = Gun({ peers: ['https://chat.valiantlynx.com/gun'] });

export function Create() {
    const { classes } = useStyles();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        keepMeUpdated: false
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        registerServer();



    };

    // function to register user on server
    async function registerServer() {
        try {
            const response = await register.post('', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const result = response.data;

            if (result.status === "success") {
                console.log("success");
                registerGun(data);

                history("/login");
            }

            if (result.message === 'Email address already in use.') {
                setErrorMessage(result.message);
            } else if (result.message === "Successfully registered, Please login") {
                setErrorMessage("");
                setSuccessMessage(result.message);
                registerGun(data);
                history("/login");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred while creating your account. Please try again later.');
        }
    }

    // function to register user on gun db using gun/sea
    function registerGun(data) {

        console.log(data);
        const { name, email, password } = data;
        
    }






    return (
        <form className={classes.wrapper} type="submit" onSubmit={handleSubmit}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                    Welcome to animevariant!
                </Title>
                <TextInput label="Name" placeholder="john doe" size="md" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <TextInput error={errorMessage} label="Email address" placeholder="hello@gmail.com" size="md" onChange={(e) => setData({ ...data, email: e.target.value })} />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={(e) => setData({ ...data, password: e.target.value })} />
                <Checkbox label="I’d like news about product offers and company news and events." mt="xl" size="md" onChange={(e) => setData({ ...data, keepMeUpdated: e.target.checked })} />
                <Text color="error" mt="sm">
                    {successMessage}
                </Text>

                <Button fullWidth mt="xl" size="md" type="submit">
                    Register
                </Button>


                <Text align="center" mt="md">
                    Already have an account?{' '}
                    <Anchor as="a" href="/login" weight={700} >
                        Login
                    </Anchor>
                </Text>
            </Paper>
            <Footer />
        </form>
    );
}
