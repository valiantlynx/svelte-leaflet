---
title: How to Remove Everything Except the Build Folder in Linux
created: 2023-02-23
tags: ['Linux', 'Command Line', 'File Management']
image: '/remove-everything-except-build-folder-linux/image.png'
alt: 'How to Remove Everything Except the Build Folder in Linux'
summary: Are you looking to clean up your project directory, but want to keep the build folder intact? Here's how you can do it in Linux using the command line.
---

## Headings

---

Are you looking to clean up your project directory, but want to keep the build folder intact? Here's how you can do it in Linux using the command line.

The `rm -r` command is used to recursively remove all files and directories in the current directory. To remove everything except the build folder, use the following steps:

1. Navigate to the directory that contains the build folder using the `cd` command.
2. Use the command `rm -r *` to remove all files and directories in the current directory.
3. Use the command `mv project/build .` to move the build folder from the project directory to the current directory.
   Note: The `.` represents the current directory.

By following these steps, you can remove all files and directories in the current directory except for the build folder. This is a quick and easy way to clean up your project directory and keep only what's important.

```bash
rm -r *
mv project/build .
```

This would remove all files and directories in the current directory (**project**), then move the build folder from the project directory to the current directory.

In conclusion, the **rm -r** and **mv** commands are powerful tools for removing and moving files and directories in Linux. With this tutorial, you now know how to use them to remove everything except the build folder in your project directory.

[scrollToTop](#headings)
