import { error, redirect } from '@sveltejs/kit';
import { state, verifier } from '$lib/utils/stores';

/** @type {import('./$types').Actions} */
export const actions = {
	signup: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const email = data.get('email');
		const passwordConfirm = data.get('passwordConfirm');

		const pbData = {
			username,
			email,
			emailVisibility: true,
			password,
			passwordConfirm: passwordConfirm,
			role: ['user']
		};

		try {
			await event.locals.pb.collection('users_valiantlynx').create(pbData);
			await event.locals.pb.collection('users_valiantlynx').requestVerification(pbData.email);
		} catch (err) {
			if (err.data?.data?.username?.code) {
				if (!pbData.username) {
					throw error(err.status, `Your username ${err.data?.data?.username?.message}`);
				}
				throw error(err.status, `Username already exist: ${err.data?.data?.username?.message}`);
			} else if (err.data?.data?.password?.code) {
				if (!pbData.password) {
					throw error(
						err.status,
						`Your password cannot be blank ${err.data?.data?.password?.message}`
					);
				}
				throw error(
					err.status,
					`Your password must be at least 8 characters: ${err.data?.data?.password?.message}`
				);
			} else if (err.data?.data?.passwordConfirm?.code) {
				if (!pbData.passwordConfirm) {
					throw error(
						err.status,
						`Your passwordConfirm ${err.data?.data?.passwordConfirm?.message}`
					);
				}
				throw error(
					err.status,
					`Your passwordConfirm and password ${err.data?.data?.passwordConfirm?.message}`
				);
			} else if (pbData.passwordConfirm !== pbData.password) {
				throw error(err.status, `Your passwordConfirm ${err.data?.data?.passwordConfirm?.message}`);
			} else if (err.data?.data?.email?.code) {
				if (!pbData.email) {
					throw error(err.status, `Your email ${err.data?.data?.email?.message}`);
				}
				throw error(err.status, `Your email ${err.data?.data?.email?.message}`);
			} else {
				throw error(
					err.status,
					`something went wrong with your signup. please try again or contact support through the feedback button ${err.response?.message}`
				);
			}
		}
		throw redirect(303, '/login');
	},
	oauth2google: async (event) => {
		const authMethods = await event.locals.pb?.collection('users_valiantlynx').listAuthMethods(); // generates a state and a verifier
		if (!authMethods) {
			return {
				authProviders: ''
			};
		}

		const redirectUrl = `${event.url.origin}/api/oauth/google`;
		const googleAuthProvider = authMethods.authProviders.find(
			(provider) => provider.name === 'google'
		);
		const authProviderRedirect = `${googleAuthProvider?.authUrl}${redirectUrl}&googleAuthState=${googleAuthProvider?.state}`;
		const stateToBeSaved = googleAuthProvider.state;
		const verifierToBeSaved = googleAuthProvider.codeVerifier;
		
		// renew the state and verifier in a cookie
		event.cookies.set('state', stateToBeSaved);
		event.cookies.set('verifier', verifierToBeSaved);

		throw redirect(302, authProviderRedirect);
	}
};
