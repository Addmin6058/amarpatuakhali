import React from 'react';
import {
  X,
  Home,
  Shield,
  PhoneCall,
  Palmtree,
  Ship,
  MapPin,
  MessageSquareWarning,
  Phone,
  Settings,
  LogOut,
  User,
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { TabType } from './BottomNav';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabType) => void;
  onOpenAdmin: () => void;
  onOpenCategory: (categoryId: string) => void;
  onOpenSettings: () => void;
  userName: string;
  isLoggedIn: boolean;
  onOpenLogin: () => void;
  onLogout: () => void;
  onShowSplash?: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenAdmin,
  onOpenCategory,
  onOpenSettings,
  userName,
  isLoggedIn,
  onOpenLogin,
  onLogout,
  onShowSplash
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Drawer Panel */}
      <div className="relative w-4/5 max-w-xs bg-white text-slate-800 h-full flex flex-col z-10 shadow-2xl animate-in slide-in-from-left duration-200">
        {/* Drawer Header with user info */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-13 h-13 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg border-2 border-white shadow-xs">
              <User className="w-7 h-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-sm text-white truncate">{userName}</h3>
              <p className="text-[11px] text-emerald-200">আমখোলা, গলাচিপা, পটুয়াখালী</p>
              <span className="inline-block mt-1 text-[9px] font-bold bg-emerald-600/80 px-2 py-0.5 rounded-full border border-emerald-400">
                সক্রিয় নাগরিক সদস্য
              </span>
            </div>
          </div>
        </div>

        {/* Navigation list */}
        <div className="p-3 flex-1 overflow-y-auto space-y-1 text-xs">
          <button
            onClick={() => {
              onSelectTab('home');
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 transition text-slate-700 font-medium"
          >
            <div className="flex items-center gap-3">
              <Home className="w-4 h-4 text-emerald-600" />
              <span>প্রধান পাতা (Home)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => {
              onOpenAdmin();
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition text-emerald-900 font-bold"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-emerald-700" />
              <span>অ্যাডমিন ড্যাশবোর্ড</span>
            </div>
            <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full">প্যানেল</span>
          </button>

          <button
            onClick={() => {
              onOpenCategory('emergency');
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-red-50 text-red-700 font-semibold"
          >
            <div className="flex items-center gap-3">
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>জরুরি হটলাইন (৯৯৯ / ১৬১৬৩)</span>
            </div>
            <span className="text-[9px] bg-red-100 text-red-700 px-1.5 py-0.2 rounded-full font-bold">২৪/৭</span>
          </button>

          <button
            onClick={() => {
              onOpenCategory('tourist');
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 font-medium"
          >
            <div className="flex items-center gap-3">
              <Palmtree className="w-4 h-4 text-teal-600" />
              <span>কুয়াকাটা ও দর্শনীয় স্থান</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => {
              onOpenCategory('launch');
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 font-medium"
          >
            <div className="flex items-center gap-3">
              <Ship className="w-4 h-4 text-cyan-600" />
              <span>লঞ্চের সময়সূচী ও কেবিন বুকিং</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => {
              onOpenCategory('map');
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 font-medium"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>পটুয়াখালী জেলা মানচিত্র</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => {
              onOpenCategory('complaint');
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 font-medium"
          >
            <div className="flex items-center gap-3">
              <MessageSquareWarning className="w-4 h-4 text-amber-600" />
              <span>নাগরিক অভিযোগ প্রতিকার</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => {
              onSelectTab('contact');
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 font-medium"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>আমাদের সাথে যোগাযোগ</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <div className="my-2 border-t border-slate-100"></div>

          {onShowSplash && (
            <button
              onClick={() => {
                onShowSplash();
                onClose();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 text-emerald-800 font-medium transition"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>লোডিং স্ক্রিন দেখুন</span>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          )}

          <button
            onClick={() => {
              onOpenSettings();
              onClose();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 font-medium"
          >
            <div className="flex items-center gap-3">
              <Settings className="w-4 h-4 text-slate-600" />
              <span>অ্যাপ সেটিংস</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Footer actions */}
        <div className="p-3 border-t border-slate-100 bg-slate-50">
          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2 bg-slate-200 hover:bg-red-50 hover:text-red-700 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 text-xs transition"
            >
              <LogOut className="w-4 h-4" />
              <span>লগ আউট</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onOpenLogin();
                onClose();
              }}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-xs transition"
            >
              <User className="w-4 h-4" />
              <span>লগইন / নিবন্ধন</span>
            </button>
          )}

          <div className="mt-2 text-center text-[10px] text-slate-400">
            Amar Patuakhali App • v2.4 (2026)
          </div>
        </div>
      </div>
    </div>
  );
};
