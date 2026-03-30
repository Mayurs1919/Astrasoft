import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Target, Eye, Heart, Users, Sparkles, Globe } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives to drive success.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're driven by a genuine love for AI and its potential to transform industries.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We focus on creating solutions that make a real difference in people's lives.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pioneering the <span className="gradient-text">AI Revolution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Astrasoft is a dynamic startup dedicated to nurturing the next generation of AI engineers. 
              We provide a platform for fresh talent to collaborate, learn, and build groundbreaking AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower emerging AI engineers with real-world experience, mentorship, and 
                opportunities to work on cutting-edge projects. We believe that talent knows no 
                boundaries, and we're committed to building a global community of AI innovators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading force in AI innovation by fostering a culture of continuous 
                learning and collaboration. We envision a future where AI is accessible, ethical, 
                and drives positive change across all sectors of society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Astrasoft.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded by a group of passionate AI enthusiasts, Astrasoft emerged from a simple 
                  observation: talented engineers often lack the opportunity to work on meaningful 
                  AI projects early in their careers.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We set out to change that by creating a startup that prioritizes learning and 
                  growth. At Astrasoft, every project is an opportunity to develop new skills, 
                  collaborate with peers, and contribute to solutions that matter.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we're proud to have a growing community of engineers from around the world, 
                  working together to push the boundaries of what's possible with AI. Join us, and 
                  let's build the future together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Leadership Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Leadership</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The visionaries and leaders guiding Astrasoft's journey.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Founder & Director */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center bg-card/50 border border-border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/leaders/mayur-anil-shinde.jpeg"
                    alt="Mayur Anil Shinde"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mayur Anil Shinde</h3>
                <span className="text-muted-foreground text-sm mb-2">Founder & Director</span>
              </motion.div>
              {/* CEO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center bg-card/50 border border-border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/leaders/yash-shivaji-lende.jpeg"
                    alt="Yash Shivaji Lende"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Yash Shivaji Lende</h3>
                <span className="text-muted-foreground text-sm mb-2">CEO</span>
              </motion.div>
              {/* Chairman */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center bg-card/50 border border-border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/leaders/harsh-anil-shinde.jpeg"
                    alt="Harsh Anil Shinde"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Harsh Anil Shinde</h3>
                <span className="text-muted-foreground text-sm mb-2">Chairman</span>
              </motion.div>
              {/* Cloud Engineer */}
              <div className="flex flex-col items-center bg-card/50 border border-border rounded-2xl p-6 md:col-span-2 lg:col-span-1">
                <div className="w-24 h-24 rounded-full bg-muted mb-4 flex items-center justify-center text-3xl font-bold text-primary">
                  {/* Add photo here later */}
                  A
                </div>
                <h3 className="text-xl font-semibold text-foreground">Anish Mahadev Gurav</h3>
                <span className="text-muted-foreground text-sm mb-2">Cloud Engineer</span>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default About;
