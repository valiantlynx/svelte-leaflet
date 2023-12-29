import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ssr = false;

/** @type {import('./$types').Actions} */

export const actions = {
    save: async (event) => {
        try {
            const data = await event.request.formData();
            const content_object = data.get('content_object');

            if (!content_object) {
                throw error(400, 'No content object provided');
            }

            // Assuming content_object is a JSON string
            const content = JSON.parse(content_object);

            const filePath = path.join(__dirname, 'data.json');

            // Write the data to the file
            await fs.writeFile(filePath, JSON.stringify(content, null, 2), 'utf8');
          return;
        } catch (err) {
            console.error(err);
            // Return a simple error message
            throw error(err.status, err.message);
        }
    }
};
