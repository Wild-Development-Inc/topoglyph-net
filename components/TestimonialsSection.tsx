"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials: Testimonial[] = [
    {
      name: "Emma Thompson",
      role: "Yoga Instructor",
      content:
        "Serenity has become an essential part of my daily routine. The sleep stories have completely transformed my nights, and I wake up feeling refreshed every morning.",
      avatar: "/joyful-woman.png",
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      content:
        "As someone who deals with anxiety, this app has been life-changing. The guided meditations help me stay centered during stressful workdays.",
      avatar: "/cheerful-asian-man.png",
    },
    {
      name: "Sarah Williams",
      role: "Healthcare Professional",
      content:
        "I recommend Serenity to all my patients who struggle with stress. The breathing exercises are simple yet incredibly effective for quick calm.",
      avatar: "/joyful-curls.png",
    },
    {
      name: "Michael Johnson",
      role: "Business Executive",
      content:
        "Serenity has helped me maintain focus and clarity in high-pressure situations. The mindfulness exercises are perfect for quick breaks between meetings.",
      avatar: "/joyful-woman.png",
    },
    {
      name: "Olivia Rodriguez",
      role: "Student",
      content:
        "As a college student, I often struggle with sleep and anxiety. Serenity's guided meditations have significantly improved my sleep quality and overall well-being.",
      avatar: "/cheerful-asian-man.png",
    },
    {
      name: "James Wilson",
      role: "Retired Veteran",
      content:
        "The PTSD-focused meditations in Serenity have been instrumental in my healing journey. I'm grateful for this tool that supports veterans like myself.",
      avatar: "/joyful-curls.png",
    },
    {
      name: "Aisha Patel",
      role: "Teacher",
      content:
        "I use Serenity's short meditations with my students to help them focus before exams. It's made a noticeable difference in their stress levels and performance.",
      avatar: "/joyful-woman.png",
    },
    {
      name: "Robert Tanaka",
      role: "Athlete",
      content:
        "Serenity's visualization exercises have greatly enhanced my pre-game mental preparation. It's become an essential part of my training regimen.",
      avatar: "/cheerful-asian-man.png",
    },
    {
      name: "Elena Gonzalez",
      role: "Artist",
      content:
        "The creativity-boosting meditations in Serenity have helped me overcome artist's block numerous times. It's like a secret weapon for inspiration!",
      avatar: "/joyful-curls.png",
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
    <motion.section
      ref={ref}
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={itemVariants}
        >
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1 rounded-full">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thousands of people have transformed their lives with Serenity.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-6 flex flex-col grow">
                  <div className="flex items-start gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name} avatar`}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                  </div>
                  <p className="mt-4 text-muted-foreground grow">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
