import DiagramWorkspace from "@/components/DiagramWorkspace";

export default function DashboardDiagramPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="mb-8 rounded-4xl border border-orange-200 bg-white p-8 shadow-[0_30px_90px_-40px_rgba(249,115,22,0.35)]">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Lucid mini chart</p>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-950 sm:text-4xl">Diagram workspace preview</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600">
            This page shows a compact Lucid-like diagram preview for your project workflow.
          </p>
        </div>

        <div className="rounded-4xl border border-orange-200 bg-white p-6 shadow-sm">
          <DiagramWorkspace projectName="Document Protection" leaderName="Amina Patel" />
        </div>
      </section>
    </main>
  );
}
