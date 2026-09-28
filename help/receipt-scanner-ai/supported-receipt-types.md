---
title: "Supported receipt types - Rasmerk Help Center"
description: "Rasmerk receipt scanner works best with printed thermal receipts from restaurants, fuel stations, and pharmacies."
keywords: "Rasmerk, receipt types, restaurant, fuel, pharmacy"
deep_link: "rasmerk://help/supported-receipt-types"
---

# Supported receipt types

## Best supported

- **Restaurant receipts** — itemized with prices per line
- **Fuel station bills** — fuel quantity and price
- **Pharmacy / medical bills** — medicine names and amounts
- **Supermarket receipts** — grocery items with prices

## Partially supported

- **Online order invoices** — printed PDFs often have non-standard layouts
- **Handwritten bills** — OCR accuracy is lower

## Tax extraction

Rasmerk extracts tax lines (CGST, SGST, IGST, GST, tip) separately from items and adds them to the total.

## Not supported

- Purely digital invoices shown on a screen (photograph the printed version)
- Receipts with only a total and no itemized list

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What types of receipts does Rasmerk support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Best support for printed thermal receipts from restaurants, fuel stations, pharmacies, and supermarkets. Tax lines (CGST, SGST, GST, tip) are extracted separately."
    }
  }]
}
</script>
