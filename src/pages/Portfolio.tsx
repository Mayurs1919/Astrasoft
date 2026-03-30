import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const categories = ["ALL"];

const projects = [
  {
    id: 1,
    title: "SynapseAI",
    description: "- SynapseAI for coding , deployment and development.",
    category: "AI-Coding",
    technologies: ["LangChain", "Orchestration", ""],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Havamaan.Ai",
    description: "Natural language processing platform for sentiment analysis and text summarization at scale.",
    category: "Foreacasting",
    technologies: ["Transformers", "BERT", "Python"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Samvaad.Ai",
    description: "All-in-one, high-definition, interactive display solution designed for modern classrooms and corporate boardrooms.",
    category: "Multillingual Interactive Video Conferencing App",
    technologies: ["Infrared (IR) Multi-Touch", "Anti-Glare Tempered Glass"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "DataInsight Dashboard",
    description: "Interactive analytics platform for visualizing complex datasets and deriving actionable insights.",
    category: "Data Analytics",
    technologies: ["React", "D3.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Intelli-Coder",
    description: "Intelli-Coder is an AI-powered coding assistant designed to streamline the software development lifecycle. It assists developers by generating code snippets, debugging issues, optimizing performance, and automating repetitive tasks, enabling faster and more efficient project delivery.",
    category: "AI-Coding",
    technologies: ["DeepFace", "Edge AI"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Voxa",
    description: "Conversational AI assistant with multi-language support and context-aware responses.",
    category: "NLP",
    technologies: ["GPT", "LangChain", "FastAPI"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {

  const [activeFilter, setActiveFilter] = useState("ALL");

  // Make filter logic case-insensitive and default to show all projects for 'ALL'
  const filteredProjects = projects.filter(
    (project) =>
      activeFilter.toUpperCase() === "ALL" ||
      project.category.toUpperCase() === activeFilter.toUpperCase()
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Projects <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our innovative AI solutions and prototypes built by our talented engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={
                          project.title === "SynapseAI"
                            ? "/SynapseAIDemo"
                            : project.title === "Havamaan.Ai"
                            ? "/HavamaanAIDemo"
                            : project.title === "Samvaad.Ai"
                            ? "/SamvaadAIDemo"
                            : project.title === "DataInsight Dashboard"
                            ? "/DataInsightDashboardDemo"
                            : project.title === "Intelli-Coder"
                            ? "/IntelliCoderDemo"
                            : project.title === "Voxa"
                            ? "/VoxaDemo"
                            : "#"
                        }
                        className="flex-1"
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                      <a
                        href={
                          project.title === "SynapseAI"
                            ? "https://github.com/your-org/synapse-ai"
                            : project.title === "Havamaan.Ai"
                            ? "https://github.com/your-org/havamaan-ai"
                            : project.title === "Samvaad.Ai"
                            ? "https://github.com/your-org/samvaad-ai"
                            : project.title === "DataInsight Dashboard"
                            ? "https://github.com/your-org/data-insight-dashboard"
                            : project.title === "Intelli-Coder"
                            ? "https://github.com/your-org/intelli-coder"
                            : project.title === "Voxa"
                            ? "https://github.com/your-org/voxa"
                            : "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
