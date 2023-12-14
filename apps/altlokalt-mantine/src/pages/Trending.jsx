import { Grid, Container, Pagination} from '@mantine/core';
import { useState } from 'react';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import { useQuery } from '@tanstack/react-query';
import { getPostsPage } from '../components/api/axios';
import { BadgeCardApi } from '../components/cards/BadgeCardApi';


function Trending() {
  const [page, setPage] = useState(1)

  const {
    isLoading,
    isError,
    error,
    data: companies,
    isFetching,
    isPreviousData,
  } = useQuery(['/', page], () => getPostsPage(page), {
    keepPreviousData: true
  })
  if (isLoading) return <p>Loading Users...</p>
  if (isError) return <p>Error: {error.message}</p>
  const content = companies._embedded.enheter.map((company) => {
    return <Grid.Col
     xs={4}
      key={company.organisasjonsnummer}
      >
      <BadgeCardApi
        id={company.organisasjonsnummer}
        image={process.env.PUBLIC_URL + '/img/noImage.png'}
        url={company.hjemmeside}
        title={company.navn}
        country={company.stiftelsesdato}
        source={company.stiftelsesdato}
        description={JSON.stringify(company.naeringskode1)}
        sector={company.organisasjonsform.beskrivelse
        }
      />
    </Grid.Col>
  }
  )

  return (
    <div>
      <Nav />
      <center>
        <h1>Alle Bedrifter</h1>
      </center>
      <Container my="md">
          <Grid>
            {content}
          </Grid>
        <center style={{ padding: "5% 30%", display: "inline-block", verticalAlign: "middle" }}>
          <Pagination total={companies.page.totalPages} page={page} onChange={setPage} size="xs" radius="xl" withEdges />

        </center>
      </Container>
      <Footer />
    </div>
  )
}

export default Trending