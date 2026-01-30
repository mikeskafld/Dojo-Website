"use client"

import { useRef } from "react"
import { Sparkles } from "lucide-react"
import { motion, useInView } from "motion/react"

import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"
import { Tilt } from "@/components/tilt-card"

export default function FeaturesSection() {
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

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3,
      },
    },
  }

  return (
    <section>
      <div className="w-full  " ref={containerRef}>
        <SectionCard
          className="md:container mx-auto max-w-7xl"
          innerClassName="pt-6 pb-2 "
        >
          <motion.div
            className="grid gap-4 md:gap-16 lg:grid-cols-2 lg:gap-12 md:items-center "
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="space-y-8 md:space-y-10 p-1 pt-2 sm:py-8 sm:p-4">
              <motion.div className="space-y-4" variants={itemVariants}>
                <GradientHeading
                  size="xxl"
                  weight="base"
                  className="leading-[1.5rem] md:leading-[1.5rem] lg:leading-[1.5rem]"
                >
                  {sectionCopy.title}
                </GradientHeading>
              </motion.div>

              <motion.div className="space-y-6" variants={containerVariants}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group flex gap-4 md:gap-6 items-start"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      className="relative w-10 h-10 md:w-18 md:h-18 flex-shrink-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-card/5 shadow-elevation-light dark:shadow-elevation-dark-two"
                        layoutId={`feature-bg-${index}`}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      />
                      <motion.div
                        className="relative text-primary z-10"
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </motion.div>
                    <div className="space-y-1.5 md:space-y-1 min-w-0 flex-1">
                      <motion.h3
                        className="text-lg md:text-base tracking-tight font-medium leading-snug text-foreground group-hover:text-primary transition-colors duration-300 ease-in-out"
                        // whileHover={{ color: "var(--primary)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature.title}
                      </motion.h3>
                      <p className="text-foreground/80 text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative mt-8 md:mt-0 pb-3 md:pb-0"
              variants={dashboardVariants}
            >
              <Tilt
                rotationFactor={10}
                isRevese
                animateInitial
                initialTiltX={20}
                initialTiltY={30}
                initialDelay={0}
              >
                <div className="relative w-full overflow-hidden bg-background  p-3 shadow-elevation-light dark:shadow-xl ">
                  <motion.div
                    className="relative bg-card   border shadow-lg overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-4 border-b flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-card  flex items-center justify-center text-primary shadow-elevation-light dark:shadow-elevation-dark-two">
                          <Sparkles className="size-5" />
                        </div>
                        <span className="font-medium">Vibe</span>
                      </div>
                      <div className="relative rounded-full border shadow-sm flex-1 min-w-[200px] max-w-xs">
                        <div className="flex items-center">
                          <div className="pl-3">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            placeholder="Search models..."
                            className="py-1.5 px-3 bg-transparent text-sm outline-none w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row h-[360px]">
                      <div className="hidden sm:block sm:w-1/3 border-r">
                        <div className="p-4 text-sm">
                          <p className="text-muted-foreground mb-4 text-xs font-medium uppercase tracking-wider">
                            Workspace
                          </p>
                          <ul className="space-y-2">
                            {workspaceItems.map((item, index) => (
                              <li
                                key={index}
                                className={`flex items-center gap-2 text-sm py-1 px-2 rounded-md ${
                                  item.active
                                    ? "text-primary font-medium bg-primary/5"
                                    : "hover:bg-muted"
                                } transition-colors cursor-pointer`}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {item.icon === "dashboard" && (
                                    <path
                                      d="M3 9H21M9 21V9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  )}
                                  {item.icon === "check-circle" && (
                                    <>
                                      <path
                                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8 12L11 15L16 10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </>
                                  )}
                                  {item.icon === "dollar-sign" && (
                                    <path
                                      d="M2 12H5M5 12C6.10457 12 7 11.1046 7 10C7 8.89543 6.10457 8 5 8H3V12M5 12C6.10457 12 7 12.8954 7 14C7 15.1046 6.10457 16 5 16H3V12M12 8V16M12 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12H12M12 12H14C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H12M21 8V16"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  )}
                                  {item.icon === "line-chart" && (
                                    <>
                                      <path
                                        d="M3 3V21H21"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19 5L10 14L7 11L3 15"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </>
                                  )}
                                </svg>
                                {item.label}
                              </li>
                            ))}
                          </ul>

                          <p className="text-muted-foreground mt-6 mb-3 text-xs font-medium uppercase tracking-wider">
                            Projects
                          </p>
                          <ul className="space-y-1">
                            {projects.map((project, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-xs py-1.5 px-2 md:rounded-md hover:bg-muted transition-colors cursor-pointer"
                              >
                                <div className="w-4 h-4 md:rounded-sm bg-primary/10 flex items-center justify-center text-primary text-[10px] font-medium">
                                  {project.initial}
                                </div>
                                <span>{project.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="w-full sm:w-2/3 p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-medium text-xs uppercase tracking-wider">
                            Recent Prompts
                          </h3>
                          <div className="flex items-center gap-2 sm:hidden">
                            {workspaceItems.map((item, index) => (
                              <button
                                key={index}
                                className={`p-1.5 rounded-md ${
                                  item.active
                                    ? "text-primary bg-primary/5"
                                    : "text-muted-foreground hover:bg-muted"
                                }`}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {item.icon === "dashboard" && (
                                    <path
                                      d="M3 9H21M9 21V9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  )}
                                  {item.icon === "check-circle" && (
                                    <>
                                      <path
                                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8 12L11 15L16 10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </>
                                  )}
                                  {item.icon === "dollar-sign" && (
                                    <path
                                      d="M2 12H5M5 12C6.10457 12 7 11.1046 7 10C7 8.89543 6.10457 8 5 8H3V12M5 12C6.10457 12 7 12.8954 7 14C7 15.1046 6.10457 16 5 16H3V12M12 8V16M12 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12H12M12 12H14C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H12M21 8V16"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  )}
                                  {item.icon === "line-chart" && (
                                    <>
                                      <path
                                        d="M3 3V21H21"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19 5L10 14L7 11L3 15"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </>
                                  )}
                                </svg>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          {recentPrompts.map((prompt, index) => (
                            <motion.div
                              key={index}
                              className="border rounded-md p-2.5 hover:border-primary/30 transition-colors cursor-pointer"
                              whileHover={{ y: -2, x: 2 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-1.5 h-1.5 ${
                                      prompt.status === "active"
                                        ? "bg-green-500"
                                        : "bg-amber-400"
                                    } rounded-full`}
                                  ></div>
                                  <span className="font-medium text-xs">
                                    {prompt.name}
                                  </span>
                                  <span className="text-muted-foreground text-[10px]">
                                    /
                                  </span>
                                  <span className="text-muted-foreground text-[10px]">
                                    {prompt.version}
                                  </span>
                                </div>
                              </div>
                              <div className="text-[10px] text-muted-foreground mt-1.5 flex items-center gap-2">
                                <span className="font-medium">
                                  {prompt.model}
                                </span>
                                <span>•</span>
                                <span>{prompt.metric}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Tilt>
            </motion.div>
          </motion.div>
        </SectionCard>
      </div>
    </section>
  )
}

const sectionCopy = {
  title: "Create viral content.",
  cta: {
    text: "Start Creating",
    href: "/pricing",
  },
}

const workspaceItems = [
  { icon: "dashboard", label: "Content" },
  { icon: "check-circle", label: "Trends", active: true },
  { icon: "dollar-sign", label: "Analytics" },
  { icon: "line-chart", label: "Insights" },
]

const projects = [
  { initial: "S", name: "Social Media" },
  { initial: "B", name: "Blog Posts" },
  { initial: "E", name: "Email Campaigns" },
]

const recentPrompts = [
  {
    name: "Viral Post",
    version: "v2.3",
    model: "GPT-4",
    status: "active",
    metric: "98.7% engagement",
  },
  {
    name: "Story Caption",
    version: "testing",
    model: "Claude 3",
    status: "testing",
    metric: "Updated 2h ago",
  },
  {
    name: "Hashtag Set",
    version: "production",
    model: "GPT-4",
    status: "active",
    metric: "1.2M impressions",
  },
  {
    name: "Reel Script",
    version: "v1.0",
    model: "Claude 3",
    status: "active",
    metric: "99.2% completion",
  },
]

const features = [
  {
    title: "AI Content Generation",
    description:
      "Generate engaging social media posts, captions, and stories that match your brand's voice and style.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10C6.9 10 6 10.9 6 12C6 13.1 6.9 14 8 14C9.1 14 10 13.1 10 12C10 10.9 9.1 10 8 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 10C14.9 10 14 10.9 14 12C14 13.1 14.9 14 16 14C17.1 14 18 13.1 18 12C18 10.9 17.1 10 16 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Trend Analysis",
    description:
      "Stay ahead of the curve with real-time trend detection and content optimization for maximum impact.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 10V3L4 14H11V21L20 10H13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Engagement Analytics",
    description:
      "Track performance metrics and optimize your content strategy with detailed insights and recommendations.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16.5V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 21H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 3.5H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 8.5H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12.5H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16.5H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3.5V8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]
