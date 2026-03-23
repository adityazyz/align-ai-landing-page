"use client";

import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Loader2, X } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface Props {
  dark: boolean;
  onClose: () => void;
}

// Comprehensive country list with flags and dial codes
const countries = [
  // North America
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  
  // Europe
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+32", name: "Belgium", flag: "🇧🇪" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+43", name: "Austria", flag: "🇦🇹" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+47", name: "Norway", flag: "🇳🇴" },
  { code: "+45", name: "Denmark", flag: "🇩🇰" },
  { code: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "+354", name: "Iceland", flag: "🇮🇸" },
  { code: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "+420", name: "Czech Republic", flag: "🇨🇿" },
  { code: "+421", name: "Slovakia", flag: "🇸🇰" },
  { code: "+36", name: "Hungary", flag: "🇭🇺" },
  { code: "+40", name: "Romania", flag: "🇷🇴" },
  { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
  { code: "+385", name: "Croatia", flag: "🇭🇷" },
  { code: "+387", name: "Bosnia", flag: "🇧🇦" },
  { code: "+381", name: "Serbia", flag: "🇷🇸" },
  { code: "+386", name: "Slovenia", flag: "🇸🇮" },
  { code: "+389", name: "North Macedonia", flag: "🇲🇰" },
  { code: "+382", name: "Montenegro", flag: "🇲🇪" },
  { code: "+355", name: "Albania", flag: "🇦🇱" },
  { code: "+30", name: "Greece", flag: "🇬🇷" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
  { code: "+357", name: "Cyprus", flag: "🇨🇾" },
  { code: "+356", name: "Malta", flag: "🇲🇹" },
  
  // Asia
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+95", name: "Myanmar", flag: "🇲🇲" },
  { code: "+855", name: "Cambodia", flag: "🇰🇭" },
  { code: "+856", name: "Laos", flag: "🇱🇦" },
  { code: "+670", name: "Timor-Leste", flag: "🇹🇱" },
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+977", name: "Nepal", flag: "🇳🇵" },
  { code: "+975", name: "Bhutan", flag: "🇧🇹" },
  { code: "+960", name: "Maldives", flag: "🇲🇻" },
  { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+98", name: "Iran", flag: "🇮🇷" },
  { code: "+964", name: "Iraq", flag: "🇮🇶" },
  { code: "+962", name: "Jordan", flag: "🇯🇴" },
  { code: "+961", name: "Lebanon", flag: "🇱🇧" },
  { code: "+972", name: "Israel", flag: "🇮🇱" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+967", name: "Yemen", flag: "🇾🇪" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  
  // Oceania
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "+679", name: "Fiji", flag: "🇫🇯" },
  { code: "+675", name: "Papua New Guinea", flag: "🇵🇬" },
  
  // South America
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+56", name: "Chile", flag: "🇨🇱" },
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+51", name: "Peru", flag: "🇵🇪" },
  { code: "+593", name: "Ecuador", flag: "🇪🇨" },
  { code: "+591", name: "Bolivia", flag: "🇧🇴" },
  { code: "+595", name: "Paraguay", flag: "🇵🇾" },
  { code: "+598", name: "Uruguay", flag: "🇺🇾" },
  { code: "+507", name: "Panama", flag: "🇵🇦" },
  { code: "+506", name: "Costa Rica", flag: "🇨🇷" },
  { code: "+503", name: "El Salvador", flag: "🇸🇻" },
  { code: "+504", name: "Honduras", flag: "🇭🇳" },
  { code: "+505", name: "Nicaragua", flag: "🇳🇮" },
  
  // Africa
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+254", name: "Kenya", flag: "🇰🇪" },
  { code: "+233", name: "Ghana", flag: "🇬🇭" },
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+212", name: "Morocco", flag: "🇲🇦" },
  { code: "+216", name: "Tunisia", flag: "🇹🇳" },
  { code: "+213", name: "Algeria", flag: "🇩🇿" },
  { code: "+218", name: "Libya", flag: "🇱🇾" },
  { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
  { code: "+256", name: "Uganda", flag: "🇺🇬" },
  { code: "+255", name: "Tanzania", flag: "🇹🇿" },
  { code: "+260", name: "Zambia", flag: "🇿🇲" },
  { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
  { code: "+265", name: "Malawi", flag: "🇲🇼" },
  { code: "+258", name: "Mozambique", flag: "🇲🇿" },
  { code: "+264", name: "Namibia", flag: "🇳🇦" },
  { code: "+267", name: "Botswana", flag: "🇧🇼" },
  { code: "+268", name: "Eswatini", flag: "🇸🇿" },
  { code: "+266", name: "Lesotho", flag: "🇱🇸" },
  { code: "+244", name: "Angola", flag: "🇦🇴" },
  { code: "+247", name: "Ascension Island", flag: "🇦🇨" },
  { code: "+248", name: "Seychelles", flag: "🇸🇨" },
  { code: "+230", name: "Mauritius", flag: "🇲🇺" },
  { code: "+250", name: "Rwanda", flag: "🇷🇼" },
];

export default function PreRegisterModal({ dark, onClose }: Props) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [role, setRole] = useState<string>('');
  const [org, setOrg] = useState<string>('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!phone) {
      setErrorMsg('Phone number is required.');
      setStatus('error');
      return;
    }

    const fullPhoneNumber = `${countryCode}${phone}`;

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          email, 
          phone: fullPhoneNumber,
          role, 
          organization: org 
        }),
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
              
              {/* Phone number field with country code dropdown */}
              <div className="flex gap-2">
                <div className="relative flex-shrink-0">
                  <select
                    required
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={`${inputBase} ${inputTheme} pr-8 min-w-[110px] appearance-none`}
                  >
                    {countries.map((country, index) => (
                      <option key={`${country.code}-${country.name}-${index}`} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <input
                  required
                  type="tel"
                  className={`${inputBase} ${inputTheme} flex-1`}
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ''))}
                />
              </div>

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
                disabled={status === 'loading' || !phone}
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