---
title: "Microsoft Azure SSO Login"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/single-sign-on-sso/microsoft-azure-sso-login
fetched: 2026-06-07
---

# Microsoft Azure SSO Login

> **Info:** **SSO** feature <mark style="background-color:yellow;">requires a whitelist for activation</mark> and is intended for enterprise clients.


> **Note:**
>
> To activate this feature, please get in touch with the relevant sales representative or customer success manager (<sales@d5techs.com>), and provide the team owner's account.&#x20;

## Microsoft Azure SSO (SAML) Setup Guide

### 1. Prerequisites

* The user must have a **Microsoft Azure account** for their company
* After logging in, go to the **“Enterprise Applications”** page

<figure><img src="/files/l9ZXlI27dkt1l9ULrkpI" alt=""><figcaption></figcaption></figure>

***

### 2. Create an Application

1. Click **“Create your own application”**
2. Give your application a name

<figure><img src="/files/cMIjgrOhNKXF4pk0flIP" alt=""><figcaption></figcaption></figure>

3. Choose **“Set up single sign-on”** and select **SAML** as the login method

<figure><img src="/files/Ezc107WNQ81jgI1RJ0jx" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/P0MjSFfiDkiXN7wTTOgl" alt=""><figcaption></figcaption></figure>

***

### 3. Permission Requirements

* Only **Team Owners** or **Super Team Admins** have access to the SSO configuration page

***

### 4. SSO Configuration Details

#### **1. Enable SSO**

* SSO is **disabled by default**

<figure><img src="/files/lVMOXQln5lBIz4w62V3z" alt=""><figcaption></figcaption></figure>

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

* Enter **your company email suffixes** (e.g., <mark style="color:red;">**`yourcompany.com`**</mark>)
* **Multiple domains** can be added

<figure><img src="/files/fLlXkW9o5rhDyFD9y8UE" alt=""><figcaption></figcaption></figure>

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

<figure><img src="/files/KWwGl5SOWIh2C1BK8grw" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/tB6kz8y4ATfiJYW2lla8" alt=""><figcaption></figcaption></figure>

**✅ Identity Provider (IdP) Information**

1. In the Azure portal’s SSO module, go to the **“Set up Single Sign-On”** section
2. Under the **SAML Certificates** area, download the **“Federation Metadata XML”**
3. Upload this file to the D5 Team Management backend
4. The system will parse the content and automatically fill in the IdP login URL

<figure><img src="/files/Uficvv01GCSEJUjsah5R" alt=""><figcaption></figcaption></figure>

## Microsoft Azure SCIM Configuration Guide

### 1. Setup in D5 Myspace - Team Management Backend

Enable Provisioning

<figure><img src="/files/Qus8kryc1WT1RIXprITz" alt=""><figcaption></figcaption></figure>

***

### 2. Setup in Microsoft Azure

* Go to **Enterprise Applications > SSO Control Module > Provisioning**

<figure><img src="/files/IGpZOKIs7NDJOZf0UYA9" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/U8sEj8PYzKTihJgJS1Pv" alt=""><figcaption></figcaption></figure>

* Click **Add a new configuration**

<figure><img src="/files/GizSAjawWOJSkHoZSYlc" alt=""><figcaption></figcaption></figure>

* Enter the **SCIM endpoint and access token** provided in the D5 Team Management Backend. Click **Test Connection**, and after the test is successful, click **Create**.

<figure><img src="/files/pY8ZpklM9TPC30s9KQDN" alt=""><figcaption></figcaption></figure>

* Click **Settings**, enable the provisioning switch, and click **Save**.

> 💡 If the access token changes in the future:
>
> * Navigate to **Provisioning > Settings > Admin Credentials**
> * Set the **Provisioning Status** to **On**
> * Click **Save**
> * Finally, **enable provisioning** to sync user accounts

<figure><img src="/files/XajUHrhKscETWybcFLNw" alt=""><figcaption></figcaption></figure>

* Click **Mappings**, then select **Provision Microsoft Entra ID Users**.

<figure><img src="/files/lqvkkJn44uuPKHxvsKke" alt=""><figcaption></figcaption></figure>

* On the attribute mapping page, click **Add New Mapping.**

<figure><img src="/files/tuyPnjQVZDzo3IH879FM" alt=""><figcaption></figcaption></figure>

* Configure the new mapping with the following steps. After completing the configuration, click **Save:**

> - Set **Mapping type** to **Expression**
> - Enter the following **Expression:** <mark style="color:red;">`SingleAppRoleAssignment([appRoleAssignments])`</mark>
> - Set **Target attribute** to <mark style="color:red;">`roles[primary eq "True"].value`</mark>
> - Set **Match objects using this attribute** to **Yes**
> - Set **Matching precedence** to **2**

<figure><img src="/files/wWqiYXxz7qQwiaSwSII3" alt=""><figcaption></figcaption></figure>

* Return to the attribute mapping page and click **Save.**

<figure><img src="/files/8A3JQPvHRp1PxYrUmLbd" alt=""><figcaption></figcaption></figure>

* Return to the **Overview (Preview)** page to confirm whether provisioning has started. If it hasn't, click **Start Provisioning.**

<figure><img src="/files/yQonujW2xKjFr9HzC775" alt=""><figcaption></figcaption></figure>

***

### 3. Creating Application Roles

* Go to **Enterprise Applications > SSO Control Module > Properties**
* Click **“App Registrations”**
* After entering, go to the **“App Roles”** section
* You can **add new roles** here as needed

> ⚠️ If no roles are configured, synced users will default to **Team Member** role

<figure><img src="/files/j56aCoFlXdiBrqShQdXY" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/s2pxwbeh3mabpKaCx5yN" alt=""><figcaption></figcaption></figure>

***

### 4. Start provisioning

<figure><img src="/files/SFjwd8UKwKNKeodmV2gE" alt=""><figcaption></figcaption></figure>

### 5. SCIM Sync Behavior

* When **SCIM is enabled,** the following features will be **disabled** in the D5 Team Management Backend:
  * Manually **editing team member roles**
  * **Modifying member account attributes**
  * **Inviting users to the team**
  * **Removing members from the team**

<figure><img src="/files/IAoOHhk63kwADjg1U1r7" alt=""><figcaption></figcaption></figure>

* In **Group Management**, the following options will also be hidden:
  * **Invite to Team**
  * **Remove from Team**

<figure><img src="/files/HnKyHIPUWt7a368nZy1V" alt=""><figcaption></figcaption></figure>

* Sync Status and Frequency
  * **Sync Frequency:** Once every **40 minutes**

<figure><img src="/files/S5qqGAp7xLSLHb3WoIUd" alt=""><figcaption></figcaption></figure>

* **View Sync Results:**
  * In the Azure backend, click on sync logs
  * You can see **each step of the sync** and any **failure reasons**

<figure><img src="/files/mRHyL9f3fUwb4kDaarWF" alt=""><figcaption></figcaption></figure>

Example Case

* A new user is added in the IdP (who has **never registered** in D5)
* After waiting for the sync cycle, the user will automatically appear in the team

| <div><figure><img src="/files/VkaB4JYzoXP9WAMiEoYq" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/QWPYqyNnDfufT6F6mblS" alt=""><figcaption></figcaption></figure></div> |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <div><figure><img src="/files/F3nfmyUIMjGFh7w0pJwJ" alt=""><figcaption></figcaption></figure></div> | <div><figure><img src="/files/R6rwT8jfWZWKuZkM3HFw" alt=""><figcaption></figcaption></figure></div> |

***

### 6. Sync Failure Scenarios

* **Team Seat Limit Reached**

If an existing D5 account is being synced while the team's seat quota is full, the sync will fail, and the account will **not be added to the team.**

<figure><img src="/files/chO0LyYjYQ4KU0KZRFcO" alt=""><figcaption></figcaption></figure>

* **Backend Deployment in Progress**

If the D5 backend is undergoing a release during the sync process,the sync will fail.

The account will **not be created nor added to the team.**&#x20;

It will be retried in the **next scheduled sync.**

<figure><img src="/files/KYTlf1eHiYQviYHprDKR" alt=""><figcaption></figcaption></figure>


---
