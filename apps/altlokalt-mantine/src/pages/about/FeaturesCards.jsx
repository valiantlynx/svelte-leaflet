import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons';

import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

const mockdata = [
  {
    title: 'Ekstrem ytelse',
    description:
      'Ingen liker sakte nettsider. Alt lokal er laget for å være ført uansett omstendigheter. Til en grad kan altlokal også fungere uten dekning eller tilgang til nett',
    icon: IconGauge,
  },
  {
    title: 'Personvernfokusert',
    description:
      'Vi sikre at det du søke etter er funnet fortest mulig. ',
    icon: IconUser,
  },
  {
    title: 'Samarbeid',
    description:
      'Vi samarbeider med leverandør og bedrifter for å gi deg best tilbud.',
    icon: IconCookie,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <div>
      <Nav />

      <Container size="lg" py="xl">
        <Group position="center">
          <Badge variant="filled" size="lg">
            Beste bedrift ever
          </Badge>
        </Group>

        <Title order={2} className={classes.title} align="center" mt="sm">
        Lås opp lokalsamfunnet ditt

        </Title>

        <Text color="dimmed" className={classes.description} align="center" mt="md">
        Plattformen er egnet best som en markedsplass hvor du finner alle typer produkter og tjenester fra ditt lokale.
Utforske alle lokale selskap annonser innen utleie, kjøp, salg, tjenester, ledig lokale stilling, billigere nisjeleverandørene og små bedrifter
Nettmarkedsplass med et overraskende utvalg av produkter og tjenester fra lokale innbyggere, som ønsker å kjøpe, selge, utleie eiendelene og leie ut rett fra nabo i ditt nærmiljø, der du bo.
Vi matcher markedsføringen din som de store selskapene, på en litt annen måte.
        </Text>

        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
      <Footer />
    </div>

  );
}