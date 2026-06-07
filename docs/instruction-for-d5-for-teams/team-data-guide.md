---
title: "Team Data Guide"
source_url: https://docs.d5render.com/instruction-for-d5-for-teams/team-data-guide
fetched: 2026-06-07
---

# Team Data Guide

### Overview

**D5 Team Data** is a visualization tool designed for team administrators. It provides a comprehensive analysis of how team members utilize D5 products, tracking key metrics such as activity levels, rendered outputs, advanced feature usage, and cumulative seat time.

> **Warning:** **Note:** Data update is subject to **a two-day delay**. For example, today’s view includes data only up to yesterday.




### Access

> As of **March 2026**, the Team Data Dashboard has been migrated from the **Team Management Backend** to **MySpace**.

To access it:

1. Sign in to MySpace using an **Owner**, **Super Admin**, or **Administrator** account. **(Ignoring the role within his/her group)**
2. Click "Team Data" in the left sidebar.
3. The dashboard will load automatically, displaying the last **30 days** of usage data by default.

***

### Key Metrics

The top section features metric cards and corresponding bar charts. Each card displays the total value and daily average for your selected timeframe.



#### Time Range and Granularity

Controls at the top of the metrics area allow you to filter the data. These settings apply to the four primary charts below.

**Time Range:** Select a custom period or use a preset:

* **Last 7 Days:** For recent activity snapshots.
* **Last 30 Days (Default):** Ideal for monthly reporting.
* **Last 365 Days:** For annual performance overviews.

> **Warning:** Note: To ensure data integrity, the earliest date currently available is January 1, 2025.


**Time Granularity:** Adjust the bar chart aggregation:

* **By Day (Default):** e.g., 9/5.
* **By Week:** e.g., 9/5–9/12.
* **By Month:** e.g., 2026/1.
* **By Year:** e.g., 2026.

All time intervals are divided by calendar dates. For instance, selecting July 15 to August 15 with a monthly granularity will generate two bars: one for July 15–31 and another for August 1–15.

#### 1. Active Members

**Calculation Content:** The number of unique team members who used a D5 product during the selected period.

**Calculation Rules:**

* A member is "active" if they trigger an event in D5 Render, D5 Lite, or D5 Launcher.
* Each member is counted only once regardless of frequency.
* The total reflects a **unique** headcount; each member is recorded only once per period, regardless of their activity frequency.
* Format: Displayed as "Active Users / Total Seats" (e.g., 42/100).

**Bar chart:** Each bar illustrates the unique active member count for each corresponding interval.

***

#### 2. Deliverables

**Calculation Content:** This section tracks the cumulative volume of content rendered by the team within the selected timeframe, including images, videos, tours, and showreel uploads.

**Detailed Breakdown:**

* **Rendered Images:** Total images processed via the D5 client (note: currently excludes D5 Lite renders).
* **Rendered Videos:** Total video files exported through the D5 client.
* **Rendered Tours:** Total spatial and XR walkthrough scenes generated via the client.
* **Showreel:** Total projects uploaded to the Showreel platform, encompassing direct panoramas as well as spatial/XR walkthroughs uploaded from the client.

**Bar Chart:** A stacked bar chart utilizes four distinct colors to categorize data across images, videos, tours, and Showreel uploads. Users can hover over any individual bar to view a granular breakdown of each category.

***

#### 3. Advanced Features

**Calculation Content:** The total volume of paid/advanced feature activations recorded during the selected period.

**Category Breakdown:**

The current advanced features are listed below; data for additional advanced features will be added in the future.

| Category       | Features included                                                                                                                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AI             | AI Enhancer, AI Style Transfer, AI Inpainting, Saving images from Effect, Motion Blur, Text to 3D, Image to 3D, AI Material Snap, AI Atmosphere Match, AI SmartPlanting, Ultra HD Texture, Al-generated texture maps, Make Seamless, etx. (Currently excludes AI usage data from D5 Lite.) |
| Studio         | Use presets in Studio                                                                                                                                                                                                                                                                      |
| Assets Library | Downloading and using Pro assets in the D5 Asset Library; downloading and using Pro assets in Works                                                                                                                                                                                        |
| Others         | City (OSM), Cesium import                                                                                                                                                                                                                                                                  |

**Bar Chart:** A stacked bar chart utilizes four distinct colors to categorize data across AI, Studio, Assets Library, and Others. Users can hover over any individual bar to view a granular breakdown of each category.

***

#### 4. Usage Duration

**Calculation Content:** the total cumulative time all team members spent actively using the D5 client during the specified timeframe.

**Calculation Rules:**

* The system logs usage duration in 10-minute intervals once a project is opened within the client.
* The total figure reflects the aggregate sum of usage time across all individual team members.
* Display the daily average at the same time.

***

### Activity Heatmap

Below the key metrics, an activity heatmap provides an at-a-glance overview of your team’s daily activity throughout the year.



#### 1. How to Read the Heatmap

* **Horizontal Axis (X-axis):** Represents each week of the year. The labels at the top indicate the month and correspond to the first week of that month.
* **Vertical Axis (Y-axis):** Represents the days of the week, from Monday (top) to Sunday (bottom).
* **Daily Blocks:** Each small square represents a single day, with color intensity indicating activity levels.

#### 2. Data Type Switch

Use the toggle button on the right to switch between three data views:

1. **Usage Duration** — Cumulative daily usage time by the team.
2. **Render Output** — Number of rendered works per day.
3. **Projects Created** — Number of new projects created daily.

The left side displays the total values for the corresponding data for the current year.

#### 3. Year Selection

Displays all available years in descending order; click to switch and view data for the corresponding year. The most recent year is selected by default.

#### 4. Color Scale Explanation (5 Levels)

The heatmap uses the quartile method to sort all non-zero data for the given year and assign color tiers:

| Level   | Color       | Definition                    |
| ------- | ----------- | ----------------------------- |
| Level 0 | Grey        | No activity (value is 0)      |
| Level 1 | Light color | The bottom 25% of active days |
| Level 2 | Medium      | Active days in the 25% - 50%  |
| Level 3 | Deeper      | Active days in the 50% - 75%  |
| Level 4 | The deepest | Top 25% of active days        |

Hover your cursor over any small block to view the specific data for that day.

***

### Employee Data Table

> **Warning:** **Note:**

Access to this section is restricted to **whitelisted** teams. Please contact the CSM team (<sales@d5techs.com>) if you need to enable it.


Administrators can review individual performance metrics via the detailed member data table provided at the bottom of the dashboard.



#### Table Field Descriptions

| Field    | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| Member   | Team member's name and profile picture                            |
| Active   | Date the member last used D5                                      |
| Time     | Total usage time during the selected time period                  |
| Project  | Number of client projects created during the selected time period |
| Image    | Number of images rendered                                         |
| Video    | Number of videos rendered                                         |
| Tour     | Number of spatial and XR Tours rendered                           |
| Showreel | Number of projects uploaded to Showreel                           |
| AI       | Number of times AI features used                                  |
| Studio   | Number of times Studio presets used                               |
| Assets   | Number of times Pro assets downloaded/used                        |
| Others   | Number of times other advanced features used                      |

#### Table Features

* **Sorting:** Click any column header (except the "Member" column) to toggle between ascending and descending order. By default, data is sorted in descending order by "Last Active".
* **Filtering:** Toggle between viewing "Current Team Members" (default) or "All Members," which includes removed members. Removed members are displayed in gray.
* **Pagination:** Data for large teams is automatically paginated for optimized viewing.
* **Export:** Supports exporting data to XLSX or CSV formats.
  * **File Naming Format:** `Team_Analytics_Start_Date_End_Date` (e.g., `Team_Analytics_2025-06-06_2026-05-05`).
  * **Data Structure:** Exported files include headers for all data fields.

***

### FAQs

* **Why is there a data delay?**

Processing large datasets requires time; all metrics are delayed by 48 hours(2 days).

* **What is the time range of the available data?**

To ensure data integrity, the earliest date currently available is January 1, 2025.

* **Who can access Team Dashboard?**

Owners, Super Admins and Admins in Team plans. Note: The Employee report is an exclusive feature of **D5 for Teams**.


---
