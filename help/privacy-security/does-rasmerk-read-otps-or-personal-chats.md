---
title: "Does Rasmerk read OTPs or personal chats? - Rasmerk Help Center"
description: "No. Rasmerk only processes known bank transaction SMS. It does not read OTPs, personal chats, or non-financial messages."
keywords: "Rasmerk, OTP, personal chat, SMS, privacy"
deep_link: "rasmerk://help/does-rasmerk-read-otps-or-personal-chats"
---

# Does Rasmerk read OTPs or personal chats?

**No.**

Rasmerk's SMS parser only processes messages from known bank and UPI senders (e.g., HDFC, SBI, GPay). It filters messages by sender ID and content.

## How filtering works

1. **Sender filter:** Only SMS from approved or known financial senders are processed.
2. **Content filter:** Messages without transaction keywords (debit, credit, spent, received, etc.) are skipped.
3. **Block rules:** Promotional messages, OTP patterns, and generic alerts are blocked by default.

Personal messages, OTPs, and chat notifications never match these filters and are never read or stored by Rasmerk.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Does Rasmerk read my OTPs or personal messages?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Rasmerk only processes SMS from known bank and UPI senders that contain transaction keywords. OTPs, personal chats, and promotional messages are never read or stored."
    }
  }]
}
</script>
