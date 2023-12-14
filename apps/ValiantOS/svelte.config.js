import adapterAuto from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';

import { vitePreprocess } from '@sveltejs/kit/vite';

const deployTarget = process.env.DEPLOY_TARGET || 'auto'; // Default to 'auto'

/** @type {import('@sveltejs/kit').Config} */
export default {
    kit: {
        adapter: deployTarget === 'auto' ? adapterAuto() : adapterNode()
    },
    preprocess: vitePreprocess()
};