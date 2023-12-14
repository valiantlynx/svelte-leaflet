"use client"
import { pb } from '@/lib/pocketbase/pb';

export default function signOut() {
    pb.authStore.clear();
}