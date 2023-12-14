
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8080');

export default async function getUsers() {


    // you can also fetch all records at once via getFullList
    const records = await pb.collection('users').getFullList({
        sort: '-created',
    });

    console.log("records", pb.authStore.model);

    return (
        <div>
            <button>Fetch Users</button>
            <ul>
                {records.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}

            </ul>
        </div>
    )
}
