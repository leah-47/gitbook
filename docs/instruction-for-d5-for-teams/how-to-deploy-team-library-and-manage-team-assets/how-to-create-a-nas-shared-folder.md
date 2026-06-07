---
title: "How to create a NAS shared folder?"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/how-to-deploy-team-library-and-manage-team-assets/how-to-create-a-nas-shared-folder
fetched: 2026-06-07
---

# How to create a NAS shared folder?

\*For illustration purposes, only Synology NAS is used as an example.

## Step 1: Enable SMB services

Log in to the NAS device, open the control panel, and enable SMB services.

<div align="left"></div>

## Step 2: Setup Shared Folder

Click on "Shared Folder", create a folder and name it (for example, name it "D5LibTest"), then click "Next" to proceed to encryption settings.

<div align="left"></div>

<div align="left"></div>

<div align="left"></div>

## Step 3: Get the address of the shared folder

Click on the PC (Windows Explorer) address in "File Services".

For example, \\\D5NAS Add the name of the shared folder that was just created to get \D5NAS\D5LibTest, which is the address of the team library shared folder.

<div align="left"></div>

Notes:&#x20;

If the shared account password is correct but the team library cannot be connected, you can make the following settings in the NAS: File Services >> SMB >> Advanced Settings >> Others >> Check "Enable NTLMv1 authentication".




---
