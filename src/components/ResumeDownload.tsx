import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  
  const RESUME_URL = "https://nmnbjqqfroumumsrwpaq.supabase.co/storage/v1/object/public/cv/felix_funke-resume-2026-en.pdf";

  const downloadResume = async () => {
    setIsDownloading(true);
    try {
      // Create a temporary anchor element to trigger the download
      const response = await fetch(RESUME_URL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // Extract filename or default to resume.pdf
      link.download = "Felix_Funke_Resume_2026.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download started",
        description: "Your resume download should begin shortly.",
      });
    } catch (error) {
      console.error("Download error:", error);
      // Fallback: just open in new tab if programmatic download fails
      window.open(RESUME_URL, '_blank');
      
      toast({
        title: "Download started",
        description: "Opened resume in a new tab.",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={downloadResume}
      disabled={isDownloading}
      variant="outline"
      className="flex items-center gap-2 border-neutral-700 bg-black/50 hover:bg-neutral-800 text-white hover:text-white transition-all"
    >
      {isDownloading ? (
        <FileText className="w-4 h-4 animate-pulse" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {isDownloading ? "Loading..." : "Resume"}
    </Button>
  );
};

export default ResumeDownload;