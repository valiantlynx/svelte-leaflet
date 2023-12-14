import PocketBase from 'pocketbase';
import * as dotenv from 'dotenv';

dotenv.config();

export let url = process.env.PB_URL

export const pb = new PocketBase(url);

// Check if window is available, otherwise we are on the server and can't access localStorage
if (typeof window !== 'undefined') {
    // Perform localStorage action
    currentUser = localStorage.getItem('pocketbase_auth') || null;
}

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    // localStorage.setItem('currentUser', JSON.stringify(pb.authStore));
});

