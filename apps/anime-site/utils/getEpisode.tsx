import axios from 'axios';
import { URL } from './URLS';

async function getEpisode(id: string, episode: string) {
    try {
        const response: any = await axios
            .get(`${URL.EPLINK}${id}/${episode}`, {
                headers: { 'Access-Control-Allow-Origin': '*' },
            })
            .catch((error) => {
                console.log(error);
            });
            const episodeData: Episode = response.data;
            console.log("episodeData: ", episodeData);
            return episodeData;
    } catch (error) {
        console.log(error);
    }
}

export default getEpisode