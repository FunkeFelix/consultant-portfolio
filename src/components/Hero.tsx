
import { Button } from "@/components/ui/button";
import { ChevronDown, Code2, Brain, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-200 bg-[size:60px_60px] opacity-20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">LLM-Enhanced Development</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Building the
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"> Future</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Fullstack Developer specializing in AI-powered workflows and modern web applications
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2">
              <Code2 className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">Web & App Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2">
              <Zap className="w-5 h-5 text-indigo-600" />
              <span className="text-slate-700 font-medium">Workflow Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="text-slate-700 font-medium">LLM Integration</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-300 hover:border-slate-400 hover:bg-white/80 backdrop-blur-sm transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-400 mx-auto cursor-pointer hover:text-slate-600 transition-colors" 
                         onClick={() => scrollToSection('projects')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
