import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'inline-block',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            Leter du etter <span className={classes.highlight}>leverandør</span>? <br />  animevariant fikser alt for deg.
            </Title>
            <Text color="dimmed" mt="md">
              animevariant gir deg enkel tilgang til informasjon om alle bedrifter i Norge,
              spesielt de som er lokale og tilbyr det du trenger.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>AI</b> – AI-drevet søkemotor for å finne lokale bedrifter
              </List.Item>
              <List.Item>
                <b>Enkelt</b> – Lett tilgang til bedriftsinformasjon og tjenester
              </List.Item>
              <List.Item>
                <b>Alt</b> – Finn det du trenger i ditt lokale område på animevariant.com
              </List.Item>
            </List>

            <Group mt={30}>
              <a href="https://play.google.com/store/apps/details?id=com.animevariant.twa" target="_blank">
                <Button radius="xl" size="md" className={classes.control}>
                  Lastned animevariant
                </Button>
              </a>
              <a href="/login" target="_self" >
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  Login
                </Button>
              </a>

            </Group>
          </div>
          <Image src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}