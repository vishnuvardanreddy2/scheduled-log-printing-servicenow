# Scheduled Log Printing in ServiceNow

## Overview
This project involves automating the process of printing system logs in ServiceNow on a recurring schedule. Using ServiceNow's **Scheduled Jobs** and **Script Includes**, we can filter specific types of logs (e.g., error logs), format them, and either print them.

### Purpose
The primary goal of this project is to help ServiceNow administrators automate log monitoring, saving time and effort by printing logs regularly. The logs can be filtered based on specific criteria, such as log type, severity, and timestamp.

---

## Key Features
- **Scheduled Job**: Automates the log printing process on a recurring basis.
- **Filtering**: Filters logs by type, severity, and date range.
- **Formatting**: Formats logs in a readable structure (plain text).


---

## Components
1. **Script Include**: A reusable server-side class that fetches, filters, formats, and prints logs.
2. **Scheduled Job**: Configures the job to run the log printing process at defined intervals (e.g., daily at 12:00 AM).
3. **Optional Output Features**: Email notification or file attachment with the logs.

---

## Installation Steps

### Step 1: Define Requirements
1. **Log Type**: Error logs from the `sys_log` table.
2. **Filters**: Filters based on log type and date range.
3. **Schedule**: Daily at midnight.
4. **Output Format**: Plain text.

### Step 2: Create Script Include
Create a Script Include to filter and format logs based on the defined criteria.

### Step 3: Create Scheduled Job
Create a scheduled job to run the log printing process at the specified interval.

### Step 4: Testing
Test the job manually and ensure the logs are printed as expected.

---


# scheduled-log-printing-servicenow
Automated solution to print filtered system logs in ServiceNow on a scheduled basis
