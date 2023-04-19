import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_API } from '$env/static/public';

export const load = (async ({ cookies }) => {
	cookies.set('auth_token', 'abc');

	const auth_token = cookies.get('auth_token');
	console.log(auth_token);
	if (auth_token) {
		return {
			props: {
				auth_token
			}
		};
	} else {
		throw redirect(303, '/login');
	}
}) satisfies PageServerLoad;

export const actions = {
	importWallet: async ({ cookies, request, fetch }) => {
		const formData = await request.formData();
		const private_key = formData.get('private_key');
		const external_id = '0.0.123';
		const body = JSON.stringify({ external_id, private_key });
		const response = await fetch(`${PUBLIC_API}/auth/account`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body
		});
		const { status } = response;
		if (status === 201) {
			const json = await response.json();
			return json;
		} else {
			alert('Login failed. Please try again.');
		}
	},

	logout: async ({ cookies, request, fetch }) => {}
} satisfies Actions;
