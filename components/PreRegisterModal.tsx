"use client";

import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Loader2, X } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface Props {
  dark: boolean;
  onClose: () => void;
}

export default function PreRegisterModal({ dark, onClose }: Props) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [org, setOrg] = useState<string>('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, organization: org }),
      });

      const data = await res.json() as { success?: boolean; error?: string };

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const inputBase = 'w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border';
  const inputTheme = dark
    ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-purple-500/60'
    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-400';
  const inputCls = `${inputBase} ${inputTheme}`;

  const textCls = dark ? 'text-white' : 'text-gray-900';
  const mutedCls = dark ? 'text-gray-400' : 'text-gray-500';
  const modalBg = dark ? 'bg-[#0d1117] border-white/10' : 'bg-white border-gray-200';
  const closeBtnCls = dark
    ? 'text-gray-400 hover:bg-white/10 hover:text-white'
    : 'text-gray-400 hover:bg-gray-100';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className={`relative w-full max-w-md rounded-2xl border p-8 shadow-2xl ${modalBg}`}>
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors ${closeBtnCls}`}
        >
          <X size={16} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-emerald-400" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${textCls}`}>You are on the list!</h3>
            <p className={`text-sm ${mutedCls}`}>
              {/* We sent a confirmation to{' '}
              <span className="text-emerald-400 font-medium">{email}</span>.
              <br /> */}
              We will reach out when AlignAI launches.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-400 text-xs font-medium mb-3">
                <Sparkles size={11} />
                Early Access
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${textCls}`}>Get early access</h3>
              <p className={`text-sm ${mutedCls}`}>
                Be among the first educators to use AlignAI when we launch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                className={inputCls}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type="email"
                className={inputCls}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <select
                required
                className={inputCls}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">I am a...</option>
                <option value="School Teacher">School Teacher</option>
                <option value="Coaching Institute Owner">Coaching Institute Owner</option>
                <option value="College Professor">College Professor</option>
                <option value="Online Educator">Online Educator</option>
                <option value="School Administrator">School Administrator</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                className={inputCls}
                placeholder="School or Institute name (optional)"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
              />

              {status === 'error' && (
                <p className="text-rose-400 text-xs text-center">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-400 hover:to-emerald-400 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Request Early Access'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}