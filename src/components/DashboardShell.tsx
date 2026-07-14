"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";

const initialProjects = [
  { id: 1, name: "Document Protection", leader: "Amina Patel", status: "Active" },
  { id: 2, name: "Team Access Controls", leader: "Noah Chen", status: "Review" },
];

const initialMembers = [
  { id: 1, name: "Amina Patel", email: "amina@docco.com" },
  { id: 2, name: "Noah Chen", email: "noah@docco.com" },
  { id: 3, name: "Mia Torres", email: "mia@docco.com" },
];

export default function DashboardShell() {
  const [projects, setProjects] = useState(initialProjects);
  const [members, setMembers] = useState(initialMembers);
  const [activeTab, setactiveTab] = useState("diagram");
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectLeader, setNewProjectLeader] = useState("");
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const summary = useMemo(
    () => ({
      activeProjects: projects.length,
      teamMembers: members.length,
      pendingReviews: projects.filter((project) => project.status !== "Active").length,
    }),
    [members.length, projects]
  );

  const handleAddProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newProjectName || !newProjectLeader) {
      setStatusMessage("Please enter a project name and leader.");
      return;
    }

    setProjects((current) => [
      ...current,
      {
        id: current.length + 1,
        name: newProjectName,
        leader: newProjectLeader,
        status: "Planning",
      },
    ]);
    setNewProjectName("");
    setNewProjectLeader("");
    setStatusMessage("New project added to your workspace.");
  };

  const handleAddMember = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newMemberName || !newMemberEmail) {
      setStatusMessage("Please enter a member name and email.");
      return;
    }

    setMembers((current) => [
      ...current,
      {
        id: current.length + 1,
        name: newMemberName,
        email: newMemberEmail,
      },
    ]);
    setNewMemberName("");
    setNewMemberEmail("");
    setStatusMessage("Member added to the workspace.");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-zinc-100 text-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="mb-8 flex flex-col gap-5 rounded-4xl border border-orange-200 bg-white/95 p-8 shadow-[0_30px_90px_-40px_rgba(249,115,22,0.35)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Admin dashboard</p>
            <h1 className="mt-3 text-3xl font-semibold text-zinc-950 sm:text-4xl">Manage projects, members, and workflows</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
              Keep your document workflows organized, invite team members, and review the live diagram workspace for your active project.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 rounded-full bg-zinc-100 p-2 text-sm font-semibold text-zinc-700">
            <a
              href="/dashboard"
              className="rounded-full px-5 py-2 transition bg-orange-600 text-white shadow-lg shadow-orange-200/50"
            >
              Overview
            </a>
            <a
              href="/dashboard/diagram"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2 transition text-zinc-700 hover:bg-zinc-200"
            >
              Diagram
            </a>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <section className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-orange-100">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Active projects</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-950">{summary.activeProjects}</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-orange-100">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Team members</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-950">{summary.teamMembers}</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm border border-orange-100">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Needs review</p>
                <p className="mt-4 text-3xl font-semibold text-zinc-950">{summary.pendingReviews}</p>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-4xl border border-orange-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Project list</p>
                    <h2 className="mt-2 text-xl font-semibold text-zinc-950">Current workspaces</h2>
                  </div>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                    {projects.length} active
                  </span>
                </div>

                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="rounded-3xl border border-orange-100 bg-orange-50/80 p-4">
                      <p className="text-sm uppercase tracking-[0.25em] text-orange-600">{project.status}</p>
                      <h3 className="mt-2 text-lg font-semibold text-zinc-950">{project.name}</h3>
                      <p className="mt-1 text-sm text-zinc-600">Lead by {project.leader}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                className="rounded-4xl border border-orange-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Quick add</p>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-950">New project</h2>
                </div>
                <form className="space-y-4" onSubmit={handleAddProject}>
                  <label className="block text-sm text-zinc-700">
                    Project name
                    <input
                      value={newProjectName}
                      onChange={(event) => setNewProjectName(event.target.value)}
                      className="mt-2 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      placeholder="Document Protection"
                    />
                  </label>
                  <label className="block text-sm text-zinc-700">
                    Project leader
                    <input
                      value={newProjectLeader}
                      onChange={(event) => setNewProjectLeader(event.target.value)}
                      className="mt-2 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      placeholder="Amina Patel"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
                  >
                    Add project
                  </button>
                </form>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="rounded-4xl border border-orange-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Team members</p>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-950">Workspace collaborators</h2>
                </div>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
                  {members.length} members
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {members.map((member) => (
                  <div key={member.id} className="rounded-3xl border border-orange-100 bg-orange-50/80 p-4">
                    <p className="font-semibold text-zinc-950">{member.name}</p>
                    <p className="mt-1 text-sm text-zinc-600">{member.email}</p>
                  </div>
                ))}
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleAddMember}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm text-zinc-700">
                    Member name
                    <input
                      value={newMemberName}
                      onChange={(event) => setNewMemberName(event.target.value)}
                      className="mt-2 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      placeholder="Mia Torres"
                    />
                  </label>
                  <label className="block text-sm text-zinc-700">
                    Member email
                    <input
                      value={newMemberEmail}
                      onChange={(event) => setNewMemberEmail(event.target.value)}
                      className="mt-2 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      placeholder="mia@docco.com"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
                >
                  Add member
                </button>
              </form>
            </motion.div>
          </section>

          <section className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-4xl border border-orange-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Live workspace</p>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-950">Diagram & status</h2>
                </div>
                <p className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                  Overview mode
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Use the diagram view to get a visual sense of the workflow, or stay in overview to manage ongoing tasks and team roles.
              </p>
            </motion.div>

            {activeTab === "diagram" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-4xl border border-orange-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Lucid preview</p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-950">Mini diagram board</h3>
                  </div>
                  <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                    Smaller view
                  </span>
                </div>

                <div className="grid gap-5 rounded-4xl border border-orange-100 bg-zinc-950 p-5 shadow-inner">
                  <div className="rounded-3xl bg-zinc-900/95 p-4 text-white shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Lucid chart</p>
                        <p className="text-sm font-semibold text-white">Document workflow overview</p>
                      </div>
                      <div className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-200">
                        preview
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
                      <div className="space-y-3 rounded-3xl border border-orange-700/20 bg-orange-500/10 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Node</p>
                        <p className="text-base font-semibold text-white">Upload flow</p>
                      </div>
                      <div className="space-y-3 rounded-3xl border border-orange-700/20 bg-orange-400/10 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Node</p>
                        <p className="text-base font-semibold text-white">Access control</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-3xl border border-orange-700/20 bg-zinc-950/80 p-3 text-xs uppercase tracking-[0.25em] text-orange-200">Team</div>
                      <div className="rounded-3xl border border-orange-700/20 bg-zinc-950/80 p-3 text-xs uppercase tracking-[0.25em] text-orange-200">Share</div>
                      <div className="rounded-3xl border border-orange-700/20 bg-zinc-950/80 p-3 text-xs uppercase tracking-[0.25em] text-orange-200">Review</div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-4 text-sm text-zinc-700 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-500">Chart tools</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-3xl bg-white/90 p-3 text-zinc-950">Node details</div>
                      <div className="rounded-3xl bg-white/90 p-3 text-zinc-950">Connector view</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-4xl border border-orange-200 bg-white p-6 shadow-sm"
              >
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-orange-50 p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Project status</p>
                    <p className="mt-3 text-lg font-semibold text-zinc-950">Active documents are protected and shared securely.</p>
                  </div>
                  <div className="rounded-3xl bg-zinc-950 p-5 text-white shadow-xl shadow-orange-100/20">
                    <p className="text-sm uppercase tracking-[0.25em] text-orange-200">Team health</p>
                    <p className="mt-3 text-lg font-semibold">Ready for review</p>
                  </div>
                  <div className="rounded-3xl bg-orange-100 p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.25em] text-orange-500">Next step</p>
                    <p className="mt-3 text-lg font-semibold text-zinc-950">Invite more members to complete the project workflow.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </section>
        </div>

        {statusMessage ? (
          <div className="mt-6 rounded-3xl bg-orange-50 px-5 py-4 text-sm text-orange-700 shadow-sm border border-orange-100">
            {statusMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
}
