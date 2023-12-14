import axios from 'axios';
import { URL } from './URLS';

async function getPopular(page: Number) {
    try {
        const response = await axios.get(`${URL.BROWSE}${page}`,
            { headers: { 'Access-Control-Allow-Origin': '*' } }
        );

        const results: PopularManga = response.data;
      
        return results.mangas;
    } catch (error) {
        console.log(error);
    }
}

export default getPopular;