---
title: "Historical vs Live conversion - Rasmerk Help Center"
description: "Rasmerk saves exchange rates with each transaction. Old transactions never change value when rates change."
keywords: "Rasmerk, historical rate, live conversion, exchange rate"
deep_link: "rasmerk://help/historical-vs-live-conversion"
---

# Historical vs Live conversion

## Historical rate (how Rasmerk works)

When you record a transaction, Rasmerk saves the exchange rate **at that exact moment** alongside the transaction. This rate is frozen permanently.

**Advantage:** Your records are accurate and auditable. A purchase made at USD 1 = ₹83.5 will always show ₹83.5 — not the rate today.

## Why this matters

If you bought something for $100 when the rate was ₹83.5, it was ₹8,350. Two months later, the rate is ₹86. Rasmerk still shows ₹8,350 — not ₹8,600 — because that was the actual cost.

## Live conversion

Rasmerk does not automatically fetch live exchange rates. Rates must be set manually or are carried forward from the last-saved rate. Multi-currency is a **Premium** feature.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Does Rasmerk update old transaction amounts when exchange rates change?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Each transaction saves the exchange rate at the time it was recorded. Historical transactions never change value when rates change later."
    }
  }]
}
</script>
