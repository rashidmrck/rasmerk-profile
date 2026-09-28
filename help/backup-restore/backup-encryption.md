---
title: "Backup encryption - Rasmerk Help Center"
description: "Rasmerk backup files are encrypted before upload to Google Drive. Your financial data is protected."
keywords: "Rasmerk, backup encryption, secure, mmbk, Drive"
deep_link: "rasmerk://help/backup-encryption"
---

# Backup encryption

Rasmerk encrypts your backup file before uploading to Google Drive.

## What is encrypted

The entire `.mmbk` backup file is encrypted. This includes:
- All transactions
- All accounts and balances
- All categories, budgets, friends, and loans
- Settings

## Why this matters

Even if someone gained access to your Google Drive, they cannot read your financial data without the encryption key. The key is generated from your device.

## File format

Backup files use the `.mmbk` extension. They are binary encrypted files and cannot be opened with a text editor or spreadsheet app.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Is the Rasmerk Google Drive backup encrypted?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. The entire .mmbk backup file is encrypted before upload. Your financial data cannot be read even if someone accesses your Drive."
    }
  }]
}
</script>
