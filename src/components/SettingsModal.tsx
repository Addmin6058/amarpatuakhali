import React, { useState } from 'react';
import { X, Globe, Bell, Smartphone, Trash2, Check, ShieldCheck, Info } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmin: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onOpenAdmin }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [offlineCache, setOfflineCache] = useState(true);
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const [clearedNotice, setClearedNotice] = useState(false);

  if (!isOpen) return null;

  const handleClearCache = () => {
    setClearedNotice(true);
    setTimeout(() => setClearedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-sm w-full border border-slate-200 shadow-2xl p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">অ্যাপ সেটিংস ও কন্ট্রোল</h3>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {clearedNotice && (
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>অস্থায়ী ক্যাশ ডেটা সফলভাবে পরিষ্কার করা হয়েছে!</span>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3 text-xs">
          {/* Language Toggle */}
          <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              <div>
                <strong className="block text-slate-800">ভাষা / Language</strong>
                <span className="text-[10px] text-slate-400">অ্যাপের মূল ভাষা নির্বাচন</span>
              </div>
            </div>
            <div className="flex rounded-lg overflow-hidden border border-slate-200">
              <button
                onClick={() => setLanguage('bn')}
                className={`px-2.5 py-1 text-[11px] font-bold ${
                  language === 'bn' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600'
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-[11px] font-bold ${
                  language === 'en' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600'
                }`}
              >
                Eng
              </button>
            </div>
          </div>

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-500" />
              <div>
                <strong className="block text-slate-800">পুশ নোটিফিকেশন</strong>
                <span className="text-[10px] text-slate-400">জরুরি ও আবহাওয়া সতর্কবার্তা</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="w-4 h-4 text-emerald-600 rounded-sm"
            />
          </div>

          {/* Offline Caching */}
          <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-sky-600" />
              <div>
                <strong className="block text-slate-800">অফলাইন স্টোরেজ</strong>
                <span className="text-[10px] text-slate-400">ইন্টারনেট ছাড়াও জরুরি নম্বর দেখুন</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={offlineCache}
              onChange={(e) => setOfflineCache(e.target.checked)}
              className="w-4 h-4 text-emerald-600 rounded-sm"
            />
          </div>

          {/* Clear Cache */}
          <button
            onClick={handleClearCache}
            className="w-full flex items-center justify-between p-2.5 bg-slate-50 hover:bg-slate-100 rounded-2xl text-slate-700 transition"
          >
            <div className="flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-red-500" />
              <span>ক্যাশ ডেটা মুছে ফেলুন</span>
            </div>
            <span className="text-[10px] text-slate-400">২.৪ মেগাবাইট</span>
          </button>

          {/* Admin Panel Link */}
          <button
            onClick={() => {
              onClose();
              onOpenAdmin();
            }}
            className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold rounded-2xl border border-emerald-200 transition text-center"
          >
            অ্যাডমিন ড্যাশবোর্ডে প্রবেশ করুন
          </button>
        </div>

        {/* About App Info */}
        <div className="pt-2 border-t border-slate-100 text-center text-[10px] text-slate-400">
          <p className="font-semibold text-slate-600">আমার পটুয়াখালী (Amar Patuakhali App)</p>
          <p>সংস্করণ: ২.৪.১ (২০২৬ এডিশন)</p>
        </div>
      </div>
    </div>
  );
};
