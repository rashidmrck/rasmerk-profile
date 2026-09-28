---
title: "Using multiple currencies offline - Rasmerk Help Center"
description: "Rasmerk supports multiple currencies offline using exchange rate snapshots saved at the time of each transaction."
keywords: "Rasmerk, multi-currency, offline, exchange rate, snapshot"
deep_link: "rasmerk://help/using-multiple-currencies-offline"
---

# Using multiple currencies offline

Rasmerk supports multiple currencies without requiring an internet connection.

## How it works

When you add a transaction in a foreign currency, Rasmerk saves the **exchange rate at that moment**. This snapshot is stored with the transaction permanently.

## Requirements

Multi-currency is a **Premium** feature.

## Historical rates never change

Old transactions always show the value at the time they were recorded. If USD/INR was 83.5 when you made a purchase, it will always show at 83.5 — even if the rate changes later.

## Setting exchange rates manually

Go to **Settings → Currencies** to view and edit exchange rates for any currency pair. This is useful for offline travel when you have no internet access.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does multi-currency work offline in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Rasmerk saves the exchange rate as a snapshot with each transaction. Historical transactions never change value. You can edit rates manually in Settings → Currencies. Multi-currency requires Premium."
    }
  }]
}
</script>
