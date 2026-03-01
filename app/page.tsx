"use client";
import PreRegisterModal from '@/components/PreRegisterModal';
import React, { useState, useEffect } from 'react';
import {
  Brain, BookOpen, MessageSquare, BarChart3, CheckCircle2,
  FileText, Moon, Sun, Users, ClipboardList, GraduationCap,
  Star, ArrowRight, Play, Sparkles, Shield, Menu, X, Loader2
} from 'lucide-react';
import Image from 'next/image';

/* ─── shared nav links ─── */
const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

/* ─── typing effect ─── */
const TYPING_COMMANDS = [
  "Create test for Chapter 3",
  "Send reminder to Batch A",
  "Grade all submissions",
  "Summarize today's lecture",
  "Update marks for midterm",
  "Generate homework for Unit 5",
];

function TypingEffect() {
  const [cmdIdx, setCmdIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = TYPING_COMMANDS[cmdIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, 55);
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c - 1); }, 28);
    } else {
      setDeleting(false);
      setCmdIdx(i => (i + 1) % TYPING_COMMANDS.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, cmdIdx]);

  return (
    <span className="text-emerald-400 font-mono">
      {displayed}<span className="animate-pulse">|</span>
    </span>
  );
}

/* ─── data ─── */
const outcomes = [
  { number: "70%", label: "Admin time saved" },
  { number: "5x", label: "Faster grading" },
  { number: "0", label: "Manual Excel work" },
  { number: "100%", label: "Student comms covered" },
];

const coreValues = [
  {
    icon: Brain,
    accent: "#a78bfa",
    title: "AI Powered Automation",
    items: [
      "Auto generate tests and questions",
      "Automatic grading with instant results",
      "Lecture transcription and summaries",
      "AI created notes and homework",
      "Smart reports and analytics",
    ],
  },
  {
    icon: BookOpen,
    accent: "#34d399",
    title: "Complete Class Management",
    items: [
      "Create batches and enroll students",
      "Lecture wise attendance tracking",
      "Assignments and submissions",
      "Excel like gradebook",
      "Record sheets with auto updates",
    ],
  },
  {
    icon: MessageSquare,
    accent: "#f472b6",
    title: "Instant Student Communication",
    items: [
      "WhatsApp, Telegram and Email",
      "Batch or individual messages",
      "Deadlines and reminders",
      "Personal messages",
      "Announcements in one click",
    ],
  },
];

const featureCards = [
  { icon: Play, label: "Smart Lectures", title: "Upload, Transcribe, Share", desc: "AI transcribes your lecture, generates a crisp summary, and automatically shares notes with every student. Zero manual work.", accent: "from-emerald-500/20 to-teal-500/10", border: "border-emerald-500/30", iconColor: "text-emerald-400" },
  { icon: FileText, label: "AI Tests and Exams", title: "Unique tests. Auto graded. Instantly.", desc: "Generate unique question sets per student from any chapter or topic. Evaluation happens automatically and results are ready in seconds.", accent: "from-violet-500/20 to-purple-500/10", border: "border-violet-500/30", iconColor: "text-violet-400" },
  { icon: BarChart3, label: "Auto Gradebook", title: "Grades update themselves.", desc: "Sheets that pull from tests, attendance, and assignments automatically. No formulas. No manual entry. Ever.", accent: "from-blue-500/20 to-indigo-500/10", border: "border-blue-500/30", iconColor: "text-blue-400" },
  { icon: ClipboardList, label: "Assignments", title: "Create. Collect. Grade. Notify.", desc: "End to end assignment flow. Attach files, collect submissions, auto grade, and send results to students in one pipeline.", accent: "from-amber-500/20 to-orange-500/10", border: "border-amber-500/30", iconColor: "text-amber-400" },
  { icon: CheckCircle2, label: "Attendance", title: "Tracked in one click.", desc: "Lecture wise attendance with auto generated reports and instant absence alerts sent to students and parents.", accent: "from-rose-500/20 to-pink-500/10", border: "border-rose-500/30", iconColor: "text-rose-400" },
  { icon: Sparkles, label: "Teacher Copilot", title: "Just type. It is done.", desc: "Your AI assistant executes real tasks. Create tests, send messages, update marks — all from a single text command.", accent: "from-fuchsia-500/20 to-purple-500/10", border: "border-fuchsia-500/30", iconColor: "text-fuchsia-400" },
];

const audiences = [
  { icon: GraduationCap, label: "Schools" },
  { icon: BookOpen, label: "Coaching Institutes" },
  { icon: Users, label: "Colleges" },
  { icon: Star, label: "Online Educators" },
];

/* ─── shared header component ─── */
export function SiteHeader({ dark, setDark, onPreRegister }: { dark: boolean; setDark: (v: boolean) => void; onPreRegister: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const text = dark ? "text-white" : "text-gray-900";

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${dark ? "border-white/[0.06] bg-[#080c12]/80" : "border-gray-200/80 bg-white/80"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden ${dark ? "bg-purple-500/15" : "bg-purple-100"}`}>
            <Image src="/svg-logo.svg" alt="AlignAI Logo" width={28} height={28} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${text}`}>
            Align<span className="text-purple-400">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(n => (
            <a key={n.label} href={n.href} className={`text-sm font-medium transition-colors ${dark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>{n.label}</a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className={`p-2 rounded-lg transition-colors ${dark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:bg-gray-100"}`}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={onPreRegister} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105">
            Get Early Access
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setDark(!dark)} className={`p-2 rounded-lg transition-colors ${dark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:bg-gray-100"}`}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(o => !o)}
            className={`p-2 rounded-lg transition-colors ${dark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:bg-gray-100"}`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className={`md:hidden border-t ${dark ? "border-white/[0.06] bg-[#080c12]" : "border-gray-100 bg-white"}`}>
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map(n => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${dark ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
              >
                {n.label}
              </a>
            ))}
            <div className="pt-3 mt-2  ${dark ? 'border-white/10' : 'border-gray-100'}">
              <button
                onClick={() => { onPreRegister(); setMobileOpen(false); }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-200"
              >
                Get Early Access
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── shared footer ─── */
export function SiteFooter({ dark }: { dark: boolean }) {
  const muted = dark ? "text-gray-500" : "text-gray-400";
  const text = dark ? "text-white" : "text-gray-900";
  return (
    <footer className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/svg-logo.svg" alt="AlignAI" width={22} height={22} />
          <span className={`font-bold ${text}`}>Align<span className="text-purple-400">AI</span></span>
        </div>
        <p className={`text-sm ${muted}`}>© 2026 AlignAI. Built for teachers, by builders who care.</p>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map(l => (
            <a key={l} href="#" className={`text-sm transition-colors ${dark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   LANDING PAGE
════════════════════════════════════════ */
export default function LandingPage() {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const bg = dark ? "bg-[#080c12]" : "bg-gradient-to-br from-slate-50 via-white to-purple-50";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-400" : "text-gray-500";
  const card = dark ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-gray-200 shadow-sm";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${bg}`}>
      {/* ambient orbs */}
      {dark && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-violet-500/[0.07] blur-[100px]" />
        </div>
      )}

      <SiteHeader dark={dark} setDark={setDark} onPreRegister={() => setShowModal(true)} />
      {showModal && <PreRegisterModal dark={dark} onClose={() => setShowModal(false)} />}

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border ${dark ? "bg-purple-500/10 border-purple-500/20 text-purple-400" : "bg-purple-50 border-purple-200 text-purple-700"}`}>
          <Sparkles size={12} /> The AI assistant built for teachers
        </div>

        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 ${text}`}>
          Your AI Teaching
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Assistant.
          </span>
        </h1>

        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${muted}`}>
          Manage lectures, attendance, tests, assignments, grades, and student communication all from one intelligent platform.{' '}
          <strong className={dark ? "text-white" : "text-gray-800"}>Automate admin. Focus on teaching.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <button onClick={() => setShowModal(true)} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20">
            Get Early Access <ArrowRight size={16} />
          </button>
          <a href="/how-it-works" className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 border ${dark ? "border-white/15 text-gray-300 hover:bg-white/10 hover:text-white" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}>
            <Play size={14} className="fill-current" /> See how it works
          </a>
        </div>

        {/* copilot preview */}
        <div className={`max-w-lg mx-auto rounded-2xl border p-5 text-left ${dark ? "bg-white/[0.04] border-white/[0.08]" : "bg-white border-gray-200 shadow-md"}`}>
          <div className={`text-xs font-medium mb-3 flex items-center gap-2 ${muted}`}>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Teacher Copilot — just type a command
          </div>
          <div className={`rounded-xl px-4 py-3 text-sm font-mono ${dark ? "bg-[#0d1117]" : "bg-gray-50"}`}>
            <TypingEffect />
          </div>
          <div className={`mt-3 text-xs ${muted}`}>Executed instantly. No manual steps.</div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={`border-y ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {outcomes.map((o) => (
            <div key={o.number}>
              <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-1">{o.number}</div>
              <div className={`text-sm ${muted}`}>{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${text}`}>Everything a teacher needs</h2>
          <p className={`text-lg max-w-xl mx-auto ${muted}`}>Three pillars that cover your entire teaching workflow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <div key={i} className={`rounded-2xl border p-8 transition-all duration-300 hover:scale-[1.02] ${card}`} style={{ borderColor: v.accent + "40" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: v.accent + "20" }}>
                <v.icon size={24} style={{ color: v.accent }} />
              </div>
              <h3 className={`text-lg font-bold mb-5 ${text}`}>{v.title}</h3>
              <ul className="space-y-3">
                {v.items.map((item, j) => (
                  <li key={j} className={`flex items-start gap-2.5 text-sm ${muted}`}>
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: v.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${text}`}>Every workflow, automated</h2>
            <p className={`text-lg max-w-xl mx-auto ${muted}`}>From lecture to grade. AlignAI handles the admin so you can focus on what matters.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCards.map((f, i) => (
              <div key={i} className={`rounded-2xl border p-7 bg-gradient-to-br ${f.accent} ${f.border} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium mb-5 ${dark ? "bg-white/10 text-white/60" : "bg-black/5 text-gray-600"}`}>
                  <f.icon size={11} className={f.iconColor} />
                  {f.label}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${text}`}>{f.title}</h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COPILOT SPOTLIGHT */}
      <section className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border ${dark ? "bg-purple-500/10 border-purple-500/20 text-purple-400" : "bg-purple-50 border-purple-200 text-purple-700"}`}>
            <Sparkles size={12} /> Biggest selling point
          </div>
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight mb-6 ${text}`}>
            Meet your<br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">Teacher Copilot</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-12 ${muted}`}>
            Stop navigating menus. Just type what you need. The Copilot understands teaching tasks and executes them instantly and completely.
          </p>
          <div className={`max-w-2xl mx-auto rounded-2xl border overflow-hidden ${dark ? "bg-[#0d1117] border-white/10" : "bg-gray-900 border-gray-700"}`}>
            <div className={`flex items-center gap-2 px-5 py-3 border-b ${dark ? "border-white/10" : "border-gray-700"}`}>
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-gray-500 font-mono">Teacher Copilot</span>
            </div>
            <div className="p-6 space-y-4 text-left font-mono text-sm">
              {[
                { prompt: "Create test for Chapter 3", resp: "✓ Generated 20 unique questions. Assigned to Batch B." },
                { prompt: "Send reminder to Batch A", resp: "✓ WhatsApp + Email sent to 34 students." },
                { prompt: "Update marks for midterm", resp: "✓ Gradebook updated. Analytics refreshed." },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-gray-400"><span className="text-purple-400">you</span> &gt; {item.prompt}</div>
                  <div className="text-gray-300 pl-5">{item.resp}</div>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-500">you &gt; </span>
                <TypingEffect />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${text}`}>Built for educators everywhere</h2>
          <p className={`text-lg mb-12 ${muted}`}>Whether you teach 10 students or 10,000.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {audiences.map((a, i) => (
              <div key={i} className={`rounded-2xl border p-8 flex flex-col items-center gap-4 transition-all duration-200 hover:scale-105 ${card}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${dark ? "bg-purple-500/15" : "bg-purple-50"}`}>
                  <a.icon size={26} className="text-purple-400" />
                </div>
                <span className={`font-semibold text-sm ${text}`}>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border ${dark ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-700"}`}>
            <Shield size={12} /> Free to start. No credit card needed.
          </div>
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight mb-6 ${text}`}>
            Ready to reclaim<br />
            <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">your teaching time?</span>
          </h2>
          <p className={`text-lg mb-10 ${muted}`}>Join teachers saving 70% of their admin time every week.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setShowModal(true)} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20 text-base">
              Get Early Access <ArrowRight size={18} />
            </button>
            <a href="/how-it-works" className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border text-base ${dark ? "border-white/15 text-gray-300 hover:bg-white/10 hover:text-white" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      <SiteFooter dark={dark} />
    </div>
  );
}