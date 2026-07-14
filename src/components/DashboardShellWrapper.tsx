"use client";

import { useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";

export default function DashboardShellWrapper({ children  }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Sidebar open={open} />
      <div className="pl-0 lg:pl-64 min-h-screen">
        <div className="fixed left-0 right-0 z-30">
          <DashboardNavbar onToggleSidebar={() => setOpen((v) => !v)} />
        </div>

        <main className="pt-16 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-4xl bg-white/5 backdrop-blur-md border border-white/6 p-6 shadow-lg">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
