import { createStyles, Header, Drawer, Autocomplete, Group, Burger, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { ButtonToggle } from '../../theme_toggles/ButtonToggle';
import DashboardSearch from './DashboardSearch';
import { useState } from 'react';


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
  { link: '/byen', label: 'Lokalet Ditt' },
  { link: '/about', label: 'Om Oss' },
  { link: '/faq', label: 'FAQ' }
];

function NavbarDashboard() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

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
            onClick={() => setOpened(true)}
            size="sm"
          />
           <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Altlokal - lett å handle lokalt"
        padding="xl"
        size="lg"
      >
        {/* Drawer content */}
        <DashboardSearch opened={opened} />
      </Drawer>
        

        </Group>
        <ButtonToggle />

        <Group ml={50} spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>

          <a href='/update_company'>
            <Button variant="white" color="dark">
              Create Company
            </Button>
          </a>

          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={['Kenya', 'Norge', 'Ukraine','Sweden', 'Denmark', 'Africa']}
          />
        </Group>

      </div>

    </Header>

  )
}

export default NavbarDashboard