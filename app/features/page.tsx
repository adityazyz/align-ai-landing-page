"use client";
import PreRegisterModal from '@/components/PreRegisterModal';
import React, { useState, useEffect, useRef } from 'react';
import {
  Brain, BookOpen, MessageSquare, BarChart3, CheckCircle2,
  FileText, Moon, Sun, Users, ClipboardList, GraduationCap,
  Star, ArrowRight, Play, Sparkles, Shield, Bell, Zap,
  Mic, PenTool, TrendingUp, Send, Calendar, Award, Menu, X
} from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

/* ─── all features grouped ─── */
const featureGroups = [
  {
    id: "lectures",
    icon: Mic,
    color: "#34d399",
    badge: "Smart Lectures",
    headline: "Upload once. AI does the rest.",
    subtext: "Your lectures become searchable notes, summaries, and study material automatically. No extra effort from you.",
    bullets: [
      "Upload audio, video, or slides in any format",
      "AI transcribes every word with high accuracy",
      "Auto generated crisp summary shared with students",
      "Chapter wise notes created and distributed instantly",
      "Students receive everything before they even ask",
    ],
    visual: [
      { step: "01", label: "Upload lecture", icon: Play },
      { step: "02", label: "AI transcribes", icon: Mic },
      { step: "03", label: "Notes generated", icon: FileText },
      { step: "04", label: "Students notified", icon: Bell },
    ],
  },
  {
    id: "tests",
    icon: FileText,
    color: "#a78bfa",
    badge: "AI Tests & Exams",
    headline: "Generate tests in seconds. Grade them instantly.",
    subtext: "Never spend hours creating question papers again. AlignAI generates unique, chapter specific tests per student and grades them automatically.",
    bullets: [
      "Generate MCQ, short answer, or descriptive tests",
      "Unique question sets per student to prevent copying",
      "Auto evaluation with instant result publishing",
      "Difficulty level controls. Easy, medium, hard",
      "Full analytics on class performance per question",
    ],
    visual: [
      { step: "01", label: "Pick chapter and type", icon: BookOpen },
      { step: "02", label: "AI generates paper", icon: Brain },
      { step: "03", label: "Students attempt", icon: PenTool },
      { step: "04", label: "Auto graded and published", icon: Award },
    ],
  },
  {
    id: "gradebook",
    icon: BarChart3,
    color: "#60a5fa",
    badge: "Auto Gradebook",
    headline: "Your gradebook fills itself.",
    subtext: "Say goodbye to manual Excel sheets. AlignAI pulls grades from every test, assignment, and attendance record automatically.",
    bullets: [
      "Real time sync from tests, assignments, and attendance",
      "Customizable weightage per category",
      "Instant class wide performance snapshot",
      "Export to Excel or PDF any time",
      "Parent visible progress reports on demand",
    ],
    visual: [
      { step: "01", label: "Tests completed", icon: CheckCircle2 },
      { step: "02", label: "Grades captured", icon: BarChart3 },
      { step: "03", label: "Weightage applied", icon: TrendingUp },
      { step: "04", label: "Reports generated", icon: FileText },
    ],
  },
  {
    id: "assignments",
    icon: ClipboardList,
    color: "#fb923c",
    badge: "Assignments",
    headline: "Create, collect, grade, notify in one flow.",
    subtext: "The complete assignment lifecycle handled for you. From creation to result delivery, every step is automatic.",
    bullets: [
      "Create assignments with rich text and file attachments",
      "Students submit directly through the platform",
      "AI assisted grading with teacher review option",
      "Instant result notifications to students",
      "Late submission tracking with customizable penalties",
    ],
    visual: [
      { step: "01", label: "Create and assign", icon: PenTool },
      { step: "02", label: "Students submit", icon: ClipboardList },
      { step: "03", label: "AI grades", icon: Brain },
      { step: "04", label: "Results sent", icon: Send },
    ],
  },
  {
    id: "attendance",
    icon: CheckCircle2,
    color: "#f472b6",
    badge: "Attendance",
    headline: "One click per lecture. Zero paperwork.",
    subtext: "Track attendance lecture by lecture. Alerts go out automatically when students miss class. Reports generate themselves.",
    bullets: [
      "Lecture wise attendance with one tap marking",
      "Automatic absence alerts to students and parents",
      "Monthly and term attendance reports",
      "Minimum attendance warnings before it is too late",
      "Bulk mark present or absent for whole batches",
    ],
    visual: [
      { step: "01", label: "Start lecture", icon: Play },
      { step: "02", label: "Mark attendance", icon: CheckCircle2 },
      { step: "03", label: "Alerts sent", icon: Bell },
      { step: "04", label: "Reports updated", icon: BarChart3 },
    ],
  },
  {
    id: "communication",
    icon: MessageSquare,
    color: "#34d399",
    badge: "Communication",
    headline: "Reach every student instantly.",
    subtext: "Send announcements, reminders, results, and personal messages via WhatsApp, Telegram, or Email. Whole batch or individual.",
    bullets: [
      "WhatsApp, Telegram, and Email all in one place",
      "Send to whole batch or specific students",
      "Scheduled reminders for deadlines and exams",
      "Two way messaging with individual students",
      "Announcement board visible to all enrolled students",
    ],
    visual: [
      { step: "01", label: "Write message", icon: PenTool },
      { step: "02", label: "Select recipients", icon: Users },
      { step: "03", label: "Choose channel", icon: MessageSquare },
      { step: "04", label: "Delivered instantly", icon: Send },
    ],
  },
  {
    id: "copilot",
    icon: Sparkles,
    color: "#c084fc",
    badge: "Teacher Copilot",
    headline: "Just type it. Copilot executes it.",
    subtext: "The most powerful feature in AlignAI. A conversational AI that understands teacher tasks and carries them out completely — no menus, no clicks.",
    bullets: [
      "Natural language commands for any task",
      "Creates tests, sends messages, updates grades",
      "Schedules classes and sets reminders",
      "Summarizes class progress in one sentence",
      "Works across all modules from a single input",
    ],
    visual: [
      { step: "01", label: "Type your command", icon: PenTool },
      { step: "02", label: "Copilot understands", icon: Brain },
      { step: "03", label: "Task executed", icon: Zap },
      { step: "04", label: "Confirmation shown", icon: CheckCircle2 },
    ],
  },
];

/* ─── Smooth scroll with offset for sticky headers ─── */
function scrollToSection(id: string, offset: number) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function FeaturesPage() {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('lectures');

  const bg = dark ? "bg-[#080c12]" : "bg-gradient-to-br from-slate-50 via-white to-purple-50";
  const textCls = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-400" : "text-gray-500";
  const card = dark ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-gray-200 shadow-sm";

  // Combined height of main header (69px) + sub-nav (53px) + some breathing room
  const SCROLL_OFFSET = 140;

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const fg of [...featureGroups].reverse()) {
        const el = document.getElementById(fg.id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET + 40) {
          setActiveId(fg.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${bg}`}>
      {dark && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-violet-500/[0.06] blur-[100px]" />
        </div>
      )}

      {/* ─── MAIN HEADER ─── */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${dark ? "border-white/[0.06] bg-[#080c12]/80" : "border-gray-200/80 bg-white/80"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden ${dark ? "bg-purple-500/15" : "bg-purple-100"}`}>
              <Image src="/svg-logo.svg" alt="AlignAI" width={28} height={28} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${textCls}`}>
              Align<span className="text-purple-400">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(n => (
              <a
                key={n.label}
                href={n.href}
                className={`text-sm font-medium transition-colors ${
                  n.href === '/features'
                    ? (dark ? 'text-white' : 'text-gray-900')
                    : (dark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900")
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-lg transition-colors ${dark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:bg-gray-100"}`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-lg transition-colors ${dark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:bg-gray-100"}`}
            >
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

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className={`md:hidden border-t ${dark ? "border-white/[0.06] bg-[#080c12]" : "border-gray-100 bg-white"}`}>
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map(n => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                    n.href === '/features'
                      ? (dark ? 'text-white bg-white/10' : 'text-gray-900 bg-gray-100')
                      : (dark ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50")
                  }`}
                >
                  {n.label}
                </a>
              ))}
              <div className={`pt-3 mt-2 border-t ${dark ? 'border-white/10' : 'border-gray-100'}`}>
                <button
                  onClick={() => { setShowModal(true); setMobileOpen(false); }}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-200"
                >
                  Get Early Access
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ─── FEATURES SUB-NAV ─── */}
      <div className={`sticky top-[69px] z-40 border-b ${dark ? "border-white/[0.06] bg-[#080c12]/90" : "border-gray-100 bg-white/90"} backdrop-blur-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-3">
            {featureGroups.map(f => (
              <button
                key={f.id}
                onClick={() => scrollToSection(f.id, SCROLL_OFFSET)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap border ${
                  activeId === f.id
                    ? 'border-current bg-current/10'
                    : (dark ? "border-transparent text-gray-500 hover:bg-white/10" : "border-transparent text-gray-400 hover:bg-gray-100")
                }`}
                style={{
                  color: activeId === f.id ? f.color : undefined,
                  borderColor: activeId === f.id ? f.color + '50' : undefined,
                  backgroundColor: activeId === f.id ? f.color + '15' : undefined,
                }}
              >
                {f.badge}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border ${dark ? "bg-purple-500/10 border-purple-500/20 text-purple-400" : "bg-purple-50 border-purple-200 text-purple-700"}`}>
          <Sparkles size={12} /> 7 powerful features
        </div>
        <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5 ${textCls}`}>
          Every tool a teacher<br />
          <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">could ever want.</span>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${muted}`}>
          AlignAI is not a collection of disconnected tools. Every feature feeds into the next. One platform, zero friction.
        </p>
      </section>

      {/* feature sections */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-32 pb-24">
        {featureGroups.map((fg, i) => (
          <section
            key={fg.id}
            id={fg.id}
            // Negative margin + padding trick so the heading is at top when scrolled
            className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center`}
          >
            {/* text side */}
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <div
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium mb-5 border"
                style={{ backgroundColor: fg.color + '15', borderColor: fg.color + '30', color: fg.color }}
              >
                <fg.icon size={11} />
                {fg.badge}
              </div>
              <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight mb-4 ${textCls}`}>{fg.headline}</h2>
              <p className={`text-base leading-relaxed mb-8 ${muted}`}>{fg.subtext}</p>
              <ul className="space-y-3">
                {fg.bullets.map((b, j) => (
                  <li key={j} className={`flex items-start gap-3 text-sm ${muted}`}>
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: fg.color }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* visual side */}
            <div className={i % 2 === 1 ? 'md:order-1' : ''}>
              <div className={`rounded-2xl border p-8 ${card}`} style={{ borderColor: fg.color + '25' }}>
                <div className="text-xs font-semibold mb-6 tracking-wide uppercase" style={{ color: fg.color }}>
                  {fg.badge} workflow
                </div>
                <div className="space-y-3">
                  {fg.visual.map((v, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ backgroundColor: fg.color + '20', color: fg.color }}
                      >
                        {v.step}
                      </div>
                      <div className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-xl ${dark ? "bg-white/[0.04]" : "bg-gray-50"}`}>
                        <v.icon size={15} style={{ color: fg.color }} />
                        <span className={`text-sm font-medium ${textCls}`}>{v.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`mt-6 pt-5 border-t flex items-center gap-2 text-xs ${dark ? "border-white/10 text-gray-500" : "border-gray-100 text-gray-400"}`}>
                  <Zap size={11} style={{ color: fg.color }} />
                  Fully automated. Zero manual steps.
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-5 ${textCls}`}>
            All of this, in one platform.
          </h2>
          <p className={`text-lg mb-8 ${muted}`}>AlignAI is launching soon. Reserve your spot now.</p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20 text-base"
          >
            Get Early Access <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* footer */}
      <footer className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/svg-logo.svg" alt="AlignAI" width={22} height={22} />
            <span className={`font-bold ${textCls}`}>Align<span className="text-purple-400">AI</span></span>
          </div>
          <p className={`text-sm ${muted}`}>© 2026 AlignAI. Built for teachers, by builders who care.</p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map(l => (
              <a key={l} href="#" className={`text-sm transition-colors ${dark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

      {showModal && <PreRegisterModal dark={dark} onClose={() => setShowModal(false)} />}
    </div>
  );
}