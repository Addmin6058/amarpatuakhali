import React, { useState } from 'react';
import {
  ChevronLeft,
  User,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  Check,
  Sparkles
} from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [identifier, setIdentifier] = useState('01712345678');
  const [password, setPassword] = useState('••••••••');
  const [name, setName] = useState('Kabbo Hasan');
  const [upazila, setUpazila] = useState('গলাচিপা');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(isRegisterMode ? name : 'Kabbo Hasan');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-0 sm:p-4 overflow-y-auto">
      {/* Container matching screenshot */}
      <div className="w-full max-w-md bg-white min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Scenic Banner matching screenshot */}
        <div className="relative bg-gradient-to-b from-sky-400 via-teal-500 to-emerald-600 text-white pt-6 pb-12 px-4 text-center">
          {/* Back button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 text-white hover:bg-white/20 rounded-full transition"
            aria-label="ফিরে যান"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex flex-col items-center justify-center pt-2">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-2xl tracking-tight text-white italic font-serif">
                Amar <span className="text-amber-300">Patuakhali</span>
              </span>
            </div>
            <span className="mt-1 inline-block px-3 py-0.5 rounded-full bg-emerald-900/60 text-white text-[11px] font-semibold tracking-wide">
              আমার পটুয়াখালী, আমার পরিচয়
            </span>
          </div>
        </div>

        {/* Card Body - curved overlap */}
        <div className="bg-white -mt-6 rounded-t-3xl p-6 flex-1 flex flex-col justify-between shadow-xs">
          <div>
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-extrabold text-emerald-800">
                {isRegisterMode ? 'নতুন অ্যাকাউন্ট খুলুন' : 'লগইন করুন'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isRegisterMode
                  ? 'পটুয়াখালীর ডিজিটাল নাগরিক সেবায় যুক্ত হন'
                  : 'আপনার অ্যাকাউন্টে প্রবেশ করুন'}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              {isRegisterMode && (
                <div>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="text"
                      placeholder="আপনার পূর্ণ নাম"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    />
                  </div>
                </div>
              )}

              {/* Identifier Input */}
              <div>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="মোবাইল নম্বর / ইমেইল / ইউজারনেম"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="পাসওয়ার্ড"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-11 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded-sm border-slate-300 focus:ring-emerald-500"
                  />
                  <span>আমাকে মনে রাখুন</span>
                </label>

                <button
                  type="button"
                  onClick={() => alert('পাসওয়ার্ড রিসেট লিংক আপনার মোবাইলে এসএমএস করা হবে।')}
                  className="text-sky-700 hover:underline font-medium"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </button>
              </div>

              {/* Primary Submit Button matching screenshot */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-98 transition"
              >
                <LogIn className="w-4 h-4" />
                <span>{isRegisterMode ? 'নিবন্ধন সম্পন্ন করুন' : 'লগইন করুন'}</span>
              </button>
            </form>

            {/* Divider "অথবা" */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-slate-400 font-medium">অথবা</span>
              </div>
            </div>

            {/* Social Logins matching screenshot */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  onLoginSuccess('গুগল ব্যবহারকারী');
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 shadow-2xs transition"
              >
                <span className="font-bold text-red-500">G</span>
                <span>Google দিয়ে লগইন করুন</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onLoginSuccess('ফেসবুক ব্যবহারকারী');
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 shadow-2xs transition"
              >
                <span className="font-bold text-blue-600">f</span>
                <span>Facebook দিয়ে লগইন করুন</span>
              </button>
            </div>
          </div>

          {/* Toggle Register / Login */}
          <div className="mt-6 pt-3 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={() => setIsRegisterMode(!isRegisterMode)}
              className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200 flex items-center justify-center gap-2 transition"
            >
              <UserPlus className="w-4 h-4 text-emerald-600" />
              <span>
                {isRegisterMode
                  ? 'ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন'
                  : 'নতুন অ্যাকাউন্ট নেই? এখনই নিবন্ধন করুন'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
