import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandGmail } from '@tabler/icons';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));



export default function Footer() {
  const jsonData = {
    "data": [
      {
        "title": "Partnerskap",
        "links": [
          {
            "label": "Bli patner",
            "link": "/login"
          },
          {
            "label": "Finn patner",
            "link": "/login"
          },
          {
            "label": "Om oss",
            "link": "/about"
          },
          {
            "label": "FAQ",
            "link": "/faq"
          }
        ]
      },
      {
        "title": "Altlokal",
        "links": [
          {
            "label": "Privacy Policy",
            "link": "/privacy_policy"
          },
          {
            "label": "Terms And Conditions",
            "link": "/terms_conditions"
          },
          {
            "label": "Hiring",
            "link": "/login"
          },
          {
            "label": "Pricing",
            "link": "/pricing"
          }
        ]
      },
      {
        "title": "Community",
        "links": [
          {
            "label": "Join Facebook",
            "link": "https://www.facebook.com/people/ALTLOKALno/100087413566688"
          },
          {
            "label": "Follow on Linkedin",
            "link": "https://www.linkedin.com/company/altlokal/?viewAsMember=true"
          },
          {
            "label": "Email newsletter",
            "link": "https://us18.list-manage.com/contact-form?u=ff3e740192b735d7a149ce646&form_id=8b7ee71fc515211166e8028930bcf7f3"
          },
          {
            "label": "Næringforum",
            "link": "/forum"
          }
        ]
      }
    ]
  };
  const data = jsonData.data.flat();

  const { classes } = useStyles();


  const groups = data.map((group) => {

    const links = group.links.map((link, index) => (
(link.link[0] == "/") ? <Link
key={index}
className={classes.link}
to={link.link}
onClick={link.link}
>

{link.label}
</Link> : <a key={index} href={link.link} className={classes.link} target="_blank">{link.label}</a>
      
    ));
//console.log(links)
    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.wrapper}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <img width={200} height={200} src={process.env.PUBLIC_URL + '/img/noImage.png'}>
          </img>

          <Text size="xs" color="dimmed" className={classes.description}>
            Leter du etter leverandør? animevariant fikser alt for deg.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 animevariant. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" component="a" href="https://us18.list-manage.com/contact-form?u=ff3e740192b735d7a149ce646&form_id=8b7ee71fc515211166e8028930bcf7f3" target="_blank">
            <IconBrandGmail size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.youtube.com/channel/UCgmUPcj4Af08PyiTiKJeOSQ" target="_blank">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.instagram.com/altlokal.no/" target="_blank">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}