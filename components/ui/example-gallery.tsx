"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "flex w-[250px] cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm",
      className
    )}
    {...props}
  >
    <div className="select-none leading-relaxed text-sm">{description}</div>

    <div className="flex w-full select-none items-center justify-start gap-3">
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

interface Testimonial {
  id: string;
  name: string;
  role: string;
  img: string;
  description: React.ReactNode;
}

export function SocialProofTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="h-full">
      <div className="relative max-h-[750px] overflow-hidden">
        <div className="gap-4 md:columns-1 xl:columns-4">
            {testimonials.map((card, idx) => (
                <TestimonialCard {...card} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default function ExampleGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      id: "1",
      name: "Emma Thompson",
      role: "Yoga Instructor",
      img: "/joyful-woman.png",
      description: (
        <p>
          Serenity has become an essential part of my daily routine. The sleep
          stories have completely transformed my nights, and I wake up feeling
          refreshed every morning.
        </p>
      ),
    },
    {
      id: "2",
      name: "David Chen",
      role: "Software Engineer",
      img: "/cheerful-asian-man.png",
      description: (
        <p>
          As someone who deals with anxiety, this app has been life-changing.
          The guided meditations help me stay centered during stressful
          workdays.
        </p>
      ),
    },
    {
      id: "3",
      name: "Sarah Williams",
      role: "Healthcare Professional",
      img: "/joyful-curls.png",
      description: (
        <p>
          I recommend Serenity to all my patients who struggle with stress. The
          breathing exercises are simple yet incredibly effective for quick
          calm.
        </p>
      ),
    },
    {
      id: "4",
      name: "Michael Johnson",
      role: "Business Executive",
      img: "/joyful-woman.png",
      description: (
        <p>
          Serenity has helped me maintain focus and clarity in high-pressure
          situations. The mindfulness exercises are perfect for quick breaks
          between meetings.
        </p>
      ),
    },
    {
      id: "5",
      name: "Olivia Rodriguez",
      role: "Student",
      img: "/cheerful-asian-man.png",
      description: (
        <p>
          As a college student, I often struggle with sleep and anxiety.
          Serenity's guided meditations have significantly improved my sleep
          quality and overall well-being.
        </p>
      ),
    },
    {
      id: "6",
      name: "James Wilson",
      role: "Retired Veteran",
      img: "/joyful-curls.png",
      description: (
        <p>
          The PTSD-focused meditations in Serenity have been instrumental in my
          healing journey. I'm grateful for this tool that supports veterans
          like myself.
        </p>
      ),
    },
    {
      id: "7",
      name: "Aisha Patel",
      role: "Teacher",
      img: "/joyful-woman.png",
      description: (
        <p>
          I use Serenity's short meditations with my students to help them focus
          before exams. It's made a noticeable difference in their stress levels
          and performance.
        </p>
      ),
    },
    {
      id: "8",
      name: "Robert Tanaka",
      role: "Athlete",
      img: "/cheerful-asian-man.png",
      description: (
        <p>
          Serenity's visualization exercises have greatly enhanced my pre-game
          mental preparation. It's become an essential part of my training
          regimen.
        </p>
      ),
    },
    {
      id: "9",
      name: "Elena Gonzalez",
      role: "Artist",
      img: "/joyful-curls.png",
      description: (
        <p>
          The creativity-boosting meditations in Serenity have helped me
          overcome artist's block numerous times. It's like a secret weapon for
          inspiration!
        </p>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container px-4 md:px-6">
        <SocialProofTestimonials testimonials={testimonials} />
    </div>
  );
}
