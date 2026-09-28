---
title: "Supported banks and UPI apps - Rasmerk Help Center"
description: "Rasmerk supports all major Indian banks and UPI apps via built-in regex patterns."
keywords: "Rasmerk, supported banks, UPI, HDFC, SBI, ICICI, GPay"
deep_link: "rasmerk://help/supported-banks-upi-apps"
---

# Supported banks and UPI apps

Rasmerk includes built-in patterns for all major Indian banks and UPI services. Patterns cover:

## Indian Banks (built-in)

All major PSU and private banks including SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Bank of Baroda, Punjab National Bank, Canara Bank, Union Bank, and many more.

## UPI Apps (built-in)

Google Pay (GPay), PhonePe, Paytm, BHIM, Amazon Pay, and other UPI senders.

## Pattern matching

Rasmerk extracts:
- **Amount** (debit/credit)
- **Account** (last 4 digits or account alias)
- **Merchant/UPI ID**
- **Date and time**
- **Transaction reference number** (for deduplication)

## My bank is missing

If your bank SMS is not recognized, it will appear in **Needs Review**. You can fill in the details and confirm the transaction.

You can also create **Custom SMS Rules** (Premium → Advanced SMS Filters) to teach Rasmerk your bank's message format.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Which banks does Rasmerk support for SMS import?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Rasmerk supports all major Indian banks (SBI, HDFC, ICICI, Axis, Kotak, and more) and UPI apps (GPay, PhonePe, Paytm, BHIM). Unrecognized SMS appear in Needs Review."
    }
  }]
}
</script>
