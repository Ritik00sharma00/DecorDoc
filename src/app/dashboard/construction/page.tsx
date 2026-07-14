"use client";

import { useRef, useState } from "react";

export default function ConstructionPage(){
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tool, setTool] = useState<'line'|'free'|'arc'>('line');
  const [isDrawing, setIsDrawing] = useState(false);
  const startRef = useRef<{x:number,y:number}|null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    const rect = (canvasRef.current as HTMLCanvasElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    startRef.current = {x,y};
    setIsDrawing(true);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if(!isDrawing) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if(!ctx || !startRef.current) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if(tool === 'line'){
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startRef.current.x, startRef.current.y);
      ctx.lineTo(x,y);
      ctx.stroke();
    } else if(tool === 'arc'){
      const cx = (startRef.current.x + x)/2;
      const cy = (startRef.current.y + y)/2;
      const rx = Math.abs(x - startRef.current.x)/2;
      const ry = Math.abs(y - startRef.current.y)/2;
      ctx.strokeStyle = '#34d399';
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI);
      ctx.stroke();
    }

    setIsDrawing(false);
    startRef.current = null;
  };

  const clear = ()=>{
    const c = canvasRef.current; if(!c) return; const ctx=c.getContext('2d'); if(!ctx) return; ctx.clearRect(0,0,c.width,c.height);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Construction — Drafter Canvas</h1>

      <div className="mb-3 flex gap-3">
        <button onClick={()=>setTool('line')} className={`px-3 py-1 rounded ${tool==='line'? 'bg-sky-500 text-white':''}`}>Line</button>
        <button onClick={()=>setTool('arc')} className={`px-3 py-1 rounded ${tool==='arc'? 'bg-sky-500 text-white':''}`}>Arc</button>
        <button onClick={()=>setTool('free')} className={`px-3 py-1 rounded ${tool==='free'? 'bg-sky-500 text-white':''}`}>Freehand</button>
        <button onClick={clear} className="px-3 py-1 rounded bg-white/6">Clear</button>
      </div>

      <div className="rounded-2xl border border-white/6 bg-white/3 p-4">
        <div className="mb-2 text-sm text-slate-300">Scale: 1 unit = 10 px (visual guide)</div>
        <canvas ref={canvasRef} width={1000} height={400}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className="w-full h-80 bg-white/5 rounded-md"
        />
      </div>
    </div>
  );
}
