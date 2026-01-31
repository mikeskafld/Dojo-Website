# PRD: Dojo Marketing Site Redesign

## Introduction

Redesign the Dojo marketing website to effectively communicate the platform's value proposition as a marketplace that transforms long-form videos into swipeable micro-lessons. The site should drive both creator signups (supply) and learner waitlist signups (demand) while reflecting the premium, modern aesthetic from the pitch deck.

**Design Reference**: Use [jointrybe.com](https://jointrybe.com/) format/structure as inspiration, but apply Dojo's pitch deck aesthetics (dark theme with cyan/teal accents).

## Goals

- Convert visitors into creator applicants and learner waitlist signups
- Clearly communicate Dojo's dual value proposition (creators + learners)
- Establish brand credibility for pre-seed fundraising
- Provide seamless access to the existing Next.js application via login
- Create a cohesive visual identity matching the pitch deck aesthetic

## User Stories

### US-001: Implement dark theme design system
**Description:** As a developer, I need a design system with dark theme and cyan/teal accents so all pages have consistent Dojo branding.

**Acceptance Criteria:**
- [ ] Update Tailwind config with Dojo color palette (dark backgrounds #0a0a0a/#111, cyan accents #00d4ff/#22d3ee)
- [ ] Create CSS variables for consistent theming across components
- [ ] Update existing marketing components to use new color scheme
- [ ] Ensure sufficient contrast ratios for accessibility (WCAG AA)
- [ ] Typecheck passes

---

### US-002: Redesign marketing navbar with login link
**Description:** As a visitor, I want a clear navigation bar so I can explore the site and access login.

**Acceptance Criteria:**
- [ ] Dojo logo (lowercase "dojo" text) on the left
- [ ] Navigation links: How It Works, For Creators, For Learners, About
- [ ] "Login" text link on the right that navigates to /auth/login
- [ ] "Get Early Access" primary CTA button (cyan accent)
- [ ] Mobile-responsive hamburger menu
- [ ] Sticky navbar on scroll with subtle backdrop blur
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-003: Build homepage hero section with audience toggle
**Description:** As a visitor, I want to immediately understand what Dojo does and see content relevant to my role (creator or learner).

**Acceptance Criteria:**
- [ ] Toggle switch: "I'm a Creator" / "I'm a Learner" (similar to Trybe)
- [ ] Dynamic headline that changes based on toggle selection
- [ ] Creator view: "Turn Your Expertise Into Income" + creator-focused subheadline
- [ ] Learner view: "Master Any Skill in Minutes a Day" + learner-focused subheadline
- [ ] Primary CTA changes: "Apply as Creator" vs "Join Waitlist"
- [ ] Floating social proof elements (stats, metrics) around hero
- [ ] Background with subtle gradient/glow effects matching pitch deck
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-004: Create features grid section
**Description:** As a visitor, I want to understand Dojo's key features so I can evaluate if it's right for me.

**Acceptance Criteria:**
- [ ] Section headline: "The First Marketplace Powered By Cognitive Scaffolding"
- [ ] 6 feature cards in responsive grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
- [ ] Features to include:
  - Universal Scaffolding (AI structures content automatically)
  - Feed-to-Mastery Funnel (free micro-lessons to paid courses)
  - AI-Powered Repurposing (upload any video format)
  - Peer-Reviewed Discovery (community validation)
  - Native Monetization (70% to creators)
  - Low-Friction Mastery (bite-sized learning)
- [ ] Each card: icon, title, description, subtle border glow on hover
- [ ] Dark card backgrounds with cyan accent borders
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-005: Build "How It Works" visual flow section
**Description:** As a visitor, I want to see how the Dojo engine transforms content so I understand the product's value.

**Acceptance Criteria:**
- [ ] Three-step visual flow matching pitch deck diagram:
  - Input: Unstructured video (MP4, Zoom, YouTube icons)
  - Process: The Dojo Engine (Semantic Segmentation → Pedagogical Labeling → Synthesis Optimization)
  - Output: Structured micro-lesson card
- [ ] Animated arrows/flow between steps
- [ ] Dark background with glowing accent elements
- [ ] Responsive layout (horizontal on desktop, vertical on mobile)
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-006: Create competitive differentiation section
**Description:** As a visitor, I want to understand how Dojo compares to alternatives so I can see its unique value.

**Acceptance Criteria:**
- [ ] Section headline: "Why Dojo?"
- [ ] Comparison points vs: Skillshare/Udemy, Duolingo, TikTok, MasterClass
- [ ] Format: What they do well → What Dojo adds
- [ ] Visual treatment: dark cards with subtle glow effects
- [ ] Concise, scannable bullet points
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-007: Build creator application form section
**Description:** As a creator, I want to apply to join Dojo so I can start monetizing my expertise.

**Acceptance Criteria:**
- [ ] Section headline: "Apply as a Creator"
- [ ] Form fields: Full Name, Email, Content Niche (dropdown), Social Profile Link, Monthly Audience Size
- [ ] Form validation with error states
- [ ] Submit button: "Submit Application" (cyan accent)
- [ ] Success state: "Application received! We'll be in touch soon."
- [ ] Store submissions (Supabase table: creator_applications)
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-008: Build learner waitlist form section
**Description:** As a learner, I want to join the waitlist so I get notified when Dojo launches.

**Acceptance Criteria:**
- [ ] Section headline: "Get Early Access"
- [ ] Form fields: Email, Name (optional), Interests (multi-select: Fitness, Music, Makeup, Other)
- [ ] Submit button: "Join Waitlist" (cyan accent)
- [ ] Success state: "You're on the list! We'll notify you at launch."
- [ ] Store submissions (Supabase table: learner_waitlist)
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-009: Create dedicated "For Creators" page
**Description:** As a creator, I want a dedicated page explaining creator benefits so I can evaluate joining Dojo.

**Acceptance Criteria:**
- [ ] Route: /for-creators
- [ ] Hero: "Turn Your Expertise Into Scalable Income"
- [ ] Value props section:
  - 70% revenue share (vs industry standard)
  - AI handles course structure (you just teach)
  - Reach learners through the feed (no marketing needed)
  - Real-time analytics on student progress
- [ ] "The Creator Struggle" problem statement (from pitch deck)
- [ ] Embedded creator application form
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-010: Create dedicated "For Learners" page
**Description:** As a learner, I want a dedicated page explaining learner benefits so I can evaluate using Dojo.

**Acceptance Criteria:**
- [ ] Route: /for-learners
- [ ] Hero: "Master Any Skill, One Swipe at a Time"
- [ ] Value props section:
  - Bite-sized micro-lessons that fit your schedule
  - Learn from real practitioners, not celebrities
  - Peer-reviewed content quality
  - Seamless path from free content to deep mastery
- [ ] "The Consumer Struggle" problem statement (from pitch deck)
- [ ] Embedded learner waitlist form
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-011: Create "How It Works" page
**Description:** As a visitor, I want a detailed explanation of how Dojo works so I can understand the platform deeply.

**Acceptance Criteria:**
- [ ] Route: /how-it-works
- [ ] Sections:
  - The Dojo Engine (detailed breakdown with visuals)
  - For Creators: Upload → AI Processing → Publish → Earn
  - For Learners: Discover → Sample → Commit → Master
  - The Marketplace Loop (creators + learners ecosystem)
- [ ] Visual diagrams matching pitch deck style
- [ ] CTAs at bottom for both creators and learners
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-012: Update About page with founder info
**Description:** As a visitor, I want to learn about the team so I can trust the company.

**Acceptance Criteria:**
- [ ] Route: /about (update existing)
- [ ] Company mission statement
- [ ] Founder section: Jack Modesett bio and photo (from pitch deck)
- [ ] Background: Ares Capital, InSite Property Group, UCSB
- [ ] "Founder-Market Fit" narrative
- [ ] Contact information or link
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-013: Build marketing footer
**Description:** As a visitor, I want a footer with navigation and legal links so I can find information and contact the company.

**Acceptance Criteria:**
- [ ] Dojo logo
- [ ] Navigation columns: Product (How It Works, For Creators, For Learners), Company (About, Blog), Legal (Terms, Privacy)
- [ ] Social links placeholder (Twitter/X, LinkedIn)
- [ ] Copyright notice
- [ ] "Login" link
- [ ] Dark background consistent with site theme
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-014: Create Supabase tables for form submissions
**Description:** As a developer, I need database tables to store creator applications and learner waitlist signups.

**Acceptance Criteria:**
- [ ] Table: creator_applications (id, created_at, name, email, niche, social_link, audience_size, status)
- [ ] Table: learner_waitlist (id, created_at, email, name, interests)
- [ ] RLS policies allowing anonymous inserts
- [ ] Email uniqueness constraint on both tables
- [ ] Migration file created
- [ ] Typecheck passes

---

### US-015: Add page transitions and micro-interactions
**Description:** As a visitor, I want smooth animations so the site feels polished and premium.

**Acceptance Criteria:**
- [ ] Page fade-in transitions using Framer Motion (already installed as 'motion')
- [ ] Scroll-triggered animations for sections (fade up on enter)
- [ ] Button hover states with subtle glow effects
- [ ] Card hover states with border glow
- [ ] Smooth scroll for anchor links
- [ ] Respect prefers-reduced-motion
- [ ] Typecheck passes
- [ ] Verify in browser

---

### US-016: Implement responsive design across all pages
**Description:** As a mobile user, I want the site to work perfectly on my device so I can learn about Dojo anywhere.

**Acceptance Criteria:**
- [ ] All pages render correctly at: 320px, 768px, 1024px, 1440px
- [ ] Mobile navigation works correctly
- [ ] Forms are usable on mobile
- [ ] Images are optimized and responsive
- [ ] Touch targets meet minimum 44px size
- [ ] Typecheck passes
- [ ] Verify in browser at multiple viewport sizes

---

### US-017: SEO and metadata optimization
**Description:** As a marketer, I want proper SEO so the site ranks well in search results.

**Acceptance Criteria:**
- [ ] Update root metadata with Dojo branding
- [ ] Unique title and description for each page
- [ ] Open Graph images for social sharing
- [ ] Structured data (Organization, WebSite)
- [ ] Sitemap includes all new pages
- [ ] Typecheck passes

## Functional Requirements

- FR-1: All marketing pages must use the dark theme with cyan/teal accents
- FR-2: Login link must navigate to existing /auth/login page
- FR-3: Creator applications must be stored in Supabase with email notifications (future)
- FR-4: Learner waitlist must be stored in Supabase
- FR-5: All forms must have client-side validation before submission
- FR-6: Site must be fully responsive (mobile-first)
- FR-7: All interactive elements must be keyboard accessible
- FR-8: Page load performance must maintain good Core Web Vitals

## Non-Goals (Out of Scope)

- No changes to the authenticated dashboard (/dashboard)
- No changes to existing auth flows (login, signup, password reset)
- No payment integration on marketing site
- No blog content updates (structure only if needed)
- No email automation for form submissions (manual review for now)
- No A/B testing infrastructure
- No analytics integration beyond existing setup

## Design Considerations

### Color Palette (from pitch deck)
- Background: #0a0a0a (near black), #111111 (dark gray)
- Primary accent: #22d3ee (cyan-400), #00d4ff (bright cyan)
- Secondary accent: #ef4444 (red for contrast elements)
- Text: #ffffff (primary), #a1a1aa (secondary/muted)
- Cards: #1a1a1a with subtle border

### Typography
- Keep existing font stack or consider modern sans-serif (Inter, Geist)
- Large, bold headlines matching pitch deck style
- Clean, readable body text

### Component Reuse
- Leverage existing Radix UI components
- Use existing Button, Card, Input components with updated styling
- Maintain consistency with authenticated app where appropriate

## Technical Considerations

- Built on existing Next.js 15 + React 19 stack
- Use existing Supabase integration for form storage
- Leverage existing Tailwind CSS setup
- Motion library already installed for animations
- Must maintain TypeScript strict mode compliance
- Preserve existing routing structure ((marketing) group)

## Success Metrics

- Creator application form submissions (target: 10+ in first month)
- Learner waitlist signups (target: 100+ in first month)
- Bounce rate < 50% on homepage
- Mobile usability score > 90 (Lighthouse)
- Page load time < 3s on 3G

## Open Questions

1. Should the hero include a video demo or app screenshots?
2. Are there specific creator testimonials or case studies to feature?
3. Should we add a "Live MVP" badge or beta indicator?
4. What social links should be included in the footer?
5. Should there be a separate "Investors" page or section?
