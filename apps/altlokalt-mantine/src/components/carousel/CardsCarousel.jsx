import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));


function Card(item) {
  const { classes } = useStyles();

  return (
    <a href={"https://" + item.url} target='_blank' style={{ textDecoration: "none"}}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${item.image})` }}
        className={classes.card}
      >
        <div style={{ backgroundColor: '#131315b4' }}>
          <Text className={classes.category} size="xs">
            <h6>AD</h6>{item.category}
          </Text>
          <Title order={3} className={classes.title}>
            {item.title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Hurtiglenke
        </Button>
      </Paper>
    </a>
  );
}

const data = [

  {
    id: 0,
    image:
      'https://pbs.twimg.com/media/FY2_iaaXoAIIGaD?format=jpg&name=large',
    title: 'Finn billigst Drivstoff Nær Deg',
    category: 'Energi',
    url: 'minfuel.no',
  },
  {
    id: 1,
    image:
      'https://raw.githubusercontent.com/Animevariant/Animevariant/main/ezgif-3-b2438d3a3a.webp',
    title: 'Anime and Manga Marketplace. Earn money by reading and watching anime.',
    category: 'Marketplace',
    url: 'animevariant.com',
  },
  {
    id: 2,
    image:
    process.env.PUBLIC_URL + '/img/noImage.png',
    title: 'Her kan det ligge Din reklame',
    category: 'Din category',
    url: 'minfuel.no',
  },

  {
    id: 3,
    image:
    process.env.PUBLIC_URL + '/img/noImage.png',
    title: 'Her kan det ligge Din reklame',
    category: 'Din category',
    url: 'minfuel.no',
  },
  {
    id: 4,
    image:
    process.env.PUBLIC_URL + '/img/noImage.png',
    title: 'Her kan det ligge Din reklame',
    category: 'Din category',
    url: 'minfuel.no',
  },
  {
    id: 5,
    image:
    process.env.PUBLIC_URL + '/img/noImage.png',
    title: 'Her kan det ligge Din reklame',
    category: 'Din category',
    url: 'minfuel.no',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="40%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
