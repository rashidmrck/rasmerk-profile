---
title: "Export CSV - Rasmerk Help Center"
description: "How to export your Rasmerk transactions to CSV format for spreadsheet use."
keywords: "Rasmerk, export CSV, spreadsheet, Excel, transactions"
deep_link: "rasmerk://help/export-csv"
---

# Export CSV

Export all your transactions as a CSV or TSV file compatible with spreadsheet apps (Excel, Google Sheets, etc.).

## Steps

1. Go to **Settings → Export → CSV**.
2. Choose date range (optional).
3. Tap **Export**.
4. Share or save the file.

## CSV format

| Column | Example |
|---|---|
| Date | `15/11/2023 14:30:00` |
| Account | `HDFC Savings` |
| Category | `Food` |
| Subcategory | `Dining Out` |
| Note | `Swiggy` |
| Amount | `450.00` |
| Income/Expense | `Expense` / `Income` / `Transfer` |
| Description | `Lunch order` |

- Date format: `dd/MM/yyyy HH:mm:ss`
- Amount: positive decimal with `.` separator
- Transfers: destination account name appears in the Category column
- Opening Balance exports as `Income` type
- Settlements export as `Transfer`

## Free plan limit

**2 lifetime CSV/XLS imports** are free. Exports are separate — you can export unlimited times. Import (bringing data in) has the limit.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I export my Rasmerk transactions to CSV?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Go to Settings → Export → CSV. The file includes Date, Account, Category, Amount, and type columns in dd/MM/yyyy HH:mm:ss format."
    }
  }]
}
</script>
