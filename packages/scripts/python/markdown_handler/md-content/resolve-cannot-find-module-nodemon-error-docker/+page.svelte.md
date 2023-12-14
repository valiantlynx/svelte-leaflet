---
title: How to Resolve the "Cannot find module 'nodemon'" Error When Running Nodemon Inside a Docker Container
created: 2023-02-19
tags: ['Docker', 'Node.js', 'Nodemon', 'Error', 'Troubleshooting']
image: '/resolve-cannot-find-module-nodemon-error-docker/image.png'
alt: 'How to Resolve the Cannot find module nodemon Error When Running Nodemon Inside a Docker Container'
summary: Docker is a popular platform for building, shipping, and running applications in containers. When developing applications with Node.js, it is common to use tools like nodemon to automatically reload the application when code changes are made. However, sometimes when running nodemon inside a Docker container, you may encounter an error that says "Cannot find module 'nodemon'".
---

## Headings

---

Docker is a popular platform for building, shipping, and running applications in containers. When developing applications with Node.js, it is common to use tools like nodemon to automatically reload the application when code changes are made. However, sometimes when running nodemon inside a Docker container, you may encounter an error that says "Cannot find module 'nodemon'".

The error message indicates that the nodemon module is not found within the container. This can happen if the `npm i nodemon` command is not being executed in the Dockerfile or if the version of nodemon installed is not compatible with the version of Node.js you are using.

To resolve this issue, you can try adding this command in the Dockerfile:

```dockerfile
RUN npm install -g nodemon
```

This will install the nodemon package globally and should make it available to the container. You should also make sure to run the latest version of nodemon and Node.js.

Additionally, you should change the **CMD ["nodemon", "-p", "3000"]** to **CMD ["nodemon", "./", "-p", "3000"]** so that nodemon can find the entry point of your application.

Finally, you can check if the nodemon package is installed in the container by running **nodemon -v** to see if it is installed and the version of it.

By following these steps, you should be able to resolve the "Cannot find module 'nodemon'" error when running nodemon inside a Docker container.

[scrollToTop](#headings)
