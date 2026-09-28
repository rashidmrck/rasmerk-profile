---
title: "Transfer between accounts - Rasmerk Help Center"
description: "Transfers in Rasmerk move money between your accounts. They are not counted as income or expense."
keywords: "Rasmerk, transfer, between accounts, not expense"
deep_link: "rasmerk://help/transfer-between-accounts"
---

# Transfer between accounts

Use a **Transfer** transaction to move money between your Rasmerk accounts (e.g., cash to bank, bank to wallet).

## Steps

1. Tap **+** → **Transfer**.
2. Select **From Account** and **To Account**.
3. Enter the amount and date.
4. Tap **Save**.

## Important: Transfers do not count as expense or income

A transfer removes money from one account and adds it to another. It does not appear in your expense or income reports. Your total net worth stays the same.

## Example

Withdrawing ₹5,000 from your bank account to keep as cash:
- Create a Transfer from **Bank Account** to **Cash**.
- Bank balance decreases by ₹5,000, Cash balance increases by ₹5,000.
- Net worth unchanged.

## In CSV export

Transfers export with type `Transfer`. The destination account name appears in the Category column.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Does a transfer between accounts count as an expense in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Transfers move money between accounts and do not affect income or expense totals. Net worth stays the same."
    }
  }]
}
</script>
