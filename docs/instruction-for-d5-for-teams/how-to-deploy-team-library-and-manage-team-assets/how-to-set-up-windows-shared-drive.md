---
title: "How to set up Windows shared drive?"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/how-to-deploy-team-library-and-manage-team-assets/how-to-set-up-windows-shared-drive
fetched: 2026-06-07
---

# How to set up Windows shared drive?

## Step 1: System Settings

1. Open a disk with sufficient storage space. ( we don't recommend choosing the system installation disk, such as the standard C disk).
2. Select the folder you want to share.

   \----------

   ①Right-click on the folder you want to share;&#x20;

   ②Click "Properties".



### Step 2: Setting up the Shared Folder

In the Properties panel:

① Select the "Sharing" tab;&#x20;

② Click the "Share..." button;&#x20;

③ Select the user you want to share with (if you want to share with everyone on the team, select everyone and set the permission to Read/Write);&#x20;

④ Click "Share" to save and create the simplest shared drive

After completing the previous step, copy the network path and paste it into the settings page of the client.

<div align="left"></div>

<div align="left"></div>

<div align="left"></div>



### Notes:

1\. Only the owner or administrator of the team version can configure shared folders. To avoid errors, please use the owner or administrator account for the configuration.

2\. If the shared folder is password-protected, others can only access when the password protection is turned off.



Special indication when "Remote Access Account & Remote Access Password" is not entered.



Turn off "Password-protected sharing" in Shared folders - Password protection.

3\. The maximum number of users allowed to access a Windows shared folder is 20.

4\. When the local machine or other devices are not on the same local network, they cannot access the team library.

Usually, the shared folder and other accessing devices need to be on the same local area network segment. For example, if the IP of the shared device is 192.168.1.1, the IP of the accessing device needs to be 192.168.1.xxx (xxx is between 2-255).

How to view the IP address:

<div align="left"></div>

<div align="left"></div>

<div align="left"></div>

5. Enter the IP and shared folder into the computer path and fill in the username and password to test if it can be accessed successfully.



If you encounter an error message while trying to access a shared folder on a Windows system, such as "Network error, you do not have permission to access \IP address, please contact the administrator for access permission" or "Windows cannot access \IP address or XX host, please check the spelling of the name. Otherwise, there may be a problem with the network. To try to identify and resolve network problems, click 'Diagnose'"

If these prompt appear, please check the following settings:

<table data-view="cards"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>If the device where the shared drive is located is set up with a startup password, please check if the account name and password are correctly filled in the team library deployment interface in the D5 client.</td><td><div></div></td></tr><tr><td>Press Windows + R and type "gpedit.msc" to enter the Group Policy interface.</td><td></td></tr><tr><td></td><td></td></tr></tbody></table>

6\. The account name of the computer where the shared folder is located cannot be the same as that of other devices. It is recommended to use different account names for different devices.&#x20;

For example, if the account name of the team version owner is "Administrator" and there is also an "Administrator" account on another computer, it will not be able to access the shared folder. The account name is the name displayed when the computer is turned on.

**Method to change the username:**

1. Click the Start menu, go to Settings, and find "Accounts".
2. Click "Email & accounts" and then click "Add an account".
3. Add a new account, log in with the new account, create a shared folder, configure it in the D5 render client, and the Team Library can be successfully created.

<div align="left"></div>




---
