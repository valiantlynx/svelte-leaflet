import { createStyles, Header, Autocomplete, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ButtonToggle } from '../theme_toggles/ButtonToggle';
import { NavbarSearch } from '../nav/NavbarSearch';
import useAuth from '../../hooks/useAuth';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

const links = [
  { link: '/', label: 'Hjem' },
  { link: '/trending', label: 'Alle' },
  { link: '/local', label: 'Lokalet Ditt' },
  { link: '/about', label: 'Om Oss' },
  { link: '/faq', label: 'FAQ' }
];

function Nav() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { auth } = useAuth()
  //console.log("auth", auth);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    // onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));
  return (
    <Header height={56} className={classes.header} mb={20}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            title="Open navigation"
            onClick={toggle}
            size="sm"
            className='navbar-toggler'
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2" />
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <NavbarSearch />
          </div>

        </Group>
        <ButtonToggle />
        <Group ml={50} spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          {auth.isLoggedIn !== true ? (
            <>
              <a href="/login">
                <Button variant="white" color="dark">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button variant="white" color="dark">
                  Register
                </Button>
              </a>
            </>
          ) : (
            <a href="/dashboard">
              <Button variant="white" color="dark">
              Dashboard
              </Button>
            </a>
          )}
        </Group>


      </div>

    </Header>
  )
}

export default Nav