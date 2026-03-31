import { useState } from "react";
import { motion } from "framer-motion";
import { Clock10, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useGlobalLoader } from "@/components/GlobalLoader";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api-client";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setLoading } = useGlobalLoader();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoading(true);

    try {
      await apiClient("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <Layout>
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="glass mb-6 inline-block rounded-full px-4 py-2 text-sm text-muted-foreground">
                Get in Touch
              </span>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Let&apos;s <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have a question or want to join our team? We&apos;d love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-border bg-secondary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                      className="border-border bg-secondary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="border-border bg-secondary"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Send className="mr-2 inline-block animate-bounce" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 inline-block" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>
                  <p className="mb-8 text-muted-foreground">
                    Whether you&apos;re interested in joining our team or exploring partnership opportunities, we&apos;re
                    here to help. Reach out through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">harshmayur1704@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+91-8080235293</p>
                      <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Will be updating soon</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock10 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Response</h3>
                      <p className="text-muted-foreground">You will get a response within 48 hours.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="mb-4 font-semibold text-foreground">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Github, href: "#", label: "GitHub" },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </ErrorBoundary>
  );
};

export default Contact;
