---
title: Solving the Error 'WslRegisterDistribution failed with error; 0x80370102' when Installing Ubuntu on Windows
created: 2023-02-21
tags:
  [
    'WSL',
    'Ubuntu',
    'Windows',
    'Error',
    'wslregisterdistribution failed with error: 0x80370102',
    'wslregisterdistribution failed with error',
    '0x80370102',
    'error: 0x80370102',
    'valiantlynx'
  ]
image: '/solving-error-wslregisterdistribution-failed-error-0x80370102-installing-ubuntu-windows/image.png'
alt: 'Solving the Error WslRegisterDistribution failed with error; 0x80370102 when Installing Ubuntu on Windows'
summary: Windows Subsystem for Linux (WSL) is a popular option for developers and system administrators to run Linux applications natively on Windows. However, sometimes users face an error when trying to install Ubuntu or another Linux distribution via WSL. The error message reads "WslRegisterDistribution failed with error;0x80370102." This error can occur due to several reasons, such as virtualization not being enabled in the BIOS or the Virtual Machine Platform Windows feature not being enabled.
---

## Headings

---

Windows Subsystem for Linux (WSL) is a popular option for developers and system administrators to run Linux applications natively on Windows. However, sometimes users face an error when trying to install Ubuntu or another Linux distribution via WSL. The error message reads "WslRegisterDistribution failed with error: 0x80370102." This error can occur due to several reasons, such as virtualization not being enabled in the BIOS or the Virtual Machine Platform Windows feature not being enabled.

In this article, we'll go through the steps to solve this error and successfully install Ubuntu on Windows via WSL.

### Step 1: Check if virtualization is enabled in the BIOS

The first step is to check if virtualization is enabled in your computer's BIOS. The process to enable virtualization may vary depending on the make and model of your computer, but generally, you need to restart your computer and enter the BIOS setup. From there, find the virtualization option and enable it. If you are unsure how to do this, you can consult the computer's manual or the manufacturer's website.

### Step 2: Enable the Virtual Machine Platform Windows feature

The next step is to enable the Virtual Machine Platform Windows feature in Windows. To do this, follow these steps:

1. Press the Windows key + X and select "Windows PowerShell (Admin)"
2. Type the following command in the PowerShell window: `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
3. Wait for the feature to be enabled and then restart your computer

### Step 3: Enable the hypervisorlaunchtype

The final step is to enable the hypervisorlaunchtype. To do this, follow these steps:

1. Press the Windows key + X and select "Windows PowerShell (Admin)"
2. Type the following command in the PowerShell window: `bcdedit /set hypervisorlaunchtype Auto`
3. Restart your computer

After these steps, you should be able to install Ubuntu on Windows via WSL without encountering the error "WslRegisterDistribution failed with error: 0x80370102." If the error persists, it may be worth checking the official Microsoft documentation for additional troubleshooting steps or reaching out to Microsoft support for more assistance.

In conclusion, this error can be solved by ensuring virtualization is enabled in the BIOS, enabling the Virtual Machine Platform Windows feature, and enabling the hypervisorlaunchtype. With these steps, you should be able to install Ubuntu on Windows via WSL and run Linux applications natively on Windows.

[scrollToTop](#headings)
