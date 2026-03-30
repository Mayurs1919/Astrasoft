import { Layout } from "@/components/Layout";
import { ProjectGlassCard } from "@/components/ProjectGlassCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DataInsightDashboardDemo() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="relative z-30 w-full bg-transparent" style={{ height: '64px' }} />
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/portfolio")}
          className="mt-2 mb-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 hover:bg-white/90 text-gray-900 shadow transition backdrop-blur border border-gray-200"
          aria-label="Back to Portfolio"
          type="button"
        >
          <span className="text-lg">←</span>
          <span className="font-medium">Back</span>
        </button>
      </div>
      <section className="pt-12 pb-12 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          DataInsight Dashboard
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p>
              DataInsight Dashboard is an interactive, high-performance analytics platform designed to transform complex, multi-dimensional datasets into intuitive visual stories. By leveraging real-time data processing and advanced charting libraries, it enables stakeholders to identify trends, monitor KPIs, and make data-driven decisions at a glance.
            </p>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li><b>Performance Monitoring:</b> Tracking website "Load Time vs. Bounce Rate" to optimize user experience.</li>
              <li><b>User Behavior Analysis:</b> Visualizing session lengths and page views to understand engagement patterns.</li>
              <li><b>Operational Efficiency:</b> Identifying bottlenecks in system processes through real-time data streams.</li>
              <li><b>Business Intelligence:</b> Aggregating historical data from PostgreSQL to forecast quarterly growth.</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Workflow & Architecture</h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-left">
              <li><b>Data Layer (PostgreSQL):</b> Stores structured datasets, user logs, and historical metrics.</li>
              <li><b>API Layer:</b> Robust backend (Node.js or Python) fetches and cleans data from the database.</li>
              <li><b>Visualization Engine (D3.js):</b> Transforms raw JSON data into complex, interactive SVG/Canvas elements.</li>
              <li><b>Frontend (React):</b> Component-based UI, handling state management and real-time dashboard updates.</li>
            </ul>
            <div className="mt-4">
              <strong>Platform utilizes a modern, decoupled architecture designed to handle high-concurrency data requests with minimal latency.</strong>
            </div>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li><b>Interactive D3.js Charts:</b> Deep-dive into specific data points with hover-states, zooming, and filtering.</li>
              <li><b>Real-time Median Metrics:</b> Toggle between different statistical views (like Median vs. Average) instantly.</li>
              <li><b>Performance Tracking:</b> Dedicated modules for "Start Render" and "Load Time" correlations.</li>
              <li><b>Responsive Design:</b> Fully optimized for both desktop monitoring and mobile oversight.</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Demo Access</h2>
            <p>Demo video coming soon. (5–7 sec preview will be embedded here.)</p>
            {/* Example video embed placeholder */}
            {/* <video src="DEMO_VIDEO_URL" controls className="w-full max-w-md mx-auto mt-4 rounded shadow" /> */}
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">GitHub / Documentation</h2>
            <a
              href="https://github.com/your-org/data-insight-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
            >
              View Source on GitHub
            </a>
          </ProjectGlassCard>
        </motion.div>
      </section>
    </Layout>
  );
}