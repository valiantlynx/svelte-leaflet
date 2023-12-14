import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
  } from '@mantine/core';
  import { IconChevronRight } from '@tabler/icons';
  
  const useStyles = createStyles((theme) => ({
    user: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },
  }));
  



  export function UserButton(props) {
    
    const jsondata = {
        "image": props.image,
        "name": props.name,
        "country": props.country,
        "link": "https://"+props.url,
        "email": props.email,
        "badges": [
          {
            "emoji": "☀️",
            "label": props.sector
          }
        ]
      }

    const { classes } = useStyles();
  
    return (
      <UnstyledButton className={classes.user} {...jsondata.others}>
        <Group>
          <Avatar src={jsondata.image} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {jsondata.name}
            </Text>
  
            <Text color="dimmed" size="xs">
              {jsondata.email}
            </Text>
          </div>
  
          {jsondata.badges.emoji || <IconChevronRight size={14} stroke={1.5} />}
        </Group>
      </UnstyledButton>
    );
  }