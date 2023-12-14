
/** @type {import('./$types').Actions} */
export const actions = {
	test: async (event) => {
		const data = await event.request.formData();
		const text = data.get('text');
		console.log('text', text);

		
		try {
			const response = await fetch('http://localhost:8003/category_chain/invoke/', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		input: {
		  text: text,
		},
	  }),
	});
  
	if (!response.ok) {
	  // Handle the error here, e.g., throw an error or return an error message
	  throw new Error(`Failed to fetch data: ${response.statusText}`);
	}
  
	const chain = await response.json();
	console.log("data", chain);
  
	// Now you can work with the `data` object, which contains the response from the server
	// For example, you can return it or store it in a component's state
			return {
				chain
			};
		} catch (err) {
			console.log('err', err);
		}
		
	}
};