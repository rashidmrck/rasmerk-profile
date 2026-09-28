---
title: "Why AI couldn't identify an item - Rasmerk Help Center"
description: "Why some receipt items are missed by Rasmerk's scanner and what to do about it."
keywords: "Rasmerk, receipt scanner, AI missed item, OCR fail"
deep_link: "rasmerk://help/why-ai-couldnt-identify-an-item"
---

# Why AI couldn't identify an item

## Automatic skip rules

Rasmerk's scanner automatically skips lines that match:

- **Payment/summary keywords:** Total, Subtotal, Cash, Change, Visa, Mastercard, Amount, Tender
- **Tax lines:** CGST, SGST, IGST, GST, Tax, Tip (these are extracted separately)
- **Receipt metadata:** Date, Time, Table, Waiter, Cashier, Receipt, Invoice, Bill
- **Contact info:** Phone, Mobile, Tel, GSTIN
- **Thank-you lines:** Thank, Visit

Lines where the item name is shorter than 3 characters are also skipped.

## Common OCR failures

- **Faded thermal paper** — text is light and ML Kit misreads or skips it.
- **Crumpled receipts** — curved text creates bounding-box confusion.
- **Dot-matrix or handwritten receipts** — not well-supported.
- **Phone number on receipt** — 8+ digit sequences are filtered as phone numbers.

## Fixes

1. Try **Improve with AI** mode — AI can handle more ambiguous text.
2. Add the missing item manually after scanning.
3. Retake the photo in better lighting.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why did the Rasmerk scanner miss some items on my receipt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Lines matching tax, total, payment, or metadata keywords are skipped automatically. Faded or crumpled receipts reduce accuracy. Use Improve with AI or add items manually."
    }
  }]
}
</script>
