/* eslint-disable no-console */
import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals, url, cookies }) => {
	const redirectUrl = `${url.origin}/api/oauth/google`;
	let expectedState = cookies.get('state');
	let expectedVerifier = cookies.get('verifier');

	const gState = url.searchParams.get('state');
	const code = url.searchParams.get('code');

	const authMethods = await locals.pb?.collection('users_valiantlynx').listAuthMethods(); //generates a state and a NEW verifier
	if (!authMethods?.authProviders) {
		console.error('no auth Providers');
		throw redirect(302, '/signup');
	}
	

	const googleAuthProvider = authMethods.authProviders.find(
		(provider) => provider.name === 'google'
	);
	if (!googleAuthProvider) {
		console.error('Provider not found');
		throw redirect(302, '/signup');
	}

	if (expectedState !== gState) {
		console.error('state mismatch', expectedState, gState);
		throw redirect(302, '/signup');
	}

	try {
		await locals.pb
			?.collection('users_valiantlynx')
			.authWithOAuth2Code(googleAuthProvider.name, code, expectedVerifier, redirectUrl, {
				role: ['user']
			});// the object will reset the properties on that user when they are created on pocketbase
		await locals.pb.collection('users_valiantlynx').authRefresh();
	} catch (e) {
		console.log('Error Signing up with google auth', e, e.message);
	}

	// redirect the response to the home page
	throw redirect(302, '/login');
};
