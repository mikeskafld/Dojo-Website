"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

export default function MarketingFAQ() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section>
      <div className="w-full" ref={containerRef}>
        <SectionCard
          className="container mx-auto max-w-7xl"
          innerClassName="px-1 sm:px-1 md:px-1 py-1 md:py-1 h-full w-full"
        >
          <motion.div
            className=""
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="mx-auto space-y-4">
              {/* Mobile Accordion */}
              <div className="md:hidden">
                <div className="py-6 px-2">
                  <GradientHeading size="xxl" weight="base">
                    F.A.Q
                  </GradientHeading>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-muted/50 rounded-lg overflow-hidden border-none"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-foreground/80 text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Desktop Grid */}
              <motion.div
                className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[minmax(min-content,max-content)]"
                variants={containerVariants}
              >
                {faqItems.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={index}
                    className="group shadow-elevation-light dark:shadow-elevation-dark dark:hover:shadow-elevation-dark-two p-1 bg-card"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <div className="h-full p-6 shadow-elevation-light dark:shadow-elevation-dark hover:shadow-elevation-medium dark:hover:shadow-elevation-dark-two transition-all duration-300 bg-muted/50">
                      <h3 className="text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="flex justify-center items-center dark:bg-background p-1"
                  variants={itemVariants}
                >
                  <GradientHeading
                    size="xxl"
                    weight="base"
                    className="leading-[1.5rem] md:leading-[1.5rem] lg:leading-[1.5rem] mb-4"
                  >
                    F.A.Q
                  </GradientHeading>
                </motion.div>

                {faqItems.slice(4, 8).map((item, index) => (
                  <motion.div
                    key={index}
                    className="group shadow-elevation-light dark:shadow-elevation-dark dark:hover:shadow-elevation-dark-two p-1 bg-card"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <div className="h-full bg-muted/50 p-6 shadow-elevation-light dark:shadow-elevation-dark dark:hover:shadow-elevation-dark-two transition-all duration-300">
                      <h3 className="text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </SectionCard>
      </div>
    </section>
  )
}

const faqItems = [
  // Creator Questions
  {
    question: "How does the revenue share work for creators?",
    answer:
      "Creators earn 70% of net revenue generated from their content. Revenue is calculated based on learner engagement with your lessons, and payouts are processed monthly for balances exceeding $50 USD.",
  },
  {
    question: "What's the content upload process?",
    answer:
      "Simply upload your expertise in any format - videos, documents, or existing content. Our AI transforms your material into structured micro-lessons optimized for learning retention. You review and approve before anything goes live.",
  },
  {
    question: "Do I retain ownership of my content?",
    answer:
      "Yes, you retain full ownership of your original content. You grant Dojo a license to process, display, and create learning materials from your uploads, but the underlying intellectual property remains yours.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "Payouts are processed monthly via your preferred payment method set up in your creator dashboard. You can track your earnings, engagement metrics, and upcoming payouts in real-time.",
  },
  // Learner Questions
  {
    question: "How much does a Dojo subscription cost?",
    answer:
      "We offer flexible subscription plans with monthly and annual options. Subscribers get unlimited access to all lessons on the platform. Check our pricing page for current plans and early-bird discounts.",
  },
  {
    question: "What format are the lessons in?",
    answer:
      "Lessons are delivered as bite-sized micro-lessons designed for 5-10 minute learning sessions. Each lesson includes summaries, interactive quizzes, and progress tracking to maximize retention.",
  },
  {
    question: "When is Dojo launching?",
    answer:
      "We're launching soon! Join the waitlist to be notified when we go live. Early waitlist members will get exclusive access to founding member pricing and first pick of new content.",
  },
  {
    question: "What are the benefits of joining early?",
    answer:
      "Early members get locked-in founding member pricing, exclusive access to beta features, and direct input on platform development. Plus, you'll be first to access content from our creator community.",
  },
]
