---
title: "Restore didn't find backup - Rasmerk Help Center"
description: "What to do when Rasmerk cannot find your backup during restore."
keywords: "Rasmerk, restore not found, backup missing, same account"
deep_link: "rasmerk://help/restore-didnt-find-backup"
---

# Restore didn't find backup

## Most common cause: wrong Google account

Rasmerk stores the backup in the **App Data** folder of the Google account used when the backup was created. If you sign in with a different account on the new device, the backup is not found.

**Fix:** Sign in with the exact same Google account that was used on the old device.

## The backup was never created

Verify that a backup was successfully created before the old device was wiped. Backup requires Premium — if you were not on Premium at the time, no backup was made.

## Backup is old or missing

Rasmerk keeps the most recent backup. If the backup was overwritten or the Drive App Data was cleared, it may not be recoverable.

## Steps to try

1. Sign out and sign in again with the correct Google account.
2. Go to **Settings → Backup → Google Drive → Restore**.
3. If still not found, the backup may not exist in that account's Drive App Data.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why can't Rasmerk find my backup during restore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The backup is stored in the Google Drive App Data of the original account. Sign in with the same Google account used when the backup was created."
    }
  }]
}
</script>
