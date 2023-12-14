"use client"
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://localhost:8080');

export let currentUser: Object | null;

// Check if window is available, otherwise we are on the server and can't access localStorage
if (typeof window !== 'undefined') {
    // Perform localStorage action
    currentUser = localStorage.getItem('pocketbase_auth') || null;
}

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    // localStorage.setItem('currentUser', JSON.stringify(pb.authStore));
});

