---
title: "Okta SSO Login"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/single-sign-on-sso/okta-sso-login
fetched: 2026-06-07
---

# Okta SSO Login

> **Info:** **SSO** feature **requires a whitelist for activation** and is intended for enterprise clients.


> **Note:**
>
> To activate this feature, please get in touch with the relevant sales representative or customer success manager (<sales@d5techs.com>), and provide the team owner's account.&#x20;

## Prerequisites

* An account with **Okta administrator privileges** is required.



* In **Directory** → **Groups**, create the following **three groups** (names must match exactly):
  * `d5-superAdmin`
  * `d5-admin`
  * `d5-member`

User roles within the team will be assigned based on the group they belong to.





***

## Configure SAML in Okta

1. Go to **Applications** → **Applications** and create a new application.



2. Select **SAML 2.0** as the sign-in method.



3. Enter the **Application Name**, check **“Do not display application icon to users”**, then click **Next**.



4. Copy the **URL** and **Entity ID** from the D5-Myspace admin backend and paste them into the corresponding SAML configuration fields in Okta.

* **Name ID format:** `EmailAddress`
* **Application username:** `Okta username`







5. Click **Next**, then click **Finish** on the feedback page.



***

## **Okta → D5-Myspace Team Management Backend**

1. Open the application’s **Sign On** page in Okta.



2. Click **Copy**, open a new browser tab, paste the URL, and visit it.Right-click the page and save it as `metadata.xml`.



3. Upload `metadata.xml` to the **D5-Myspace Team Management Backend**.



***

## Configure SCIM in Okta

1. Go to **General** → **Edit**.



2. Under **Provisioning**, select **SCIM** and click **Save**.



#### Provisioning Settings

In **Provisioning** → **Edit**, update the following settings and save:



* **SCIM connector base URL**\
  Copy from:\
  `D5-Myspace Team Admin → SSO & Provisioning → Provisioning Management → SCIM Endpoint`



* **Unique identifier field for users**\
  `userName`
* **Supported provisioning actions**\
  Enable the **first four options**



* **Authentication Mode**\
  `HTTP Header`
* **Authorization**\
  Copy the **Access Token** from:\
  `D5-Myspace Team Admin → SSO & Provisioning → Provisioning Management`
* To App\
  Click **Edit**, enable the **first three options**, and save.



* **D5-SSO Attribute Mappings**\
  Keep only the required mappings and delete the rest.



#### Push Groups

* Go to Push Groups and add the following three groups:
  * `d5-superAdmin`
  * `d5-admin`
  * `d5-member`







#### Assignments

* Go to **Assignments** and add the users who will log in via SSO.









***

## D5-Myspace SSO Configuration

#### Access Control

* The configuration page is visible **only if**:
  * The team is on the **whitelist**, and
  * The logged-in user is the **team owner** or a **super admin**
  * SSO is **disabled by default**.



#### Whitelist Behavior

* If **SSO & SCIM** are enabled and the team is removed from the whitelist:
  * All SSO & SCIM settings are automatically disabled.
* After re-adding the team to the whitelist:
  * Users must **manually re-enable SSO & SCIM**.





#### Configuration Options Explained

* **Identity Provider**
  * `Microsoft Entra` (default)
  * `Okta`
* **SSO Protocol**
  * Currently supports **SAML only**
* **Login Method**
  * `SSO + Username/Password` (default)
  * `SSO Only`
* **Domain**
  * Required
  * Leading/trailing spaces are trimmed
  * Domain format validation enabled
  * Max length: 128 characters
  * Domain is saved immediately; domain list may be empty



#### Service Provider (SP) Information

* These values are **fixed**
* Users must manually copy them into the corresponding fields in Okta





#### Identity Provider (IdP) Information

* Upload the `metadata.xml` exported from Okta
* The system will parse it and automatically extract the **IdP Login URL**



***

## D5-Myspace SCIM Configuration

After SAML is successfully configured:

1. Enable **Provisioning Management** in the D5-Myspace team admin.
2. The system automatically generates:
   * **SCIM Endpoint**
   * **Access Token**
3. Copy both values into Okta to complete the integration.





***

## SSO Login Logic & Role Assignment

#### Account Creation

* If the user does **not exist** in D5:
  * Create the account and add it to the team
* If the user **already exists**:
  * Add directly to the team

#### Role Mapping Rules

* No Okta group assigned → role = **Member**
* Assigned to `d5-superAdmin`
  * If no super admin exists → role = **Super Admin**
  * If one already exists → role = **Member**
* Assigned to `d5-admin` → role = **Admin**
* Assigned to `d5-member` → role = **Member**
* Assigned to multiple groups → role = **Member**
* Owner’s role never changes, regardless of group
* Removing a user in Okta → SSO login fails; D5 data unchanged
* Changing Okta group → role does **not** change on SSO login
* Seat limit reached → SSO login fails until seats are increased

### Web Login



#### Enabled SSO

* MySpace validates:
  * Email format
  * Email domain
* Email validity is handled by Okta

  Login methods:

  `SSO + Username/Password`\ <br>

  * Password, phone, WeChat, Gmail logins still work

  `SSO Only`

  * Personal login still works
  * Switching to **Team identity** shows an error
  * Owner is **not affected**

  `Disabled SSO`<br>

  * Login fails with error: **“SSO-SAML is disabled”**

### Client Login (D5 Render)

1. Enter company email and click **Next**
2. After Okta authentication:
   * Redirect to an intermediate page
   * Click **Open D5 Render**
3. Login completes successfully

Edge cases:

* Empty input → **Next** button disabled
* Unconfigured domain → “SSO login is not configured for this account”
* “Management only” accounts:
  * SSO succeeds
  * User cannot access Showreel features
  * Token is cleared → appears logged out in client

### SCIM Synchronization

* Triggered by events
* Sync completes within **\~5 minutes**

#### SCIM Scenarios

**Assignments changes**

* Removing a user in Okta → user removed from D5 team (except owner)
* Assigning user:
  * No group → Member
  * With group → role based on group
  * Existing admin → role unchanged unless overridden by group

**Group changes**

* Removed from all groups → role becomes Member
* Changed to `d5-superAdmin`
  * If no super admin exists → Super Admin
  * Otherwise → role unchanged
* Multiple groups → role determined by **last added group**
* Owner role never changes

#### SCIM Restrictions

When SCIM is enabled:

* Disable in D5 backend:
  * Manual role changes
  * Account attribute changes
  * Invite to team
  * Remove from team
* ****Same restrictions apply in Group Management****

#### Seat Limit

* If seats are full:
  * SCIM sync fails in Okta



* After adding seats:
  * Admin must remove failed users from **Assignments**
  * Re-add them to trigger sync again




---
