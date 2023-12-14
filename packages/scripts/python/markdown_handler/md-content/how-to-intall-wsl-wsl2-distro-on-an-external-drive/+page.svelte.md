---
title: How to Install WSL/WSL2 Distro on an External Drive
created: 2023-04-29
tags:
  [
    'WSL',
    'WSL2',
    'External Drive',
    'move wsl to another drive',
    'install wsl on different drive',
    'wsl move to another drive'
  ]
image: '/how-to-intall-wsl-wsl2-distro-on-an-external-drive/image.png'
alt: 'How to Install WSL/WSL2 Distro on an External Drive'
summary: If you're running out of space on your computer's hard drive, you can install WSL/WSL2 distro on an external drive. This will allow you to free up space on your computer's hard drive while still being able to use WSL/WSL2.
---

## Headings

---

I had this problem today. I had a WSL Ubuntu distro with important stuff on it. It was on my computer SSD (C:\) drive, but I needed to reset my computer. It would be a hassle to move them manually, especially because many of them were Linux programs. So, I needed to move the whole distro. After some research, I theorized two ways to do it.

The first way was to install another distro on my own specified path and then move the files there using some Linux tool like SSH. However, I wasn't able to find a way to define the path.

The second way, which I successfully did, was to export the whole distro to an external file and then import it while defining a path to install it. This way, I didn't need to move the data manually because the data is moved with the Linux.

Here is how I did it:

1. Create a `vm` folder beforehand on the external disk.
2. Export the WSL distribution to a tar file:
   - When exporting the code, do it as a tar file. It might just be `distroname.tar`.
   - `wsl --export <distribution_name> <tar_file_path>`
   - Replace `<distribution_name>` with the name of the distribution you want to move and `<tar_file_path>` with the path and filename of the tar file you want to create. For example:
     - `wsl --export Ubuntu D:\vm\ubuntu.tar`
     - This will create a tar file named `ubuntu.tar` in the `D:\vm` directory.
3. Copy the tar file to the external hard drive.
4. Import the WSL distribution from the tar file on the external hard drive:
   - `wsl --import <new_distribution_name> <install_directory> <tar_file_path>`
   - Replace `<new_distribution_name>` with the new name you want to give the distribution, `<install_directory>` with the directory on the external hard drive where you want to install the distribution, and `<tar_file_path>` with the path and filename of the tar file you copied in step 2. For example:
     - `wsl --import Ubuntu-external D:\vm\Ubuntu-external D:\vm\ubuntu.tar`
     - This will create a new WSL distribution named "Ubuntu-external" in the `D:\vm\Ubuntu-external` directory.
5. Check if the distro is listed by WSL using: `wsl -d -v`. The distro name should be listed there, e.g., `Ubuntu-external`.
6. Launch it with: `wsl -d <new_distribution_name>`.
7. Go to the root and you'll see it's somewhere else:
   - `root@DESKTOP-3EGT6DL:~#`

This is good for the most part as you could say you are free. Before, you could not go into the root folder and were using a user. Now, you are logged in as root. To find the former root folder, go to `cd ../home/valiantlynx/` and change `valiantlynx` to your own username.

[scrollToTop](#headings)
