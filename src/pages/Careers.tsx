import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

const positions = [
  {
    title: "AI/ML Engineer",
    description: "Work on real-world AI projects, from data wrangling to model deployment.",
  },
  {
    title: "Data Scientist",
    description: "Analyze data, build predictive models, and deliver actionable insights.",
  },
  {
    title: "Cloud Engineer",
    description: "Automate, deploy, and secure scalable cloud solutions for our clients.",
  },
  {
    title: "Cybersecurity Analyst",
    description: "Assess vulnerabilities and help secure cloud and IoT deployments.",
  },
  {
    title: "Data Analyst",
    description: "Analyze data, build predictive models, and deliver actionable insights.",
  },
  {
    title: "Q&A Engineer",
    description: "Test and validate AI/ML models, ensuring quality and performance for production use.",
  },
{
  "title": "AI Engineer",
  "description": "Design, develop, and deploy AI solutions, ensuring scalability, reliability, and high performance in production environments."
},
{
  "title": "DevOps Engineer",
  "description": "Design, build, and deploy scalable AI solutions while ensuring reliability, security, and performance in production environments."
}
];

export default function Careers() {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleApplyPosition = (title) => {
    setForm((prev) => ({ ...prev, position: title }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("position", form.position);
    if (form.resume) data.append("resume", form.resume);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", position: "", resume: null });
      } else {
        const result = await res.json();
        setError(result.message || "Submission failed.");
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Grow with us. Build your future.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-muted-foreground mb-8"
        >
          We’re always looking for passionate talent to join our journey.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow transition-all duration-200"
          onClick={handleScrollToForm}
        >
          Apply Now
        </motion.button>
      </section>

      {/* Open Positions */}
      <section className="py-12 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {positions.map((job) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-card/60 border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">{job.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                <button
                  className="mt-auto px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow transition-all duration-200 hover:bg-primary/90"
                  onClick={() => handleApplyPosition(job.title)}
                >
                  Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Application Form</h2>
          {success ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center font-semibold">
              Thank you for applying! Our team will review your application and get back to you.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card/60 border border-border rounded-2xl p-8 flex flex-col gap-6">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-background border border-border focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-background border border-border focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number <span className="text-xs text-muted-foreground">(optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-background border border-border focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Position Applied For</label>
                <select
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-background border border-border focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a position</option>
                  {positions.map((job) => (
                    <option key={job.title} value={job.title}>{job.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Resume/CV Upload <span className="text-xs text-muted-foreground">(PDF, DOC, DOCX)</span></label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-background border border-border focus:ring-2 focus:ring-primary"
                />
              </div>
              {error && <div className="text-red-600 font-medium text-center">{error}</div>}
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow transition-all duration-200 hover:bg-primary/90 disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
