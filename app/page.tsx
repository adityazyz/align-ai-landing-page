"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Users, Brain, BarChart3, CheckCircle2, Moon, Sun, FileText, Database, MessageSquare, ArrowRight, LogOut } from 'lucide-react';
import Image from 'next/image';

export default function AlignAiHero() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Smart Task Assignment",
    "AI Meeting Summaries", 
    "Performance Analytics",
    "Automated Content Creation",
    "Universal Team Alignment",
    "AI Command Assistant"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const isSignedIn = false;

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-purple-900/30' 
        : 'bg-gradient-to-br from-purple-50 via-white to-blue-50'
    }`}>
      {/* Header */}
      <header className="relative z-20 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className={` rounded-xl  ${
                darkMode ? 'bg-purple-500/20' : 'shadow-lg shadow-gray-400 bg-purple-500/10'
              } backdrop-blur-sm`}>
                <Image
                  src="/svg-logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className={`ml-3 text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Align<span className="text-purple-500">AI</span>
              </span>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-purple-100/80 hover:bg-purple-200/80 text-gray-900'
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Background Orbs - Dynamic floating effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(200px, -150px) scale(1.1); }
            50% { transform: translate(-100px, -300px) scale(0.9); }
            75% { transform: translate(150px, -200px) scale(1.05); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-250px, 200px) scale(1.15); }
            66% { transform: translate(100px, 100px) scale(0.85); }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-180px, -100px) scale(0.95); }
            50% { transform: translate(220px, 180px) scale(1.1); }
            75% { transform: translate(-120px, 80px) scale(0.9); }
          }
          @keyframes float4 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            30% { transform: translate(150px, -200px) scale(1.05); }
            60% { transform: translate(-200px, 150px) scale(0.95); }
          }
          @keyframes float5 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(-150px, 180px) scale(1.08); }
            40% { transform: translate(180px, -150px) scale(0.92); }
            60% { transform: translate(-100px, -180px) scale(1.12); }
            80% { transform: translate(120px, 120px) scale(0.88); }
          }
          @keyframes float6 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-300px, 250px) scale(1.2); }
          }
          .float-1 { animation: float1 20s ease-in-out infinite; }
          .float-2 { animation: float2 25s ease-in-out infinite; }
          .float-3 { animation: float3 18s ease-in-out infinite; }
          .float-4 { animation: float4 22s ease-in-out infinite; }
          .float-5 { animation: float5 28s ease-in-out infinite; }
          .float-6 { animation: float6 30s ease-in-out infinite; }
        `}</style>
        
        {/* Orb 1 - Top Left */}
        <div className={`absolute -top-20 -left-20 md:top-10 md:left-10 w-48 h-48 md:w-80 md:h-80 rounded-full blur-3xl float-1 ${
          darkMode ? 'bg-purple-500 opacity-20' : 'bg-purple-300 opacity-30'
        }`}></div>
        
        {/* Orb 2 - Top Right */}
        <div className={`absolute -top-10 -right-10 md:top-20 md:right-20 w-40 h-40 md:w-72 md:h-72 rounded-full blur-3xl float-2 ${
          darkMode ? 'bg-pink-500 opacity-15' : 'bg-pink-300 opacity-25'
        }`}></div>
        
        {/* Orb 3 - Bottom Right */}
        <div className={`absolute -bottom-20 -right-20 md:bottom-10 md:right-10 w-56 h-56 md:w-96 md:h-96 rounded-full blur-3xl float-3 ${
          darkMode ? 'bg-blue-500 opacity-15' : 'bg-blue-300 opacity-25'
        }`}></div>
        
        {/* Orb 4 - Bottom Left */}
        <div className={`absolute -bottom-10 -left-10 md:bottom-20 md:left-20 w-44 h-44 md:w-64 md:h-64 rounded-full blur-3xl float-4 ${
          darkMode ? 'bg-indigo-500 opacity-20' : 'bg-indigo-300 opacity-30'
        }`}></div>
        
        {/* Orb 5 - Center floating */}
        <div className={`absolute top-1/3 left-1/4 w-36 h-36 md:w-56 md:h-56 rounded-full blur-3xl float-5 ${
          darkMode ? 'bg-violet-500 opacity-10' : 'bg-violet-300 opacity-20'
        }`}></div>

        {/* Orb 6 - Middle right */}
        <div className={`absolute top-1/2 right-1/4 w-40 h-40 md:w-72 md:h-72 rounded-full blur-3xl float-6 ${
          darkMode ? 'bg-fuchsia-500 opacity-12' : 'bg-fuchsia-300 opacity-22'
        }`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            {/* Welcome message for signed-in users */}
            {isSignedIn && (
              <div className={`mb-6 p-4 rounded-xl backdrop-blur-sm ${
                darkMode 
                  ? 'bg-purple-500/10 border border-purple-500/20 text-purple-300' 
                  : 'bg-purple-50 border border-purple-200 text-purple-700'
              }`}>
                Welcome back
              </div>
            )}

            {/* Logo/Brand - Reduced size since we have header now */}
            <div className="flex items-center justify-center mb-8">
              <h1 className={`text-4xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Transform Your Team with <span className="text-purple-500">AI</span>
              </h1>
            </div>

            {/* Main Headline */}
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Unleash Maximum
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Productivity
              </span>
            </h2>

            {/* Dynamic Feature Display */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <p className={`text-xl md:text-2xl transition-all duration-500 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Powered by AI for seamless{' '}
                <span className="inline-block min-w-[200px] text-left">
                  <span className="text-purple-600 font-semibold transition-all duration-500">
                    {features[currentFeature]}
                  </span>
                </span>
              </p>
            </div>

            {/* Subtitle */}
            <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              AlignAI revolutionizes team coordination with intelligent task assignment, 
              automated content creation, and a powerful AI assistant that executes commands instantly. 
              Keep your entire team aligned with comprehensive meeting records and real-time insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {!isSignedIn ? (
                <>
                  <button 
                    className="group bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center"
                  >
                    Coming soon! stay tuned.
                  </button>
                </>
              ) : (
                <button 
                  className="group bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center"
                >
                  Go to Dashboard
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Feature Cards - Enhanced contrast for dark mode */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: CheckCircle2,
                title: "Intelligent Task Assignment",
                description: "Automatically assign tasks based on team member skills, workload, and availability with smart prioritization."
              },
              {
                icon: Users,
                title: "Smart Meeting Summaries",
                description: "AI automatically captures key decisions, action items, and insights from every meeting with perfect accuracy."
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Get deep insights into team productivity, collaboration patterns, and individual performance metrics."
              },
              {
                icon: FileText,
                title: "Automated Content Creation",
                description: "Generate follow-up documents, action plans, and reports automatically based on post-meeting requirements."
              },
              {
                icon: Database,
                title: "Universal Team Alignment",
                description: "Access complete meeting history and records - every team member stays informed, whether they attended or not."
              },
              {
                icon: MessageSquare,
                title: "AI Command Assistant",
                description: "Powerful chatbot that provides team progress updates and executes tasks instantly - send emails, schedule meetings with a single command."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg ${
                  darkMode 
                    ? 'bg-gray-900/40 hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/70' 
                    : 'bg-white/80 hover:bg-white border border-purple-100 hover:border-purple-200 shadow-purple-100/50'
                }`}
              >
                <feature.icon className={`w-12 h-12 mb-6 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <h3 className={`text-xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-20">
            <div className={`py-8 rounded-2xl backdrop-blur-sm shadow-lg ${
              darkMode 
                ? 'bg-gray-900/40 border border-gray-700/50' 
                : 'bg-white/80 border border-purple-100 shadow-purple-100/50'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  { number: "92%", label: "Increase in Team Productivity" },
                  { number: "15+hrs", label: "Time Saved Per Week" },
                  { number: "98%", label: "Reduction in Manual Follow-Ups" }
                ].map((stat, index) => (
                  <div key={index} className="space-y-3">
                    <div className={`text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                      darkMode 
                        ? 'from-purple-400 to-indigo-500' 
                        : 'from-purple-600 to-indigo-600'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}