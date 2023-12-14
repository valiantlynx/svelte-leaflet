import { useState } from 'react';
import { createStyles, Navbar, ScrollArea, UnstyledButton, Tooltip, Title } from '@mantine/core';
import {

  IconBuildingSkyscraper,
  IconPremiumRights,
  IconUsers,
  IconMeteor,
  IconChalkboard,
  IconLiveView,
  IconSpeakerphone,
  IconMessageReport,
  IconAd2,
  IconUser,
  IconSettings,
} from '@tabler/icons';


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: '0 0 60px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
  },

  logo: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: '44px',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      color: theme.white,
    },
  },
}));

const mainLinksMockdata = [
  {
    icon: IconBuildingSkyscraper, label: 'Finn Alt', name: 'FinnAlt', children:
      [
        { link: '/lokale_ditt', label: 'Lokale ditt' },
        { link: '/din_by', label: 'Din by' },
        { link: '/nabobyen', label: 'Nabobyen' },
        { link: '/grunderiet', label: 'Grunderiet' },
        { link: '/leverandør_liste', label: 'Leverandør Liste' },
        { link: '/hobbyster', label: 'Hobbyster' },
        { link: '/turist_reise', label: 'Turist || Reise' },
        { link: '/lokale_anmeldelser', label: 'Lokale Anmeldelser' },
        { link: '/sport', label: 'Sport' },
        { link: '/bibliotek', label: 'Bibliotek' },
        { link: '/mæteplassen', label: 'Mæteplassen' }
      ]
  },
  {
    icon: IconPremiumRights, label: 'Annonser', name: 'Annonser', children: [
      { link: '/kampanjer', label: 'Kampanjer' },
      { link: '/markedsplass', label: 'Markedsplass' },
      { link: '/salg', label: 'Salg' },
      { link: '/lokale_tilbud', label: 'Lokalet tilbud' },
      { link: '/handeltorget', label: 'Handeltorget' },
      { link: '/firma_tilbud', label: 'Firma Tilbud' },
      { link: '/opplagstavler', label: 'Opplagstavler' },
      { link: '/kjop_salg_utleie', label: 'Kjøp, salg & utleie' },
      { link: '/sammedags_levering', label: 'Sammedags levering' },
      { link: '/hjemlevering', label: 'Hjemlevering' },
      { link: '/publiser_annons', label: 'Publiser annonse' }
    ]
  },
  {
    icon: IconUsers, label: 'Felleskap', name: 'Felleskap', children:
      [
        { link: '/næringsforum', label: 'Næringsforum' },
        { link: '/ekspert_liste', label: 'Ekspert Liste' },
        { link: '/oppmuntring', label: 'Oppmuntring' },
        { link: '/klubb', label: 'Klubb' },
        { link: '/inspirasjon', label: 'Inspirasjon' },
        { link: '/be_&_eller_tylby_hjelp', label: 'Be &eller Tylby hjelp' },
        { link: '/diskusjoner', label: 'Diskusjoner' },
        { link: '/lokalet_forum', label: 'Lokalet forum' },
        { link: '/del_kunskapp', label: 'Del kunskapp' },
        { link: '/dugnad_&_frivillig', label: 'Dugnad & Frivillig' },
        { link: '/kunskap_bygging', label: 'Kunskap bygging' },
      ]
  },
  {
    icon: IconMeteor, label: 'Tjeneste områder', name: 'TjenesteOmrader', children:
      [
        { link: '/informasjon', label: 'Informasjon' },
        { link: '/nettverking', label: 'Nettverking' },
        { link: '/bli_kjent', label: 'Bli kjent' },
        { link: '/konkuranse', label: 'Konkuranse' },
        { link: '/finne_lokale', label: 'Finne Lokale' },
        { link: '/kollaborasjon', label: 'Kollaborasjon' },
        { link: '/altlokal_klubb', label: 'Altlokal Klubb' },
        { link: '/kultur_kalender', label: 'Kultur Kalender' },
        { link: '/kurs_webinar_&_seminar', label: 'Kurs, Webinar & Seminar' },
        { link: '/partnerskap_&_sponsor', label: 'Partnerskap & Sponsor' },
        { link: '/ideer_&_forslag_(ideer_bank)', label: 'Ideer & Forslag (Ideer bank)' },
      ]
  },
  {
    icon: IconChalkboard, label: 'Portalen', name: 'Portalen', children: [
      { link: '/liste_over_alle', label: 'Liste over alle' },
      { link: '/næringsliv', label: 'Næringsliv' },
      { link: '/handel', label: 'Handel' },
      { link: '/siste_nytt', label: 'Siste Nytt' },
      { link: '/helse_&_velvære', label: 'Helse & Velvære' },
      { link: '/bedrifter', label: 'Bedrifter' },
      { link: '/butikker', label: 'Butikker' },
      { link: '/trafikk', label: 'Trafikk' },
      { link: '/skaper', label: 'skaper' },
      { link: '/forslagskasse', label: 'Forslagskasse' },
      { link: '/omtaler', label: 'Omtaler' },
    ]
  },
  {
    icon: IconLiveView, label: 'Komunal Oversikt', name: 'KomunalOversikt', children: [
      { link: '/aktuelt', label: 'Aktuelt' },
      { link: '/aktiviteter', label: 'Aktiviteter' },
      { link: '/status', label: 'Status' },
      { link: '/opplagstavler_fra_buttikken', label: 'Opplagstavler fra Buttikken' },
      { link: '/kultur_front', label: 'Kultur front' },
      { link: '/politikk_og_historie', label: 'Politikk & historie' },
      { link: '/tilfrukts_områder', label: 'Tilfrukts områder' },
      { link: '/nabolaget', label: 'Nabolaget' },
      { link: '/innbyggere_og_bestander', label: 'Innbyggere & bestander' },
      { link: '/friluftsliv_og_sport', label: 'Friluftsliv & sport' },
      { link: '/virksomhet', label: 'Virksomhet' }
    ]

  },
  {
    icon: IconSpeakerphone, label: 'Arrangementer', name: 'Arrangementer', children: [
      { link: '/dette_skjer', label: 'Dette skjer' },
      { link: '/eventer_konserter_fest', label: 'Eventer, Konserter & Fest' },
      { link: '/legg_til_arrangement', label: 'legg til arrangement' },
      { link: '/utforsk', label: 'Utforsk' },
      { link: '/fritidsaktiviteter_tilbud', label: 'Fritidsaktiviteter & tilbud' },
      { link: '/aktiviteter', label: 'Aktiviteter' },
      { link: '/attraksjoner', label: 'Attraksjoner' },
      { link: '/kommende_arrangementer', label: 'Kommende arrangementer' },
      { link: '/arrangementer_du_følger', label: 'Arrangementer du følger' },
      { link: '/arrangementer_i_nærheten', label: 'Arrangementer i nærheten' },
      { link: '/får_tilsendt_arrangementer', label: 'Får tilsendt arrangementer' }
    ]

  },
  {
    icon: IconMessageReport, label: 'varsling', name: 'Varsling', children: [
      { link: '/soknadsfrist_oversikt', label: 'Søknadsfrist oversikt' },
      { link: '/nod_og_forventninger', label: 'Nød og forventninger' },
      { link: '/kjekk_temperatur', label: 'Kjekk temperatur' },
      { link: '/oppdatert_informasjon', label: 'Oppdatert informasjon' },
      { link: '/var_og_luft', label: 'Vær & luft' },
      { link: '/frister', label: 'Frister' },
      { link: '/trafikk_meldinger', label: 'Traffikk meldinger' },
      { link: '/reservasjon_kalender', label: 'Reservasjon Kalender' },
      { link: '/okonomi_regnskap', label: 'Økonomi & Regnskap' },
      { link: '/kultur_kalender', label: 'Kultur Kalender' },
      { link: '/siste_nytt', label: 'Siste Nytt' }
    ]

  },
  {
    icon: IconAd2, label: 'Rekrutering', name: 'Rekrutering', children: [
      { link: '/sok-etter-jobb', label: 'Søk etter jobb' },
      { link: '/laerling-og-praksis', label: 'Læarling & Praksis' },
      { link: '/lokale-jobber', label: 'Lokale jobber' },
      { link: '/ekspert-og-profesjonell', label: 'Ekspert & Profesjonell' },
      { link: '/talenter', label: 'Talenter' },
      { link: '/internship', label: 'Internship' },
      { link: '/jobber-du-allerede', label: 'Jobber du allerede' },
      { link: '/jobber-anbefallinger', label: 'Jobber anbefallinger' },
      { link: '/kandidat-sok', label: 'Kandidat søk' },
      { link: '/publiser-jobb', label: 'Publiser jobb' },
      { link: '/rask-jobbtilbud-haster', label: 'Rask Jobbtilbud ( haster )' }
    ]
  },
  {
    icon: IconUsers, label: 'Om oss', name: 'OmOss', children: [
      { link: '/avtale_mote', label: 'Avtale møte' },
      { link: '/presse', label: 'Presse' },
      { link: '/invester', label: 'Invester' },
      { link: '/kontakt_oss', label: 'Kontakt oss' },
      { link: '/blogg', label: 'Blogg' },
      { link: '/utvikler', label: 'Utvikler' },
      { link: '/kom_i_gang', label: 'Kom i gang' },
      { link: '/stott', label: 'Støtt' },
      { link: '/investerings', label: 'Investerings' },
      { link: '/mer_informasjon', label: 'Mer informasjon' }
    ]
  },
  {
    icon: IconUser, label: 'Konto', name: 'Konto', children: [
      { link: '/konto_oversikt', label: 'Konto oversikt' },
      { link: '/opprett_bedrift_konto', label: 'Opprett bedrift konto' },
      { link: '/legg_til_arrangement', label: 'legg til arrangement' },
      { link: '/legg_til_oppdrag', label: 'legg til oppdrag' },
      { link: '/bli_en_leverandør', label: 'Bli en leverandør' },
      { link: '/registrer_din_kunnskap', label: 'Regrister din kunnskap' },
      { link: '/mitt_innhold_og_nettverk', label: 'mitt innhold & nettverk' },
      { link: '/mitt_selskap', label: 'Mitt selskap' },
      { link: '/mitt', label: 'mitt ' },
      { link: '/medlemsfrister', label: 'Medlemsfrister' },
      { link: '/avtale_møte', label: 'Avtale mæte' },
      { link: '/send_inn_alt', label: 'Send inn alt' }
    ]

  },
  {
    icon: IconSettings, label: 'Instillinger', name: 'Instillinger', children: [
      { link: '/kontoinnstillinger', label: 'kontoinnstillinger' },
      { link: '/oppdater_konto', label: 'Oppdater konto' },
      { link: '/oppgrader_konto', label: 'Oppgrader konto' },
      { link: '/konto_sikkerhet', label: 'konto sikkerhet' },
      { link: '/logout', label: 'Logg ut' },
      { link: '/personvern', label: 'personvern' },
      { link: '/sikkerhet', label: 'sikkerhet' },
      { link: '/konto', label: 'konto' },
      { link: '/konto_sikkerhet', label: 'konto sikkerhet' },
      { link: '/slett_konto', label: 'slett konto' },
      { link: '/hjelp', label: 'Hjelp' },
    ]
  },
];


export default function DashboardSearch() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Finn Alt');
  const [activeLink, setActiveLink] = useState('Lokale ditt');
  const [linksMockdata, setLinksMockdata] = useState(mainLinksMockdata[0].children)

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton
        onClick={() => {
          setActive(link.label);
          setLinksMockdata(link.children);
        }}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >

        <link.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    console.log(link.link),
    <a
      className={cx(classes.link, { [classes.linkActive]: activeLink === link.label })}
      href={link.link}
      onClick={(event) => {
        //event.preventDefault();
        setActiveLink(link.label);
      }}
      key={link.label}
    >
      {link.label}
    </a>
  ));

  return (

    <Navbar height="100h" width={{ sm: 300 }} align="left" >
      <Navbar.Section grow className={classes.wrapper} >
        <div className={classes.aside}>
          <div className={classes.logo}>
            <img type="mark" size={30} src={process.env.PUBLIC_URL + '/img/logo.svg'} />
          </div>
          {mainLinks}
        </div>

        <Navbar.Section grow className={classes.wrapper} >
          <div className={classes.main}>
            <Title order={4} className={classes.title}>
              {active}
            </Title>
            {links}
          </div>
        </Navbar.Section>

      </Navbar.Section>
    </Navbar>
  );
}



