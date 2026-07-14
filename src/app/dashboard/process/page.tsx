"use client";

import { useState } from "react";

type Node = { id: string; x: number; y: number; text: string };

export default function ProcessPage() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: "a", x: 60, y: 40, text: "Start" },
    { id: "b", x: 260, y: 140, text: "Review" },
    { id: "c", x: 460, y: 40, text: "Done" },
  ]);

  const startDrag = (e: React.MouseEvent, id: string) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const node = nodes.find((n) => n.id === id);
    if (!node) return;

    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      setNodes((prev) => prev.map((n) => (n.id === id ? { ...n, x: node.x + dx, y: node.y + dy } : n)));
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const updateText = (id: string, text: string) => {
    setNodes((prev) => prev.map((n) => (n.id === id ? { ...n, text } : n)));
  };

  return (
    <div className="min-h-[60vh]">
      <h1 className="text-2xl font-semibold mb-4">Process — Mind Map</h1>
      <div className="relative h-[60vh] rounded-2xl border border-white/6 bg-white/3 p-4">
        {nodes.map((n) => (
          <div
            key={n.id}
            onMouseDown={(e) => startDrag(e, n.id)}
            style={{ left: n.x, top: n.y }}
            className="absolute w-40 cursor-grab rounded-xl bg-sky-500/80 p-3 text-white shadow-md"
          >
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={(ev) => updateText(n.id, ev.currentTarget.textContent || "")}
              className="outline-none"
            >
              {n.text}
            </div>
          </div>
        ))}

        {/* Simple arrows between first-second-third */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1={80} y1={80} x2={280} y2={180} stroke="#93C5FD" strokeWidth={3} strokeLinecap="round" />
          <line x1={300} y1={80} x2={480} y2={60} stroke="#7DD3FC" strokeWidth={3} strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
