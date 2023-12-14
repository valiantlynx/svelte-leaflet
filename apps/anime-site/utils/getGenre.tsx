import axios from 'axios';
import { URL } from './URLS';

async function getGenre(genre: string, page: number) {
    try {
        const response = await axios.get(`${URL.GENRE}${genre}/${page}`,
            { headers: { 'Access-Control-Allow-Origin': '*' } }
        );

        const results: Genre = response.data;

        return results.results;
    } catch (error) {
        console.log(error);
    }
}

export default getGenre