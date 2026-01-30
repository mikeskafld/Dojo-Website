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

            <div className="space-y-6 text-foreground/80">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  1. Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing and using Vibe Marketing, you agree to be bound
                  by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using or accessing this site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  2. Use License
                </h2>
                <p className="leading-relaxed">
                  Permission is granted to temporarily use Vibe Marketing for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on Vibe Marketing
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  3. User Content
                </h2>
                <p className="leading-relaxed">
                  Users may post content as long as it isn&apos;t illegal,
                  obscene, threatening, defamatory, invasive of privacy,
                  infringing of intellectual property rights, or otherwise
                  injurious to third parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  4. Disclaimer
                </h2>
                <p className="leading-relaxed">
                  The materials on Vibe Marketing are provided on an &apos;as
                  is&apos; basis. Vibe Marketing makes no warranties, expressed
                  or implied, and hereby disclaims and negates all other
                  warranties including, without limitation, implied warranties
                  or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other
                  violation of rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  5. Limitations
                </h2>
                <p className="leading-relaxed">
                  In no event shall Vibe Marketing or its suppliers be liable
                  for any damages (including, without limitation, damages for
                  loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  Vibe Marketing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  6. Revisions and Errata
                </h2>
                <p className="leading-relaxed">
                  The materials appearing on Vibe Marketing could include
                  technical, typographical, or photographic errors. Vibe
                  Marketing does not warrant that any of the materials on its
                  website are accurate, complete, or current.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  7. Contact Information
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please
                  contact us at support@vibemarketing.com
                </p>
              </section>
            </div>
          </div>
          {/* </div> */}
        </SectionCard>
      </FadeIn>
    </div>
  )
}
