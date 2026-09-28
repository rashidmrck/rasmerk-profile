---
title: "Google Drive backup failed - Rasmerk Help Center"
description: "Troubleshooting steps when Rasmerk's Google Drive backup fails."
keywords: "Rasmerk, backup failed, Google Drive, troubleshoot"
deep_link: "rasmerk://help/google-drive-backup-failed"
---

# Google Drive backup failed

## Possible causes and fixes

### Not signed in to Google

Go to **Settings → Account** and sign in with your Google account.

### Insufficient Google Drive storage

Check your available Drive storage at [drive.google.com](https://drive.google.com). Free Google accounts have 15 GB. Rasmerk backups are small (usually under 10 MB), but if your Drive is full, backups fail.

### No internet connection

Google Drive backup requires an active internet connection. Connect to Wi-Fi or mobile data and try again.

### Premium not active

Google Drive backup requires **Premium**. Verify your Premium status in **Settings → Premium**.

### Permissions issue

On some Android versions, Rasmerk needs permission to access Google Drive. Re-sign in from **Settings → Account**.

## Manual backup after fixing

Go to **Settings → Backup → Google Drive → Back Up Now**.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why is my Rasmerk Google Drive backup failing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Check: Google account signed in, Drive storage not full, internet connection active, Premium subscription active. Re-sign in to Google if permissions fail."
    }
  }]
}
</script>
