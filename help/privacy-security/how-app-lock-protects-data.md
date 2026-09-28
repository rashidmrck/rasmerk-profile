---
title: "How App Lock protects your data - Rasmerk Help Center"
description: "App Lock uses device biometric or PIN to lock Rasmerk. The lock state is never stored to disk."
keywords: "Rasmerk, app lock, biometric, PIN, security"
deep_link: "rasmerk://help/how-app-lock-protects-data"
---

# How App Lock protects your data

App Lock requires **biometric authentication or device PIN** before showing your financial data.

## How to enable

Go to **Settings → Security → App Lock** and toggle it on.

## Lock timeout options

| Option | Behavior |
|---|---|
| Immediately | Locks as soon as app goes to background |
| 30 seconds (default) | Locks if app is in background for 30+ seconds |
| 5 minutes | Locks after 5 minutes in background |
| Never | Stays unlocked while app is open |

## Security model

- The unlocked state is **in-memory only** — never written to disk.
- Every cold app launch starts locked, regardless of timeout setting.
- Authentication uses Android `local_auth` (biometric + PIN fallback).
- Too many failed biometric attempts → temporary lockout (requires device PIN to unlock biometrics).
- All authentication errors keep the app locked — there is no error path that unlocks.

## What it protects

App Lock blocks access to the entire app. Anyone who picks up your phone cannot see your balances, transactions, or accounts without your biometric or PIN.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does App Lock work in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "App Lock uses device biometric or PIN. The unlocked state is in-memory only — never stored to disk. Every cold launch requires fresh authentication. Timeout options: Immediately, 30s, 5 min, or Never."
    }
  }]
}
</script>
