import { Layout } from "@/components/Layout";
export default function VoxaDemo() {
  return (
    <Layout>
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Voxa</h1>
        <p className="mb-6">Project description, use cases, and workflow go here.</p>
        <a
          href="https://github.com/your-org/voxa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          View on GitHub
        </a>
      </section>
    </Layout>
  );
}
