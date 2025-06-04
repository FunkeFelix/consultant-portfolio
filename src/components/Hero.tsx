import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ChevronDown,
  Code2,
  Brain,
  Zap,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 bg-[size:60px_60px] opacity-20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-24 lg:mt-0">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-white shadow-2xl ring-4 ring-blue-200/50">
              <AvatarImage
                src={`${import.meta.env.BASE_URL}/profile_image.png`}
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                JD
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Business + Tech = Exponential Impact
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Where Business Meets
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Innovation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed">
            BSc Business + Fullstack Development + LLM Workflows
          </p>

          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            I bridge the gap between business strategy and technical execution,
            transforming complex processes into intelligent, automated solutions
            that drive real results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  Business Foundation
                </h3>
                <p className="text-sm text-slate-600">
                  BSc Business + Process Optimization
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4">
              <Code2 className="w-8 h-8 text-indigo-600" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  Technical Mastery
                </h3>
                <p className="text-sm text-slate-600">
                  Fullstack Development Expertise
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4">
              <Brain className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  AI Integration
                </h3>
                <p className="text-sm text-slate-600">LLM-Powered Automation</p>
              </div>
            </div>
          </div>

          {/* Key differentiators */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg px-4 py-2 border border-blue-200">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700 font-medium text-sm">
                ROI-Focused Solutions
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg px-4 py-2 border border-indigo-200">
              <Users className="w-4 h-4 text-indigo-600" />
              <span className="text-slate-700 font-medium text-sm">
                Stakeholder Communication
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg px-4 py-2 border border-purple-200">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-slate-700 font-medium text-sm">
                Process Transformation
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              See Business Impact
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 hover:border-slate-400 hover:bg-white/80 backdrop-blur-sm transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Transform Your Business
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown
              className="w-6 h-6 text-slate-400 mx-auto cursor-pointer hover:text-slate-600 transition-colors"
              onClick={() => scrollToSection("projects")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
