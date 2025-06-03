
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Brain, Building2, TrendingUp, Users, Zap, Target, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Business Strategy",
      icon: <Building2 className="w-6 h-6" />,
      skills: [
        { name: "Process Optimization", level: 95 },
        { name: "ROI Analysis", level: 90 },
        { name: "Business Strategy", level: 95 },
        { name: "Stakeholder Management", level: 88 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 }
      ]
    },
    {
      title: "AI & LLM Integration",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "OpenAI API", level: 95 },
        { name: "LangChain", level: 90 },
        { name: "Workflow Automation", level: 95 },
        { name: "Process Intelligence", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS/Azure", level: 85 },
        { name: "Docker", level: 88 },
        { name: "CI/CD", level: 80 },
        { name: "Infrastructure", level: 75 }
      ]
    },
    {
      title: "Analytics & Insights",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: "Data Analysis", level: 88 },
        { name: "Performance Metrics", level: 90 },
        { name: "Business Intelligence", level: 85 },
        { name: "Cost Optimization", level: 80 }
      ]
    }
  ];

  const businessTools = [
    "Figma", "Notion", "Linear", "Slack", "Microsoft Office", "Google Workspace"
  ];

  const techTools = [
    "VS Code", "Git", "Postman", "Vercel", "Supabase", "Firebase", "Stripe"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Perfect Combination
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Business acumen meets technical excellence. I understand both the <strong>why</strong> and the <strong>how</strong> behind every solution.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">Strategic Thinking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                My business background ensures every technical solution aligns with company goals and delivers measurable ROI.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">Stakeholder Bridge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                I translate complex technical concepts into business language that executives and teams can understand and act upon.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">Impact Focused</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Every line of code I write serves a business purpose. I optimize for outcomes, not just technical elegance.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg text-blue-600">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Business Tools</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {businessTools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Development Tools</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techTools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
