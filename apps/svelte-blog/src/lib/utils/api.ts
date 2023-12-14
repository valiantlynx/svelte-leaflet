import PocketBase from 'pocketbase';
import { authData } from '$lib/utils/stores';
import { goto } from '$app/navigation';
import { site } from '@valiantlynx/general-config';
import { writable } from 'svelte/store';

export const pb = new PocketBase(site.site.pocketbase);

export const currentUser = writable(pb.authStore.model);

export const getImageURL = (collectionId: string, recordId: string, fileName: string) => {
	return `${site.site.pocketbase}/api/files/${collectionId}/${recordId}/${fileName}`;
};

export const authPocketbase = async (user: string, password: string) => {
	const res = await pb.collection('users_valiantlynx').authWithPassword(user, password);
	authData.set(pb.authStore.model);
	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

export const logoutPocketbase = async () => {
	pb.authStore.clear();
	authData.set({});
	window.location.reload();
	goto('/');
	if (!pb.authStore.isValid) {
		return { status: 200, message: 'logged out' };
	} else {
		throw { message: 'something went wrong' };
	}
};

export const createPocketbaseUser = async (data: any) => {
	const res = await pb.collection('users_valiantlynx').create(data);
	authData.set(res);

	// (optional) send an email verification request
	await pb.collection('users_valiantlynx').requestVerification(data.email);

	// login the user
	await authPocketbase(data.username, data.password);

	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

export const authPocketbaseAdmin = async (user: string, password: string) => {
	const res = await pb.admins.authWithPassword(user, password);
	authData.set(res);

	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

// refresh the login data
export const refreshAuthPocketbase = async () => {
	// Update authData store
	const user = await pb.collection('users_valiantlynx').authRefresh({
		refreshToken: pb.authStore.token
	});
	authData.set(user);

	return user;
};

export const getOnePocketbase = async (collection: string, data: any, id: any) => {
	const resultList = await pb.collection(collection).getOne(id, data);
	return resultList;
};

export const getPocketbase = async (collection: string, data: any, size?: any) => {
	const resultList = await pb.collection(collection).getList(1, size ? size : 8, data);
	return resultList;
};

export const postPocketbase = async (collection: string, data: any) => {
	const resultList = await pb.collection(collection).create(data);
	return resultList;
};

export const patchPocketbase = async (collection: string, id: string, data: any) => {
	const response = await pb.collection(collection).update(id, data);
	return response;
};

export const patchPocketbase1only = async (collection: string, id: string, data: any) => {
	const response = await pb.collection(collection).update(id, data);
	return response;
};

export const serializeNonPOJOs = (obj: any) => {
	// // if the object is not a POJO, then serialize it
	// if (obj && typeof obj === 'object' && obj.constructor !== Object) {
	// 	return JSON.stringify(obj);
	// }

	// return obj;

	return structuredClone(obj);
};
