import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const downloadResume = async () => {
    setIsDownloading(true);
    try {
      const { data, error } = await supabase.storage
        .from("resume")
        .download("felix_funke-freelance-resume-2025--en.pdf");

      console.log("Download data:", data);

      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Resume downloaded!",
        description: "The resume has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
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
      className="flex items-center gap-2"
    >
      {isDownloading ? (
        <FileText className="w-4 h-4 animate-pulse" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {isDownloading ? "Downloading..." : "Download Resume"}
    </Button>
  );
};

export default ResumeDownload;
