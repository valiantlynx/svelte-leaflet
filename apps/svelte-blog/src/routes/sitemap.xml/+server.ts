/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { RequestHandler } from './$types';
import { site } from '@valiantlynx/general-config';
import { genPosts } from '$lib/utils/posts';
// import { google } from 'googleapis';

const render = (): string =>
	`<?xml version='1.0' encoding='utf-8'?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>${site.site.protocol + site.site.domain}</loc>
    </url>
    ${genPosts()
			.map(
				(post) => `
        <url>
            <loc>${site.site.protocol + site.site.domain + post.path}</loc>
            <lastmod>${new Date(
							post.updated ?? post.published ?? post.created
						).toISOString()}</lastmod>
            <priority>0.5</priority>
            <changefreq>monthly</changefreq>
            <image:image>
              <image:loc>${site.site.protocol + site.site.domain + post.image}</image:loc>
              <image:caption>${post.summary}</image:caption>
              <image:geo_location>Norway</image:geo_location>
              <image:title>${post.alt}</image:title>
            </image:image>
        </url>`
			)
			.join('')}
  </urlset>`.trim();

// ping google to update the the urls of the company and the images
const pingGoogle = async () => {
	const urls = genPosts().map((post) => site.site.protocol + site.site.domain + post.path);
	const imageUrls = genPosts().map((post) => site.site.protocol + site.site.domain + post.image);

	// index the urls
	// indexer()
};

pingGoogle();

const services = {
	client_email: 'nuron-nextjs@nuron-nextjs.iam.gserviceaccount.com',
	private_key:
		'-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDIfERsudpJmgxJ\nJnAUeIEwP6jhX/9r0GWDZU83x6HjUkDJ53/NW3F5cx2b+atefcYbFPNcQGNvNaAR\nXyY2PB7vcLbOdyjg+RUzrRcXQJaj25FAlZ23orgzUiSYY9pPS3zXWjmgGghMMvg3\nzDjEfRAQxetkugTz6hczMwsA0z6wu+8VQbWv05jmGZAYBCwCuYmssG+OKShDTc4H\nB72/Xc50O3QcObX4SSLa8VT+V0+1LF0YXlvfOmgyYejbfEzXQo0LmzpL0Z0iQwe1\ng2V67Z238CC0IG5dRlZed3ZEH2bF5knkZwn1iugh3Y0C1CxUKLot5dJBtKF/LDSk\nZFsCJu/HAgMBAAECggEAFgXp7E75htFIcov+5DjH6Y7B/0lGK8fqMXtiWYcb+6Ew\nTchDi+xKHvnBcb4E5a3c97ee824n83JJbERuqabZYnBtcb5kPAZl86saw2qhwaE1\nJ7TnwjblPiSoBszH5qMCX+kLiyX2QwyW+Lt91ukYEoed+o7L9tFVuBbuKVU16JWi\nnXD911jVNX53YmKw17SVL8kfUTXigevjNeykJJ05a8q+vNpi216LMvwV27xEZGzB\nw/ETE7u8YPuWALI1Ebv1KwhXbNupQoNcJtOOQ134MwwkKuIwQYujHH3R0aNnQXc4\nbqIdtZGDeV8IUSCpLtAIwl/T7Yly8qhZrnrIjg2ypQKBgQDtq+FuvCLMopyVODCY\nA4bPR1+p5z5blEOtlWtwaubAEMB1EzZ7WjtQ75532/wXI4gzmzWUeKZpkzFZSPfx\nLC+0YTRNbT0EWOLlPBYxm0E1eWeQzfyVuOEFsiBMSSuXzs+GLptDoyAA6NmshUPz\nCwaNv2tuPNMejEVSBEo8RsBVNQKBgQDX8kJeCrQRQWtk5RMlD3CR+ZsrzZlTGCbZ\nK85nO2Tv8u2dqFDG81Lc0rxkiLXbqBF0MVWAHca9fhEuEEi7nD6I7eloNP5JrxGn\nj8Y9qUthWdxc2KTyVOZlp56TFZWn+QWXwfYsYKhBBVpGOJQSKkEJa55NGAQx0M6u\nRpf58gd8iwKBgQCGe3pcqTHbrquBN8EvUteGE/HKdqFvOk6tOt4HR0X4KcJsvIlY\ndO8ZVezKD3zuLtnTsaA4uagYFwSWa9Z37bO0kkgBA63B9vW0FjLMsPfN5Ts30YZ5\nxZn2GhtybviutoPwfhC2zee+/AKnPuT68iMsM8L7JomjQGW9CdZjkvkjfQKBgQC6\nE67MijyPgeegkSPmE1/U6Vikbg1oZK9VA0JgAfYALTxDVf4E8Ta9wXlEx+is1i30\nCW67bu0J68+x+aYyw3e/VgKCIOfdZlW4JVOVXoPt5xjTiHrZtf6yKbWi2D6U9yey\nlRgjNUbGgG5BhA9Td8WC8JD/rWov4tW1pm7emYeJ8QKBgQDmp0Yb5ScuQ43MrXO+\nnxYlRRcEKqMeDjNWnzd21NMX4Gz17P8XnqWnZDlk6iz/d+KonbjOgtjQ1fGIKr34\nS8qohFEhn6UXJ7xkZM4Da3mwmbrVdnDT9VBEusgUU9uLkP4OqWy+IFNk0EZ7Yyql\nBHnBVllGz9ahlbsT1xdZWKTOqg==\n-----END PRIVATE KEY-----\n'
};

// Set up variables for tracking API usage
const maxIndexingApiCalls = 5;
let apiCalls = 0;
let lastCallTime = Date.now();

async function indexer(google: any) {
	const urls = genPosts().map((post) => site.site.protocol + site.site.domain + post.path);

	console.log('google api- r', urls);

	try {
		for (let i = 0; i < urls.length && apiCalls < maxIndexingApiCalls; i++) {
			const url = urls[i];
			console.log(`Indexing ${url}...`);
			const now = Date.now();

			// Limit the API call rate to one per 30 seconds
			if (apiCalls > 0 && now - lastCallTime < 3000) {
				const timeToWait = 3000 - (now - lastCallTime);
				console.log(`Waiting ${timeToWait}ms before next API call...`);
				await new Promise((resolve) => setTimeout(resolve, timeToWait));
			} else {
				// Create new auth object, pass it the client email, private key, and ask for permission to use the indexing service.
				const auth = new google.auth.JWT(
					services.client_email,
					undefined,
					services.private_key,
					['https://www.googleapis.com/auth/indexing'],
					undefined
				);

				const indexer = google.indexing({
					version: 'v3',
					auth: auth
				});

				const indexRequest = await indexer.urlNotifications
					.publish({
						requestBody: {
							type: 'URL_UPDATED',
							url: `${url}`
						}
					})
					.catch((error) => {
						// If the API call fails, log the error and continue
					});

				// Increment API usage and update last call time
				apiCalls++;
				lastCallTime = now;

				console.log(`Indexed ${url}`);
			}
		}
	} catch (error) {
		// If the API call fails, log the error and continue
	}
}

export const prerender = true;
export const trailingSlash = 'never';

export const GET: RequestHandler = async () =>
	new Response(render(), {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
