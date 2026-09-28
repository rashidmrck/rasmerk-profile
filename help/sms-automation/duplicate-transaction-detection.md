---
title: "Duplicate transaction detection - Rasmerk Help Center"
description: "Rasmerk uses SMS message ID and raw message body to prevent duplicate transactions from being imported."
keywords: "Rasmerk, duplicate, SMS, detection, import"
deep_link: "rasmerk://help/duplicate-transaction-detection"
---

# Duplicate transaction detection

Rasmerk uses two layers of deduplication to prevent the same SMS from creating multiple transactions.

## Layer 1: SMS Message ID

Each SMS has a unique system ID. Rasmerk records `(source, messageId)` in a local database table after import. If the same SMS ID is seen again, it is skipped.

## Layer 2: Raw message body match

Before importing, Rasmerk also checks if a transaction with the same raw SMS body already exists in your records. This catches cases where the same SMS was imported via manual import first, then auto-import runs.

## What this means for you

- The same bank SMS will never create duplicate transactions, even if you import manually and auto-import both run.
- If you see what looks like a duplicate, it is likely two separate SMS from the same bank (e.g., debit alert + balance alert), or two transactions at the exact same amount.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does Rasmerk detect duplicate SMS transactions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Rasmerk stores the SMS message ID after import. On the next sync, any SMS already recorded is skipped. A secondary check on the raw message body also prevents duplicates from manual + auto imports."
    }
  }]
}
</script>
