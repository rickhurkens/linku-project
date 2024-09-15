import type { Actions } from '@sveltejs/kit';

export const actions = {
	/** Sends the message via the mail server to our configured email */
	default: async (event) => {
		const data = await event.request.formData();

		console.log(data);

		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		// TODO: implement form validation on frontend
		// TODO: implement safety: CAPTCHA, data-validation, data-sanitization, limitter
		// TODO: implement actual mail functionality

		console.log(
			`Not implemented: Mailing message '${message}' from '${name}' with email-address '${email}'.`
		);

		return {
			success: true,
			name: name
		};
	}
} satisfies Actions;
