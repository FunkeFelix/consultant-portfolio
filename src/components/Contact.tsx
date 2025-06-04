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
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import ResumeDownload from "./ResumeDownload";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scheduleCall = async (formData: FormData) => {
    // Extract fields from the FormData
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const preferred_date = formData.get("preferred_date") as string;
    const message = formData.get("message") as string;

    if (!name || !email) {
      throw new Error("Name and email are required.");
    }

    const { error } = await supabase.from("schedule_calls").insert([
      {
        name,
        email,
        phone,
        company,
        preferred_date: preferred_date
          ? new Date(preferred_date).toISOString()
          : null,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      throw new Error(`Supabase insert error: ${error.message}`);
    }

    return { success: true };
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    try {
      await scheduleCall(data);
      toast({
        title: "Request received!",
        description: "I'll be in touch to schedule our call. Thanks!",
      });
      setShowModal(false);
    } catch (err) {
      console.error("Error scheduling call:", err);
      toast({
        title: "Error",
        description:
          err?.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "felixfunke456@gmail.com",
      href: "mailto:felixfunke456@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+49 (0) 176 6336 4095",
      href: "tel:+4917663364095",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Überlingen, Germany",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/FunkeFelix",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/felix-funke-b1a9561b3/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life with cutting-edge technology and
            AI-powered solutions?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Get in touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg text-blue-600 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          {info.label}
                        </div>
                        <div className="text-slate-600">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Follow me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg hover:from-blue-100 hover:to-indigo-100 text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <ResumeDownload />
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-2">Ready to innovate?</h3>
              <p className="text-blue-100 mb-4">
                Let's discuss how AI and modern development can transform your
                business.
              </p>
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-lg mx-4 p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
            <p className="text-slate-600 mb-6">
              Please fill out the form below and I’ll get back to you with some
              available slots.
            </p>

            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <Input id="name" name="name" required className="w-full" />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" className="w-full" />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Company
                </label>
                <Input id="company" name="company" className="w-full" />
              </div>

              <div>
                <label
                  htmlFor="preferred_date"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Preferred Date & Time
                </label>
                <Input
                  id="preferred_date"
                  name="preferred_date"
                  type="datetime-local"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Additional Notes
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  {isSubmitting ? "Submitting..." : "Send Request"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
