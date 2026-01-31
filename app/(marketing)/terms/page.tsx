import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

export default function TermsPage() {
  return (
    <div className="space-y-8 pb-2">
      <FadeIn key="terms">
        <SectionCard>
          <div className="space-y-6">
            <GradientHeading size="xxxl" weight="base">
              Terms of Service
            </GradientHeading>

            <p className="text-foreground/60 text-sm">
              Last updated: January 2026
            </p>

            <div className="space-y-6 text-foreground/80">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  1. Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing and using Dojo (&quot;the Platform&quot;), you
                  agree to be bound by these Terms of Service and all applicable
                  laws and regulations. If you do not agree with any of these
                  terms, you are prohibited from using or accessing this site.
                  Dojo is a learning marketplace connecting creators with
                  learners through AI-enhanced micro-lessons.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  2. Platform Description
                </h2>
                <p className="leading-relaxed">
                  Dojo is a learning marketplace that enables creators to share
                  their expertise through structured micro-lessons, while
                  learners can access skill-based content from real
                  practitioners. Our AI technology helps transform creator
                  content into engaging, digestible lessons optimized for
                  retention.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  3. Creator Content and Uploads
                </h2>
                <p className="leading-relaxed">
                  As a creator on Dojo, you retain ownership of all original
                  content you upload to the platform. By uploading content, you
                  grant Dojo a non-exclusive license to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Process and transform your content using AI to create
                    structured micro-lessons
                  </li>
                  <li>
                    Display, distribute, and promote your content to learners on
                    the platform
                  </li>
                  <li>
                    Create derivative works (lesson summaries, quizzes, learning
                    paths) from your content
                  </li>
                  <li>
                    Use your content for platform improvement and quality
                    assurance
                  </li>
                </ul>
                <p className="leading-relaxed">
                  You represent that you have all necessary rights to the
                  content you upload and that such content does not infringe on
                  any third-party intellectual property rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  4. Creator Revenue Share
                </h2>
                <p className="leading-relaxed">
                  Creators on Dojo earn revenue through our revenue share
                  program:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Creators receive 70% of net revenue generated from their
                    content
                  </li>
                  <li>
                    Revenue is calculated based on learner engagement with your
                    lessons
                  </li>
                  <li>
                    Payouts are processed monthly for balances exceeding $50 USD
                  </li>
                  <li>
                    Payment is made via the payment method you specify in your
                    creator dashboard
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Dojo reserves the right to adjust revenue share terms with 30
                  days notice to creators. Historical earnings will not be
                  affected by changes to future revenue share terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Learner Subscriptions
                </h2>
                <p className="leading-relaxed">
                  Learners access Dojo content through subscription plans:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Subscriptions are billed monthly or annually as selected at
                    checkout
                  </li>
                  <li>
                    Subscription provides unlimited access to all lessons on the
                    platform
                  </li>
                  <li>
                    Cancellation takes effect at the end of the current billing
                    period
                  </li>
                  <li>
                    Refunds may be issued within 7 days of initial subscription
                    or renewal
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Dojo reserves the right to modify subscription pricing with 30
                  days notice to existing subscribers. Active subscriptions will
                  honor their current rate until the next renewal period.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  6. Acceptable Use
                </h2>
                <p className="leading-relaxed">
                  Users of Dojo agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Upload content that is illegal, obscene, threatening,
                    defamatory, or invasive of privacy
                  </li>
                  <li>
                    Share, redistribute, or resell content from the platform
                    without authorization
                  </li>
                  <li>
                    Attempt to circumvent security measures or access systems
                    without permission
                  </li>
                  <li>
                    Use automated systems to scrape or extract content from the
                    platform
                  </li>
                  <li>
                    Impersonate other users or misrepresent your identity or
                    credentials
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  7. Disclaimer of Warranties
                </h2>
                <p className="leading-relaxed">
                  The materials and content on Dojo are provided on an
                  &quot;as-is&quot; basis. Dojo makes no warranties, expressed
                  or implied, regarding the accuracy, completeness, or
                  reliability of any content on the platform. Educational
                  content is provided for informational purposes and should not
                  be considered professional advice.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  8. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  In no event shall Dojo or its affiliates be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages arising out of your use or inability to use the
                  platform, including but not limited to damages for loss of
                  profits, data, or other intangibles.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  9. Changes to Terms
                </h2>
                <p className="leading-relaxed">
                  Dojo reserves the right to modify these Terms of Service at
                  any time. We will notify users of material changes via email
                  or through the platform. Continued use of the platform after
                  changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  10. Contact Information
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please
                  contact us at{" "}
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
