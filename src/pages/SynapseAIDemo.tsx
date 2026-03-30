import { Layout } from "@/components/Layout";
import { ProjectGlassCard } from "@/components/ProjectGlassCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SynapseAIDemo() {
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
          SynapseAI
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p>
              This project is an AI-powered IDE engine designed to automate engineering workflows using multiple specialized AI agents. Instead of users manually selecting tools or agents, the system intelligently infers user intent, routes the request to the correct internal agent, and generates structured, production-ready outputs.<br /><br />
              The platform replaces traditional dashboards with an execution surface (IDE-style interface), where users simply enter instructions, and the backend orchestrates the entire workflow.
            </p>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>Generate production-ready code in multiple languages</li>
              <li>Automatically review pull requests and detect issues</li>
              <li>Generate test cases from requirements</li>
              <li>Create technical documentation (README, specs)</li>
              <li>Design backend APIs and system architecture</li>
              <li>Debug and fix code issues</li>
              <li>Analyze system workflows and engineering logic</li>
              <li>Convert user instructions into structured engineering outputs</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Workflow / Architecture</h2>
            <div className="mb-2">
              <strong>System Flow (Simplified):</strong>
              <pre className="bg-muted rounded p-3 text-sm overflow-x-auto mt-2 mb-2 text-left">
{`User Input (Prompt + Files)
        ↓
IDE Execution Surface (Frontend)
        ↓
Intent Inference Engine (Backend)
        ↓
Agent Orchestrator (Kernel Layer)
        ↓
Internal AI Agents (Subsystems)
        ↓
Structured Output (Code / Docs / Tables / Review)
        ↓
Rendered in IDE UI`}
              </pre>
            </div>
            <div className="mb-2">
              <strong>Core Architecture Explanation:</strong>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-left">
                <li><b>Frontend (Execution Surface):</b> IDE-like, accepts instructions, displays outputs</li>
                <li><b>Backend (AI Kernel):</b> FastAPI, handles auth (JWT + Google OAuth), agent routing, structured output</li>
                <li><b>Agent Orchestrator:</b> Detects intent, selects agent, manages flow</li>
                <li><b>Agents (Subsystems):</b> Code Writer, Bug Fixer, PR Reviewer, Documentation Generator, Test Case Generator, API Designer, System Analyzer, Refactor Agent</li>
              </ul>
            </div>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>🧠 Intent-Based Agent Routing (No manual agent selection)</li>
              <li>⚙️ IDE-Style Execution Interface (No dashboard complexity)</li>
              <li>🔐 Secure Authentication (JWT-based login, Google OAuth planned)</li>
              <li>🗂️ Structured Output System (Code, Docs, Reviews, Tables)</li>
              <li>🔄 Multi-Agent Orchestration (Backend handles coordination)</li>
              <li>🧩 Modular Backend Architecture (API, Services, Engine, Agents)</li>
              <li>📡 Frontend–Backend Integration (REST APIs)</li>
              <li>🧪 Testable System (APIs accessible via Postman / browser)</li>
              <li>📦 Database Support (MySQL, normalized schema)</li>
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
              href="https://github.com/your-org/synapse-ai"
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