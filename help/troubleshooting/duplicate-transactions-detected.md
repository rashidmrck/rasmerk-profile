---
title: "Duplicate transactions detected - Rasmerk Help Center"
description: "What to do if Rasmerk shows a duplicate transaction warning and how deduplication works."
keywords: "Rasmerk, duplicate transaction, warning, deduplication"
deep_link: "rasmerk://help/duplicate-transactions-detected"
---

# Duplicate transactions detected

## Why duplicates are rare

Rasmerk uses two deduplication layers:
1. **SMS Message ID** — each SMS has a unique system ID that is recorded after import.
2. **Raw message body** — the full SMS text is checked against existing transactions.

## If you see a duplicate warning

Rasmerk shows a warning when it detects a transaction that closely matches an existing one. This can happen if:

- You manually added a transaction AND the same SMS was auto-imported.
- Two separate SMS from the same bank arrived at nearly the same time (e.g., debit alert + confirmation).

## What to do

1. Open both suspected duplicates.
2. Check the raw SMS body (if imported from SMS) — different bodies = different transactions.
3. Check the time — two transactions at the exact same amount but different timestamps are likely legitimate.
4. Delete the duplicate if confirmed.

## Clearing dedupe history

If you want to re-import SMS that was previously marked as imported, go to **Settings → SMS Import → Clear Import History**. Use with caution — this may create duplicates.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What should I do if Rasmerk shows a duplicate transaction?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Compare the raw SMS body and timestamps. Different bodies or timestamps = different transactions. Delete the duplicate if confirmed. Rasmerk uses SMS message ID + body matching to prevent duplicates automatically."
    }
  }]
}
</script>
