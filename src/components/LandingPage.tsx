"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const tabs = ["Join now", "Contact us", "About us"];
const steps = [
  {
    title: "Manage docs with confidence",
    description: "Organize and share documents without lag or lost context.",
  },
  {
    title: "Collaborate with clarity",
    description: "No miscommunication, no outdated versions—just one source of truth.",
  },
  {
    title: "Secure every action",
    description: "Encryption, access rules, and audit-ready document controls.",
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Join now");
  const [isLoading, setIsLoading] = useState(false);

  const handleJoin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth");
    }, 200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="text-white text-2xl font-bold uppercase tracking-[0.3em]">Docco</div>
      {/* <div className="h-10 flex-1 rounded-full bg-sky-600/10" /> */}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700 pb-6 pt-4">
          <div className="flex gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "Join now") {
                    handleJoin();
                  }
                }}
                className={`rounded-sm px-4 py-2 transition ${activeTab === tab ? "bg-sky-500 text-white" : "bg-slate-900/70 text-slate-300 hover:bg-slate-800"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleJoin}
            className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Join now
          </button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 sm:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-black uppercase tracking-tight text-white sm:text-6xl">
                Secure your docs with us.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Built for teams that need fast, reliable paperwork workflows with strong security and no miscommunication.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-4xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-sky-400">Trusted by teams</p>
                  <p className="mt-2 text-xl font-semibold text-white">Always available. Always secure.</p>
                </div>
                <div className="grid h-20 w-20 place-items-center rounded-3xl bg-slate-800 text-sky-400">D</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Fast setup</p>
                  <p className="mt-2 text-base text-slate-100">No lag, no waiting—get started with your documents instantly.</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Smart sharing</p>
                  <p className="mt-2 text-base text-slate-100">Share exactly what you want, with the right people and permissions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-5xl border border-slate-800 bg-slate-900/90 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.8)]">
            <div className="flex flex-col gap-6 rounded-4xl border border-slate-800 bg-slate-950 p-6">
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-3xl bg-sky-500 text-center text-2xl font-black leading-12 text-slate-950">D</div>
                <h2 className="text-3xl font-bold text-white">Docco</h2>
                <p className="text-slate-400">A compact identity system for secure document flows.</p>
              </div>
              <div className="grid gap-3">
                <div className="h-16 rounded-3xl bg-slate-900/95 p-4">
                  <div className="h-full w-full rounded-3xl border border-slate-800 bg-slate-950/70" />
                </div>
                <div className="h-16 rounded-3xl bg-slate-900/95 p-4">
                  <div className="h-full w-full rounded-3xl border border-slate-800 bg-slate-950/70" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">What problem we solve</p>
            <h2 className="text-4xl font-bold text-white">Workflows that actually move faster.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-4xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg shadow-slate-950/20"
              >
                <p className="text-lg font-semibold text-white">{step.title}</p>
                <p className="mt-3 text-slate-400">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90 px-6 py-8 text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Docco. All rights reserved.</p>
          <p>Built for secure document teams.</p>
        </div>
      </footer>

      {isLoading ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80">
          <div className="h-20 w-20 animate-pulse rounded-full bg-sky-500/80" />
        </div>
      ) : null}
      </div>
  )
}

