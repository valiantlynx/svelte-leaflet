// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: any;
			user?: any;
			state?: string;
			verifier?: string;
		}
		// interface Platform {}
		// interface PageData {}
	}
}

export {};
