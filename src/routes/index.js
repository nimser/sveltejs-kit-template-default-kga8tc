/** @type {import('./__types/items').RequestHandler} */
export async function post({ request }) {
	const body = await request.formData();
	const data = Object.fromEntries(body);

	return {
		body: { data }
	};
}
