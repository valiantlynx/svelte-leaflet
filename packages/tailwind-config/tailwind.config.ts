import type { Config } from "tailwindcss";

import daisyui from 'daisyui';
import { general } from '@valiantlynx/general-config';


const { theme } = general;
const customTheme = {
	christmas: {
	  primary: "#166534",
	  secondary: "#22c55e",
	  accent: "#d10e11",
	  neutral: "#fed7aa",
	  "base-100": "#ef4444",
	  "base-200": "#dc2626",
	  "base-300": "#b91c1c",
	  "base-content": "#ffffff",
	  info: "#3ecfef",
	  success: "#189a62",
	  warning: "#f4b762",
	  error: "#e52d1f",
	  "--rounded-btn": "1.9rem", // border radius rounded-btn utility class, used in buttons and similar element
	},
  };
  
  const allThemes = theme.map(({ name }: any) => name);
  allThemes.unshift(customTheme);

const config: Config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [daisyui],
	daisyui: { 
		themes: allThemes,
		styled: true, 
		darkTheme: "dracula",
		utils: true,
		logs: false
	 }
};
export default config;

