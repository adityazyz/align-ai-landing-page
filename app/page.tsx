"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Users, Brain, BarChart3, CheckCircle2, Moon, Sun, FileText, Database, MessageSquare, ArrowRight, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';

export default function AlignAiHero() {
  const router = useRouter();
  const isSignedIn = false; 


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


  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-purple-900/30' 
        : 'bg-gradient-to-br from-white via-gray-50 to-purple-100/30'
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
                    : 'bg-black/10 hover:bg-black/20 text-gray-900'
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
             

              {/* Sign In Button - only show if not signed in */}
              {!isSignedIn && (
                <button 
                  onClick={() => router.push('/sign-in')}
                  className={`group px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm flex items-center ${
                    darkMode 
                      ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/50' 
                      : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 hover:border-purple-300'
                  }`}
                >
                  Coming Soon!
                  {/* <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                </button>
              )}

              
            </div>
          </div>
        </div>
      </header>

      {/* Animated Background Orbs - Further reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10 animate-pulse ${
          darkMode ? 'bg-purple-500' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
          darkMode ? 'bg-blue-500 opacity-2' : 'bg-blue-400 opacity-10'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse delay-2000 ${
          darkMode ? 'bg-indigo-500 opacity-3' : 'bg-indigo-400 opacity-5'
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
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Productivity
              </span>
            </h2>

            {/* Dynamic Feature Display */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <p className={`text-xl md:text-2xl transition-all duration-500 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Powered by AI for seamless{' '}
                <span className="inline-block min-w-[200px] text-left">
                  <span className="text-purple-500 font-semibold transition-all duration-500">
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
                    onClick={() => router.push('/sign-up')}
                    className="group bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center"
                  >
                    Coming soon! stay tuned.
                    {/* <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
                  </button>
                  
                  {/* <button className={`group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center border-2 ${
                    darkMode 
                      ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/30' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                  }`}>
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button> */}
                </>
              ) : (
                <button 
                  onClick={() => router.push('/dashboard')}
                  className="group bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center"
                >
                  Go to Dashboard
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

            {/* Trust Indicators */}
            {/* <div className={`text-sm mb-12 ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <p>Trusted by 500+ teams worldwide • No credit card required</p>
            </div> */}
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
                    : 'bg-white/70 hover:bg-white/90 border border-gray-200 hover:border-gray-300 shadow-gray-200/50'
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
                : 'bg-white/70 border border-gray-200 shadow-gray-200/50'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  { number: "92%", label: "Increase in Team Productivity" },
                  { number: "15+hrs", label: "Time Saved Per Week" },
                  { number: "98%", label: "Reduction in Manual Follow-Ups" }
                ].map((stat, index) => (
                  <div key={index} className="space-y-3">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
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
      <Toaster/>
    </div>
  );
}