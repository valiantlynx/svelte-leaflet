import axios from 'axios';
import { URL } from './URLS';

async function getGenreList() {
    try {
        const response = await axios.get(`${URL.GENRES}`,
            { headers: { 'Access-Control-Allow-Origin': '*' } }
        );

        const results: GenreList = response.data;

        return results.list;
    } catch (error) {
        console.log(error);
    }
}

export default getGenreList