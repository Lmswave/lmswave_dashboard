import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, MessageCircle, Mail, Phone, Book } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Sent",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Support & Help</h1>
        <p className="text-muted-foreground">Get help with LMSWave or contact our support team</p>
      </div>

      {/* Quick Help Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass hover:shadow-soft transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Book className="w-12 h-12 text-cyan mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">Browse our comprehensive guides</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="glass hover:shadow-soft transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-12 h-12 text-golden mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Chat with our support team</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass hover:shadow-soft transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">+94789458167</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan" />
              Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="support-name">Name</Label>
                  <Input
                    id="support-name"
                    placeholder="Your name"
                    className="glass border-primary/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="support-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="support-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10 glass border-primary/20"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="glass border-primary/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your issue or question..."
                  className="glass border-primary/20 min-h-32"
                  required
                />
              </div>

              <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2">How do I add a new course?</h3>
              <p className="text-sm text-muted-foreground">
                Navigate to Course Management and click the "Add New Course" button in the top right.
              </p>
            </div>
            <div className="p-4 bg-cyan/5 rounded-lg border border-cyan/20">
              <h3 className="font-semibold mb-2">How do I generate certificates?</h3>
              <p className="text-sm text-muted-foreground">
                Go to the Certificates page and click "Generate Certificate" to create new certificates.
              </p>
            </div>
            <div className="p-4 bg-golden/5 rounded-lg border border-golden/20">
              <h3 className="font-semibold mb-2">Can I customize AI insights?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, AI insights can be customized in Profile Settings under Analytics Preferences.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Support;
