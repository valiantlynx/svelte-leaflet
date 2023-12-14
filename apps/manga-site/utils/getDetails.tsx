import axios from 'axios';
import { URL } from './URLS';

async function getDetails(id: string, titleId: string) {
    try {
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

export default getDetails