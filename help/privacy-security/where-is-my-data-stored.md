---
title: "Where is my data stored? - Rasmerk Help Center"
description: "Rasmerk stores all your financial data in a local SQLite database on your device. Nothing is sent to Rasmerk servers."
keywords: "Rasmerk, data storage, SQLite, local, offline, privacy"
deep_link: "rasmerk://help/where-is-my-data-stored"
---

# Where is my data stored?

All your financial data is stored in a **local SQLite database on your device**. Rasmerk does not have a cloud database. No financial data is sent to Rasmerk servers.

## What is stored locally

- All accounts, transactions, categories, budgets
- Friends, loans, and IOUs
- SMS import history (raw message body + parsed result)
- App Lock settings (in SharedPreferences on-device)
- Premium IAP status (in Android Keystore via FlutterSecureStorage)

## Optional cloud storage

If you enable **Google Drive Backup** (Premium), Rasmerk creates an encrypted `.mmbk` file and stores it in your **Drive App Data** folder. This folder is private — only Rasmerk can access it. It does not appear in your normal Drive file list.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Where does Rasmerk store my data?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All data is stored in a local SQLite database on your device. Nothing is sent to Rasmerk servers. Optional Google Drive Backup (Premium) stores an encrypted file in your private Drive App Data folder."
    }
  }]
}
</script>
