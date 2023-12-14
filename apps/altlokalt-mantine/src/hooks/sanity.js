import sanityClient from '@sanity/client' 

const client = sanityClient({
    projectId: '92wd9i1h',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
    token: 'skQ2FFjFhjOVdBwIjZtkml4IHsXc8VuDUgfkucKui6HQcWODHjNvs3ltUV3waVp8zeyQxOwAyHwpXslbZJqQIXWle6eDFLT4FXtbN6D6MPY2caI099QcXj3OWJt72gwRUopyybmWDGwTV60qFwuW3ttsskVfqCG93xjhWpFZdpGkqHJKF80t'
  })
  
export default client