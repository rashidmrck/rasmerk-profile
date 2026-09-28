---
title: "Budget alerts - Rasmerk Help Center"
description: "Rasmerk sends budget notifications at 80% and 100% of each budget limit, once per threshold per month."
keywords: "Rasmerk, budget alert, notification, 80%, 100%"
deep_link: "rasmerk://help/budget-alerts"
---

# Budget alerts

Rasmerk automatically sends notifications when you are approaching or have reached a budget limit.

## When alerts fire

| Threshold | Alert message |
|---|---|
| 80% consumed | "⚠️ {Category} — 80% Used. You've spent {X} of your {total} budget. {Y} remaining." |
| 100% reached | "🚨 {Category} Budget Reached. You've hit your {total} limit for {Month}." |
| Over budget | "🚨 {Category} Over Budget. You've spent {X} — {Z} over your {total} limit." |

## Deduplication

Each alert fires **at most once per threshold per month**. If you spend past 80% today and the notification fires, it will not fire again this month even if you add more expenses.

At the start of each calendar month, the alert history is reset so alerts can fire again for the new month.

## Enabling notifications

Make sure Rasmerk has notification permission enabled on your device. Go to **Android Settings → Apps → Rasmerk → Notifications** to check.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "When does Rasmerk send budget notifications?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Rasmerk sends budget alerts at 80% and 100% of each budget. Each alert fires once per threshold per month. The history resets at the start of each new month."
    }
  }]
}
</script>
