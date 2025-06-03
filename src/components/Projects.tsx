
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, Globe, Smartphone, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Content Pipeline",
      description: "Automated content generation and optimization system using GPT-4 and custom fine-tuned models for enhanced productivity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "OpenAI API", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      category: "AI/LLM",
      icon: <Bot className="w-5 h-5" />
    },
    {
      title: "Smart Workflow Automation",
      description: "Enterprise-grade workflow automation platform with LLM-powered decision making and natural language task definitions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tech: ["Next.js", "TypeScript", "Prisma", "LangChain", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      category: "Web App",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Intelligent Code Assistant",
      description: "VS Code extension that provides contextual code suggestions and refactoring recommendations using advanced language models.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tech: ["TypeScript", "VS Code API", "Claude API", "Webpack"],
      githubUrl: "https://github.com",
      liveUrl: "https://marketplace.visualstudio.com",
      category: "Extension",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Mobile LLM Chat App",
      description: "Cross-platform mobile application with offline LLM capabilities and seamless cloud synchronization for enhanced user experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      tech: ["React Native", "Expo", "SQLite", "Hugging Face", "Firebase"],
      githubUrl: "https://github.com",
      liveUrl: "https://apps.apple.com",
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with intelligent automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    {project.icon}
                    <span className="ml-2">{project.category}</span>
                  </Badge>
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
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
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
