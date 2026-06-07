---
title: "Team Group Management"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/how-to-create-and-manage-team-accounts/team-group-management
fetched: 2026-06-07
---

# Team Group Management

**⚠  This particular feature is designed for teams seeking to secure seat licenses en masse and manage several groups on a separate basis. If you need to activate this feature, please contact our staff at <sales@d5techs.com>.**

The activation of Group Management is recommended if your team has:

* Groups working at different places that cannot deploy the same Local Area Network (LAN) server address
* Groups responsible for individual projects that require prevention from cross-group visibility

For now, each team member has a team role such as Owner, Admin, or Member. When Group Management is enabled, members will have an additional group role.

* A group has its own group Admins and group Members.
* A team member can join multiple groups.
* A group has its individual D5 Studio space, project library, and asset library.

*\*A team member could have a team role and a group role at the same time.*

### Create a Group

The Owner of a team could see the 'Group Management' panel after logging into the team management board.&#x20;

Click on 'Create a Group' and fill in the necessary info to create a new group. Please note that only the team Owner could create or delete groups.

When a group is deleted, the following data stored in the D5 server would also be deleted:

1. The Studio space&#x20;
2. The group project library
3. The group asset library

*Please note that deleting a group won't remove members from the team, but only from the group.*

### How to Invite Group Members

The Team Owner will automatically join the group after it's created. The Team Owner could remove him/herself from the group as well. Whether in the group or not, the Team Owner has full control over all groups, including inviting/removing members and setting group roles.

There are two ways to invite a group member:

1. Inviting a team member into the group: The group admin or the Team Owner could directly add a  team member into a group, without requiring the member's confirmation.
2. Inviting a non-team member into the group: The group admin or the Team Owner could invite a person to join both the team and the group via link or email. The invited member has to confirm the invitation.

*Generally speaking, the total number of group members should not exceed the team's available seats. At present, we do not support specifying invitation quotas for specific groups.*

### Group Roles

The Team Owner could set one or more administrators for a group.

Please note that

1. When accepting an invitation from a group admin, the person will automatically join both the team and the group. However, when the invitation is from a team manager, the person will only join the team.
2. A team member could be a group admin and a team admin at the same time.&#x20;
3. The team space and the group space are separate from each other.

| Roles                             | Authority                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner                             | <ul><li>Creat groups</li><li>Delete groups</li><li>Set group roles</li><li>All the management authorities of Group Admin</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Group Admin                       | <ul><li>Visit the Team management board</li><li>Visit the 'Members' panel of the Team management board, but can't make any operations</li><li>Visit the 'Group Management' panel, which is only accessible to group admins and the Team Owner</li><li>Manage the group which the admin is appointed to</li></ul><p><strong>Group Member Management</strong></p><ul><li>Invite non-team members to join the team and the group</li><li>Invite team members to join the group</li><li>Remove members from the team and the group</li><li>Remove members only from the group</li></ul><p><br><strong>Group Resource Management</strong></p><p>Visit and manage </p><ul><li>Group library</li><li>Group Studio space</li><li>Group cloud projects</li></ul> |
| Super Group Admin (1 person only) | <p></p><p>The difference between Super Group Admin and Group Admin is:</p><p></p><ul><li>Super Group Admin can change 【Account Attributes (Editable, Manage-only)】 within Group</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Group Member                      | <p>Visit</p><ul><li>Group library</li><li>Group Studio space</li><li>Group cloud projects</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

The accessibility of different panels of the team management board is as follows:

<table data-full-width="true"><thead><tr><th width="126"> </th><th width="105">Members</th><th width="102">Group</th><th>Billing &#x26; Plans</th><th>Team Details</th><th>Team Library</th><th>Cloud Storage</th><th>Team Report</th></tr></thead><tbody><tr><td>Owner</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Team Member</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Team Admin</td><td>✅</td><td></td><td></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Group Member</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Group Admin</td><td></td><td>✅<br>(Only able to edit the info of the admin's own group)</td><td></td><td>✅<br>(Access to view team info; editing not permitted)</td><td>✅</td><td>✅</td><td></td></tr></tbody></table>

### How to Remove Group Members

There are two ways to remove group members.

1. Remove from the group only: The member is still in the team, but can't access the group.
2. Remove from the team: The member is removed from the team and all the groups.

### How to Access Group Resources in D5 Render

Group members will see all the groups they have joined after logging into the Team account in D5 at the welcome page. Group members have to select the group they need to access the corresponding group resources. Upon the next login, the previously selected group will be chosen by default.

*Please note that the Team Space is a default group available to every team member.*

### Group Management Mode

#### Group Management Mode Introduction

Based on the customer's requirements, teams with the group management feature enabled can select from two different group management modes:

* **Normal Mode(default):** A member can join multiple groups simultaneously, which is suitable for scenarios where a team has several projects with overlapping group members.
* **Independent Mode:** Each group needs to be assigned available seats, and the sum of the available seats for all groups must not exceed the total number of seats in the team; a member can only join a maximum of one group (except for members with the “Manage Only” attribute). Ideal for large companies managing multiple subsidiaries.

Difference between two modes:

<table><thead><tr><th width="89"></th><th>Normal Mode</th><th>Independent Mode</th></tr></thead><tbody><tr><td>1</td><td>Groups can have unlimited seats (as long as it doesn't exceed the number of team seats)</td><td>Each group must be assigned seat limit</td></tr><tr><td>2</td><td>The seat number for one group can't exceed the total seats for the team</td><td>The total number of seats for all groups can't exceed the total seats for the team</td></tr><tr><td>3</td><td>After limiting seats, the vacant seats in the group have no effect on the remaining available seats for the team</td><td>Vacant seats within each group also occupy team seats</td></tr><tr><td>4</td><td>A member can be in multiple groups</td><td>A member can only be in one distinct group (except for the 'Manage-only' attribute account)</td></tr></tbody></table>

#### **Group Management Mode Change**

1. The default mode for teams with group management feature is **Normal Mode**, team owners can change it in \[Team Management Backend - Groups - Change Group Management Mode].





2. In Independent Mode, each member can only belong to one group, and an appropriate number of seats must be allocated to each group. Before switching from Normal Mode to Independent Mode, the system verifies if the current group settings and group members meet these requirements. The switch will only proceed if the verification is successful.



3. If the verification fails, click the \[Manual Modify] button in the verification result pop-up window and follow the system prompts to sequentially adjust the settings that do not meet the requirements.

a. If a member belongs to multiple groups, you can choose which group to retain them in using the drop-down menu. Once the selection is made, the member will be removed from all other groups. (Members with the "Manage only" attribute are exempt from this restriction.)

b. When there are groups haven't been assigned seats or the total number of seats assigned to all groups exceeds the total seat number for the team, it can be adjusted directly in the pop-up window.

c. Once the above modifications are completed, the group management mode will be successfully switched to **Independent Mode**.





#### **Group Management under Independent Mode**

In Independent Mode, the group management page will be changed from **Card** to **List**, which is convenient for administrators to view the currently assigned seats and used seats of each group.




---
