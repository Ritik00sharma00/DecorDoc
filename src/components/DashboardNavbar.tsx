"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardNavbar({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const [active, setActive] = useState("process");
  const router = useRouter();

  const handleNav = (key: string) => {
    setActive(key);
    if (key === "process") router.push('/dashboard/process');
    if (key === "marketing") router.push('/dashboard/marketing');
    if (key === "construction") router.push('/dashboard/construction');
  };

  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 bg-white/5 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <button
          aria-label="Toggle sidebar"
          onClick={() => onToggleSidebar && onToggleSidebar()}
          className="p-2 rounded-md bg-white/6 hover:bg-white/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-100"><path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="text-white font-semibold">Docco Dashboard</div>
      </div>

      <nav className="flex items-center gap-3">
        <button onClick={() => handleNav('process')} className={`px-3 py-2 rounded-md ${active==='process'? 'bg-sky-500 text-white':'text-slate-200 hover:bg-white/5'}`}>Process</button>
        <button onClick={() => handleNav('marketing')} className={`px-3 py-2 rounded-md ${active==='marketing'? 'bg-sky-500 text-white':'text-slate-200 hover:bg-white/5'}`}>Marketing</button>
        <button onClick={() => handleNav('construction')} className={`px-3 py-2 rounded-md ${active==='construction'? 'bg-sky-500 text-white':'text-slate-200 hover:bg-white/5'}`}>Construction</button>
      </nav>

      <div className="flex items-center gap-3">
        <div className="text-slate-300 text-sm">Signed in</div>
      </div>
    </header>
  );
}
