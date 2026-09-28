---
title: "Currency totals look different - Rasmerk Help Center"
description: "Why currency totals in Rasmerk may differ from expected — historical exchange rates and multi-currency behavior."
keywords: "Rasmerk, currency total, different, exchange rate, multi-currency"
deep_link: "rasmerk://help/currency-totals-look-different"
---

# Currency totals look different

## Historical exchange rates

Each transaction in Rasmerk saves the **exchange rate at the time of recording**. If you look at an old transaction today, it shows the value at the original rate — not today's rate.

**Example:** You spent $100 when USD = ₹83.5 → record shows ₹8,350. Today USD = ₹86, but the record still shows ₹8,350.

This is correct and intentional — your actual cost at the time was ₹8,350.

## Multi-currency account totals

If you have accounts in different currencies, the total balance on the dashboard converts everything to your **base (display) currency** using the saved rates. If you updated exchange rates recently, old transactions use their original rate; new ones use the updated rate.

## Inconsistent rate expectations

If the total seems off:
1. Check **Settings → Currencies** to see the current saved rates.
2. Compare with the rate on old transactions (open any transaction to see its saved rate).

## Multi-currency requires Premium

If you are not on Premium, multi-currency is not active and all accounts may be treated as the same currency.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why do my currency totals look wrong in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Each transaction saves the exchange rate at the time of recording. Old transactions always show the historical value, not today's rate. Multi-currency requires Premium."
    }
  }]
}
</script>
