"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { useIsMobile } from "@/hooks/use-mobile"
import { GlowEffect } from "@/components/bg-glow"
import { GradientHeading } from "@/components/gradient-heading"
import { Magnetic } from "@/components/magnetic"
import { ProgressiveBlur } from "@/components/progressive-blur"
import { ProximityHoverText } from "@/components/proximity-hover-effect"
import { TextShimmerWave } from "@/components/text-shimmer"
import { Tilt } from "@/components/tilt-card"

export function LandingHeroSection() {
  const isMobile = useIsMobile()
  return (
    <div className="">
      <div className="relative w-full flex gap-1 md:gap-0 flex-col md:flex-row ">
        <motion.div
          initial={{ opacity: isMobile ? 0.9 : 0, y: isMobile ? 4 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.05 : 0.5 }}
          className="relative  p-1   text-left md:text-left w-full bg-background   shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark"
        >
          {/* Main content */}
          <motion.div
            initial={{ opacity: isMobile ? 0.9 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.15 : 0.5 }}
            className="  space-y-2 md:space-y-8 lg:space-y-10 h-full mx-auto md:mx-0 w-full shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-4 py-12 md:px-8  p-1.5 bg-card/50"
          >
            {/* Eyebrow text */}
            <div className="absolute bottom-0 right-12 hidden md:block">
              <TextShimmerWave>Welcome to the Future</TextShimmerWave>
            </div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="md:px-2  pt-2 lg:pt-18"
            >
              <div className="xl:hidden space-y-4">
                <GradientHeading size="xxxl" weight="base">
                  Vibe
                </GradientHeading>
                <GradientHeading size="xxxl" weight="base">
                  Marketing
                </GradientHeading>
              </div>
              <div className="hidden xl:block xl:space-y-8 ">
                <ProximityHoverText
                  text="Vibe"
                  radius={0}
                  className="leading-[0.5rem] md:leading-[6.5rem] text-[4rem]  lg:leading-8 xl:leading-10 sm:text-6xl lg:text-[8rem] font-black tracking-tight"
                />

                <ProximityHoverText
                  text="Marketing"
                  radius={2}
                  className="leading-[0.5rem] md:leading-[6.5rem] text-[4rem]  lg:leading-8 xl:leading-10 sm:text-6xl lg:text-[7rem] tracking-tighter font-black"
                />
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className=" max-w-xl text-2xl md:text-3xl leading-snug tracking-tight text-foreground pb-12 md:pb-4"
            >
              Get your brand to the next level with our Vibe Marketing platform.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col justify-start gap-5 px-2 sm:flex-row sm:gap-4 md:gap-8 "
            >
              <div className="relative">
                <GlowEffect
                  scale={0.8}
                  mode="rotate"
                  blur="strongest"
                  className="absolute inset-0 px-6  md:px-12"
                />
                <Magnetic>
                  <button
                    type="button"
                    className="w-full relative z-10 sm:w-auto inline-flex items-center justify-center px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl tracking-tight text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 transition-all duration-300 hover:bg-secondary/80 group dark:hover:bg-background/60"
                  >
                    <span className="flex items-center gap-2 ">
                      Enter the <span className="ss03">vibe</span>{" "}
                      <ArrowRight className="size-5 md:size-6" />
                    </span>
                  </button>
                </Magnetic>
              </div>

              <Magnetic>
                <button
                  type="button"
                  className="hidden w-full sm:w-auto xl:inline-flex items-center justify-center shadow-elevation-light dark:shadow-elevation-dark tracking-tight px-6 py-3.5 md:py-4.5 md:px-9 text-xl md:text-2xl text-secondary-foreground transition-all duration-300    bg-secondary/30 hover:bg-secondary/80"
                >
                  <span>Learn More</span>
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>
        </motion.div>
        <HeroProductImage />
      </div>
    </div>
  )
}

function HeroProductImage() {
  const [isHover, setIsHover] = useState(false)

  return (
    <section className=" w-full ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full md:pl-4 "
      >
        <Tilt
          rotationFactor={10}
          isRevese
          animateInitial
          initialTiltX={20}
          initialTiltY={30}
          initialDelay={0}
        >
          <div
            className="relative w-full max-w-[1800px]   mx-auto overflow-hidden bg-gradient-to-br from-card via-card/95 to-muted/90 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark  p-1 transition-all duration-300"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="relative w-full overflow-hidden bg-card/20    p-1.5 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark">
              <div className=" group w-full">
                <motion.img
                  src="/place-3.png"
                  alt="Product dashboard interface"
                  width={1800}
                  height={1080}
                  className="w-full h-auto shadow-elevation-light dark:shadow-elevation-dark"
                  whileHover={{
                    scale: 1.008,
                    // borderRadius: "0px 0px 12px 0px",
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.4,
                    },
                  }}
                  initial={{
                    scale: 1.008,
                    // borderRadius: "0px 0px 12px 0px",
                  }}
                  animate={{
                    scale: 1,
                    // borderRadius: "0px 0px 9px 0px",
                    transition: {
                      delay: isHover ? 0 : 0.3,
                      type: "spring",
                      bounce: 0.2,
                      duration: isHover ? 0.4 : 0.8,
                    },
                  }}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute bottom-[2px]  left-[4px] h-[55%] w-[98.7%] mx-auto"
                  blurIntensity={0.2}
                  animate={isHover ? "visible" : "hidden"}
                  variants={{
                    hidden: {
                      opacity: 0,

                      // borderRadius: "0px 0px 9px 0px",
                      transition: {
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                        opacity: { duration: 0.2 },
                        borderRadius: { duration: 0.1 },
                      },
                    },
                    visible: {
                      opacity: 1,

                      // borderRadius: "0px 0px 12px 0px",
                      transition: {
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                        opacity: { duration: 0.2 },
                        borderRadius: { duration: 0.1 },
                      },
                    },
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0"
                  animate={isHover ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="flex flex-col items-start gap-0 px-5 py-4">
                    <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                      Become the Vibe
                    </p>
                    <span className="text-lg lg:text-xl font-medium text-white/90 tracking-tight">
                      Shift your brand to the next level
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </section>
  )
}
