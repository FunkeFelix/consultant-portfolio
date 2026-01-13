import { motion } from "framer-motion";

const experiences = [
  {
    company: "Ippen.Digital (The.Lab)",
    role: "Senior Freelance Software Engineer",
    period: "Jul 2024 – Present",
    description: "Owned frontend architecture and delivery of two multi-tenant AI products. Built agentic workflows, real-time features, and integrated multi-provider LLM stacks using Next.js 16 and Supabase."
  },
  {
    company: "FORUM",
    role: "Senior Software Engineer",
    period: "Jun 2024 – Jul 2024",
    description: "Led a critical legacy modernization project, upgrading a React 15 application to React 18. Improved performance, stability, and developer experience."
  },
  {
    company: "Handelsblatt Media Group",
    role: "Senior Software Engineer",
    period: "May 2023 – May 2024",
    description: "Built and shipped product experiments to optimize conversion rates. Collaborated with data and product teams to implement A/B tests that drove a 15% increase in subscriptions."
  },
  {
    company: "PitchGuru",
    role: "Senior Software Engineer",
    period: "Jun 2023 – Oct 2023",
    description: "Developed a Next.js platform for collaborative pitch deck creation. Streamlined design workflows and implemented complex real-time collaboration features."
  },
  {
    company: "AUDO LLC",
    role: "Software Engineer",
    period: "Oct 2021 – Apr 2023",
    description: "Full-stack development for a mobile application using Flutter and Node.js. Built serverless backend components and improved app performance."
  }
];

const Experience = () => {
  return (
    <section className="py-24 bg-neutral-950/50">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
          <p className="text-neutral-400">A timeline of my professional journey.</p>
        </motion.div>

        <div className="space-y-12 border-l border-neutral-800 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-neutral-700" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <span className="text-sm font-mono text-neutral-500">{exp.period}</span>
              </div>
              <div className="text-blue-400 font-medium mb-3">{exp.role}</div>
              <p className="text-neutral-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
