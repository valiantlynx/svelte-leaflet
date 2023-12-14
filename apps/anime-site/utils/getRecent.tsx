import axios from 'axios';
import { URL } from './URLS';

async function getRecent(page: number) {
    try {
        const response = await axios.get(`${URL.RECENT}${page}`,
            { headers: { 'Access-Control-Allow-Origin': '*' } }
        );

        const results: Recent = response.data;

        return results.results;
    } catch (error) {
        console.log(error);
    }
}

export default getRecent