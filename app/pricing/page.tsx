"use client";
import PreRegisterModal from '@/components/PreRegisterModal';
import React, { useState } from 'react';
import {
  Moon, Sun, ArrowRight, Sparkles, CheckCircle2,
  Clock, Bell, Star, Zap, Shield, Gift, Mail,
  X,
  Menu
} from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

const perks = [
  { icon: Gift, color: "#a78bfa", title: "Founding member pricing", desc: "Lock in the lowest price we will ever offer. Early access users get special rates that are never available again." },
  { icon: Star, color: "#34d399", title: "Priority feature requests", desc: "Your feedback shapes what we build first. Early users have direct influence over the product roadmap." },
  { icon: Zap, color: "#fb923c", title: "Full access on launch", desc: "No waitlist. No limited beta. When AlignAI goes live, early access users get in immediately." },
  { icon: Bell, color: "#f472b6", title: "Launch day notification", desc: "You will be the first to know the moment AlignAI is live and ready for your classroom." },
];


export default function PricingPage() {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const textCls = dark ? "text-white" : "text-gray-900";

  const bg = dark ? "bg-[#080c12]" : "bg-gradient-to-br from-slate-50 via-white to-purple-50";
  const text = dark ? "text-white" : "text-gray-900";
  const muted = dark ? "text-gray-400" : "text-gray-500";
  const card = dark ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-gray-200 shadow-sm";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${bg}`}>
      {dark && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/[0.08] blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.07] blur-[120px]" />
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
                  n.href === "/pricing"
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
                    n.href === "/pricing"
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

      {/* main coming soon content */}
      <section className="relative max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
        {/* clock illustration */}
        <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 ${dark ? "bg-purple-500/15 border border-purple-500/25" : "bg-purple-50 border border-purple-200"}`}>
          <Clock size={44} className="text-purple-400" />
        </div>

        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border ${dark ? "bg-amber-500/10 border-amber-500/20 text-amber-400" : "bg-amber-50 border-amber-200 text-amber-700"}`}>
          <Sparkles size={12} /> Pricing reveal coming soon
        </div>

        <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 ${text}`}>
          Pricing that is
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">worth every rupee.</span>
        </h1>

        <p className={`text-lg max-w-xl mx-auto mb-10 leading-relaxed ${muted}`}>
          We are finalising plans that work for individual teachers, coaching institutes, and schools alike. Pricing will be revealed at launch.
        </p>

        <p className={`text-base font-semibold mb-10 ${dark ? "text-purple-300" : "text-purple-600"}`}>
          Early access users get founding member pricing. Register now to lock it in.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20 text-base"
        >
          Notify me at launch <ArrowRight size={18} />
        </button>
      </section>

      {/* perks of registering */}
      <section className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${text}`}>Why register early?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {perks.map((p, i) => (
              <div key={i} className={`rounded-2xl border p-7 transition-all duration-200 hover:scale-[1.02] ${card}`} style={{ borderColor: p.color + '25' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: p.color + '20' }}>
                  <p.icon size={20} style={{ color: p.color }} />
                </div>
                <h3 className={`font-bold mb-2 ${text}`}>{p.title}</h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact note */}
      <section className={`border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${dark ? "bg-emerald-500/15" : "bg-emerald-50"}`}>
            <Mail size={20} className="text-emerald-400" />
          </div>
          <h3 className={`text-xl font-bold mb-2 ${text}`}>Have specific pricing questions?</h3>
          <p className={`text-sm mb-4 ${muted}`}>For schools, colleges, or institutes with specific needs, reach out directly.</p>
          <a href="mailto:aadityadagr@gmail.com" className={`text-sm font-medium transition-colors ${dark ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-800"}`}>
            aadityadagr@gmail.com
          </a>
        </div>
      </section>

      {/* footer */}
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

      {showModal && <PreRegisterModal dark={dark} onClose={() => setShowModal(false)} />}
    </div>
  );
}