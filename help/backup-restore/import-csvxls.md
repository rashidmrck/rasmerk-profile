---
title: "Import CSV / XLS - Rasmerk Help Center"
description: "How to import transactions from a CSV or XLS file into Rasmerk. Free plan allows 2 lifetime imports."
keywords: "Rasmerk, import CSV, import XLS, transactions, free limit"
deep_link: "rasmerk://help/import-csvxls"
---

# Import CSV / XLS

Import transactions from a spreadsheet file into Rasmerk.

## Free plan limit

The free plan includes **2 lifetime CSV/XLS imports**. This counter never resets — upgrade to Premium for unlimited imports.

## Supported formats

- `.csv` (comma-separated)
- `.tsv` (tab-separated)
- `.xls` / `.xlsx` (Excel)

## Steps

1. Go to **Settings → Import → CSV / XLS**.
2. Tap **Select File** and choose your file.
3. Rasmerk previews the rows to be imported.
4. Tap **Import**.

## Required column format

Rasmerk expects this column order (same as its export format):
`Date | Account | Category | Subcategory | Note | Amount | Income/Expense | Description`

Date format: `dd/MM/yyyy HH:mm:ss`. Amount: positive decimal.

## After import

Imported transactions are marked with the import source. You can review and edit them from the Transactions screen.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I import a CSV file into Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Go to Settings → Import → CSV/XLS. Free plan allows 2 lifetime imports. Premium removes this limit. Column order: Date, Account, Category, Subcategory, Note, Amount, Income/Expense, Description."
    }
  }]
}
</script>
