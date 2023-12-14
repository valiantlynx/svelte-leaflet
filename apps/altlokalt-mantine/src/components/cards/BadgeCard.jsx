import { IconHeart } from '@tabler/icons';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],

  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));


export function BadgeCard(props) {

  //console.log("name: ", props.title, "id: ", props.id)
  
  function handleClick() {
  
    window.localStorage.clear();
    window.localStorage.setItem("clicked company", props.id);
  }

  let company = window.localStorage.getItem("clicked company")
  const { classes, theme } = useStyles();

  const jsondata = {
    "image": props.image,
    "title": props.title,
    "country": props.country,
    "link": "https://" + props.url,
    "link1": props.url1,
    "description": props.description,
    "badges": [
      {
        "emoji": "☀️",
        "label": props.sector
      }
    ]
  }

  const features = jsondata.badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  //console.log("link ",jsondata.title, jsondata.link)

  return (
    <Card withBorder radius="md" p="md" className={classes.card} >
      <Card.Section>
        <Image src={jsondata.image} alt={jsondata.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {jsondata.title}
          </Text>
          <Badge size="sm">{jsondata.country}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {jsondata.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Link to={ "/company"} >
          <Button
            radius="md"
            onClick={handleClick}
            style={{ flex: 1 }}
          >
            {jsondata.link1 === "https://undefined" ? "Ingen Info 🔴" : "Se mer"}
          </Button>
        </Link>

        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size={18} className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}