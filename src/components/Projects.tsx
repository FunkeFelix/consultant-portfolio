import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ToggleLeft, ToggleRight, Terminal, Code2, Cpu, Smartphone, TrendingUp, Layers } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Agentic Studio",
    company: "Ippen.Digital",
    icon: Code2,
    clientSpeak: "Enterprise AI workflow platform automating 90% of editorial tasks via graph-based agent execution.",
    devSpeak: "I built a graph engine so complex I sometimes get lost in my own nodes. But hey, it writes articles automatically.",
    tags: ["Next.js 16", "AI SDK", "Graph Engine", "WebSockets"],
    link: null,
    color: "text-blue-400"
  },
  {
    title: "MCP Apps Editor",
    company: "Ippen.Digital",
    icon: Layers,
    clientSpeak: "Multi-tenant SaaS workspace for managing AI applications with granular RBAC and billing.",
    devSpeak: "It's basically a glorified JSON editor with a billing system attached. The CI/CD pipeline was the real MVP here.",
    tags: ["SaaS", "RBAC", "Stripe", "Docker"],
    link: null,
    color: "text-purple-400"
  },
  {
    title: "Vayn (LinkUp)",
    company: "Founder",
    icon: Smartphone,
    clientSpeak: "A seamless mobile networking experience for events with QR-based discovery.",
    devSpeak: "A Flutter app that survives solely on Firebase triggers and my sheer willpower. RevenueCat integration was a nightmare but we're rich now (kinda).",
    tags: ["Flutter", "Firebase", "RevenueCat"],
    link: "https://play.google.com/store/apps/details?id=demo.eventmanager",
    color: "text-green-400"
  },
  {
    title: "Conversion Engine",
    company: "Handelsblatt",
    icon: TrendingUp,
    clientSpeak: "Optimized user journeys to increase subscription revenue by 15% via A/B testing.",
    devSpeak: "I moved a button 20 pixels to the left and changed the color to green. Capitalism loved it.",
    tags: ["A/B Testing", "Angular", "Analytics"],
    link: "https://www.handelsblatt.com/",
    color: "text-orange-400"
  },
  {
    title: "Pitch Platform",
    company: "PitchGuru",
    icon: Cpu,
    clientSpeak: "Collaborative design tool for corporate presentations reducing turnaround time by 20%.",
    devSpeak: "Like Google Slides but with better branding and less crashing. Built a collaborative editor that didn't explode.",
    tags: ["Next.js", "WebSockets", "AWS"],
    link: "https://pitchguru.com/",
    color: "text-pink-400"
  }
];

const Projects = () => {
  const [isHonestMode, setIsHonestMode] = useState(false);

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div>
             <h2 className="text-4xl md:text-6xl font-black text-white mb-2">
               Proof I Work.
             </h2>
             <p className="text-neutral-400 text-lg">
               Some things I built while not procrastinating.
             </p>
           </div>

           <div 
             className="flex items-center gap-3 bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 cursor-pointer hover:border-neutral-600 transition-colors select-none group"
             onClick={() => setIsHonestMode(!isHonestMode)}
           >
             <span className={`text-sm font-bold transition-colors ${!isHonestMode ? "text-white" : "text-neutral-500"}`}>Client Speak</span>
             <div className="relative">
               {isHonestMode ? (
                 <ToggleRight className="w-10 h-10 text-blue-500 transition-all" />
               ) : (
                 <ToggleLeft className="w-10 h-10 text-neutral-500 transition-all group-hover:text-neutral-400" />
               )}
             </div>
             <span className={`text-sm font-bold transition-colors ${isHonestMode ? "text-blue-400" : "text-neutral-500"}`}>Dev Truth</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-600 transition-all flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow h-full">
                 <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl bg-neutral-950 border border-neutral-800 ${project.color}`}>
                      <project.icon size={24} />
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                 </div>

                 <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <span className="text-sm font-mono text-neutral-500">{project.company}</span>
                 </div>

                 <div className="flex-grow mb-6 relative min-h-[100px]">
                   <AnimatePresence mode="wait">
                     <motion.div 
                       key={isHonestMode ? "honest" : "client"}
                       initial={{ opacity: 0, y: 5 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -5 }}
                       className="h-full"
                     >
                        {isHonestMode ? (
                           <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 font-mono text-sm text-green-400 shadow-inner">
                              <span className="text-neutral-500 select-none">$ </span>
                              <span className="typing-effect">{project.devSpeak}</span>
                           </div>
                        ) : (
                           <p className="text-neutral-300 text-lg leading-relaxed">
                              {project.clientSpeak}
                           </p>
                        )}
                     </motion.div>
                   </AnimatePresence>
                 </div>

                 <div className="flex flex-wrap gap-2 mt-auto">
                   {project.tags.map(tag => (
                     <Badge key={tag} variant="secondary" className="bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                       {tag}
                     </Badge>
                   ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;