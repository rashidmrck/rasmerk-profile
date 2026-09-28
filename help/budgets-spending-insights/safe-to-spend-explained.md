---
title: "Safe to Spend explained - Rasmerk Help Center"
description: "Safe to Spend is how much you can spend per day and still stay within budget. Calculated from remaining budget divided by days left."
keywords: "Rasmerk, safe to spend, daily budget, remaining"
deep_link: "rasmerk://help/safe-to-spend-explained"
---

# Safe to Spend explained

**Safe to Spend** is how much you can spend per day and still finish the month within your budgets.

## Formula

```
Safe to Spend per day = Remaining budget ÷ Days left in month
```

If you have ₹3,000 remaining and 10 days left → Safe to Spend = **₹300/day**.

## Rules

- When a budget is already exceeded, Safe to Spend for that budget = **₹0** (never goes negative).
- Safe to Spend on the Dashboard sums across all non-exceeded budgets.

## Burn Rate

Rasmerk also shows a **Burn Rate** indicator:

| Burn Rate | Meaning |
|---|---|
| Safe | Spending ≤ 80% of expected pace |
| Moderate | 80–100% of expected pace |
| Fast | 100–130% of expected pace |
| Critical | >130% of pace, or budget exceeded |

Expected pace = `budget × (days elapsed ÷ total days in month)`.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Safe to Spend in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Safe to Spend is your remaining budget divided by the number of days left in the month. It shows how much you can spend per day without exceeding your budget."
    }
  }]
}
</script>
