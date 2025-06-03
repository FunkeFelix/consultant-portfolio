
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, Globe, Smartphone, Brain, TrendingUp, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Workflow Revolution",
      description: "Transformed a Fortune 500 company's manual approval process into an AI-powered system, reducing processing time by 80% and saving $2M annually.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tech: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Process Mining"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      category: "Business Impact",
      icon: <TrendingUp className="w-5 h-5" />,
      impact: "$2M Annual Savings"
    },
    {
      title: "AI-Powered Content Pipeline",
      description: "Built an intelligent content generation system that understands business context, reducing content creation costs by 70% while improving quality metrics.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "OpenAI API", "LangChain", "Business Analytics"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      category: "ROI Solution",
      icon: <Bot className="w-5 h-5" />,
      impact: "70% Cost Reduction"
    },
    {
      title: "Smart Decision Platform",
      description: "Created a data-driven decision platform that combines business KPIs with AI insights, helping executives make informed decisions 5x faster.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Python", "Claude API", "Business Intelligence", "Data Viz"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      category: "Executive Tool",
      icon: <Brain className="w-5 h-5" />,
      impact: "5x Faster Decisions"
    },
    {
      title: "Customer Success Automation",
      description: "Designed an end-to-end customer onboarding system that increased retention by 45% and reduced support tickets by 60% through intelligent automation.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      tech: ["React Native", "Firebase", "Customer Analytics", "Process Automation"],
      githubUrl: "https://github.com",
      liveUrl: "https://apps.apple.com",
      category: "Growth Engine",
      icon: <Smartphone className="w-5 h-5" />,
      impact: "45% Retention Boost"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Business Transformation Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real solutions that delivered measurable business impact. Each project combines technical innovation with strategic business thinking.
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
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    <DollarSign className="w-3 h-3 mr-1" />
                    {project.impact}
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
                      Case Study
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
