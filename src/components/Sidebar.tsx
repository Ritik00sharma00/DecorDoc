"use client";

import Link from "next/link";

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside className={`fixed left-0 top-0 bottom-0 w-64 transform ${open ? 'translate-x-0' : '-translate-x-64'} transition-transform bg-white/4 backdrop-blur-sm border-r border-white/6 p-4 z-40`}>
      <div className="mb-6">
        <div className="text-white text-lg font-bold">Docco</div>
        <p className="text-xs text-slate-300">Workspace</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link href="/dashboard/process" className="px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Process</Link>
        <Link href="/dashboard/marketing" className="px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Marketing</Link>
        <Link href="/dashboard/construction" className="px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Construction</Link>
        <Link href="/dashboard" className="px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Documents</Link>
      </nav>
    </aside>
  );
}
