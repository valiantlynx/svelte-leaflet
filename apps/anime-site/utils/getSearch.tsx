import axios from 'axios';
import { URL } from './URLS';

async function getSearch(page: Number, word: String) {
    try {
        if (word.length === 0) {
            return [];
        }
        const response = await axios.get(`${URL.SEARCH}${word}/${page}`,
            { headers: { 'Access-Control-Allow-Origin': '*' } }
        );

        const results: PopularAnime = response.data;
        return results.results;
    } catch (error) {
        console.log(error);
    }
}

export default getSearch