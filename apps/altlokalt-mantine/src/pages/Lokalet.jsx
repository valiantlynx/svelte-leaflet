import { TextInput, Pagination, ActionIcon, Grid, Container, useMantineTheme, SimpleGrid } from '@mantine/core';
import { getCityPage } from '../components/api/axios';
import { useQuery } from '@tanstack/react-query';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';
import { useState } from 'react';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import { BadgeCardApi } from '../components/cards/BadgeCardApi';
import useAuth from '../hooks/useAuth';


function Lokalet() {

    const [value, setValue] = useState("");
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1)
    const { auth } = useAuth()
    //console.log("auth", auth);

    const {
        isLoading,
        isError,
        error,
        data: companies,
        isFetching,
        isPreviousData,
      } = useQuery(['/', value, page], () => getCityPage(value, page), {
        keepPreviousData: true
      })
      //console.log(page)
    
      if (isLoading) return <p>Loading Users...</p>
    
      if (isError) return <p>Error: {error.message}</p>



    function HandleReFetch() {
      
        setContent(companies._embedded.enheter.map((company) => {
            return <Grid.Col
               
                xs={4}
                key={company.organisasjonsnummer}
                >
                <BadgeCardApi

                    image={process.env.PUBLIC_URL + '/img/noImage.png'}
                    url={company.hjemmeside}
                    title={company.navn}
                    country={company.forretningsadresse.poststed}
                    source={company.stiftelsesdato}

                    sector={company.organisasjonsform.beskrivelse}
                />
                
            </Grid.Col>
        }))
    }
    //console.log("companies2 ", companies) 

    function InputWithButton() {
        const theme = useMantineTheme();

        return (
            <TextInput
                icon={<IconSearch size={18} stroke={1.5} />}
                radius="xl"
                size="md"
                style={{paddingBottom: "20px"}}
                label="Vil du sjekke bed Byen din?"
                value={value}
                onChange={(event) => {
                    //console.log(event.target)
                    setValue(event.target.value)
                }}
                rightSection={
                    <ActionIcon onClick={() => {
                        HandleReFetch()
                    }}
                        size={32}
                        radius="xl"
                        color={theme.primaryColor}
                        variant="filled">
                        {theme.dir === 'ltr' ? (
                            <IconArrowRight size={18} stroke={1.5} />
                        ) : (
                            <IconArrowLeft size={18} stroke={1.5} />
                        )}
                    </ActionIcon>
                }
                placeholder="Søk en by ... eller noen land"
                rightSectionWidth={42}
            />
            
        );
    }

    return (
        <div>
            <Nav />
            <center>
                <h1>Se Bedrifter I Lokale Ditt.</h1>
            </center>
            <Container my="md">
                {InputWithButton()}
               
                    <Grid >
                        {content}
                    </Grid>
              

                
                <center  onClick={() => {
                        HandleReFetch()
                    }} style={{ padding: "5% 30%", display: "inline-block", verticalAlign: "middle"}}>
            <Pagination 
            total={companies.page.totalPages} 
            page={page} onChange={setPage}
            size="xs" 
            radius="xl" 
            withEdges >
             
            </Pagination>

          </center>
            </Container>
            <Footer />
        </div>

    )
}

export default Lokalet;