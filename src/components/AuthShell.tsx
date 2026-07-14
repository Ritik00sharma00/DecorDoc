"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const initialAdmins = [
  { name: "Amina Patel", email: "amina@docco.com" },
  { name: "Noah Chen", email: "noah@docco.com" },
];

export default function AuthShell() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loginData, setLoginData] = useState({ email: "demo@docco.com", password: "demo" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    company: "",
    location: "",
  });
  const [showDialog, setShowDialog] = useState(false);
  const [isLoadingMode, setIsLoadingMode] = useState(false);
  const modeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (modeTimeoutRef.current) {
        clearTimeout(modeTimeoutRef.current);
      }
    };
  }, []);

  const dialogMessage = useMemo(() => {
    if (showDialog) {
      return "You are the admin. You can add others as admin after creating your workspace.";
    }
    return "";
  }, [showDialog]);

  const handleToggleMode = (selectedMode: "login" | "signup") => {
    if (mode === selectedMode || isLoadingMode) return;
    setIsLoadingMode(true);

    if (modeTimeoutRef.current) {
      clearTimeout(modeTimeoutRef.current);
    }

    modeTimeoutRef.current = setTimeout(() => {
      setMode(selectedMode);
      setIsLoadingMode(false);
    }, 300);
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    window.location.href = "/dashboard";
  };

  const handleSignup = (event: any) => {
    event.preventDefault();
    setShowDialog(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 flex items-center">
      <div className="mx-auto flex w-full max-w-fit flex-col gap-8 px-6 sm:px-8 lg:flex-row items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full rounded-xl border border-slate-800 bg-slate-950/95 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.65)] max-w-fit sm:max-w-md"
        >
          <div className="relative overflow-hidden rounded-xl bg-slate-900 p-1 text-sm font-semibold text-slate-300 shadow-inner shadow-slate-950/20">
            <motion.div
              className="absolute inset-y-1 left-1 w-[48%] rounded-xl bg-sky-500 shadow-xl shadow-sky-500/20"
              animate={{ x: mode === "login" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            />
            <div className="relative flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleToggleMode("login")}
                className={`relative z-10 flex-1 rounded-xl px-4 py-2 transition ${mode === "login" ? "text-white" : "text-slate-300 hover:text-white"}`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => handleToggleMode("signup")}
                className={`relative z-10 flex-1 rounded-xl px-4 py-2 transition ${mode === "signup" ? "text-white" : "text-slate-300 hover:text-white"}`}
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <AnimatePresence mode="wait">
              {isLoadingMode ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="space-y-4 animate-pulse"
                >
                  <div className="h-10 rounded-xl bg-slate-800" />
                  <div className="h-10 rounded-xl bg-slate-800" />
                  <div className="h-10 rounded-xl bg-slate-800" />
                  <div className="h-10 rounded-xl bg-slate-800" />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="h-12 rounded-xl bg-slate-800" />
                    <div className="h-12 rounded-xl bg-slate-800" />
                  </div>
                </motion.div>
              ) : mode === "login" ? (
                <motion.form
                  key="login"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4"
                  onSubmit={handleLogin}
                >
                  <label className="block text-sm text-slate-200">
                    Email address
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(event) => setLoginData((value) => ({ ...value, email: event.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    placeholder="demo@docco.com"
                  />
                </label>
                <label className="block text-sm text-slate-200">
                  Password
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(event) => setLoginData((value) => ({ ...value, password: event.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    placeholder="demo password"
                  />
                </label>
                <p className="text-xs text-slate-400">For the demo, just click continue. No credentials are required.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                  >
                    Continue to dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => (window.location.href = "/dashboard")}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                  >
                    Skip to demo
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.form
                key="signup"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-4"
                onSubmit={handleSignup}
              >
                <label className="block text-sm text-slate-200">
                  Email address
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(event) => setSignupData((value) => ({ ...value, email: event.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    placeholder="your.email@company.com"
                  />
                </label>
                <label className="block text-sm text-slate-200">
                  Password
                  <input
                    type="password"
                    value={signupData.password}
                    onChange={(event) => setSignupData((value) => ({ ...value, password: event.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    placeholder="demo password"
                  />
                </label>
                <label className="block text-sm text-slate-200">
                  Company name
                  <input
                    value={signupData.company}
                    onChange={(event) => setSignupData((value) => ({ ...value, company: event.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    placeholder="Acme Corp"
                  />
                </label>
                <label className="block text-sm text-slate-200">
                  Location
                  <input
                    value={signupData.location}
                    onChange={(event) => setSignupData((value) => ({ ...value, location: event.target.value }))}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    placeholder="City, Country"
                  />
                </label>
                <p className="text-xs text-slate-400">For demo purposes, just click create account and you will become admin.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                  >
                    Create account
                  </button>
                  <button
                    type="button"
                    onClick={() => (window.location.href = "/dashboard")}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                  >
                    Skip to demo
                  </button>
                </div>
              </motion.form>
            )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {showDialog ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <div className="max-w-md rounded-xl border border-slate-700 bg-slate-950 p-6 text-center shadow-2xl shadow-slate-950/60">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Admin created</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-100">You are the admin</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{dialogMessage}</p>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
