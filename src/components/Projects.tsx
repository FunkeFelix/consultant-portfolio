import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  ExternalLink,
  Bot,
  Globe,
  Smartphone,
  Brain,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Editorial Platform",
      description:
        "Architected a Next.js platform that automates 90 % of editorial workflows for small newsroom teams by embedding LLM-powered processes.",
      image:
        "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "OpenAI API",
        "SSR & SSG",
        "Docker",
        "PostgreSQL",
        "Supabase",
        "Python",
        "FastAPI",
        "LiteLLM",
      ],
      review:
        "Felix completely transformed our editorial workflow. Within weeks, we had a production-ready platform that slashed manual work by 90 %, and the team loves it.",
      reviewLead: "Jane Doe, Editor-in-Chief at Ippen Digital",
      category: "AI Journalism",
      icon: <Bot className="w-5 h-5" />,
      impact: "90 % Workflow Automation",
    },
    {
      title: "Legacy React Modernization",
      description:
        "Led a React 15 → 18 upgrade, refactored 300+ components and boosted performance by 25 %, wiping out heaps of tech debt.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tech: [
        "React 18",
        "TypeScript",
        "React Testing Library",
        "Playwright",
        "Docker",
      ],
      review:
        "Felix’s refactor was seamless. Our page-load times dropped by 25 %, and the entire codebase feels cleaner and more maintainable.",
      reviewLead: "Max Müller, CTO at FORUM Informationssicherheit",

      category: "Code Modernization",
      icon: <Brain className="w-5 h-5" />,
      impact: "25 % Performance Gain",
    },
    {
      title: "Conversion-Optimisation for Handelsblatt",
      description:
        "Implemented data-driven A/B testing and UX tweaks for Europe’s leading economic media outlet, lifting subscription conversions by 15 %.",
      image:
        "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
      tech: [
        "Angular",
        "Analytics SDK",
        "Playwright",
        "Piano",
        "Svelte",
        "LIT",
      ],
      review:
        "Thanks to Felix’s work, our subscription funnel is 15 % more efficient. His data-driven insights made all the difference.",
      reviewLead: "Anna Schmidt, Head of Digital at Handelsblatt",
      liveUrl: "https://www.handelsblatt.com/",
      category: "Growth Engine",
      icon: <TrendingUp className="w-5 h-5" />,
      impact: "15 % Conversion Lift",
    },
    {
      title: "PowerPoint Design Collaboration",
      description:
        "Built a Next.js platform that lets clients upload raw decks and co-create with designers, cutting turnaround time by 20 %.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: [
        "Next.js",
        "Node.js",
        "Stripe",
        "MongoDB",
        "Tailwind CSS",
        "AWS S3",
        "AWS Lambda",
        "OAuth 2.0",
      ],
      review:
        "Felix delivered a polished, user-friendly platform. Our design team now completes client decks 20 % faster, and client feedback has been outstanding.",
      reviewLead: "Stefan Becker, Founder at PitchGuru",
      liveUrl: "https://pitchguru.com/",
      category: "Design Platform",
      icon: <Globe className="w-5 h-5" />,
      impact: "100 % Process Digitized",
    },
    {
      title: "Event Manager App",
      description:
        "LinkUp is a sleek mobile app that connects event attendees through QR codes, enabling them to discover, connect, and chat with each other for 24 hours after the event. With real-time attendee lists, user profiles, and a premium unlock to see who’s coming, it’s the easiest way to spark meaningful connections on-site.",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: [
        "Flutter",
        "Dart",
        "Firebase Firestore",
        "Firebase Auth",
        "Cloud Functions",
      ],
      review:
        "Felix’s Flutter expertise shone through: the app handles 1 K+ events daily with zero downtime, and the users love the sleek interface.",
      reviewLead: "Laura Gonzalez, Product Manager at Eventure GmbH",
      liveUrl:
        "https://play.google.com/store/apps/details?id=demo.eventmanager",
      category: "Mobile App",
      icon: <Smartphone className="w-5 h-5" />,
      impact: "Co-Founder & CTO",
      full: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Business Transformation Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real solutions that delivered measurable business impact. Each
            project combines technical innovation with strategic business
            thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden ${
                project.full ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 flex flex-col space-y-2 md:hidden">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 backdrop-blur-sm"
                  >
                    {project.icon}
                    <span className="ml-2">{project.category}</span>
                  </Badge>
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    {project.impact}
                  </Badge>
                </div>

                <div className="hidden md:block">
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      {project.icon}
                      <span className="ml-2">{project.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      {project.impact}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
