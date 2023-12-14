import { Carousel } from '@mantine/carousel';
import { getOurUsersPage } from '../../../api/axios';
import { useQuery } from '@tanstack/react-query';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { ImageCard } from '../../../cards/ImageCard';

function Card(item) {
    return (
        <ImageCard
            title={item.email}
            description={item.name}
            image={process.env.PUBLIC_URL + '/img/noImage.png'}
        />
    );
}

function Users() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    let slides = []
    const {
        isLoading,
        isError,
        error,
        data: companies,
        isFetching,
        isPreviousData,
    } = useQuery(['/'], () => getOurUsersPage(), {
        keepPreviousData: true
    })
    //console.log("companies ", companies)

    if (isLoading) return <h2>Loading Users...</h2>

    if (isError) return <h2>Error: {error.response.data.valideringsfeil[0].feilmelding}, vennlygst, Last siden på nytt</h2>

    userQuery()

    function userQuery() {
        //console.log("companies ", companies)
        //console.log("companies ", companies.page.totalPages)
        slides = companies.map((item) => (
            <Carousel.Slide key={item._id}>
                <Card {...item} />
            </Carousel.Slide>
        ));
    }

    return (
      <Carousel
            slideSize="30%"
            breakpoints={[{ maxWidth: 'xm', slideSize: '100%', slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}

        </Carousel>
    );
}

export default Users;
