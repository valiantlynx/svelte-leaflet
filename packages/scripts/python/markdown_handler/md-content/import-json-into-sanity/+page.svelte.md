---
title: How to Import JSON Data into Sanity CMS
created: 2023-02-24
tags:
  [
    'Sanity CMS',
    'JSON Data',
    'Import',
    'sanitycms',
    'sanity cms',
    'sanity json',
    'sanity import',
    'sanity import data',
    'sanity',
    'cms'
  ]
image: '/import-json-into-sanity/image.png'
alt: 'How to Import JSON Data into Sanity CMS'
summary: Sanity is a flexible and open-source Content Management System (CMS) that enables developers and content creators to easily manage and organize their data. One of the great features of Sanity is its ability to import data from various sources, including JSON files. In this tutorial, we will go through the steps to import JSON data into Sanity.
---

## Headings

---

Sanity is a flexible and open-source Content Management System (CMS) that enables developers and content creators to easily manage and organize their data. One of the great features of Sanity is its ability to import data from various sources, including JSON files. In this tutorial, we will go through the steps to import JSON data into Sanity.

## Step 1: Preparing the JSON Data

Before you can import your JSON data into Sanity, you need to make sure that the data is structured in a way that can be understood by Sanity. Sanity uses a schema to define the data structure, so you need to make sure that your JSON data matches the structure defined in your Sanity schema.

## Step 2: Creating a Sanity Project

If you haven't already, you need to create a Sanity project. To do this, follow these steps:

1. Install the Sanity CLI by running this command in your terminal: `npm install -g @sanity/cli`
2. Create a new Sanity project by running this command in your terminal: `sanity init`
3. Select the "Empty project" option and follow the prompts to complete the setup.

## Step 3: Defining the Schema

Next, you need to define your schema in Sanity. This is what tells Sanity how your data should be structured. To create a new schema in Sanity, follow these steps:

1. Open the `schema.js` file in your Sanity project.
2. Define your schema by adding the required fields and their respective data types. For example:

```javascript
export default [
	{
		name: 'myCustomType',
		type: 'document',
		fields: [
			{ name: 'title', type: 'string' },
			{ name: 'description', type: 'text' },
			{ name: 'image', type: 'image' }
		]
	}
];
```

## Step 4: Importing the JSON Data

Once you have prepared your JSON data and defined your schema, you're ready to import the data into Sanity. To do this, you can use the Sanity CLI or the Sanity Studio's import/export feature.

### Method 1: Using the Sanity CLI

1. Run this command in your terminal:

```bash
sanity dataset import ./path/to/your/file.json
```

2. Follow the prompts to complete the import process.

[scrollToTop](#headings)
