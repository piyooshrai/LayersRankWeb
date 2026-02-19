# Structured Data (JSON-LD) for LayersRank
## Implementation Guide

---

## 1. ORGANIZATION SCHEMA

**Place in:** `<head>` of every page (via layout component)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.layersrank.com/#organization",
  "name": "LayersRank",
  "alternateName": "LayersRank by The Algorithm",
  "url": "https://www.layersrank.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.layersrank.com/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "AI-powered talent evaluation platform with confidence-weighted scoring for structured hiring decisions.",
  "email": "info@the-algo.com",
  "sameAs": [
    "https://www.linkedin.com/showcase/layersrank/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-89624-12726",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+44-7477-204642",
      "contactType": "sales",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-720-334-7249",
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "MP",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "addressCountry": "US"
    }
  ],
  "foundingDate": "2024",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 1,
    "maxValue": 10
  }
}
```

---

## 2. WEBSITE SCHEMA

**Place in:** `<head>` of homepage

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.layersrank.com/#website",
  "url": "https://www.layersrank.com",
  "name": "LayersRank",
  "description": "AI-powered talent evaluation with confidence-weighted scoring",
  "publisher": {
    "@id": "https://www.layersrank.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.layersrank.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

## 3. SOFTWARE APPLICATION SCHEMA

**Place in:** `<head>` of homepage and product pages

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.layersrank.com/#software",
  "name": "LayersRank",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Human Resources Software",
  "operatingSystem": "Web",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "1600",
    "highPrice": "2500",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "2500",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "2500",
          "priceCurrency": "INR",
          "unitText": "per assessment"
        }
      },
      {
        "@type": "Offer",
        "name": "Growth",
        "price": "1800",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1800",
          "priceCurrency": "INR",
          "unitText": "per assessment"
        }
      },
      {
        "@type": "Offer",
        "name": "Enterprise",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Custom pricing"
      }
    ]
  },
  "featureList": [
    "Confidence-weighted candidate scoring",
    "Structured video interviews",
    "Adaptive follow-up questions",
    "Multi-dimensional evaluation",
    "Bias-free assessment",
    "ATS integration"
  ],
  "screenshot": "https://www.layersrank.com/images/screenshot-dashboard.png",
  "softwareVersion": "1.0",
  "author": {
    "@id": "https://www.layersrank.com/#organization"
  }
}
```

---

## 4. FAQ PAGE SCHEMA

**Place in:** Pages with FAQ sections (GCC, Bias, Confidence Scoring, Pricing)

### Example for Confidence Scoring page:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is confidence-weighted scoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Confidence-weighted scoring provides not just a score, but a statistical confidence interval indicating how reliable that score is. Instead of saying 'this candidate scored 75', LayersRank says '75 ± 4 with 91% confidence' — telling you exactly how much to trust the evaluation."
      }
    },
    {
      "@type": "Question",
      "name": "How is confidence calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Confidence is calculated using TR-q-ROFNs (Type-Reduced q-Rung Orthopair Fuzzy Numbers), a mathematical framework that models uncertainty in evaluation. The system considers response completeness, internal consistency, semantic clarity, and alignment with expected answer patterns."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when confidence is low?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When confidence falls below threshold, LayersRank's adaptive system triggers follow-up questions to gather more information. This reduces uncertainty and provides more reliable evaluation rather than guessing from incomplete data."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is LayersRank compared to human interviewers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LayersRank shows 0.83 correlation with expert human evaluation, comparable to or better than inter-rater reliability between human interviewers. The key advantage is consistency — LayersRank applies the same standard to every candidate."
      }
    }
  ]
}
```

### Template for other FAQ pages:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
  ]
}
```

---

## 5. ARTICLE SCHEMA (Blog Posts)

**Place in:** `<head>` of each blog post

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Blog Post Title]",
  "description": "[Meta description]",
  "image": "[Featured image URL]",
  "datePublished": "[ISO 8601 date]",
  "dateModified": "[ISO 8601 date]",
  "author": {
    "@type": "Organization",
    "name": "LayersRank Team",
    "url": "https://www.layersrank.com"
  },
  "publisher": {
    "@id": "https://www.layersrank.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Full URL of blog post]"
  },
  "articleSection": "[Category: e.g., Hiring Best Practices, Product Updates]",
  "wordCount": "[Approximate word count]"
}
```

### Example for a specific blog post:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Interview Confidence Matters More Than Interview Scores",
  "description": "A score without context is just a number. Learn why confidence intervals transform hiring decisions from guesswork into data-driven choices.",
  "image": "https://www.layersrank.com/images/blog/confidence-scoring.png",
  "datePublished": "2025-01-15T09:00:00+05:30",
  "dateModified": "2025-01-15T09:00:00+05:30",
  "author": {
    "@type": "Organization",
    "name": "LayersRank Team",
    "url": "https://www.layersrank.com"
  },
  "publisher": {
    "@id": "https://www.layersrank.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.layersrank.com/blog/interview-confidence-matters"
  },
  "articleSection": "Hiring Best Practices",
  "wordCount": "1500"
}
```

---

## 6. AGGREGATE RATING SCHEMA (For Future Use)

**Place in:** Homepage and product pages when you have testimonials/reviews

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "LayersRank",
  "description": "AI-powered talent evaluation platform",
  "brand": {
    "@type": "Brand",
    "name": "LayersRank"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "47",
    "reviewCount": "23"
  }
}
```

**Note:** Only add this when you have real reviews. Fake reviews violate Google guidelines.

---

## 7. BREADCRUMB SCHEMA

**Place in:** All pages except homepage

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.layersrank.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Parent Category]",
      "item": "https://www.layersrank.com/[parent]"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Current Page]",
      "item": "https://www.layersrank.com/[parent]/[current]"
    }
  ]
}
```

### Example for /product/confidence-scoring:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.layersrank.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Product",
      "item": "https://www.layersrank.com/product"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Confidence Scoring",
      "item": "https://www.layersrank.com/product/confidence-scoring"
    }
  ]
}
```

---

## IMPLEMENTATION IN NEXT.JS

### Create a component for structured data:

```tsx
// components/StructuredData.tsx

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### Use in pages:

```tsx
// app/page.tsx (homepage)

import StructuredData from '@/components/StructuredData';
import { organizationSchema, websiteSchema, softwareSchema } from '@/lib/structured-data';

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={softwareSchema} />
      {/* Page content */}
    </>
  );
}
```

### Create schema library:

```tsx
// lib/structured-data.ts

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // ... full schema
};

export const websiteSchema = {
  // ... full schema
};

export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    // ... dynamic fields
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
```

---

## VALIDATION

Test your structured data at:
- https://validator.schema.org/
- https://search.google.com/test/rich-results

---

## PAGES THAT NEED FAQ SCHEMA

1. `/product/confidence-scoring` — Confidence scoring FAQs
2. `/science/bias-free` — Bias elimination FAQs
3. `/solutions/gcc` — GCC-specific FAQs
4. `/pricing` — Pricing FAQs
5. `/compare/*` — Comparison FAQs
6. `/alternative/*` — Alternative page FAQs
