import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Calendar,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const CALENDLY_URL = "https://calendly.com/felixfunke456/30min";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            Available for Q1 2026
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Ready to transform your ideas into high-performance software? Reach out directly or pick a time on my calendar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Quick Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-neutral-950 border-neutral-800 focus:border-blue-500 text-white placeholder:text-neutral-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-neutral-950 border-neutral-800 focus:border-blue-500 text-white placeholder:text-neutral-600"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-neutral-400">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-neutral-950 border-neutral-800 focus:border-blue-500 text-white placeholder:text-neutral-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-neutral-950 border-neutral-800 focus:border-blue-500 text-white placeholder:text-neutral-600 resize-none"
                    placeholder="Tell me briefly about what you're building..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-neutral-200 h-12 text-lg font-bold transition-transform active:scale-95"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 flex flex-col justify-center">
            {/* Calendly CTA - The "Fun" Part */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl relative overflow-hidden group cursor-pointer"
              onClick={() => window.open(CALENDLY_URL, '_blank')}
            >
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-500">
                  <Calendar size={120} />
               </div>
               
               <div className="relative z-10">
                 <h3 className="text-3xl font-bold mb-4">Book a Strategy Call</h3>
                 <p className="text-blue-100 mb-8 text-lg max-w-sm">
                   Skip the back-and-forth. Pick a 30-min slot that works for you and let's talk tech.
                 </p>
                 <Button 
                   className="bg-white text-blue-600 hover:bg-blue-50 border-0 h-14 px-8 text-lg font-bold rounded-2xl shadow-xl"
                 >
                   <Calendar className="w-5 h-5 mr-2" />
                   Open My Calendly
                 </Button>
               </div>
            </motion.div>

            {/* Direct Info */}
            <div className="grid gap-4">
               <a href="mailto:felixfunke456@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-800 transition-all group">
                 <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white group-hover:text-blue-400 transition-colors">
                   <Mail className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Direct Email</div>
                   <div className="text-lg font-medium text-white">felixfunke456@gmail.com</div>
                 </div>
               </a>

               <div className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 group">
                 <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Based In</div>
                   <div className="text-lg font-medium text-white">Überlingen, Germany (Remote)</div>
                 </div>
               </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/FunkeFelix" icon={Github} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/felix-funke-b1a9561b3/" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon: Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex-1 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 text-white">
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </a>
);

export default Contact;
