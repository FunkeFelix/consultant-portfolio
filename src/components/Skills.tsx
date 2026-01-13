import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Layout, 
  Brain, 
  Rocket, 
  Server,
  Terminal,
  Cpu,
  Globe,
  CheckCircle2
} from "lucide-react";

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-neutral-800 rounded-lg text-blue-400">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>

    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={skill.name} className="group relative">
          <div className="flex justify-between items-center mb-1">
             <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">
               {skill.name}
             </span>
             <span className="text-xs text-neutral-500 font-mono group-hover:text-blue-400 transition-colors">
               {skill.level}%
             </span>
          </div>
          
          <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: `${skill.level}%` }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: delay + (index * 0.1) }}
               className="h-full bg-gradient-to-r from-blue-600 to-purple-600 relative"
             >
                {/* Shine effect */}
                <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
             </motion.div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      skills: [
        { name: "React 19 / Next.js 16", level: 98 },
        { name: "TypeScript", level: 95 },
        { name: "Tailwind CSS", level: 100 },
        { name: "Framer Motion", level: 90 }
      ]
    },
    {
      title: "AI & Agentic Workflows",
      icon: Brain,
      skills: [
        { name: "Vercel AI SDK", level: 95 },
        { name: "LangChain / LangGraph", level: 90 },
        { name: "RAG Pipelines", level: 85 },
        { name: "Prompt Engineering", level: 95 }
      ]
    },
    {
      title: "Backend & Cloud",
      icon: Server,
      skills: [
        { name: "Node.js / Bun", level: 90 },
        { name: "Supabase / PostgreSQL", level: 95 },
        { name: "GCP Cloud Run", level: 80 },
        { name: "Docker", level: 85 }
      ]
    },
    {
      title: "Mobile (Flutter)",
      icon: Smartphone,
      skills: [
        { name: "Dart / Flutter", level: 95 },
        { name: "Firebase Backend", level: 95 },
        { name: "RevenueCat", level: 90 },
        { name: "App Store Deploy", level: 100 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-neutral-950 relative overflow-hidden">
       {/* Subtle grid background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
          >
            <CheckCircle2 size={14} />
            Production Ready
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            My stack is built for speed and scalability. I focus on modern tools that deliver real business value, not just hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <SkillCategory 
              key={index}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* The "Fun" Element - Re-introducing a smaller, contained "Additional Tools" marquee */}
        <div className="mt-20 pt-10 border-t border-neutral-900">
           <p className="text-center text-neutral-500 text-sm mb-6 uppercase tracking-widest font-bold">Tools & Methodologies</p>
           
           <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity">
              {["Git", "CI/CD", "Agile", "Jira", "Figma", "Storybook", "Jest", "Playwright", "Zod", "tRPC", "GraphQL", "WebSockets"].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-400 text-sm">
                  {tool}
                </span>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
