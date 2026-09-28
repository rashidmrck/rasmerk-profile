---
title: "SMS not importing - Rasmerk Help Center"
description: "Step-by-step troubleshooting for when Rasmerk is not importing bank SMS automatically."
keywords: "Rasmerk, SMS not importing, troubleshoot, permission, battery"
deep_link: "rasmerk://help/sms-not-importing"
---

# SMS not importing

Follow these steps in order to fix SMS import issues.

## Step 1: Check SMS permission

Go to **Android Settings → Apps → Rasmerk → Permissions → SMS**.  
Ensure SMS is set to **Allow**.

## Step 2: Disable battery optimization

Go to **Android Settings → Apps → Rasmerk → Battery**.  
Set to **Unrestricted** (not Optimized or Restricted).

## Step 3: Confirm Premium is active

Background SMS sync requires **Premium**. Check **Settings → Premium** in the app.

## Step 4: Check the start date

Go to **Settings → SMS Import**. Verify the **Start Date** is set to a date before the SMS you expect to import.

## Step 5: Check if SMS is in Needs Review

Go to **Transactions → Needs Review**. Unrecognized SMS are stored there, not discarded.

## Step 6: Manual import test

Tap **Import Now** in Settings → SMS Import. If this works but auto-import does not, battery optimization is likely the cause.

## Still not working?

Contact support from **Settings → Help → Contact Us** with the exact bank name and SMS sender ID.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why is SMS not being imported automatically in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Check: SMS permission granted, battery optimization set to Unrestricted, Premium active, start date configured, and check the Needs Review queue for unrecognized messages."
    }
  }]
}
</script>
