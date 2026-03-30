import { Layout } from "@/components/Layout";
import { ProjectGlassCard } from "@/components/ProjectGlassCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HavamaanAIDemo() {
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
          Havamaan.Ai
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p>
              Havaman.Ai is a next-generation, AI-driven weather intelligence platform that transcends traditional forecasting. While standard apps only provide raw data, Havaman.Ai translates atmospheric conditions into "Actionable Wisdom." By blending high-fidelity 3D atmospheric visuals with a personalized "Morning Briefing" engine, it helps users plan their lives around the weather, rather than just reacting to it.
            </p>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li><b>Hyper-Local Commuting:</b> Predictive path-weather that alerts users to leave early or delay travel based on upcoming rain or visibility issues.</li>
              <li><b>Health & Wellness Monitoring:</b> Proactive alerts for "Very Poor" AQI or "Extreme" UV Index, offering specific clothing and safety advice.</li>
              <li><b>Outdoor Event Optimization:</b> Street-level precision for event planners, providing the exact "window of opportunity" for outdoor activities.</li>
              <li><b>Dynamic Lifestyle Planning:</b> Automated AI suggestions for fitness (running windows), gardening (irrigation timing), and home maintenance.</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Workflow / Architecture</h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-left">
              <li><b>Frontend (Next.js/Capacitor):</b> Cross-platform UI (Android/iOS/Web) using Glassmorphism and a React-Three-Fiber background that reflects real-time weather via the device gyroscope.</li>
              <li><b>API Layer (FastAPI):</b> High-performance Python backend serving async requests for location geocoding and weather synthesis.</li>
              <li><b>Intelligence Engine (Havaman.Ai Core):</b> Proprietary logic layer that processes raw JSON from global providers (Open-Meteo/NOAA) and converts it into "Natural Language Wisdom."</li>
              <li><b>Database (PostgreSQL 'hava'):</b> Persistent storage for user preferences, saved locations, and historical trends, managed on a custom high-performance port (5401).</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li><b>Dynamic 3D Skybox:</b> Real-time, volumetric background that changes density and color based on humidity, AQI, and time of day.</li>
              <li><b>Mobile-First "Morning Briefing":</b> Zero-click bento-grid summary for one-handed use, delivered every morning at 7:00 AM.</li>
              <li><b>Social "Vibe" Sharing:</b> One-tap generation of high-end social media cards to share local weather conditions with friends and family.</li>
              <li><b>Privacy-First Location:</b> Precise geolocation with a custom "Permission Intelligence" flow that respects user privacy while maintaining data accuracy.</li>
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
              href="https://github.com/your-org/havamaan-ai"
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
