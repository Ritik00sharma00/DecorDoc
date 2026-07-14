"use client";

import { motion } from "framer-motion";

interface DiagramWorkspaceProps {
  projectName: string;
  leaderName: string;
}

export default function DiagramWorkspace({ projectName, leaderName }: DiagramWorkspaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-4xl border border-orange-200 bg-linear-to-br from-orange-50 via-white to-zinc-100 p-6 shadow-[0_40px_80px_-40px_rgba(249,115,22,0.35)]"
    >
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Project diagram</p>
          <h2 className="text-2xl font-semibold text-zinc-950">{projectName}</h2>
        </div>
        <p className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
          Lead: {leaderName}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Overview</p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-950">Visualize the workflow</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              A practical board for the document-control project that highlights core nodes, access paths, and team responsibilities in a single glance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-orange-50 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-500">Node</p>
              <p className="mt-3 text-lg font-semibold text-zinc-950">Upload</p>
              <p className="mt-2 text-sm text-zinc-600">Encrypted input with access controls.</p>
            </div>
            <div className="rounded-3xl bg-zinc-950 p-5 text-white shadow-xl shadow-orange-100/20">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-200">Node</p>
              <p className="mt-3 text-lg font-semibold">Audit</p>
              <p className="mt-2 text-sm text-orange-200">Track every document event in a secure flow.</p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-orange-100 p-5 text-zinc-950 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-500">Node</p>
              <p className="mt-3 text-lg font-semibold">Access</p>
              <p className="mt-2 text-sm text-zinc-600">Team permissions and role-based sharing.</p>
            </div>
            <div className="rounded-3xl bg-orange-500/10 p-5 text-zinc-950 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-600">Node</p>
              <p className="mt-3 text-lg font-semibold">Review</p>
              <p className="mt-2 text-sm text-zinc-600">Leader approval and final document certification.</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-orange-200 bg-zinc-950 p-6 text-white shadow-2xl shadow-orange-200/20">
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-orange-500/15 to-transparent" />
          <div className="relative space-y-6">
            <div className="rounded-3xl bg-zinc-900/80 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-200">Workspace</p>
              <p className="mt-2 text-lg font-semibold">Live board</p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl bg-orange-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Central node</p>
                <p className="mt-2 text-lg font-semibold text-orange-100">Document flow</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-orange-600/10 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Branch</p>
                  <p className="mt-2 font-semibold text-orange-100">Secure upload</p>
                </div>
                <div className="rounded-3xl bg-orange-500/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-400">Branch</p>
                  <p className="mt-2 font-semibold text-white">Team access</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl bg-zinc-900/80 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-orange-200 bg-orange-400/10 p-3">
                  <p className="text-sm font-semibold text-orange-200">Process</p>
                </div>
                <div className="rounded-3xl border border-orange-200 bg-orange-300/10 p-3">
                  <p className="text-sm font-semibold text-orange-200">Connections</p>
                </div>
              </div>
              <div className="rounded-3xl bg-orange-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-orange-200">Status</p>
                <p className="mt-2 text-lg font-semibold text-white">Ready for review</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
