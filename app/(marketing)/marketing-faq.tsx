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
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI analyzes your brand's voice, target audience, and content goals to generate engaging social media posts, captions, and stories. You can customize the output and maintain full control over what gets published.",
  },
  {
    question: "What kind of analytics do you provide?",
    answer:
      "We provide comprehensive analytics including engagement rates, reach, impressions, and audience insights. Our platform also offers content performance predictions and optimization recommendations.",
  },
  {
    question: "Can I integrate with my existing social media accounts?",
    answer:
      "Yes, we offer seamless integration with major social media platforms including Instagram, Twitter, LinkedIn, and Facebook. You can manage all your accounts from a single dashboard.",
  },
  {
    question: "How often is the trend analysis updated?",
    answer:
      "Our trend analysis is updated in real-time, providing you with the latest insights and opportunities. We monitor multiple data sources to ensure you never miss a trending topic relevant to your brand.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 email support for all users, with priority support and Slack access for Plus plan subscribers. Our team is always ready to help you maximize your content strategy.",
  },
  {
    question: "Is there a limit to how much content I can generate?",
    answer:
      "No, there are no limits on content generation. You can create as much content as you need to maintain an active and engaging social media presence.",
  },
  {
    question: "Can I schedule posts in advance?",
    answer:
      "Yes, our platform includes a powerful scheduling feature that allows you to plan and schedule your content weeks or months in advance. You can also set up automated posting at optimal times for maximum engagement.",
  },
  {
    question: "How do you ensure content quality and brand consistency?",
    answer:
      "Our AI is trained to maintain your brand's voice and style while generating content. You can set brand guidelines, tone preferences, and content parameters to ensure all generated content aligns with your brand identity.",
  },
]
