---
title: "Receipt scanner fails - Rasmerk Help Center"
description: "Troubleshooting steps when the Rasmerk receipt scanner does not detect items correctly."
keywords: "Rasmerk, receipt scanner fails, OCR, not working"
deep_link: "rasmerk://help/receipt-scanner-fails"
---

# Receipt scanner fails

## Common causes and fixes

### No items detected

- Receipt may be too dark, too light, or blurry. Retake in good lighting.
- Crumpled or folded receipts confuse the bounding-box parser. Flatten the receipt.

### Only a partial list detected

- Lines with only tax or total keywords (CGST, Total, Subtotal) are always skipped — this is correct behavior.
- Lines shorter than 3 characters are skipped.
- Try **Improve with AI** for better results on complex layouts.

### Camera crashes or freezes

- Grant **Camera permission** in Android Settings → Apps → Rasmerk → Permissions.
- Restart the app and try again.

### Improve with AI fails

- Check your internet connection.
- Verify your AI API key is correctly set in **Settings → AI**.
- Confirm the Gemini or Hugging Face API key has sufficient quota.

## Free limit

OCR scans are limited to **3 per month** on the free plan. Upgrade to Premium for unlimited scans.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What do I do if the Rasmerk receipt scanner is not working?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ensure good lighting, flatten the receipt, and grant camera permission. Use Improve with AI for complex receipts. Tax/total lines are always skipped. Free plan: 3 scans/month."
    }
  }]
}
</script>
