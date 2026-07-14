"use client";

import { motion } from "framer-motion";

const navItems = ["Product", "Security", "Contact"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8"
    >
      <div>
        <p className="text-base font-semibold uppercase tracking-[0.25em] text-zinc-950">docco</p>
        <p className="text-xs text-zinc-500">secure docs</p>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            {item}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
