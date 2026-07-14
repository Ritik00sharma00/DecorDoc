"use client";

import { useState } from "react";

export default function MarketingPage() {
  const [budget, setBudget] = useState(5000);
  const [mindText, setMindText] = useState("Campaign idea");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Marketing</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/6 bg-white/5 p-4">
          <h2 className="font-semibold mb-2">Performance chart</h2>
          <svg viewBox="0 0 300 120" className="w-full h-36">
            <polyline fill="none" stroke="#38bdf8" strokeWidth="3" points="10,90 60,60 110,70 160,40 210,50 260,30" />
          </svg>
        </div>

        <div className="rounded-2xl border border-white/6 bg-white/5 p-4">
          <h2 className="font-semibold mb-2">Mind mapper (single node)</h2>
          <div contentEditable suppressContentEditableWarning className="rounded-xl bg-sky-500/80 p-4 text-white" onBlur={(e)=>setMindText(e.currentTarget.textContent||"")}>{mindText}</div>

          <div className="mt-4">
            <h3 className="font-medium">Budget</h3>
            <div className="mt-2 flex items-center gap-3">
              <button onClick={()=>setBudget(b=>Math.max(0,b-500))} className="px-3 py-1 bg-white/6 rounded-md">-</button>
              <div className="font-semibold">${budget}</div>
              <button onClick={()=>setBudget(b=>b+500)} className="px-3 py-1 bg-white/6 rounded-md">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
