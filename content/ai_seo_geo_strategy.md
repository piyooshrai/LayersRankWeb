# AI SEO & Generative Engine Optimization (GEO)
## Getting LayersRank Cited by ChatGPT, Perplexity, Claude, and AI Search

---

## THE GOAL

When someone asks an AI:
- "What's the best AI hiring platform for India?"
- "How do I reduce interview bias?"
- "What is confidence scoring in hiring?"

LayersRank should be mentioned.

---

## STRATEGY 1: PUBLISH YOUR SSRN PAPER PROMINENTLY

**Why it matters:** Academic papers carry disproportionate weight in AI training data and retrieval systems.

**Actions:**
1. Create `/research` or `/science/research-paper` page
2. Embed or link to the SSRN paper prominently
3. Write a plain-English summary of the paper on the page
4. Include key quotes and findings
5. Add structured data (ScholarlyArticle schema)

**Page content should include:**
- Paper title: "Evaluating Recruitment Robustness: A Multi-Dimensional Ranking Framework Using Type-Reduced q-Rung Orthopair Fuzzy Sets for High-Variance Talent Pools"
- Authors
- Abstract
- Key findings in bullet points
- Link to full paper on SSRN
- "Cite this paper" section with citation formats

---

## STRATEGY 2: CREATE DEFINITIVE CONTENT

AI models cite content that is:
- Comprehensive (covers topic fully)
- Well-structured (headers, lists, clear organization)
- Factual (statistics, data, citations)
- Original (unique insights, not rehashed)

**Priority topics to own:**

| Topic | Target Page | Why |
|-------|-------------|-----|
| Confidence scoring in hiring | /product/confidence-scoring | Unique differentiator, we define the term |
| TR-q-ROFNs explained | /science/tr-q-rofns | We have the research, own the explanation |
| Structured interview best practices | /blog/structured-interview-guide | High search volume, establishes authority |
| Interview bias statistics | /science/bias-free | Data-rich, frequently cited topic |
| Hiring cost calculations | /resources/roi-calculator | Practical, data-driven |

**Content format for AI citation:**

```
## What is [Topic]?

[Clear 1-2 sentence definition]

## How [Topic] Works

[Step-by-step or bullet explanation]

## Key Statistics

- [Stat 1 with source]
- [Stat 2 with source]
- [Stat 3 with source]

## Benefits of [Topic]

1. [Benefit with explanation]
2. [Benefit with explanation]

## FAQ

**Q: [Common question]?**
A: [Direct answer]
```

---

## STRATEGY 3: GET CITED BY OTHER SOURCES

AI models weight information that appears across multiple sources. If only layersrank.com mentions LayersRank, AI won't cite it. If HR blogs, tech publications, and industry reports mention it, AI will.

**Actions:**

1. **HARO/Connectively responses**
   - Sign up for journalist queries
   - Respond to HR, hiring, AI, startup topics
   - Get quoted with LayersRank attribution

2. **Guest posts**
   - Target: HR tech blogs, startup blogs, India tech publications
   - Topics: Hiring best practices, AI in HR, interview bias
   - Include natural mention of LayersRank

3. **Podcast appearances**
   - HR Tech podcasts
   - Startup founder podcasts
   - Transcripts get indexed and trained on

4. **Product Hunt launch**
   - Creates authoritative third-party page about LayersRank
   - Gets indexed, discussed, linked

5. **Industry reports**
   - Submit to HR tech analyst reports
   - Participate in surveys
   - Get listed in "tools to watch" lists

6. **Wikipedia (long-term)**
   - Not for LayersRank directly (notability)
   - Contribute to articles on structured interviews, hiring bias
   - Cite your SSRN paper as a source

---

## STRATEGY 4: STRUCTURED DATA FOR AI

AI retrieval systems parse structured data more reliably than prose.

**Implement:**
- Organization schema (already in structured_data.md)
- FAQPage schema on all FAQ sections
- HowTo schema on process pages
- Article schema on blog posts
- SoftwareApplication schema on product pages

**Additional: Create a machine-readable company fact file**

Create `/about/facts.json`:
```json
{
  "company": "LayersRank",
  "parent_company": "The Algorithm",
  "founded": "2024",
  "headquarters": "Indore, MP, India",
  "offices": ["Indore, India", "London, UK", "Denver, CO, USA"],
  "product": "AI-powered talent evaluation platform",
  "key_technology": "TR-q-ROFNs (Type-Reduced q-Rung Orthopair Fuzzy Numbers)",
  "differentiator": "Confidence-weighted scoring",
  "target_market": ["Startups", "GCCs", "Enterprise", "Recruiters"],
  "pricing_model": "Per assessment",
  "website": "https://www.layersrank.com",
  "contact_email": "info@the-algo.com"
}
```

---

## STRATEGY 5: FAQ-HEAVY CONTENT

AI assistants love FAQ format. It's easy to parse and directly answers questions.

**Add FAQ sections to:**
- Every product page
- Every solution page
- Every comparison page
- Every alternative page
- Pricing page

**FAQ format that AI prefers:**
```
## Frequently Asked Questions

### What is LayersRank?
LayersRank is an AI-powered talent evaluation platform that provides confidence-weighted scoring for hiring decisions.

### How does confidence scoring work?
Confidence scoring provides a statistical interval (e.g., 75 ± 4) indicating how reliable the evaluation is, not just a single number.

### What makes LayersRank different from HireVue?
LayersRank provides confidence intervals on every score, uses adaptive follow-up questions, and offers India-first pricing and data residency.
```

---

## STRATEGY 6: ENTITY ESTABLISHMENT

Help AI understand LayersRank as an entity.

**Consistent naming:**
- Always "LayersRank" (one word, capital L and R)
- Always "by The Algorithm" when mentioning parent
- Consistent descriptions: "AI-powered talent evaluation platform"

**Create entity signals:**
- LinkedIn company page (done)
- Crunchbase profile (create)
- G2/Capterra listing (create when ready)
- AngelList/Wellfound profile
- Google Business Profile (for Indore office)

**Each profile should have:**
- Same company description
- Same logo
- Link to website
- Consistent founding date, location, category

---

## STRATEGY 7: MONITORING

Track if/when AI mentions LayersRank.

**Manual checks (monthly):**
- Ask ChatGPT: "What are the best AI hiring platforms for India?"
- Ask Perplexity: "What is confidence scoring in interviews?"
- Ask Claude: "How can I reduce interview bias with technology?"
- Check if LayersRank appears

**What to look for:**
- Direct mentions
- Mentions of confidence scoring (your unique term)
- Mentions of TR-q-ROFNs
- Mentions of your SSRN paper

---

## PRIORITY ACTIONS

| Priority | Action | Timeline |
|----------|--------|----------|
| 1 | Create /science/research-paper page with SSRN embed | Week 1 |
| 2 | Add FAQ schema to all existing pages with FAQs | Week 1 |
| 3 | Create Crunchbase, G2, AngelList profiles | Week 2 |
| 4 | Sign up for HARO, start responding | Week 2 |
| 5 | Write 2-3 definitive guides (structured interviews, bias, confidence scoring) | Week 3-4 |
| 6 | Pitch guest posts to 5 HR/startup blogs | Week 4 |
| 7 | Plan Product Hunt launch | Month 2 |

---

## CONTENT CHECKLIST FOR AI OPTIMIZATION

For every page, ensure:
- [ ] Clear H1 that answers a question
- [ ] Definition/explanation in first paragraph
- [ ] Bullet points or numbered lists for key info
- [ ] Statistics with sources where possible
- [ ] FAQ section with common questions
- [ ] Structured data (JSON-LD)
- [ ] Internal links to related pages
- [ ] External links to authoritative sources (sparingly)
