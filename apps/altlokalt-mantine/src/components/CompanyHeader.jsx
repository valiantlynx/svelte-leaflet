import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, Text } from '@mantine/core';
import { UserCardImage } from './cards/UserCardImage';

const PRIMARY_COL_HEIGHT = 300;

export function CompanyHeader(props) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  //console.log("company",props.company)
  //console.log("api ",props.api)
  // if (props.company.bio == "undefined"){
  //   console.log(props.company)
  // } else {
  //   const bio = props.company.bio.map(item => {
  //     console.log(item)
  //   });

  // }

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
        <UserCardImage company={props.company || props.api} />
        <Grid gutter="md">
          <Grid.Col>
            <center>Kontakt oss for å få tilgang til resten av data. <br />
              Kontakt info ligger på bunnen av nettsiden</center>

            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
            {/* <Text align="center" size="sm" color="dimmed">
        {props.company.slogan}
      </Text> */}
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={true} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}