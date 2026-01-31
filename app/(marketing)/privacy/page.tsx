import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

export default function PrivacyPage() {
  return (
    <div className="space-y-8 pb-2">
      <FadeIn key="privacy">
        <SectionCard>
          <div className="space-y-6">
            <GradientHeading size="xxxl" weight="base">
              Privacy Policy
            </GradientHeading>

            <p className="text-foreground/60 text-sm">
              Last updated: January 2026
            </p>

            <div className="space-y-6 text-foreground/80">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  1. Introduction
                </h2>
                <p className="leading-relaxed">
                  Dojo (&quot;we&quot;, &quot;our&quot;, or &quot;the
                  Platform&quot;) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website and use
                  our learning marketplace platform.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  2. Information We Collect
                </h2>
                <p className="leading-relaxed">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Waitlist Information:</strong> Email address and
                    name when you join our learner waitlist
                  </li>
                  <li>
                    <strong>Creator Applications:</strong> Name, email, social
                    media handles, area of expertise, audience size, and content
                    samples when you apply as a creator
                  </li>
                  <li>
                    <strong>Account Information:</strong> Email, password, and
                    profile details when you create an account
                  </li>
                  <li>
                    <strong>Content Uploads:</strong> Educational content,
                    videos, documents, and materials you upload as a creator
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Billing details
                    processed through our payment provider, Polar
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  3. Analytics and Tracking
                </h2>
                <p className="leading-relaxed">
                  We use analytics services to understand how visitors interact
                  with our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Usage Analytics:</strong> We collect anonymous data
                    about page views, session duration, and user interactions to
                    improve our platform
                  </li>
                  <li>
                    <strong>Learning Analytics:</strong> For learners, we track
                    lesson progress, quiz scores, and engagement metrics to
                    personalize your learning experience
                  </li>
                  <li>
                    <strong>Creator Analytics:</strong> We provide creators with
                    aggregated, anonymized data about how learners engage with
                    their content
                  </li>
                  <li>
                    <strong>Cookies:</strong> We use essential cookies for
                    authentication and optional cookies for analytics purposes
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  4. Payment Processing
                </h2>
                <p className="leading-relaxed">
                  We use Polar as our payment processor for subscriptions and
                  creator payouts:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Payment card information is collected and processed directly
                    by Polar and is never stored on our servers
                  </li>
                  <li>
                    We receive limited transaction information (amount, date,
                    subscription status) necessary to provide our services
                  </li>
                  <li>
                    Creator payout information is securely handled through
                    Polar&apos;s payment infrastructure
                  </li>
                  <li>
                    Polar&apos;s privacy practices are governed by their own
                    privacy policy
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Content Uploads and AI Processing
                </h2>
                <p className="leading-relaxed">
                  When creators upload content to Dojo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Content is securely stored and processed to create
                    structured micro-lessons
                  </li>
                  <li>
                    Our AI systems analyze your content to generate summaries,
                    quizzes, and learning paths
                  </li>
                  <li>
                    We do not share your raw content with third parties without
                    your consent
                  </li>
                  <li>
                    You retain ownership of your original content as described
                    in our Terms of Service
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  6. How We Use Your Information
                </h2>
                <p className="leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our platform</li>
                  <li>Process transactions and send related information</li>
                  <li>
                    Send you updates about Dojo, including launch announcements
                    and feature updates
                  </li>
                  <li>
                    Personalize your learning experience and recommend relevant
                    content
                  </li>
                  <li>
                    Analyze usage patterns to improve our AI and platform
                    features
                  </li>
                  <li>
                    Respond to your comments, questions, and customer service
                    requests
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  7. Information Sharing
                </h2>
                <p className="leading-relaxed">
                  We do not sell your personal information. We may share
                  information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With vendors who perform
                    services on our behalf (hosting, analytics, payment
                    processing)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>With Consent:</strong> When you have given us
                    explicit permission to share your information
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  8. Data Retention
                </h2>
                <p className="leading-relaxed">
                  We retain your information for as long as your account is
                  active or as needed to provide you services. You may request
                  deletion of your data at any time. Waitlist and application
                  data is retained until you unsubscribe or request removal.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  9. Your Rights
                </h2>
                <p className="leading-relaxed">
                  Depending on your location, you may have certain rights
                  regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise these rights, please contact us at the email below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  10. Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the Internet is 100% secure, and
                  we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  11. Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last updated&quot; date.
                  Continued use of the platform after changes constitutes
                  acceptance of the updated policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  12. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at{" "}
                  <a
                    href="mailto:hello@joindojo.co"
                    className="text-dojo-cyan hover:underline"
                  >
                    hello@joindojo.co
                  </a>
                </p>
              </section>
            </div>
          </div>
        </SectionCard>
      </FadeIn>
    </div>
  )
}
