"use client";
import PreRegisterModal from "@/components/PreRegisterModal";
import React, { useState } from "react";
import {
  Brain,
  BookOpen,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  FileText,
  Moon,
  Sun,
  Users,
  ClipboardList,
  GraduationCap,
  Star,
  ArrowRight,
  Play,
  Sparkles,
  Shield,
  Bell,
  Zap,
  Mic,
  PenTool,
  TrendingUp,
  Send,
  Calendar,
  Award,
  Upload,
  Settings,
  LayoutDashboard,
  ChevronRight,
  Layers,
  X,
  Menu,
} from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

const steps = [
  {
    number: "01",
    icon: Settings,
    color: "#a78bfa",
    title: "Set up your classroom",
    desc: "Create your account and configure your teaching space in minutes. Add your subjects, create student batches, and invite students. AlignAI guides you through every step.",
    details: [
      "Create your profile in under 2 minutes",
      "Add subjects and batch names",
      "Invite students via link or email",
      "Students join and are instantly enrolled",
    ],
  },
  {
    number: "02",
    icon: Upload,
    color: "#34d399",
    title: "Upload your lecture",
    desc: "Record or upload any lecture's audio, video, or slides. AlignAI instantly transcribes it, generates a summary, and creates structured notes for your students.",
    details: [
      "Supports MP3, MP4, PDF, PPTX and more",
      "Transcription starts instantly on upload",
      "AI generates notes and summary automatically",
      "Students receive everything with one notification",
    ],
  },
  {
    number: "03",
    icon: Brain,
    color: "#c084fc",
    title: "Let AI handle the admin",
    desc: "After your lecture, AlignAI takes over. Tests are generated, assignments are created, gradebook is updated, and students are notified. All without you lifting a finger.",
    details: [
      "Auto generated test based on lecture content",
      "Assignments created and sent to students",
      "Attendance marked and reports updated",
      "Gradebook synced across all activities",
    ],
  },
  {
    number: "04",
    icon: Sparkles,
    color: "#fb923c",
    title: "Command your Copilot",
    desc: "Need something specific? Just type it to the Teacher Copilot. It understands natural language and executes tasks across the entire platform instantly.",
    details: [
      'Type: "Send test results to Batch B"',
      'Type: "Generate homework for Chapter 4"',
      'Type: "Who has below 75% attendance?"',
      'Type: "Schedule a class for Friday at 10am"',
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    color: "#60a5fa",
    title: "Track everything in real time",
    desc: "Your dashboard gives you a live snapshot of every class, every student, and every metric. Spot struggling students early. Celebrate top performers. Make data driven decisions.",
    details: [
      "Class wise performance at a glance",
      "Individual student progress tracking",
      "Attendance trends over time",
      "Automated alerts for at risk students",
    ],
  },
  {
    number: "06",
    icon: Send,
    color: "#f472b6",
    title: "Communicate without switching apps",
    desc: "Send announcements, reminders, results, and messages via WhatsApp, Telegram, or Email, all from inside AlignAI. Students stay informed. Parents stay looped in.",
    details: [
      "Choose your channel per message",
      "Schedule messages in advance",
      "Send to batch or individual students",
      "Delivery status tracked in the platform",
    ],
  },
];

const faqs = [
  {
    q: "Do I need any technical skills to use AlignAI?",
    a: "None at all. AlignAI is built for teachers, not developers. If you can type a message, you can use every feature.",
  },
  {
    q: "What file formats can I upload for lectures?",
    a: "You can upload MP3, MP4, WAV, PDF, PPTX, and DOCX files. AlignAI handles transcription and processing for all of them.",
  },
  {
    q: "How does the auto grading work?",
    a: "For objective questions, AlignAI grades automatically with 100% accuracy. For descriptive answers, AI gives an initial grade that you can review and adjust.",
  },
  {
    q: "Can students access the platform on mobile?",
    a: "Yes. AlignAI works fully on mobile browsers. A dedicated app is on the roadmap for launch.",
  },
  {
    q: "Is my data secure?",
    a: "All data is encrypted in transit and at rest. You own your data completely and can export or delete it any time.",
  },
  {
    q: "How many students can I add?",
    a: "Plans vary from individual tutors to institutions with thousands of students. Early access users get generous limits.",
  },
];

export default function HowItWorksPage() {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const textCls = dark ? "text-white" : "text-gray-900";

  const bg = dark
    ? "bg-[#080c12]"
    : "bg-gradient-to-br from-slate-50 via-white to-purple-50";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-400" : "text-gray-500";
  const card = dark
    ? "bg-white/[0.03] border-white/[0.08]"
    : "bg-white border-gray-200 shadow-sm";

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${bg}`}
    >
      {dark && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
        </div>
      )}

      {/* ─── MAIN HEADER ─── */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-xl border-b ${dark ? "border-white/[0.06] bg-[#080c12]/80" : "border-gray-200/80 bg-white/80"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden ${dark ? "bg-purple-500/15" : "bg-purple-100"}`}
            >
              <Image src="/svg-logo.svg" alt="AlignAI" width={28} height={28} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${textCls}`}>
              Align<span className="text-purple-400">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`text-sm font-medium transition-colors ${
                  n.href === "/how-it-works"
                    ? dark
                      ? "text-white"
                      : "text-gray-900"
                    : dark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
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
              onClick={() => setMobileOpen((o) => !o)}
              className={`p-2 rounded-lg transition-colors ${dark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:bg-gray-100"}`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className={`md:hidden border-t ${dark ? "border-white/[0.06] bg-[#080c12]" : "border-gray-100 bg-white"}`}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                    n.href === "/how-it-works"
                      ? dark
                        ? "text-white bg-white/10"
                        : "text-gray-900 bg-gray-100"
                      : dark
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {n.label}
                </a>
              ))}
              <div
                className={`pt-3 mt-2 border-t ${dark ? "border-white/10" : "border-gray-100"}`}
              >
                <button
                  onClick={() => {
                    setShowModal(true);
                    setMobileOpen(false);
                  }}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-200"
                >
                  Get Early Access
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border ${dark ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-700"}`}
        >
          <Layers size={12} /> 6 step workflow
        </div>
        <h1
          className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5 ${text}`}
        >
          From setup to fully
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            automated in one day.
          </span>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${muted}`}>
          AlignAI is designed to feel familiar immediately and become
          indispensable within hours. Here is exactly how it works.
        </p>
      </section>

      {/* steps */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative">
          {/* connector line */}
          <div
            className={`absolute left-8 top-8 bottom-8 w-0.5 hidden md:block ${dark ? "bg-white/[0.06]" : "bg-gray-100"}`}
          />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="relative flex gap-6 md:gap-10">
                {/* step indicator */}
                <div className="relative z-10 flex-shrink-0 w-16 flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: s.color + "20" }}
                  >
                    <s.icon size={24} style={{ color: s.color }} />
                  </div>
                </div>

                {/* content */}
                <div
                  className={`flex-1 rounded-2xl border p-7 pb-8 mb-2 transition-all duration-300 hover:scale-[1.01] ${card}`}
                  style={{ borderColor: s.color + "25" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span
                        className="text-xs font-bold tracking-widest mb-1 block"
                        style={{ color: s.color }}
                      >
                        STEP {s.number}
                      </span>
                      <h3 className={`text-xl font-bold ${text}`}>{s.title}</h3>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed mb-5 ${muted}`}>
                    {s.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.details.map((d, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-2 text-xs ${muted}`}
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 shrink-0"
                          style={{ color: s.color }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}
      >
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${text}`}>
              Common questions
            </h2>
            <p className={`${muted}`}>
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${card}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left ${text}`}
                >
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-90 text-purple-400" : muted}`}
                  />
                </button>
                {openFaq === i && (
                  <div className={`px-6 pb-5 text-sm leading-relaxed ${muted}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}
      >
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-5 ${text}`}
          >
            Ready to try it yourself?
          </h2>
          <p className={`text-lg mb-8 ${muted}`}>
            AlignAI is almost here. Register now and be first in line.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20 text-base"
          >
            Get Early Access <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* footer */}
      <footer
        className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/svg-logo.svg" alt="AlignAI" width={22} height={22} />
            <span className={`font-bold ${text}`}>
              Align<span className="text-purple-400">AI</span>
            </span>
          </div>
          <p className={`text-sm ${muted}`}>
            © 2026 AlignAI. Built for teachers, by builders who care.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className={`text-sm transition-colors ${dark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {showModal && (
        <PreRegisterModal dark={dark} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
