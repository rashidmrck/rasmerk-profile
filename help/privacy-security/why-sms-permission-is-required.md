---
title: "Why SMS permission is required - Rasmerk Help Center"
description: "Rasmerk reads SMS only to detect bank transaction messages locally. No SMS data is ever uploaded."
keywords: "Rasmerk, SMS permission, why, local, bank"
deep_link: "rasmerk://help/why-sms-permission-is-required"
---

# Why SMS permission is required

Rasmerk requests SMS permission to automatically detect **bank and UPI transaction messages** from your inbox and convert them into transactions.

## What Rasmerk reads

Only SMS from senders you have approved (or known bank senders). Rasmerk looks for debit/credit keywords and amounts.

## What Rasmerk does NOT read

- OTPs or one-time passwords
- Personal chats or messages from contacts
- Messages from non-financial senders

## Is SMS data uploaded?

**No.** All SMS parsing happens on your device, in a background Dart isolate. No SMS content is sent to Rasmerk servers. The raw message body is stored locally in the transaction record for deduplication purposes only.

## Declining the permission

SMS permission is optional. If you decline it, SMS Auto-Import is disabled. You can still add transactions manually or via the receipt scanner.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why does Rasmerk need SMS permission?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Rasmerk reads SMS locally to detect bank transaction messages and auto-import them. No SMS data is uploaded. OTPs and personal chats are never read."
    }
  }]
}
</script>
