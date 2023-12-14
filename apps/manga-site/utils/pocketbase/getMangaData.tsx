import axios from 'axios';
import { URL } from '@/utils/URLS';

async function getMangaData(id: string, titleId: string) {
    try {
        console.log(`starting to fetch data from - ${URL.MANGA}${id}/${titleId}`)
        const response: any = await axios
            .get(`${URL.MANGA}${id}/${titleId}`, {
                headers: { 'Access-Control-Allow-Origin': '*' },
            })
            .catch((error) => {
                console.log(error);
            });
        const mangadetail: MangaDetails = response.data;

        return mangadetail.episodes;
    } catch (error) {
        console.log(error);
    }
}

export default getMangaData