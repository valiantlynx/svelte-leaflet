import { pb } from '@/utils/pocketbase/pb';

async function getHomeData(page: number) {
    try {
        // fetch a paginated records list
        const resultList = await pb
            .collection('manga')
            .getList(page, 15, {
                sort: '-created',
            })
            .then((res) => {
                return res.items;
            })
            .catch((error) => {
                console.error("error: ", error);
            });
            console.log("resultList: ", resultList);
            
        return resultList;

    } catch (error) {
        console.error("error: ", error);
    }
}

export default getHomeData;