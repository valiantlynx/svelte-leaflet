import { createStyles, Card, Image, Avatar, Text, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));



export function ArticleCardVertical(props) {
  const { classes } = useStyles();
  
  const jsondata = {
    "image": props.image,
    "category": "Norge",
    "title": props.title,
    "link": props.url,
    "date": props.date,
    "author": {
      "name":  props.source,
      "avatar": "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  }

  return (
    <a href={jsondata.link}
          target="_blank">
    <Card withBorder radius="md" p={0} className={classes.card} >
      <Group noWrap spacing={0}>
        <Image src={jsondata.image} height={140} width={140} />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {jsondata.category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {jsondata.title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={jsondata.author.avatar} />
              <Text size="xs">{jsondata.author.name}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {jsondata.date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card></a>
  );
}