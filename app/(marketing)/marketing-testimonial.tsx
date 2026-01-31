import { HTMLAttributes } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { GradientHeading } from "@/components/gradient-heading"
import { SectionCard } from "@/components/section-card"

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

const reviews = [
  {
    name: "Maria Santos",
    username: "@mariafitness • Fitness Creator",
    body: "Finally, a platform that lets me focus on what I know best while AI handles the tedious lesson structuring. 70% revenue share is unheard of!",
    img: "/davasya-tweet.jpg",
  },
  {
    name: "James Park",
    username: "@jamespark • Photography Coach",
    body: "I've tried teaching on other platforms but the production overhead was killing me. Dojo's AI transforms my raw content into polished lessons.",
    img: "/tulip-tweet.jpg",
  },
  {
    name: "Aisha Johnson",
    username: "@aishacooks • Culinary Expert",
    body: "The revenue share model actually makes sense for creators. No more fighting algorithms for views - just real income from real learners.",
    img: "/supabase-ceo.jpg",
  },
  {
    name: "David Kim",
    username: "@davidkim • Music Producer",
    body: "Micro-lessons are genius. My students actually retain what I teach them instead of getting overwhelmed by 2-hour tutorials.",
    img: "/dan-tweet.jpg",
  },
  {
    name: "Rachel Torres",
    username: "@racheltorres • Language Teacher",
    body: "The fact that I own my content while Dojo handles distribution is a game-changer. This is how creator platforms should work.",
    img: "/wayne-tweet.jpg",
  },
  {
    name: "Marcus Chen",
    username: "@marcuschen • Business Coach",
    body: "My YouTube channel has 50K subs but barely pays the bills. Dojo's model means I can actually earn from my expertise.",
    img: "/reddit-2.png",
  },
  {
    name: "Sophie Williams",
    username: "@sophiewrites • Writing Instructor",
    body: "I love that learners get bite-sized lessons they can actually finish. My completion rates are going to skyrocket compared to courses.",
    img: "/allesandro-tweet.jpg",
  },
  {
    name: "Alex Rivera",
    username: "@alexrivera • Design Mentor",
    body: "Passive income from my expertise? Yes please. The AI lesson transformation means I can scale without burning out.",
    img: "/brad-bitler-tweet.jpg",
  },
  {
    name: "Nina Patel",
    username: "@ninapatel • Yoga Instructor",
    body: "Traditional online courses take months to produce. With Dojo, I can share my knowledge and start earning almost immediately.",
    img: "/reddit-3.png",
  },
  {
    name: "Chris Thompson",
    username: "@christhompson • Developer Educator",
    body: "The cognitive scaffolding approach is backed by real learning science. This isn't just another course platform.",
    img: "/aaron-tweet.jpg",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

interface ReviewCardProps {
  img: string // Change this to string
  name?: string
  username?: string
  body?: string
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  return (
    <Card className="w-64 cursor-pointer bg-gradient-to-br from-card via-card/95 to-muted/90 shadow-elevation-light dark:shadow-elevation-dark">
      <CardContent className="p-4 bg-card/20">
        {username ? (
          <div className="flex flex-row items-center gap-2">
            <Image
              src={`/tweet-avatars${img}`}
              className="h-12 w-12 rounded-full"
              alt={name || ""}
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium">{name}</figcaption>
              <p className="text-xs text-muted-foreground">{username}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Image
              src={img}
              className="h-24 w-24"
              alt={name || ""}
              width={96}
              height={96}
            />
          </div>
        )}
        <blockquote className="mt-2 text-sm text-muted-foreground">
          {body}
        </blockquote>
      </CardContent>
    </Card>
  )
}

export function MarketingTestimonial() {
  return (
    <SectionCard
      className="md:container mx-auto max-w-7xl"
      innerClassName="pt-6 pb-4 "
    >
      <GradientHeading size="xxl" weight="base" className=" mb-8">
        What Creators Are Saying
      </GradientHeading>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-black ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background/20 to-transparent dark:from-background/10"></div>
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background/20 to-transparent dark:from-background/10"></div>
      </div>
    </SectionCard>
  )
}
