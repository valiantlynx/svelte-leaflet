// src/routes/api/submit-feedback.js
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { emotion, note, url } = await request.json();

	// GitHub API endpoint to create an issue
	const apiUrl = import.meta.env.VITE_GH_URL;

	// Replace 'your-username' and 'your-repo' with your GitHub username and repository name
	const accessToken = import.meta.env.VITE_GH_P;

	let emotionEmoji = '';
	switch (emotion) {
		case 1:
			emotionEmoji = '😭'; // Replace with your desired emoji
			break;
		case 2:
			emotionEmoji = '😕 - confused'; // Replace with your desired emoji
			break;
		case 3:
			emotionEmoji = '😀'; // Replace with your desired emoji
			break;
		case 4:
			emotionEmoji = '😍'; // Replace with your desired emoji
			break;
		default:
			emotionEmoji = 'Unknown'; // Replace with a default emoji or message
	}
	const issueTitle = `${note} ${emotionEmoji}`;

	const issueData = {
		title: issueTitle,
		body: url
	};

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		},
		body: JSON.stringify(issueData)
	});

	if (response.status === 201) {
		const responseData = await response.json();
		return json({ id: responseData.id }, { status: 201 });
	} else {
		// Handle the error response from GitHub API here
		console.error('Failed to create GitHub issue:', response.statusText);
		return json({ error: 'Failed to create GitHub issue' }, { status: response.status });
	}
}
