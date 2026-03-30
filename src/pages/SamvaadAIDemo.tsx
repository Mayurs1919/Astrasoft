import { Layout } from "@/components/Layout";
import { ProjectGlassCard } from "@/components/ProjectGlassCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SamvaadAIDemo() {
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
          Samvaad AI
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p>
              Samvaad AI is an AI-powered multilingual video conferencing platform designed for organizations, educational institutions, and global teams. It enables seamless communication between users speaking different languages by providing real-time speech recognition, translation, and voice output during live meetings.<br /><br />
              The platform integrates WebRTC-based video conferencing, AI-driven language processing, and scalable backend architecture to deliver a smooth, intelligent, and inclusive meeting experience. Samvaad AI transforms traditional meetings into globally accessible conversations without language barriers.
            </p>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>🌍 <b>Global Team Collaboration:</b> Enable teams from different countries to communicate seamlessly in their native languages.</li>
              <li>🎓 <b>Educational Platforms & Webinars:</b> Conduct multilingual online classes and training sessions.</li>
              <li>🏢 <b>Corporate Meetings:</b> Facilitate communication between international clients and stakeholders.</li>
              <li>🧑‍💻 <b>Remote Work & Distributed Teams:</b> Improve productivity in globally distributed teams.</li>
              <li>🌐 <b>International Conferences:</b> Provide real-time translation for diverse audiences.</li>
              <li>🤝 <b>Client Demos & Presentations:</b> Deliver presentations across language boundaries without interpreters.</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Workflow / Architecture</h2>
            <div className="mb-2">
              <strong>High-Level Flow:</strong>
              <pre className="bg-muted rounded p-3 text-sm overflow-x-auto mt-2 mb-2 text-left">
{`User joins meeting
      ↓
WebRTC establishes video/audio stream
      ↓
Audio stream captured
      ↓
Speech Recognition (Whisper)
      ↓
Text generated
      ↓
Translation Engine
      ↓
Translated Text
      ↓
Text-to-Speech (optional)
      ↓
Output displayed as subtitles / audio`}
              </pre>
            </div>
            <div className="mb-2">
              <strong>System Architecture:</strong>
              <pre className="bg-muted rounded p-3 text-sm overflow-x-auto mt-2 mb-2 text-left">
{`Frontend (React / React Native)
        │
        │ REST + WebSocket
        ▼
Flask Backend (API + Auth + Meetings)
        │
        ├── Socket.IO (Signaling Server)
        │
        ├── AI Services Layer
        │     ├── Speech Recognition (Whisper)
        │     ├── Translation Engine
        │     └── Text-to-Speech
        │
        ├── Redis (Session / Queue)
        ├── Celery (Background Tasks)
        │
        ▼
Database (MySQL)
        │
        ▼
WebRTC Media Server (SFU - Mediasoup)`}
              </pre>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-left">
                <li>SFU (Selective Forwarding Unit) for scalable video streaming</li>
                <li>Socket.IO signaling for WebRTC communication</li>
                <li>Microservice-based AI processing pipeline</li>
                <li>Asynchronous task handling using Celery + Redis</li>
              </ul>
            </div>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>🎥 Real-Time Video Conferencing — High-quality multi-user video meetings using WebRTC.</li>
              <li>🌐 Live Language Translation — Converts spoken language into translated text/audio instantly.</li>
              <li>🎤 Speech Recognition (AI-powered) — Converts voice into accurate text using advanced AI models.</li>
              <li>🔊 Text-to-Speech Output — Translates and plays audio in the target language.</li>
              <li>🧠 AI Meeting Features — Live subtitles, meeting transcription, AI-generated summaries.</li>
              <li>👥 Dynamic Participant Grid — Supports 2 to 100+ participants with adaptive layout.</li>
              <li>🔐 Secure Authentication (JWT) — Role-based access and secure session management.</li>
              <li>📅 Meeting Scheduling System — Create, schedule, and invite participants via email.</li>
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
              href="https://github.com/your-org/samvaad-ai"
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