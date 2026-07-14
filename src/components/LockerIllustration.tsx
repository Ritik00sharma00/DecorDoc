"use client";

import { motion } from "framer-motion";

export default function LockerIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto flex h-full max-w-130 items-center justify-center"
    >
      <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-orange-100 opacity-70 blur-2xl" />
      <div className="absolute -right-8 bottom-12 h-24 w-24 rounded-full bg-orange-200 opacity-70 blur-2xl" />

      <div className="relative flex w-full flex-col rounded-4xl border border-orange-200 bg-linear-to-br from-orange-50 via-white to-orange-100 p-8 shadow-[0_30px_90px_-40px_rgba(249,115,22,0.45)] sm:p-10">
        <div className="mb-8 flex items-center justify-between rounded-3xl border border-orange-200 bg-white/90 p-5 shadow-sm shadow-orange-100/50">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500">Locker</p>
            <h3 className="text-xl font-semibold text-zinc-950">Docco Vault</h3>
          </div>
          <div className="rounded-3xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white">Secure</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-orange-200 bg-zinc-950 p-5 text-white shadow-2xl shadow-orange-200/20">
            <div className="mb-4 flex items-center justify-between rounded-2xl bg-orange-600/10 px-4 py-3 text-sm text-orange-200">
              <span>docco</span>
              <span className="rounded-full bg-orange-500 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white">lock</span>
            </div>
            <div className="space-y-3 text-sm leading-6 text-orange-100">
              <p className="font-semibold text-white">Locked files</p>
              <p>Documents securely stored in one encrypted locker.</p>
              <p>Smart access controls for each person you share with.</p>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-3xl border border-orange-200 bg-white p-5 shadow-sm shadow-orange-100/60">
            <div className="relative h-40 w-full overflow-hidden rounded-3xl bg-linear-to-br from-orange-50 via-white to-orange-100 p-4">
              <div className="absolute left-4 top-4 h-20 w-24 rounded-2xl bg-white shadow-[0_16px_40px_-24px_rgba(15,23,42,0.4)]" />
              <div className="absolute right-3 top-0 h-16 w-16 rounded-full bg-orange-500/10" />
              <div className="absolute left-6 bottom-8 h-20 w-28 rounded-xl bg-zinc-900/95 p-3 text-white shadow-lg">
                <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-200">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  vault
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 w-16 rounded-full bg-orange-400/80" />
                  <div className="h-2.5 w-24 rounded-full bg-orange-400/80" />
                  <div className="h-2.5 w-12 rounded-full bg-orange-400/80" />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute left-8 top-10 h-12 w-16 rounded-2xl bg-white p-2 shadow-md"
              >
                <div className="h-2.5 w-12 rounded-full bg-orange-200" />
                <div className="mt-3 h-2.5 w-10 rounded-full bg-orange-100" />
                <div className="mt-2 h-2 w-6 rounded-full bg-orange-100" />
              </motion.div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute right-6 bottom-10 h-8 w-14 rounded-2xl bg-white/90 p-2 shadow-sm"
              >
                <div className="h-2.5 w-10 rounded-full bg-orange-200" />
                <div className="mt-3 h-2 w-6 rounded-full bg-orange-100" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
