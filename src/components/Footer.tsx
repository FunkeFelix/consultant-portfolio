
import { Code, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Felix Funke</span>
          </div>
          
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Building the future with intelligent code and innovative solutions.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of</span>
            <Code className="w-4 h-4 text-blue-400" />
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800 text-slate-500 text-sm">
            © 2025 Felix Funke. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
