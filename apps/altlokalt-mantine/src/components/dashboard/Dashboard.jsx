import { Quote } from '../Quote';
import { useEffect } from 'react';
import {
  AppShell,
} from '@mantine/core';
import Users from './updateDB/users/Users';
import BrregCompany from '../carousel/BrregCompany';
import CarouselTitle from '../descriptions-and-titles/CarouselTitle';
import CarouselDescription from '../descriptions-and-titles/CarouselDescription';
import NavbarDashboard from './navbar/NavbarDashboard';
import useAuth from '../../hooks/useAuth';
import { server } from '../../components/api/axios';
import Footer from '../footer/Footer';

function Dashboard() {
  const { setAuth } = useAuth()


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {

      async function checkToken() {
        try {
          const response = await server.post('/api/validateToken', { token });
          const userData = response.data;
          console.log("user data", userData);
          setAuth(userData);
       
        } catch (error) {
          console.error(error);
        }
      }
      checkToken();

    }
  }, []);





  return (

    <AppShell
      padding="md"
      className="container"
      header={<NavbarDashboard />}
      footer={<Footer />}

      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
       <CarouselTitle title={"Users"} />
      <CarouselDescription description={"Connect with our users"} />
      <Users />
      <CarouselTitle title={"Companies"} />
      <CarouselDescription description={"Se noen bedrifter i vår database"} />
      <BrregCompany />
      <Quote/>
    </AppShell>
  );
}

export default Dashboard;