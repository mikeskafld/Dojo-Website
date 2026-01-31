# PRD: Dojo Website Improvements

## Introduction

Comprehensive website overhaul to fix broken functionality, implement Trybe-style dynamic dual-audience targeting, enable prepayment validation via Polar, and update all content to be Dojo-specific. The goal is to create a polished, conversion-optimized marketing site that speaks directly to both Creators and Learners without overwhelming either audience.

## Goals

- Fix all broken functionality (Pricing page, Terms, Privacy, FAQ)
- Implement dynamic homepage that fully adapts based on Creator/Learner selection (Trybe-style)
- Enable prepayment via Polar to validate market demand before product launch
- Replace generic template content with authentic Dojo-specific messaging
- Replace fake testimonials with real early interest quotes from creator applicants
- Track audience selection via URL parameters for analytics

## User Stories

### US-001: Fix Polar Pricing Integration
**Description:** As a visitor, I want to see pricing plans on the /pricing page so that I can understand the cost and potentially prepay.

**Acceptance Criteria:**
- [ ] Pricing page displays Base and Plus plan cards with pricing
- [ ] "Get access" buttons link to Polar checkout flow
- [ ] Checkout flow completes successfully for test transaction
- [ ] Environment variables (POLAR_ACCESS_TOKEN) verified in Vercel deployment
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-002: Update Terms Page Content
**Description:** As a visitor, I want to read Dojo's terms of service so that I understand the platform's policies.

**Acceptance Criteria:**
- [ ] All references to "Vibe Marketing" replaced with "Dojo"
- [ ] Contact email updated to Dojo support email
- [ ] Content rewritten to reflect learning marketplace context (not marketing platform)
- [ ] Sections cover: user content uploads, creator revenue share, learner subscriptions
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-003: Update Privacy Page Content
**Description:** As a visitor, I want to read Dojo's privacy policy so that I understand how my data is handled.

**Acceptance Criteria:**
- [ ] All references to "Vibe Marketing" replaced with "Dojo"
- [ ] Content reflects actual data collection (waitlist emails, creator applications)
- [ ] Sections cover: analytics, payment processing (Polar), content uploads
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-004: Rewrite FAQ Section for Dojo
**Description:** As a visitor, I want to read FAQs relevant to Dojo so that I can understand how the platform works.

**Acceptance Criteria:**
- [ ] Remove all AI content generation / social media marketing questions
- [ ] Add Creator-focused FAQs: revenue share, content upload process, payout timing
- [ ] Add Learner-focused FAQs: subscription pricing, content access, lesson format
- [ ] Add General FAQs: platform launch timeline, early access benefits
- [ ] FAQ section properly integrated on homepage
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-005: Replace Testimonials with Early Interest Quotes
**Description:** As a visitor, I want to see authentic quotes from interested creators so that I trust the platform has real traction.

**Acceptance Criteria:**
- [ ] Remove fake developer testimonials about "UI components"
- [ ] Add 4-6 quotes from actual creator applicants (or realistic placeholder quotes)
- [ ] Quotes focus on: monetization excitement, AI transformation interest, revenue share appeal
- [ ] Each quote has name, handle, and relevant niche (e.g., "Fitness Creator")
- [ ] Testimonial section title changed from "Customers" to "Early Creators" or similar
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-006: Implement Dynamic Homepage - Creator Mode
**Description:** As a Creator visiting the homepage, I want to see content tailored to my needs when I select "I'm a Creator" so that the value proposition is immediately clear.

**Acceptance Criteria:**
- [ ] URL updates to `/?mode=creator` when Creator toggle selected
- [ ] Hero headline changes to creator-focused messaging
- [ ] Hero subtext emphasizes monetization and AI content transformation
- [ ] Hero CTA changes to "Apply as Creator"
- [ ] Stats section shows creator-relevant metrics (70% revenue, AI-powered, etc.)
- [ ] Features section highlights creator benefits
- [ ] Mode persists across page navigation via URL param or state
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-007: Implement Dynamic Homepage - Learner Mode
**Description:** As a Learner visiting the homepage, I want to see content tailored to my needs when I select "I'm a Learner" so that the value proposition is immediately clear.

**Acceptance Criteria:**
- [ ] URL updates to `/?mode=learner` when Learner toggle selected (default)
- [ ] Hero headline changes to learner-focused messaging ("Master Any Skill")
- [ ] Hero subtext emphasizes micro-lessons and skill mastery
- [ ] Hero CTA changes to "Join Waitlist"
- [ ] Stats section shows learner-relevant metrics (3min lessons, expert content)
- [ ] Features section highlights learner benefits
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-008: Add Cross-Promotion CTAs
**Description:** As a Creator viewing learner content (or vice versa), I want an easy way to switch contexts so that I can explore the other offering.

**Acceptance Criteria:**
- [ ] Creator application form shows "Learner? Join Waitlist!" button
- [ ] Learner waitlist form shows "Creator? Apply Now!" button
- [ ] Clicking cross-promotion CTA switches mode and scrolls to relevant form
- [ ] Trybe-style inline placement within form sections
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-009: Add Pricing Link to Navigation
**Description:** As a visitor, I want to access pricing from the main navigation so that I can quickly find cost information.

**Acceptance Criteria:**
- [ ] "Pricing" link added to main navbar between "For Learners" and "About"
- [ ] Link navigates to /pricing page
- [ ] Mobile menu also includes Pricing link
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-010: Update Blog Content
**Description:** As a visitor, I want to read blog posts relevant to Dojo so that I can learn more about the platform's vision.

**Acceptance Criteria:**
- [ ] Remove or update "Vibe Marketing" blog post
- [ ] Remove or update "AI Prompting for Marketing" blog post
- [ ] Add at least 2 Dojo-relevant posts (e.g., "Why Micro-Learning Works", "Creator Economy Future")
- [ ] Blog hero and metadata updated to reflect Dojo branding
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-011: Dynamic "Why Dojo" Section
**Description:** As a visitor, I want the comparison section to highlight benefits relevant to my selected mode so that I understand Dojo's advantage.

**Acceptance Criteria:**
- [ ] Creator mode: Emphasizes revenue share, AI handles structure, reach learners
- [ ] Learner mode: Emphasizes bite-sized learning, real practitioners, structured paths
- [ ] Comparison cards adapt messaging based on selected mode
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-012: Dynamic "How It Works" Section on Homepage
**Description:** As a visitor, I want the "How It Works" diagram to show the relevant flow for my selected mode.

**Acceptance Criteria:**
- [ ] Creator mode: Shows content upload → AI processing → monetization flow
- [ ] Learner mode: Shows discovery → micro-lessons → mastery flow
- [ ] Smooth transition animation when switching modes
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

## Functional Requirements

- FR-1: Pricing page must fetch and display Polar products (Base, Plus plans)
- FR-2: Checkout flow must redirect to Polar payment processing
- FR-3: Homepage must read `mode` URL parameter and render appropriate content
- FR-4: Mode toggle must update URL without full page reload (shallow routing)
- FR-5: Mode preference should persist during session navigation
- FR-6: All legal pages (Terms, Privacy) must contain Dojo-specific content
- FR-7: FAQ section must contain minimum 6 relevant questions (3 creator, 3 learner)
- FR-8: Testimonial section must display authentic early interest quotes
- FR-9: Cross-promotion CTAs must switch mode and scroll to target form
- FR-10: Navigation must include Pricing link on desktop and mobile

## Non-Goals (Out of Scope)

- Creating new pages beyond what exists
- Adding authentication-gated features
- Building the actual learning platform functionality
- Implementing real payment processing (only Polar test mode)
- Creating a full content management system for blog
- Adding dark/light theme toggle
- Implementing full i18n/localization
- Building email automation beyond waitlist capture

## Design Considerations

- Maintain existing Dojo dark theme with cyan/teal accents
- Use existing component library (shadcn/ui patterns in components/ui/)
- Follow Trybe's toggle pattern: persistent header toggle, URL-driven state
- Animations should use existing `motion` library patterns
- Mobile-first responsive design maintained throughout

## Technical Considerations

- Mode state managed via URL search params (`?mode=creator` or `?mode=learner`)
- Use Next.js `useSearchParams` and `useRouter` for client-side routing
- Polar integration requires valid `POLAR_ACCESS_TOKEN` in Vercel env vars
- Blog posts use MDX format in `app/(marketing)/blog/posts/`
- Existing form components should be reused for consistency
- Server components for initial render, client components for interactivity

## Success Metrics

- Pricing page renders with functional checkout flow
- 100% of template "Vibe Marketing" references removed
- Homepage provides distinct, measurable content for each audience mode
- Analytics can track mode selection and conversion per audience
- Creator applications and learner waitlist signups increase post-launch
- At least 1 prepayment validates market demand hypothesis

## Open Questions

1. What specific quotes/testimonials do we have from actual creator applicants?
2. What is the Dojo support email for legal pages?
3. Are there specific blog topics the team wants to prioritize?
4. Should prepayment offer any special "founding member" benefits?
5. What analytics events should be tracked for mode selection?
