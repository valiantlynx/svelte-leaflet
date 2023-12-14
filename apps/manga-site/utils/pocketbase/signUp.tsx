"use client"
import {pb } from '@/lib/pocketbase/pb';
import login from '@/lib/pocketbase/signIn';

type UserData = {
    username: string;
    email: string;
    password: string;
};

export default async function signUp({ userData }: { userData: UserData}) {
    try {
        const data = {
            username: userData.username,
            password: userData.password,
            passwordConfirm: userData.password,
            name: 'hi mom!',
        };
        const createdUser = await pb.collection('users').create(data);
        await login({ userData });
    } catch (err) {
        console.error(err);
    }
}