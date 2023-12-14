import { createStyles, Card, Avatar, Text, Group, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));


export function UserCardImage(props) {
  const { classes, theme } = useStyles();

  console.log("api or company ",props.company)
  const jsondata = {
    "image": props.company.image || props.company.navn ,
    "avatar": props.company.logo || props.company.navn,
    "name": props.company.name || props.company.navn,
    "job": props.company.slogan || JSON.stringify(props.company.naeringskode1),
    "video":props.company.video || props.company.navn,
    "stats": [
      {
        "value": "34K",
        "label": "Followers"
      },
      {
        "value": "187",
        "label": "Follows"
      },
      {
        "value": "1.6K",
        "label": "Posts"
      }
    ]
  }
  
  const items = jsondata.stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));
  
  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${jsondata.image})`, height: 140 }} />
      <Avatar src={jsondata.avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Text align="center" size="lg" weight={500} mt="sm">
        {jsondata.name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {jsondata.job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <a href={jsondata.video} target="_self" > 
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Video
      </Button>
      </a>
    </Card>
  );
}