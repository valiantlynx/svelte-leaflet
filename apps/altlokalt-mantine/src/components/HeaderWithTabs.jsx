import { Grid, Pagination, SimpleGrid, Center } from '@mantine/core';
import { useState } from 'react';


import { useQuery } from '@tanstack/react-query';
import { getPostsPage } from './api/axios';
import { BadgeCard } from './cards/BadgeCard';
import Footer from './footer/Footer';

function HeaderWithTabs() {

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
  //console.log(page)

  if (isLoading) return <h2>Loading Users...</h2>

  if (isError) return <h2>Error: {error.response.data.valideringsfeil[0].feilmelding},
    vennlygst,
    Last siden på nytt</h2>
  //console.log("companies ", companies._embedded.enheter)
  //console.log("companies ", companies.page.totalPages)
  const content = companies._embedded.enheter.map((company) => {
    //console.log("id fgsdfgfgfgfg", company)
    return <Grid.Col
      gutter="md"
      key={company.organisasjonsnummer}
      span={4}>

      <BadgeCard
        id={company.organisasjonsnummer}
        image={process.env.PUBLIC_URL + '/img/noImage.png'}
        url={company.hjemmeside}
        title={company.navn}
        country={company.stiftelsesdato}
        source={company.stiftelsesdato}
        description={JSON.stringify(company.naeringskode1)}
        sector={company.organisasjonsform.beskrivelse}
      />
    </Grid.Col>
  }
  )



  return (
    <div>
      <SimpleGrid cols={1} spacing="md" >
        <Grid breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {content}

        </Grid>
        <Center >
          <Pagination total={companies.page.totalPages} page={page} onChange={setPage} size="xs" radius="xl" withEdges />
        </Center>
      </SimpleGrid>
      <Footer />
    </div>

  )
}

export default HeaderWithTabs