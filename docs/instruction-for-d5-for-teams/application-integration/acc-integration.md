---
title: "ACC Integration"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/application-integration/acc-integration
fetched: 2026-06-07
---

# ACC Integration

The authentication process is the same as [Dropbox](./d5-account-supports-integrated-dropbox-account.md). However, please be aware that due to the unique usage logic of Autodesk Construction Cloud, after authorized login, you have to complete additional configurations in the management backend of Autodesk Construction Cloud↓.

#### 1. Log in to ACC management backend, select an account (eg. Physical Test), and go to Account Admin > Custom Integration



#### 2. Click to add a 'Custom Integration'. Custom integration name can be freely customized (eg D5 render for teams).&#x20;

Add in **APS Client ID:&#x20;******eOgCJKEK3ZCJxHrWGfpK2eQtf3HFJV3cPDB3s22ybwD2Iv1d****



#### 3. Return to the account (eg. Physical Test) where you just added the custom integration, select a project, and invite users to the corresponding project.



#### 4. Enable Docs permission for certain user.



#### 5. Now this user will be able to access model data of this project in D5 Render and it supports uploading data from D5 Render to the project.

> **Note:** *Model data* above refers to the source files and their associated materials. Currently supported source file formats are: .skp, .fbx, .d5a, .3dm and .abc.



#### 6. Please note that since Autodesk Construction Cloud does not support custom thumbnails, thumbnails cannot be displayed when using Autodesk Construction Cloud data in D5 for Teams.


---
