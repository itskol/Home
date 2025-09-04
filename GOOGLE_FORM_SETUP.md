# Google Form Setup Guide for IT Tech Solution

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form"
3. Title: "IT Tech Solution - Service Booking"
4. Description: "Book your IT service with us. We'll contact you within 24 hours."

## Step 2: Add Form Fields

Add these fields in order:

### 1. Customer Name (Required)
- Type: Short answer
- Question: "Full Name *"
- Required: Yes

### 2. Phone Number (Required)
- Type: Short answer
- Question: "Phone Number *"
- Required: Yes
- Validation: Regular expression: `^[\+]?[0-9\s\-\(\)]{10,15}$`

### 3. Email Address (Required)
- Type: Short answer
- Question: "Email Address *"
- Required: Yes
- Validation: Email

### 4. Service Type (Required)
- Type: Multiple choice
- Question: "Select Service Type *"
- Options:
  - Laptop & Desktop Repairs
  - Computer Parts & OS Upgrades
  - Custom PC Builds
  - Hardware & Software Installations
  - Data Backup & Recovery
  - Virus & Spyware Removal
  - Home & Office Networking
  - CCTV Camera Installation
  - Biometric System Setup
  - Cloud Networking Solutions
  - Remote Desktop Setup
  - Printer Setup & Services
  - Other (please specify)

### 5. Problem Description
- Type: Paragraph
- Question: "Describe your problem or service requirement"
- Required: Yes

### 6. Preferred Date
- Type: Date
- Question: "Preferred Service Date"
- Required: No

### 7. Preferred Time
- Type: Multiple choice
- Question: "Preferred Time Slot"
- Options:
  - Morning (9 AM - 12 PM)
  - Afternoon (12 PM - 4 PM)
  - Evening (4 PM - 8 PM)
  - Flexible

### 8. Service Location
- Type: Multiple choice
- Question: "Service Location"
- Options:
  - On-site (Customer Location)
  - Remote Support
  - Office Visit (Howrah)

### 9. Address (if on-site)
- Type: Paragraph
- Question: "Complete Address (Required for on-site service)"
- Required: No

### 10. Additional Notes
- Type: Paragraph
- Question: "Any additional information or special requirements"
- Required: No

## Step 3: Configure Form Settings

1. Click Settings (gear icon)
2. **General Tab:**
   - ✅ Collect email addresses
   - ✅ Limit to 1 response per person
   - ✅ Edit after submit

3. **Presentation Tab:**
   - ✅ Show progress bar
   - ✅ Shuffle question order: OFF
   - Confirmation message: "Thank you for booking with IT Tech Solution! We will contact you within 24 hours to confirm your service appointment."

## Step 4: Link to Google Sheets

1. Click "Responses" tab
2. Click the Google Sheets icon
3. Choose "Create a new spreadsheet"
4. Name it: "IT Tech Solution - Service Bookings"

## Step 5: Get Embed Code

1. Click "Send" button
2. Click the embed icon (`<>`)
3. Set width: 640
4. Set height: 800
5. Copy the iframe code

## Step 6: Update Website

Replace the iframe src in your HTML file with the new Google Form URL.

## Step 7: Set up Email Notifications (Optional)

1. In Google Sheets, go to Extensions > Apps Script
2. Add this code for email notifications:

```javascript
function onFormSubmit(e) {
  var sheet = e.source.getActiveSheet();
  var row = e.range.getRow();
  
  // Get form data
  var name = sheet.getRange(row, 2).getValue();
  var phone = sheet.getRange(row, 3).getValue();
  var email = sheet.getRange(row, 4).getValue();
  var service = sheet.getRange(row, 5).getValue();
  
  // Send email notification
  var subject = "New Service Booking - " + name;
  var body = "New service booking received:\n\n" +
             "Name: " + name + "\n" +
             "Phone: " + phone + "\n" +
             "Email: " + email + "\n" +
             "Service: " + service + "\n\n" +
             "Check the full details in Google Sheets.";
  
  MailApp.sendEmail("ittechsolutioncare@gmail.com", subject, body);
}
```

3. Save and set up trigger:
   - Click "Triggers" (clock icon)
   - Add trigger: onFormSubmit, From spreadsheet, On form submit

## Important Notes:

- The Google Form will automatically save all responses to the connected Google Sheet
- You can view, filter, and export responses from Google Sheets
- Set up email notifications to get instant alerts for new bookings
- The form is mobile-responsive and works on all devices
- Data is automatically timestamped and organized

## After Setup:

1. Test the form thoroughly
2. Update the iframe src in your website's HTML
3. Test the modal popup functionality
4. Verify data is being saved to Google Sheets
