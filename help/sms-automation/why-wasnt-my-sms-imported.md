---
title: "Why wasn't my SMS imported? - Rasmerk Help Center"
description: "Common reasons why a bank SMS was not auto-imported in Rasmerk, including unsupported senders, permissions, and battery optimization."
keywords: "Rasmerk, SMS not imported, why, missing, bank"
deep_link: "rasmerk://help/why-wasnt-my-sms-imported"
---

# Why wasn't my SMS imported?

## Common reasons

### 1. SMS permission not granted
Go to **Android Settings → Apps → Rasmerk → Permissions → SMS** and enable it.

### 2. Battery optimization enabled
Android may kill Rasmerk's background process. Go to **Android Settings → Apps → Rasmerk → Battery → Unrestricted**.

### 3. Sender not supported
Rasmerk recognizes patterns for major Indian banks and UPI apps. If your bank sender ID is not recognized, the SMS is placed in the **Needs Review** queue instead of being auto-categorized.

### 4. SMS is promotional or informational
Rasmerk blocks messages that match promotional, OTP, or non-transaction patterns. Balance alerts without a transaction keyword are skipped.

### 5. Premium not active
Background auto-sync requires Premium. On the free plan, you get 20 manual imports per month.

### 6. SMS older than start date
Rasmerk only imports SMS received after the **start date** you configured in Settings → SMS Import.

### 7. Already imported
The SMS may already exist in your **Needs Review** or pending transactions. Check those lists.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why is my bank SMS not being imported in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Check: SMS permission granted, battery optimization disabled, Premium active, sender is supported, SMS is within the configured start date, and the message is not promotional or an OTP."
    }
  }]
}
</script>
