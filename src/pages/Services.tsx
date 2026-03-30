import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const services = [
  {
    title: "Training Programs",
    icon: "🎓",
    description: "Intensive bootcamps, internships, and mentorship tracks designed to launch AI/ML careers.",
    benefits: [
      "Hands-on, project-based learning",
      "Mentorship from industry experts",
      "Career-ready outcomes"
    ],
    tech: ["AI/ML", "Data Science", "DevOps", "Cybersecurity", "Cloud"]
  },
  {
    title: "Development",
    icon: "💼",
    description: "Custom AI/ML development, data engineering, cybersecurity assessments, and consulting for organizations.",
    benefits: [
      "Production-grade solutions",
      "Secure, scalable architectures",
      "Expert consulting"
    ],
    tech: ["AI/ML", "Data Science", "Cybersecurity"]
  },
  {
    title: "Engagement Models",
    icon: "🤝",
    description: "Flexible models: fixed price projects, retainer consulting, and training partnerships to fit your needs.",
    benefits: [
      "Transparent pricing",
      "Long-term support",
      "Collaborative approach"
    ],
    tech: ["Consulting", "Dev"]
  },
  {
    title: "Why Choose Us?",
    icon: "🌟",
    description: "Blended model: training + delivery. Lower cost with supervised junior engineers, high quality with senior oversight.",
    benefits: [
      "Cost-effective delivery",
      "Continuous innovation",
      "Mentorship-driven teams"
    ],
    tech: ["AI/ML", "Data Science", "Dev"]
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Services & <span className="gradient-text">Offerings</span>
            </h1>
            <p className="text-xl text-primary font-semibold mb-2">
              Training freshers on real AI projects and delivering production‑ready AI, data, and security solutions for clients.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Astrasoft is a group of passionate AI enthusiasts building real solutions while mentoring the next generation of engineers.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial="false"
            animate="true"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={{}}
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card/60 border border-border rounded-2xl p-8 flex flex-col items-center hover:shadow-lg transition-all duration-300 group focus-within:ring-2 focus-within:ring-primary outline-none"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                tabIndex={0}
                aria-label={service.title}
              >
                <span className="text-3xl mb-4" aria-hidden>{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 text-center">{service.description}</p>
                <ul className="text-muted-foreground text-xs text-left list-disc pl-4 mb-3">
                  {service.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tech.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="mt-auto px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                  tabIndex={0}
                  aria-label={`Request info about ${service.title}`}
                >
                  {service.title === "Training Programs" ? "Apply for Training" : service.title === "Client Services" ? "Request a Quote" : "Learn More"}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
