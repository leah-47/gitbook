---
title: "Team Library Deployment"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/how-to-deploy-team-library-and-manage-team-assets/team-library-deployment
fetched: 2026-06-07
---

# Team Library Deployment

After setting up the shared folder path, user, and password in D5 Launcher, members can access the shared resources on the local area network.

### Step 1: Create a Shared Drive

Currently, D5 can connect to shared drives using the Samba protocol. By configuring the corresponding shared drive address, access account, and password in the D5 client, you can use the team library on the LAN.

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><a data-mention href="/pages/h4MpCnNelr3EjSshuibX">/pages/h4MpCnNelr3EjSshuibX</a></td><td><p>Use a portion of your local storage as a network storage location.<br></p><p>Advantages: No additional cost. Easy and convenient setup.<br></p><p>Disadvantages: This tends to cause a shortage of local storage space, and shared host needs to remain powered on. There is a maximum limit on the number of users who can access it.</p></td><td></td></tr><tr><td><a data-mention href="/pages/v7LoJPKkMjQTb902FMZ4">/pages/v7LoJPKkMjQTb902FMZ4</a></td><td><p>NAS - Professional Network Storage Device</p><p></p><p>Advantages: Large storage space, does not occupy local storage space, secure and stable, suitable for multi-person team sharing.</p><p></p><p>Disadvantages: Relatively high cost</p></td><td></td></tr></tbody></table>

### Step 2: Configuring the Team Library Address in D5 Render

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><p><strong>Configuration entrance</strong></p><p></p><p>Go to D5 Launcher: Setting - Team Library Deployment (visible only to administrators). </p><p>Copy the shared drive information you set up to the corresponding input box and click Save.</p></td><td></td><td></td></tr><tr><td><p><strong>Modification and permission management</strong></p><p></p><p>● If you need to modify a saved shared drive address, you must first remove the original address.</p><p>● It is recommended to set the shared drive to the highest permission level to allow for deletion, modification, upload, and download.</p></td><td></td><td></td></tr></tbody></table>

### Team Assets Management

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td><strong>Access Team Assets</strong></td><td></td><td><p>Open the D5 Asset Library and go to "Team", all the d5a(asset) and d5m(material) files under the access address directory of the shared drive will be displayed. </p><p></p><p>Note:</p><p>If the folder structure exceeds 4 levels, after opening it, assets will take longer to load.</p></td><td></td></tr><tr><td><strong>Migrate Team Assets</strong></td><td></td><td><p>Team administrators can directly copy the accumulated D5a &#x26; D5m file assets to the corresponding folder in the team asset library.</p><p></p><p>Note:</p><p>Currently only team administrators can perform this operation.</p></td><td></td></tr><tr><td><strong>Generate Asset Thumbnails</strong></td><td></td><td><p>Team administrators can upload assets to the asset library and then click the "Refresh" button in the upper-right corner to automatically generate preview images for the assets in the team asset library. </p><p></p><p>Note:</p><p>Setting preview images can speed up the loading of the asset library.</p></td><td></td></tr><tr><td><strong>Upload File Permission</strong></td><td></td><td><p>For easy management of team library by administrators, the default LAN library permits only [team administrators] to upload files via the client. </p><p>If you want all team members able to upload files to the LAN library, owner or administrators can enable the ‘Enable members to upload files’ custom switch.</p></td><td></td></tr></tbody></table>

### Team Project Management

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><strong>Access and manage project libraries</strong></td><td></td><td><p>After successfully configuring the project library address, D5 Launcher will display a "Team Projects" entry.</p><p></p><p>After opening the project library, you will see all the D5 projects under the root directory. </p><p></p><p><strong>In the project library, the same project can only be edited by one user at a time when the project is not a Workset</strong>. </p><p></p><p><em>If multiple users edited the same project in a shared NAS, it may cause local archives to overwrite each other, resulting in the risk of data corruption.</em> </p><p></p><p>When multiple members need to edit a project simultaneously, you can <strong>convert it into a Workset</strong> and set which parts each member can edit and save to local. <a data-mention href="/pages/pkbdcdOSneYnlOFqqkVU">/pages/pkbdcdOSneYnlOFqqkVU</a></p></td></tr><tr><td><strong>Forced quit of editing status</strong></td><td></td><td><p>If a project is not closed properly, such as due to software crashes or computer shutdowns, the project will remain in an editing state. You can remove the editing state in two ways:</p><p></p><p>1. If you are the editor of the project, please reopen the project and close it properly.</p><p></p><p>2. Team administrators can use the "Forced quit of editing status" feature to remove the editing state of the project. Please make sure that the project is not being edited at the moment, otherwise archive errors may occur.</p></td></tr><tr><td><strong>Create a Template</strong></td><td><p></p><p>You can save a project as Template.</p></td><td><ol><li>Go to <strong>D5 Render >> Menu >> File >> Save as template</strong> to save a project file as template.</li><li>When the template is successfully saved, you can then close the project and navigate back to the D5 Launcher or Team Project library, where you will see the file now marked with a ''Template'' icon.</li><li>Clicking on the template file will create a duplicate instead of editing the original template. You can then save the duplicated file to a custom storage path.</li><li>If you need to edit the template, right click on the template and select 'Edit Template'.</li></ol></td></tr></tbody></table>

### Notes



1\. After the administrator updates the assets in the shared folder, they need to click the "Refresh" button in D5 Render team library to load the cache. If the asset library has been updated without refreshing in time, the preview images could get slow to load.&#x20;

*Please do not add or delete folders after opening D5 Render, as the folder acquisition is not real-time. If the folder directory is not updated in time, please close D5 Render and reopen it.*

2\. The D5 Render team library is based on the LAN protocol. If team members cannot access the team asset library, please check if the network of their computer is consistent with the network used by the shared drive address.&#x20;

*If you find that the download speed of assets (or projects) in the team library is slow, you can check if the NAS that stores the team library has set traffic restrictions.*

3\. If you need to use the team asset library in a WAN environment, there are three ways to achieve it:

&#x20;   a. Use the VPN provided by the company's IT department to access the internal network.

&#x20;   b. Apply for a public IP address from the ISP.

&#x20;   c. Use a network proxy provider, such as Synology NAS Quick Connect.

| Usage recommendations                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p>1. Manage asset library and project library separately using different addresses.</p><p>2. Name and classify folders according to asset category or by project.</p><p>3. Do not place too many projects in the project library. Completed projects can be moved out of the project library and backed up.</p> |

### Common Issues and Troubleshooting

When deploying D5 Team Library, if the connection fails, the Windows system will return several corresponding error codes, and the corresponding feedback in the D5 Render is as follows: ↓

| Error codes returned by Windows | Prompt in D5                                                          | Note                                                                                                                                                                           |
| ------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ERROR_ACCESS_DENIED           | The current account does not have permission to access the address    | Possible causes: 1. Improper permissions set for the shared drive; 2. The host where the shared drive is located has been shut down.                                           |
| ERROR_BAD_NET_NAME           | The target folder location is invalid                                 |                                                                                                                                                                                |
| ERROR_BAD_USERNAME            | The user name is invalid                                              |                                                                                                                                                                                |
| ERROR_INVALID_PASSWORD        | The password is invalid                                               | Possible cause: 1. The computer where the shared folder is located has the same account name (i.e. login name) as the other members' computers, making it impossible to share. |
| ERROR_NO_NETWORK              | The network is not available, please check if you are on the same LAN |                                                                                                                                                                                |
| ERROR_LOGON_FAILURE           | The account or password is invalid                                    |                                                                                                                                                                                |


---
