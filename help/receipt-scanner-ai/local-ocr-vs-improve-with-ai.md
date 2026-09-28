---
title: "Local OCR vs Improve with AI - Rasmerk Help Center"
description: "Rasmerk uses on-device ML Kit OCR by default. The optional Improve with AI mode sends receipt text to your configured AI."
keywords: "Rasmerk, OCR, ML Kit, Gemini, AI, receipt scanner"
deep_link: "rasmerk://help/local-ocr-vs-improve-with-ai"
---

# Local OCR vs Improve with AI

Rasmerk offers two receipt parsing modes:

## Local OCR (default)

Uses **Google ML Kit** on your device. No internet connection required. No data leaves your phone.

**How it works:**
1. Camera captures the receipt.
2. ML Kit detects text using bounding-box geometry.
3. Rasmerk groups text lines into receipt rows.
4. Item names and prices are extracted using pattern matching.
5. Tax lines (CGST, SGST, GST, tip) are extracted separately.

**Limitations:**
- May miss items on poor-quality photos.
- Faded or curved receipts reduce accuracy.

## Improve with AI (optional)

Sends the OCR text to your configured AI provider (Gemini or Hugging Face) for better item recognition.

**Privacy:** Only the receipt text is sent — no images unless the AI provider supports vision. Rasmerk does not relay, proxy, or store AI responses.

**Free plan:** 3 OCR scans per month. Unlimited with Premium.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the difference between Local OCR and Improve with AI in Rasmerk?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Local OCR uses on-device Google ML Kit — no internet needed. Improve with AI sends receipt text to your configured Gemini or Hugging Face API for better results. Free plan: 3 scans/month."
    }
  }]
}
</script>
