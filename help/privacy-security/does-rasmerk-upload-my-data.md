---
title: "Does Rasmerk upload my data? - Rasmerk Help Center"
description: "Rasmerk does not upload your financial transactions to any cloud database. Your data stays on your phone."
keywords: "Rasmerk, upload, cloud, server, privacy, data"
deep_link: "rasmerk://help/does-rasmerk-upload-my-data"
---

# Does Rasmerk upload my data?

**No.** Rasmerk does not upload your financial transactions, accounts, or personal data to any server.

## What Rasmerk does NOT send to servers

- Your transaction history
- Your account balances
- Your SMS messages
- Your receipt images or scanned text

## What Rasmerk does send (optional)

| Action | Data sent | To |
|---|---|---|
| Google Drive Backup (Premium) | Encrypted `.mmbk` backup file | Your own Google Drive |
| "Improve with AI" receipt scan | OCR text of the receipt only | Your configured AI (Gemini or Hugging Face) |
| Referral code | Your anonymous Firebase UID | Rasmerk Firebase (for reward tracking) |
| Analytics | Anonymous usage events | Firebase Analytics |

Rasmerk never receives your financial data. The AI receipt feature sends text to **your** configured API — Rasmerk does not relay or store it.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Does Rasmerk upload my financial data to the cloud?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Rasmerk does not upload financial transactions, account balances, or personal data to any cloud database. Google Drive Backup (Premium) is optional and encrypted."
    }
  }]
}
</script>
