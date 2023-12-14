import axios from 'axios';
import { URL } from './URLS';
async function getPopular(page: Number) {
    try {
        const response = await axios.get(`${URL.POPULAR}${page}`,
            { headers: { 'Access-Control-Allow-Origin': '*' } }
        );

        const results: PopularAnime = response.data;
        return results.results;
    } catch (error) {
        console.log(error);
    }
}

export default getPopular;