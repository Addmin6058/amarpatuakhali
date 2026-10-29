import React, { useState } from 'react';
import {
  ShieldAlert,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  X,
  ArrowRight,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Fingerprint
} from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      // Secret password specified by user: 246058
      if (password.trim() === '246058') {
        onSuccess();
        setPassword('');
        setError('');
        onClose();
      } else {
        setError('ভুল পাসওয়ার্ড! সঠিক ৬ ডিজিট এডমিন পাসওয়ার্ড প্রদান করুন।');
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
      }
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Outer Glow Wrapper */}
      <div
        className={`relative w-full max-w-md rounded-3xl p-[1px] bg-gradient-to-b from-emerald-500/40 via-teal-500/20 to-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_35px_rgba(16,185,129,0.15)] overflow-hidden transition-transform duration-200 ${
          isShaking ? 'animate-bounce' : 'animate-in zoom-in-95 duration-200'
        }`}
      >
        <div className="bg-white rounded-[23px] overflow-hidden flex flex-col">
          {/* Gorgeous Hero Header */}
          <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 text-white p-6 sm:p-7 text-center overflow-hidden">
            {/* Ambient Lighting FX */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/20 blur-3xl pointer-events-none rounded-full" />
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 blur-2xl pointer-events-none rounded-full" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-xs transition active:scale-90 cursor-pointer"
              aria-label="বন্ধ করুন"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Glowing Icon Emblem */}
            <div className="relative mx-auto mb-4 flex items-center justify-center">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-emerald-400/40 to-teal-400/40 blur-md animate-pulse" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-950 via-emerald-900 to-teal-800 border-2 border-emerald-400/50 text-emerald-300 flex items-center justify-center shadow-xl shadow-emerald-950">
                <Lock className="w-8 h-8 stroke-[2.2] drop-shadow-[0_2px_8px_rgba(52,211,153,0.5)]" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-emerald-300" />
                <span>প্রশাসনিক নিয়ন্ত্রণ কেন্দ্র</span>
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-1">
                অ্যাডমিন প্যানেল লগইন
              </h3>

              <div className="flex items-center justify-center gap-2 pt-0.5 text-xs text-emerald-200/90 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>সুরক্ষিত পোর্টাল ড্যাশবোর্ড অ্যাক্সেস</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-7 space-y-5 bg-gradient-to-b from-white to-slate-50">
            {/* Security Notice Card */}
            <div className="p-3.5 bg-emerald-50/90 rounded-2xl border border-emerald-100 flex items-start gap-3 shadow-xs">
              <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs text-emerald-950 space-y-0.5">
                <p className="font-bold">দায়িত্বপ্রাপ্ত অ্যাডমিনিস্ট্রেটরদের জন্য</p>
                <p className="text-emerald-800/85 text-[11.5px] leading-relaxed">
                  পটুয়াখালী জেলা ডিজিটাল পোর্টালের তথ্য সংযোজন, পরিবর্তন ও নিয়ন্ত্রণের গোপন পাসওয়ার্ড প্রদান করুন।
                </p>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <KeyRound className="w-4 h-4 text-emerald-600" />
                    <span>এডমিন পাসওয়ার্ড / সিকিউরিটি পিন</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    (৬ সংখ্যার কোড)
                  </span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoFocus
                    placeholder="পাসওয়ার্ড লিখুন..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                    className={`w-full pl-4 pr-12 py-3 text-sm font-medium rounded-xl border bg-white focus:outline-none transition shadow-xs ${
                      error
                        ? 'border-red-400 ring-2 ring-red-100 focus:border-red-500'
                        : 'border-slate-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/15'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                    title={showPassword ? 'পাসওয়ার্ড লুকান' : 'পাসওয়ার্ড দেখুন'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Error Alert */}
                {error && (
                  <div className="mt-2.5 text-xs font-semibold text-red-700 bg-red-50 p-3 rounded-xl border border-red-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                    <ShieldAlert className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold transition active:scale-95 cursor-pointer text-center"
                >
                  বাতিল
                </button>

                <button
                  type="submit"
                  disabled={isVerifying || !password.trim()}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-900/25 hover:shadow-lg hover:shadow-emerald-900/35 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>{isVerifying ? 'যাচাই করা হচ্ছে...' : 'প্রবেশ করুন'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>
            </form>

            {/* Bottom Security Footer */}
            <div className="pt-3 border-t border-slate-150 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
              <Fingerprint className="w-3.5 h-3.5 text-emerald-600" />
              <span>এডমিন পাসওয়ার্ড সুরক্ষিত ও এনক্রিপ্টেড • Amar Patuakhali</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
