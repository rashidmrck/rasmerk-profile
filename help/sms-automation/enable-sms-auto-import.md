---
title: "Enable SMS Auto Import - Rasmerk Help Center"
description: "How to enable SMS Auto Import in Rasmerk. Requires SMS permission, battery optimization exemption, and Premium."
keywords: "Rasmerk, SMS auto import, enable, permission, battery optimization"
deep_link: "rasmerk://help/enable-sms-auto-import"
---

# Enable SMS Auto Import

SMS Auto Import reads your bank and UPI messages and automatically creates transactions.

## Requirements

- Android device only (not available on iOS)
- **Premium plan** (background SMS sync is a Premium feature)
- SMS permission granted
- Battery optimization disabled for Rasmerk (recommended)

## Steps

1. Go to **Settings → SMS Import**.
2. Toggle **Auto SMS Import** on.
3. Grant SMS permission when prompted.
4. Set a **start date** — Rasmerk imports SMS received from that date forward.
5. (Recommended) Go to Android Settings → Apps → Rasmerk → Battery → **Unrestricted**. This prevents Android from killing the background sync.

## How often it syncs

- Syncs automatically when you open the app.
- Throttled to once every **2 minutes** to preserve battery.
- Processes only new messages since the last sync timestamp.

## Free tier

Without Premium, SMS auto-import is limited to **20 messages per month** (manual import mode). Background sync requires Premium.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I enable SMS Auto Import in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Go to Settings → SMS Import and toggle Auto SMS Import on. Grant SMS permission. Disable battery optimization for Rasmerk. Background sync requires Premium. Free plan allows 20 manual imports per month."
    }
  }]
}
</script>
