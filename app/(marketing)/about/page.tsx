"use client"

import { motion } from "motion/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedGroup } from "@/components/animated-group"
import { FadeIn } from "@/components/fade-in"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

import { MarketingCTA } from "../marketing-cta"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sophia Chen",
      role: "Chief Executive Officer",
      image: "https://i.pravatar.cc/150?img=68",
    },
    {
      name: "Marcus Rivera",
      role: "Chief Technology Officer",
      image: "https://i.pravatar.cc/150?img=62",
    },
    {
      name: "Amara Okafor",
      role: "Head of Product Design",
      image: "https://i.pravatar.cc/150?img=25",
    },
    {
      name: "Ethan Nakamura",
      role: "Director of Engineering",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Olivia Patel",
      role: "Chief Marketing Officer",
      image: "https://i.pravatar.cc/150?img=48",
    },
    {
      name: "Noah Bergström",
      role: "Head of Customer Experience",
      image: "https://i.pravatar.cc/150?img=12",
    },
  ]

  return (
    <div className="space-y-1 md:space-y-4 md:pb-2">
      <FadeIn key="about">
        {/* <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-24 pb-8 md:pb-6"> */}
        <div className="space-y-1 md:space-y-4">
          <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-16 pb-8 md:pb-12">
            <div className="space-y-8 ">
              <FadeIn>
                <GradientHeading size="xxxl" weight="base">
                  About
                </GradientHeading>
              </FadeIn>

              {/* Vision and Story */}
              <div className="grid gap-8 md:grid-cols-2">
                <FadeIn>
                  <div className="space-y-4">
                    <GradientHeading size="sm" weight="base">
                      Our Vision
                    </GradientHeading>
                    <p className="text-muted-foreground leading-relaxed text-pretty text-lg lg:text-xl">
                      We&apos;re on a mission to revolutionize web development
                      by making beautiful, performant interfaces accessible to
                      everyone. Our platform combines cutting-edge design with
                      powerful functionality to help creators build the next
                      generation of digital experiences.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="space-y-4">
                    <GradientHeading size="sm" weight="base">
                      Our Story
                    </GradientHeading>
                    <p className="text-muted-foreground leading-relaxed text-pretty text-lg lg:text-xl">
                      Born from the frustration of complex development
                      workflows, we set out to create a toolkit that empowers
                      developers to focus on what matters most: creating
                      exceptional user experiences. Today, we&apos;re proud to
                      serve a growing community of creators.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </SectionCard>

          {/* Team */}
          <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-12 pb-8 md:pb-12">
            <div className="space-y-12 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <GradientHeading size="xxl" weight="base" className="mb-4">
                  The Team
                </GradientHeading>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "13.2rem" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    type: "spring",
                    bounce: 0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-[1px] bg-primary/20 mb-8"
                />
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                  Bringing together diverse perspectives and exceptional talent
                  to create products that enrich lives and redefine what&apos;s
                  possible.
                </p>
              </motion.div>

              <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 * index,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center gap-7"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-sm blur-md opacity-70 scale-90"></div>
                      <Avatar className="h-20 w-20 rounded-sm border border-border/50 shadow-elevation-light dark:shadow-elevation-dark-two relative bg-card/20 overflow-hidden">
                        <AvatarImage
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="object-cover scale-[1.02]"
                        />
                        <AvatarFallback className="bg-muted text-foreground">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight mb-1">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground font-normal tracking-tight">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatedGroup>
            </div>
          </SectionCard>

          {/* Values */}
          <SectionCard innerClassName="py-0 md:py-0 pt-16 md:pt-12 pb-8 md:pb-6">
            <div className="space-y-12 ">
              <FadeIn>
                <GradientHeading size="xxl" weight="base" className="mb-4">
                  Values
                </GradientHeading>
              </FadeIn>

              <AnimatedGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Innovation",
                    description:
                      "Pushing boundaries and exploring new possibilities in web development.",
                  },
                  {
                    title: "Accessibility",
                    description:
                      "Making advanced design and development tools available to everyone.",
                  },
                  {
                    title: "Community",
                    description:
                      "Building a supportive ecosystem where creators can thrive and grow.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "Delivering exceptional quality in every line of code and pixel we create.",
                  },
                  {
                    title: "Sustainability",
                    description:
                      "Building solutions that are efficient, maintainable, and future-proof.",
                  },
                  {
                    title: "Empowerment",
                    description:
                      "Enabling developers to bring their boldest ideas to life with confidence.",
                  },
                ].map((value, index) => (
                  <div key={index}>
                    <SectionCard
                      //   innerClassName="dark:shadow-elevation-dark-two bg-card/20"
                      innerClassName="dark:shadow-elevation-dark-two bg-card/20"
                      className="dark:shadow-xl bg-card/20"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </SectionCard>
                  </div>
                ))}
              </AnimatedGroup>
            </div>
          </SectionCard>
        </div>
        {/* </div> */}
      </FadeIn>
      <FadeIn>
        <MarketingCTA />
      </FadeIn>
    </div>
  )
}
