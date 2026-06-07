---
title: "Okta SSO Login"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/single-sign-on-sso/okta-sso-login
fetched: 2026-06-07
---

# Okta SSO Login

> **Info:** **SSO** feature <mark style="background-color:yellow;">requires a whitelist for activation</mark> and is intended for enterprise clients.


> **Note:**
>
> To activate this feature, please get in touch with the relevant sales representative or customer success manager (<sales@d5techs.com>), and provide the team owner's account.&#x20;

## Prerequisites

* An account with **Okta administrator privileges** is required.

<figure><img src="/files/wih0MHr2NYEbSEW49JhD" alt=""><figcaption></figcaption></figure>

* In **Directory** → **Groups**, create the following **three groups** (names must match exactly):
  * `d5-superAdmin`
  * `d5-admin`
  * `d5-member`

User roles within the team will be assigned based on the group they belong to.

<figure><img src="/files/59ELahvpIKZsH6C1Wl6n" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/cDyIIaWczzxzpcuX22dX" alt=""><figcaption></figcaption></figure>

***

## Configure SAML in Okta

1. Go to **Applications** → **Applications** and create a new application.

<figure><img src="/files/NFMSxqE43F7AyeLANoow" alt=""><figcaption></figcaption></figure>

2. Select **SAML 2.0** as the sign-in method.

<figure><img src="/files/V9z0xnJBYljiS59tVC7i" alt=""><figcaption></figcaption></figure>

3. Enter the **Application Name**, check **“Do not display application icon to users”**, then click **Next**.

<figure><img src="/files/ik0kdSnGkYHuMf4oAVy0" alt=""><figcaption></figcaption></figure>

4. Copy the **URL** and **Entity ID** from the D5-Myspace admin backend and paste them into the corresponding SAML configuration fields in Okta.

* **Name ID format:** `EmailAddress`
* **Application username:** `Okta username`

<figure><img src="/files/QmlRMLNgKUbrx2mIbeUO" alt=""><figcaption><p>D5-Myspace-TeamDashboard</p></figcaption></figure>

<figure><img src="/files/igrmx2Y4N268liU1rAMb" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/VJL2LYPaDD0PwErfTT2e" alt=""><figcaption><p>Okta</p></figcaption></figure>

5. Click **Next**, then click **Finish** on the feedback page.

<figure><img src="/files/yjRKkmnEa7iviwaZEPIo" alt=""><figcaption></figcaption></figure>

***

## **Okta → D5-Myspace Team Management Backend**

1. Open the application’s **Sign On** page in Okta.

<figure><img src="/files/ufTcX9GyB4e2kaMYWCMT" alt=""><figcaption></figcaption></figure>

2. Click **Copy**, open a new browser tab, paste the URL, and visit it.Right-click the page and save it as `metadata.xml`.

<figure><img src="/files/Gh3YRvTG61yvTt4gSqlr" alt=""><figcaption></figcaption></figure>

3. Upload `metadata.xml` to the **D5-Myspace Team Management Backend**.

<figure><img src="/files/tGqi5iYdqSZwJqaRskGe" alt=""><figcaption></figcaption></figure>

***

## Configure SCIM in Okta

1. Go to **General** → **Edit**.

<figure><img src="/files/dWtdo3Fs4AdBPuggZk1B" alt=""><figcaption></figcaption></figure>

2. Under **Provisioning**, select **SCIM** and click **Save**.

<figure><img src="/files/dhwqgggW32J2GxieQkf4" alt=""><figcaption></figcaption></figure>

#### Provisioning Settings

In **Provisioning** → **Edit**, update the following settings and save:

<figure><img src="/files/3lhb4fJNeVNbgasGB0XI" alt=""><figcaption></figcaption></figure>

* **SCIM connector base URL**\
  Copy from:\
  `D5-Myspace Team Admin → SSO & Provisioning → Provisioning Management → SCIM Endpoint`

<figure><img src="/files/wAgqb3703irk4ytBoC9W" alt=""><figcaption></figcaption></figure>

* **Unique identifier field for users**\
  `userName`
* **Supported provisioning actions**\
  Enable the **first four options**

<figure><img src="/files/n7wvLVjuDSmoykKFc40O" alt=""><figcaption></figcaption></figure>

* **Authentication Mode**\
  `HTTP Header`
* **Authorization**\
  Copy the **Access Token** from:\
  `D5-Myspace Team Admin → SSO & Provisioning → Provisioning Management`
* To App\
  Click **Edit**, enable the **first three options**, and save.

<figure><img src="/files/cCZxoy8sF7L5UY6ZaU30" alt=""><figcaption></figcaption></figure>

* **D5-SSO Attribute Mappings**\
  Keep only the required mappings and delete the rest.

<figure><img src="/files/BEaOr6D1F17kqg0aivKf" alt=""><figcaption></figcaption></figure>

#### Push Groups

* Go to Push Groups and add the following three groups:
  * `d5-superAdmin`
  * `d5-admin`
  * `d5-member`

<figure><img src="/files/sqJmudkdVR5HkoVvIlsm" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/uZkIGqBwQ9jyUfZmEj9p" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/vDayfowoAjs5aRoEuUEo" alt=""><figcaption></figcaption></figure>

#### Assignments

* Go to **Assignments** and add the users who will log in via SSO.

<figure><img src="/files/zdR2EcRQprLChjNrInEX" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/th7x7reJbCmGLNaq886V" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/3kYDT1lR5zgbY4VfVdrC" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/4keG4X4AOqTLRixbOooQ" alt=""><figcaption></figcaption></figure>

***

## D5-Myspace SSO Configuration

#### Access Control

* The configuration page is visible **only if**:
  * The team is on the **whitelist**, and
  * The logged-in user is the **team owner** or a **super admin**
  * SSO is **disabled by default**.

<figure><img src="/files/dEcIIRyzr2WEXfz2WbBg" alt=""><figcaption></figcaption></figure>

#### Whitelist Behavior

* If **SSO & SCIM** are enabled and the team is removed from the whitelist:
  * All SSO & SCIM settings are automatically disabled.
* After re-adding the team to the whitelist:
  * Users must **manually re-enable SSO & SCIM**.

<figure><img src="/files/qJLL63qntMdspVHLkffl" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/kDR10FyKWRry5ogpGPfc" alt=""><figcaption></figcaption></figure>

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

<figure><img src="/files/MZ3vO5CCh614MerV9ZKU" alt=""><figcaption></figcaption></figure>

#### Service Provider (SP) Information

* These values are **fixed**
* Users must manually copy them into the corresponding fields in Okta

<figure><img src="/files/8jnA4WkL4SkGdRrkRtEQ" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/yERFftGj3lUJkxtE3mPc" alt=""><figcaption></figcaption></figure>

#### Identity Provider (IdP) Information

* Upload the `metadata.xml` exported from Okta
* The system will parse it and automatically extract the **IdP Login URL**

<figure><img src="/files/E1qemppklQQnKwSLTK9T" alt=""><figcaption></figcaption></figure>

***

## D5-Myspace SCIM Configuration

After SAML is successfully configured:

1. Enable **Provisioning Management** in the D5-Myspace team admin.
2. The system automatically generates:
   * **SCIM Endpoint**
   * **Access Token**
3. Copy both values into Okta to complete the integration.

<figure><img src="/files/p82WkDeacSWoLEag8aYx" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/bwGRCYzh2zXHbWZpsuIT" alt=""><figcaption></figcaption></figure>

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

<figure><img src="/files/m2faqyDIG91AKViaQbiX" alt=""><figcaption></figcaption></figure>

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
* <mark style="color:red;">**Same restrictions apply in Group Management**</mark>

#### Seat Limit

* If seats are full:
  * SCIM sync fails in Okta

<figure><img src="/files/dhM2zKpjJ7hbWYLIiCLq" alt=""><figcaption></figcaption></figure>

* After adding seats:
  * Admin must remove failed users from **Assignments**
  * Re-add them to trigger sync again

<figure><img src="/files/H3TdXKI7z0Zsy2rZT9ey" alt=""><figcaption></figcaption></figure>


---
