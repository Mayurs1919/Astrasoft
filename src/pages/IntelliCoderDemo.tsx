import { Layout } from "@/components/Layout";
import { ProjectGlassCard } from "@/components/ProjectGlassCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function IntelliCoderDemo() {
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
          Intelli-Coder — AI-Native IDE Platform
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p>
              Intelli-Coder is a next-generation, AI-native Integrated Development Environment designed to transform natural language intent into production-ready software systems. Unlike traditional IDEs, MS-CODER follows a capability-driven and governance-first architecture, where every action is validated, controlled, and auditable. It integrates AI agents as controlled executors to automate the complete development lifecycle — from planning to deployment — while ensuring enterprise-grade security and compliance.
            </p>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>🔹 Generate full-stack applications from natural language prompts</li>
              <li>🔹 Automatically refactor, debug, and optimize code</li>
              <li>🔹 Generate structured APIs and database schemas</li>
              <li>🔹 Execute PLAN → CODE → TEST → CREATE PR workflows</li>
              <li>🔹 Integrate with GitHub for automated commits and PRs</li>
              <li>🔹 Set up environments across Linux, Windows, and macOS</li>
              <li>🔹 Manage deployments (cloud, CI/CD pipelines)</li>
              <li>🔹 Generate test cases, reports, and debugging insights</li>
              <li>🔹 Enable enterprise teams with audit logs and controlled execution</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Core Execution Flow</h2>
            <pre className="bg-muted rounded p-3 text-sm overflow-x-auto mt-2 mb-2 text-left">
{`User Intent (Prompt)
        ↓
Intent Interface Layer
        ↓
Capability Registry (Validation & Permissions)
        ↓
Execution Control Layer
        ↓
AI Agents (Phase 3+ Controlled Execution)
        ↓
Backend Services + Integrations
        ↓
Output (Code / Tests / PR / Deployment)`}
            </pre>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Key Architectural Principles</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>Intent-driven (not command-based)</li>
              <li>Capability-governed execution</li>
              <li>AI as controlled worker (not decision-maker)</li>
              <li>Separation of frontend, backend, and execution layers</li>
              <li>Fully auditable and SOC2-ready</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>⚡ AI-powered code generation, refactoring, and debugging</li>
              <li>🔐 Secure GitHub OAuth integration with PR automation</li>
              <li>🧠 Intent → Capability → Execution architecture</li>
              <li>🧩 Plugin-ready, modular system design</li>
              <li>🖥️ Cross-platform support (Linux, Windows, macOS)</li>
              <li>🔄 Automated development lifecycle (Plan → Code → Test → PR)</li>
              <li>📊 Agent dashboard with status tracking</li>
              <li>🛠️ Built-in support for LSP, DAP, and MCP protocols</li>
              <li>🔍 Full audit logs and execution traceability</li>
              <li>💳 Credit-based Agent Compute Unit mode</li>
            </ul>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">Demo Access</h2>
            <p>Demo video coming soon. (5–7 sec preview will be embedded here.)</p>
            {/* Example video embed placeholder */}
            {/* <video src="DEMO_VIDEO_URL" controls className="w-full max-w-md mx-auto mt-4 rounded shadow" /> */}
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
          <ProjectGlassCard>
            <h2 className="text-2xl font-semibold mb-2">GitHub / Documentation</h2>
            <a
              href="https://github.com/your-org/intelli-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
            >
              View Source on GitHub
            </a>
          </ProjectGlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }}>
          <ProjectGlassCard className="text-center">
            <em>
              This project is not just an IDE — it is a governed AI development platform designed for: Engineers, Architects, Enterprises.<br />
              <b>“Build systems, not scripts.”</b>
            </em>
          </ProjectGlassCard>
        </motion.div>
      </section>
    </Layout>
  );
}
