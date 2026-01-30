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
    name: "Sarah Chen",
    username: "@sarahchen_dev",
    body: "The animations and UI components are absolutely stunning! This has saved me countless hours of development time.",
    img: "/davasya-tweet.jpg",
  },
  {
    name: "Marcus Rodriguez",
    username: "@marcus_rodriguez",
    body: "As a full-stack developer, I'm blown away by the quality of these templates. The attention to detail is incredible.",
    img: "/tulip-tweet.jpg",
  },
  {
    name: "Alex Thompson",
    username: "@alexthompson",
    body: "This is exactly what I needed for my startup. The components are so polished and professional!",
    img: "/supabase-ceo.jpg",
  },
  {
    name: "Priya Sharma",
    username: "@priyasharma",
    body: "The documentation is crystal clear and the code quality is top-notch. Highly recommended!",
    img: "/dan-tweet.jpg",
  },
  {
    name: "James Wilson",
    username: "@jameswilson",
    body: "Just implemented this in my project and the results are amazing. The animations are smooth as butter!",
    img: "/wayne-tweet.jpg",
  },
  {
    name: "Emma Davis",
    username: "@emmadavis",
    body: "The attention to accessibility and responsive design is impressive. This is a game-changer for my workflow.",
    img: "/reddit-2.png",
  },
  {
    name: "Lucas Kim",
    username: "@lucaskim",
    body: "I've tried many UI libraries, but this one stands out with its modern design and excellent performance.",
    img: "/allesandro-tweet.jpg",
  },
  {
    name: "Sophie Anderson",
    username: "@sophieanderson",
    body: "The dark mode implementation is perfect, and the animations are so smooth. Exactly what I was looking for!",
    img: "/brad-bitler-tweet.jpg",
  },
  {
    name: "David Park",
    username: "@davidpark",
    body: "The component architecture is so well thought out. It's made my development process much more efficient.",
    img: "/reddit-3.png",
  },
  {
    name: "Olivia Martinez",
    username: "@oliviamartinez",
    body: "The quality of these templates is outstanding. They've helped me deliver projects faster than ever.",
    img: "/aaron-tweet.jpg",
  },
  {
    name: "Ryan Chen",
    username: "@ryanchen",
    body: "The attention to detail in the animations and transitions is remarkable. My clients love the results!",
    img: "/yash-tweet.jpg",
  },
  {
    name: "Isabella Lee",
    username: "@isabellalee",
    body: "These components have elevated my projects to a whole new level. The design system is incredibly well crafted.",
    img: "/tulip-tweet.jpg",
  },
  {
    name: "Michael Brown",
    username: "@michaelbrown",
    body: "The performance optimization is impressive. Everything loads quickly and runs smoothly.",
    img: "/reddit-1.png",
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
        Customers <span className="text-primary"></span>
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
