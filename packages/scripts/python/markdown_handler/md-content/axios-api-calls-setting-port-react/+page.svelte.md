---
title: Troubleshooting Axios API Calls and Setting Port in React
created: 2023-02-26
tags: ['Axios', 'API Calls', 'React', 'Troubleshooting', 'axios port', '']
image: '/axios-api-calls-setting-port-react/image.png'
alt: 'Troubleshooting Axios API Calls and Setting Port in React'
summary: In this article, we'll be discussing how to troubleshoot Axios API calls and how to set a custom port for your React app. Axios is a popular JavaScript library used for making HTTP requests, and it's especially useful when working with React. However, if you're encountering issues with Axios API calls, it can be difficult to know where to start.
---

## Headings

---

In this article, we'll be discussing how to troubleshoot Axios API calls and how to set a custom port for your React app. Axios is a popular JavaScript library used for making HTTP requests, and it's especially useful when working with React. However, if you're encountering issues with Axios API calls, it can be difficult to know where to start.

To help you resolve these issues, we'll be taking a look at a common problem: receiving a 200 status code but no data from the API. This can happen for a variety of reasons, such as an incorrect API endpoint, missing headers, or server-side caching. To resolve this issue, we'll look at adding custom headers to your Axios requests, such as `'Pragma': 'no-cache'`, `'Expires': '-1'`, and `'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0'`.

We'll also be discussing how to set a custom port for your React app. By default, React runs on port 3000, but if you need to run it on a different port, you can do so by modifying your start script in the `package.json` file. Simply add the `-p` flag followed by your desired port number to your start script. For example, if you want your app to run on port 3333, your start script should look like this: `"start": "react-scripts start -p 3333"`.

In conclusion, if you're encountering issues with Axios API calls or need to set a custom port for your React app, this guide should help you resolve these problems quickly and easily. With a better understanding of these concepts, you'll be able to develop more effective and efficient React applications.

[scrollToTop](#headings)
