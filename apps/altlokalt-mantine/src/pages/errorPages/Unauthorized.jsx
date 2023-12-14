
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import { useNavigate } from "react-router-dom"
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,

  },

  label: {
    textAlign: 'center',
    fontWeight: 900,

    fontSize: 140,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 52,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default function Unauthorized() {
  const { classes } = useStyles();
  const navigate = useNavigate()
  const goBack = () => { navigate(-1) };


  return (
    <div className="container-fluid">
<Nav/>

    <Container className={classes.root} >
      <div className={classes.label}>Unauthorized</div>
      <Title className={classes.title}>Smile to gain access.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Unfortunately, this is only a premium page. Upgrade your account to access this page.
     
      </Text>
      <Group position="center">
        <Button variant="subtle" size="md" onClick={goBack}>
          Go back
        </Button>
      </Group>
    </Container>
    <Footer/>
    </div>
  );
}