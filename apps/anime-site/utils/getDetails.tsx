import axios from 'axios';
import { URL } from './URLS';

async function getDetails(animeid: string) {
    try {
        const response: any = await axios
            .get(`${URL.DETAILS}${animeid}`, {
                headers: { 'Access-Control-Allow-Origin': '*' },
            })
            .catch((error) => {
                console.log(error);
            });
            const animedetail: AnimeDetails = response.data;
            return animedetail.results[0];
    } catch (error) {
        console.log(error);
    }
}

export default getDetails