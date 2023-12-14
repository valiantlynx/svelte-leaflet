import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
    },

    title: {
        marginBottom: theme.spacing.md,
        paddingLeft: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    item: {
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    },
}));

const placeholder1 =
    'Om du leter du etter leverandør? eller du er et lokal bedrift som som ønsker å blir mer kjent, animevariant fikser alt for deg. Altlokal er en platform hvor du kan finne data om bedrift og "alt" i "lokalet" ditt. Fra produkter, leverandør, bedrift, jobb, arrangementer, osv, altlokals database fikse det.';
    const placeholder2 =
    'Altlokal hjelper deg med å sammenligned priser på en rekke produkter og tjenester på nett. animevariant.no - Bli kjent i lokale og knytt kontakt direkte med lokale leverandør';
    const placeholder3 =
    'Ja, avhengig av om leverandøren har en avtale med altlokals sammedags-levering tjenneste';
    const placeholder4 =
    'Søk på animevariant.com. animevariant.com gir tilgang til leverandør og bedrifter i lokalet ditt eller etter dine ønske. Medlemmer av animevariant får direkte kontakt med leverandør og bedrifter';
    const placeholder5 =
    'Søk på altlokal registre. Altlokal har et stør biblitek til alt mulig. Ved å søke for arrangementer, butikk, vare, tjeneste, osc, og så filtrere for lokalet ditt kan du finne hva du trenger. ';

export function FaqWithImage() {
    const { classes } = useStyles();
    return (
        <div>
            <Nav />
            <div className={classes.wrapper}>

                <Container size="lg">
                    <Grid id="faq-grid" gutter={50}>
                        <Col span={12} md={6}>
                            <Image src="https://ui.mantine.dev/_next/static/media/image.b0c2306b.svg" alt="Ofte Stilte Spørsmål" />
                        </Col>
                        <Col span={12} md={6}>
                            <Title order={2} align="left" className={classes.title}>
                            Ofte Stilte Spørsmål
                            </Title>

                            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                                <Accordion.Item className={classes.item} value="reset-password">
                                    <Accordion.Control>Hva er altlokal?</Accordion.Control>
                                    <Accordion.Panel>{placeholder1}</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item className={classes.item} value="another-account">
                                    <Accordion.Control>Hva hjelper altlokal deg med?</Accordion.Control>
                                    <Accordion.Panel>{placeholder2}</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item className={classes.item} value="newsletter">
                                    <Accordion.Control>Levere animevariant vare?</Accordion.Control>
                                    <Accordion.Panel>{placeholder3}</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item className={classes.item} value="credit-card">
                                    <Accordion.Control>
                                        Hvordan finner jeg leverandør, og bedrift?
                                    </Accordion.Control>
                                    <Accordion.Panel>{placeholder4}</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item className={classes.item} value="payment">
                                    <Accordion.Control>Hvordan finner jeg lokalet arrangementer, butikk, vare, tjeneste?</Accordion.Control>
                                    <Accordion.Panel>{placeholder5}</Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </div>

    );
}