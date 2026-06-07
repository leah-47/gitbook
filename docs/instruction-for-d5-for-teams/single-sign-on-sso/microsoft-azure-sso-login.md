---
title: "Microsoft Azure SSO Login"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/single-sign-on-sso/microsoft-azure-sso-login
fetched: 2026-06-07
---

# Microsoft Azure SSO Login

> **Info:** **SSO** feature **requires a whitelist for activation** and is intended for enterprise clients.


> **Note:**
>
> To activate this feature, please get in touch with the relevant sales representative or customer success manager (<sales@d5techs.com>), and provide the team owner's account.&#x20;

## Microsoft Azure SSO (SAML) Setup Guide

### 1. Prerequisites

* The user must have a **Microsoft Azure account** for their company
* After logging in, go to the **“Enterprise Applications”** page



***

### 2. Create an Application

1. Click **“Create your own application”**
2. Give your application a name



3. Choose **“Set up single sign-on”** and select **SAML** as the login method





***

### 3. Permission Requirements

* Only **Team Owners** or **Super Team Admins** have access to the SSO configuration page

***

### 4. SSO Configuration Details

#### **1. Enable SSO**

* SSO is **disabled by default**



#### **2. Configuration Item Details**

**✅ Identity Provider (IdP)**

* Currently, **only Microsoft Entra** is supported

**✅ SSO Protocol**

* Currently, only **SAML** is supported

**✅Login Method Options**

There are **two options** for how users log in:

1. **Single Sign-On (SSO) & Username/Password (default)**

Users can log in using either SSO or their account credentials.

2. **SSO Only**

Users can only log in via Single Sign-On; password login will be disabled.

**✅Add Domain(s)**

* Enter **your company email suffixes** (e.g., ****`yourcompany.com`****)
* **Multiple domains** can be added



**✅ Service Provider (SP) Configuration**

* **Recommended method:**

&#x20;     a. Download the XML file from the D5 Team Management backend

&#x20;     b. In the Azure portal, open the SSO configuration module and go to **“Set up Single Sign-On”**

&#x20;     c. Click **“Upload metadata file”** and import the downloaded XML file

* **Manual method:**

  a. In Azure’s “Basic SAML Configuration” section, manually fill in the following:

&#x20;            \- Copy the **Identifier (Entity ID)** from the D5 backend and paste it into the corresponding field

&#x20;            \- Copy the **Assertion Consumer Service URL (ACS URL)** and paste it accordingly

&#x20;       b. Click “Save” to apply





**✅ Identity Provider (IdP) Information**

1. In the Azure portal’s SSO module, go to the **“Set up Single Sign-On”** section
2. Under the **SAML Certificates** area, download the **“Federation Metadata XML”**
3. Upload this file to the D5 Team Management backend
4. The system will parse the content and automatically fill in the IdP login URL



## Microsoft Azure SCIM Configuration Guide

### 1. Setup in D5 Myspace - Team Management Backend

Enable Provisioning



***

### 2. Setup in Microsoft Azure

* Go to **Enterprise Applications > SSO Control Module > Provisioning**





* Click **Add a new configuration**



* Enter the **SCIM endpoint and access token** provided in the D5 Team Management Backend. Click **Test Connection**, and after the test is successful, click **Create**.



* Click **Settings**, enable the provisioning switch, and click **Save**.

> 💡 If the access token changes in the future:
>
> * Navigate to **Provisioning > Settings > Admin Credentials**
> * Set the **Provisioning Status** to **On**
> * Click **Save**
> * Finally, **enable provisioning** to sync user accounts



* Click **Mappings**, then select **Provision Microsoft Entra ID Users**.



* On the attribute mapping page, click **Add New Mapping.**



* Configure the new mapping with the following steps. After completing the configuration, click **Save:**

> - Set **Mapping type** to **Expression**
> - Enter the following **Expression:** **`SingleAppRoleAssignment([appRoleAssignments])`**
> - Set **Target attribute** to **`roles[primary eq "True"].value`**
> - Set **Match objects using this attribute** to **Yes**
> - Set **Matching precedence** to **2**



* Return to the attribute mapping page and click **Save.**



* Return to the **Overview (Preview)** page to confirm whether provisioning has started. If it hasn't, click **Start Provisioning.**



***

### 3. Creating Application Roles

* Go to **Enterprise Applications > SSO Control Module > Properties**
* Click **“App Registrations”**
* After entering, go to the **“App Roles”** section
* You can **add new roles** here as needed

> ⚠️ If no roles are configured, synced users will default to **Team Member** role





***

### 4. Start provisioning



### 5. SCIM Sync Behavior

* When **SCIM is enabled,** the following features will be **disabled** in the D5 Team Management Backend:
  * Manually **editing team member roles**
  * **Modifying member account attributes**
  * **Inviting users to the team**
  * **Removing members from the team**



* In **Group Management**, the following options will also be hidden:
  * **Invite to Team**
  * **Remove from Team**



* Sync Status and Frequency
  * **Sync Frequency:** Once every **40 minutes**



* **View Sync Results:**
  * In the Azure backend, click on sync logs
  * You can see **each step of the sync** and any **failure reasons**



Example Case

* A new user is added in the IdP (who has **never registered** in D5)
* After waiting for the sync cycle, the user will automatically appear in the team

| <div></div> | <div></div> |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <div></div> | <div></div> |

***

### 6. Sync Failure Scenarios

* **Team Seat Limit Reached**

If an existing D5 account is being synced while the team's seat quota is full, the sync will fail, and the account will **not be added to the team.**



* **Backend Deployment in Progress**

If the D5 backend is undergoing a release during the sync process,the sync will fail.

The account will **not be created nor added to the team.**&#x20;

It will be retried in the **next scheduled sync.**




---
