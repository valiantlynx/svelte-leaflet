---
title: Custom LLM in Logseq
created: 2023-09-25
tags:
  [
    'Valiant Lynx',
    'Personal llm',
    'Logseq',
    'ai in logseq',
    'ai',
    'logseq',
    'python',
    'llm',
    'personal',
    'custom',
    'custom llm',
    'custom llm in logseq'
  ]
image: '/custom-llm-in-logseq/image.png'
alt: 'Custom LLM in Logseq'
summary: Have you ever wanted to create your own LLM in Logseq? Well, now you can! In this blog post, we'll walk through the process of creating a custom LLM in Logseq using Python and the Logseq Python Plugin. We'll start by downloading the Logseq Python Plugin from GitHub and then we'll unpack it and load it into Logseq. Next, we'll set up our environment and then we'll create our custom LLM in Logseq. Finally, we'll test our custom LLM in Logseq and then we'll publish it to the Logseq Plugin Store.
---

## Downloading

Download the Logseq Python Plugin `this bridges all python capabilities to logseq`: https://drive.google.com/drive/folders/1RyPLA9bCZTn5odv3Cegq-uj6YrpCffBw?usp=sharing
logseq.order-list-type:: number
![image.png](./image_1695666008223_0.png)

Unpack the zip file and let's prepare to Load the plugin
logseq.order-list-type:: number \*_Remember to activate developer mode to upload a plugin_
![image.png](./image_1695666670282_0.png)

Load up the unzipped folder at this directory `/plugin`
logseq.order-list-type:: number
![image.png](./image_1695667914096_0.png)

Setup

- go to the root of the unzipped folder in VSCODE and run this commands
  logseq.order-list-type:: number

```terminal
python -m venv venv
.\venv\Scripts\activate
pip install -e .
python my_plugin.py

```

Usage

- Clicking the run.bat run the command line
