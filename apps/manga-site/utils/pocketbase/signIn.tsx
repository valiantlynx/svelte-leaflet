"use client"

import { pb } from '@/lib/pocketbase/pb';

type UserData = {
    username: string;
    password: string;
};

export default async function login({ userData }: { userData: UserData}) {
        const user = await pb.collection('users').authWithPassword(
            userData.username,
            userData.password
        );
        
        console.log(user);
    }






