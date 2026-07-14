"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

const textAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
     <Navbar/>
     
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="flex-1"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-[#fff4e6] px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
          Secure your documents in one trusted place.
        </div>

        <h1 className="mt-8 text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
          docco protects and shares your documents with full access control.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
          docco is for creating and securing all your documents, then giving access to a specific person with full control and peace of mind.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:bg-orange-700"
          >
            Get started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
          >
            Learn more
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="relative flex-1"
      >
        <div className="relative mx-auto h-105 max-w-130 overflow-hidden rounded-4xl border border-orange-200 bg-linear-to-br from-orange-50 via-white to-zinc-50 p-6 shadow-[0_40px_120px_-60px_rgba(251,146,60,0.5)] sm:h-130">
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-orange-600 via-orange-500 to-orange-400" />

          <div className="relative flex h-full flex-col items-center justify-center gap-5 rounded-3xl bg-white/90 p-8 text-center shadow-xl shadow-orange-100/70">
            {/* <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-1 ring-orange-200">
              <Image src="/Docco.png" alt="Docco" width={72} height={72} className="object-contain" />
            </div> */}
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Secure locker</p>
              <h2 className="text-2xl font-semibold text-zinc-950">Document vault</h2>
              <p className="max-w-sm text-sm leading-6 text-zinc-500">
                A modern locker designed to keep your files protected, searchable, and shareable only with the right people.
              </p>
            </div>
            <div className="relative h-60 w-full rounded-3xl border border-orange-200 bg-zinc-950 p-6 text-left text-white shadow-2xl shadow-orange-200/20">
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-orange-200 backdrop-blur">
                docco vault
              </div>
              <div className="mt-12 space-y-4 text-sm leading-6 text-zinc-300">
                <p className="text-lg font-semibold text-white">Encrypted documents</p>
                <p>Upload files, set access, and lock them behind strong controls.</p>
                <p>Share only with the right person and revoke access anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
