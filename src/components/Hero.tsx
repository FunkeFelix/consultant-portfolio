import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Grab, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const constraintsRef = useRef(null);
  const { toast } = useToast();
  const [clickCount, setClickCount] = useState(0);

  const handleFaceClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 2) {
      toast({ title: "Stop poking me!", description: "I'm trying to look professional here.", duration: 2000 });
    }
    if (clickCount === 5) {
      toast({ title: "Seriously?", description: "Do you not have work to do?", variant: "destructive", duration: 2000 });
    }
    if (clickCount === 10) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
  };

  return (
    <section ref={constraintsRef} className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-6 pt-20 bg-neutral-950">
      
      {/* Background Noise/Grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

      <div className="container relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* The Copy - Witty & Direct */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          <div className="inline-block mb-4">
             <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm rotate-3 inline-block shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                Warning: Contains heavy sarcasm
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            I turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">caffeine</span> into <br/>
            <span className="relative inline-block">
              software.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-neutral-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            Hi, I'm <strong className="text-white">Felix</strong>. I build high-performance web apps, scalable backends, and AI agents that (usually) don't hallucinate. 
            <br/><br/>
            <span className="italic text-neutral-500 text-base">
              (I also center divs on the first try. Please hire me.)
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <Button 
               size="lg" 
               className="bg-white text-black hover:bg-neutral-200 h-14 px-8 text-lg font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(50,50,50,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(50,50,50,1)] transition-all"
               onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
             >
               See My Chaos
               <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
             </Button>
             
             <Button 
               size="lg" 
               variant="outline" 
               className="border-2 border-neutral-800 bg-transparent text-white hover:bg-neutral-900 h-14 px-8 text-lg font-bold rounded-xl"
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             >
               Bore Me with Business
             </Button>
          </div>
        </motion.div>

        {/* The Interactive Face - Draggable */}
        <motion.div 
          className="flex-1 relative order-1 md:order-2 w-full flex justify-center perspective-1000"
        >
           <motion.div
             drag
             dragConstraints={constraintsRef}
             dragElastic={0.2}
             whileHover={{ cursor: "grab", scale: 1.05 }}
             whileDrag={{ cursor: "grabbing", scale: 1.1 }}
             onClick={handleFaceClick}
             className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full shadow-[20px_20px_60px_#0a0a0a,-20px_-20px_60px_#1a1a1a] z-50 group"
           >
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black font-bold px-4 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                 <Grab className="inline w-4 h-4 mr-1" />
                 Throw me around!
              </div>

              <img 
                src={`${import.meta.env.BASE_URL}profile_image.jpeg`} 
                alt="Felix Funke" 
                className="w-full h-full object-cover rounded-full border-4 border-white pointer-events-none select-none"
              />
              
              {/* Funny Stickers attached to face */}
              <motion.div 
                className="absolute -right-4 top-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rotate-12 shadow-lg"
                animate={{ rotate: [12, 15, 12] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10x Dev
              </motion.div>

              <motion.div 
                className="absolute -left-4 bottom-10 bg-purple-500 text-white text-xs font-bold px-2 py-1 -rotate-12 shadow-lg"
                animate={{ rotate: [-12, -15, -12] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Will code for food
              </motion.div>
           </motion.div>

           {/* Placeholder for dropped shadow/context */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 text-sm font-mono"
      >
        Scroll for the good stuff
      </motion.div>
    </section>
  );
};

export default Hero;