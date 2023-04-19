import type { Actions } from './$types';
import { PUBLIC_API } from '$env/static/public';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies, request, fetch }) => {
		const formData = await request.formData();
		const first_name = formData.get('first_name');
		const last_name = formData.get('last_name');
		const email = formData.get('email');
		const password = formData.get('password');

		const body = JSON.stringify({ email, password, first_name, last_name });

		const response = await fetch(`${PUBLIC_API}/auth/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body
		});
		const { status } = response;
		if (status === 201) {
			throw redirect(302, '/login');
		} else {
			throw redirect(302, '/signup');
		}
	}
} satisfies Actions;
