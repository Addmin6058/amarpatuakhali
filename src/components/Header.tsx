import React, { useState } from 'react';
import {
  Menu,
  Bell,
  MoreVertical,
  Search,
  Shield,
  X,
  Share2,
  Phone,
  Compass,
  MapPin,
  Home,
  Layers,
  MessageSquare,
  User,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { Upazila, UPAZILAS } from '../data/patuakhaliData';
import { TabType } from './BottomNav';

interface HeaderProps {
  onOpenDrawer: () => void;
  unreadCount: number;
  onOpenNotifications: () => void;
  onOpenAdmin: () => void;
  onOpenQuickDial: () => void;
  onOpenMap: () => void;
  selectedUpazila?: Upazila;
  onSelectUpazila?: (upazila: Upazila) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentTab?: TabType;
  onChangeTab?: (tab: TabType) => void;
  onOpenCategory?: (catId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  unreadCount,
  onOpenNotifications,
  onOpenAdmin,
  onOpenQuickDial,
  onOpenMap,
  selectedUpazila = 'সকল এলাকা',
  onSelectUpazila,
  searchQuery,
  setSearchQuery,
  currentTab = 'home',
  onChangeTab,
  onOpenCategory
}) => {
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showSearchInputMobile, setShowSearchInputMobile] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'আমার পটুয়াখালী পোর্টাল',
        text: 'পটুয়াখালী জেলার ডিজিটাল প্ল্যাটফর্ম - সেবার সংযোগ ও তথ্য',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ওয়েবসাইটের লিংক কপি করা হয়েছে!');
    }
    setShowMenuDropdown(false);
  };

  const navLinks = [
    { id: 'home' as TabType, label: 'হোম', icon: Home },
    { id: 'services', label: 'সকল সেবা', icon: Layers, isAction: true },
    { id: 'emergency', label: 'জরুরি সেবা', icon: Phone, isAction: true },
    { id: 'map', label: 'জেলা মানচিত্র', icon: Compass, isAction: true },
    { id: 'notifications' as TabType, label: 'নোটিশ ও আপডেট', icon: Bell, badge: unreadCount },
    { id: 'contact' as TabType, label: 'অভিযোগ ও যোগাযোগ', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-emerald-100 w-full">
      {/* Top Website Govt & Helpline Ticker (Visible on desktop & tablet) */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-emerald-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-emerald-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              পটুয়াখালী জেলা ডিজিটাল সিটিজেন সার্ভিস পোর্টাল
            </span>
            <span className="text-emerald-500 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-3 text-emerald-200/90 text-[11.5px]">
              <span className="text-emerald-300">জরুরি হেল্পলাইন:</span>
              <a href="tel:999" className="hover:text-white font-mono font-bold bg-red-600/80 px-1.5 py-0.2 rounded text-[11px] text-white">৯৯৯</a>
              <a href="tel:333" className="hover:text-white font-mono font-bold bg-amber-600/80 px-1.5 py-0.2 rounded text-[11px] text-white">৩৩৩</a>
              <a href="tel:16263" className="hover:text-white font-mono font-bold bg-teal-600/80 px-1.5 py-0.2 rounded text-[11px] text-white">১৬২৬৩</a>
              <span className="text-slate-300">কন্ট্রোল রুম: <strong className="font-mono">০২৪৭৮৮৮১০০০</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11.5px]">
            {/* Quick Upazila Filter in Top Bar */}
            {onSelectUpazila && (
              <div className="flex items-center gap-1 text-emerald-100">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden lg:inline text-emerald-300 font-medium">উপজেলা:</span>
                <select
                  value={selectedUpazila}
                  onChange={(e) => onSelectUpazila(e.target.value as Upazila)}
                  className="bg-emerald-950/60 text-white rounded px-2 py-0.5 border border-emerald-700/60 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-xs cursor-pointer font-medium"
                >
                  {UPAZILAS.map((upz) => (
                    <option key={upz} value={upz} className="bg-slate-900 text-white">
                      {upz}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              onClick={onOpenAdmin}
              className="text-emerald-300 hover:text-white font-semibold flex items-center gap-1 transition cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>অ্যাডমিন</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Website Header Bar */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Mobile Drawer Toggle & Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenDrawer}
            className="p-2 -ml-1 text-emerald-800 hover:text-emerald-950 hover:bg-emerald-50 rounded-xl transition md:hidden"
            aria-label="মেনু খুলুন"
          >
            <Menu className="w-6 h-6 stroke-[2.2]" />
          </button>

          {/* District Portal Brand Logo */}
          <div
            onClick={() => onChangeTab && onChangeTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 flex items-center justify-center text-white font-serif font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              প
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-tight flex items-center">
                  <span className="text-emerald-800 font-serif">Amar</span>
                  <span className="text-teal-700 font-serif ml-0.5">Patuakhali</span>
                </span>
                <span className="hidden xs:inline-block text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  ওয়েব
                </span>
              </div>
              <span className="text-[11px] text-emerald-700 font-medium tracking-wide">
                আমার এলাকা, আমার পরিচয়
              </span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isTab = !item.isAction;
            const isActive = isTab && currentTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'home' && onChangeTab) onChangeTab('home');
                  else if (item.id === 'contact' && onChangeTab) onChangeTab('contact');
                  else if (item.id === 'notifications' && onChangeTab) onChangeTab('notifications');
                  else if (item.id === 'emergency') onOpenQuickDial();
                  else if (item.id === 'map') onOpenMap();
                  else if (item.id === 'services' && onOpenCategory) onOpenCategory('doctor');
                }}
                className={`relative px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span>{item.label}</span>

                {item.badge && item.badge > 0 ? (
                  <span className="min-w-[16px] h-[16px] px-1 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>

        {/* Right: Search, Notifications, Profile & Admin Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex relative items-center w-48 xl:w-64">
            <Search className="w-4 h-4 absolute left-3 text-slate-400" />
            <input
              type="text"
              placeholder="সেবা বা ডাক্তার খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-7 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Search Toggle */}
          <button
            onClick={() => setShowSearchInputMobile(!showSearchInputMobile)}
            className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-xl md:hidden transition"
            aria-label="অনুসন্ধান"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Quick 24/7 Dial button on desktop */}
          <button
            onClick={onOpenQuickDial}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-xl text-xs font-bold transition shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-red-600 animate-bounce" />
            <span>জরুরি কল</span>
          </button>

          {/* Notification Bell */}
          <button
            onClick={onOpenNotifications}
            className="p-2 text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-xl relative transition"
            aria-label="বিজ্ঞপ্তি"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-[17px] h-[17px] px-1 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Profile Tab trigger on desktop */}
          {onChangeTab && (
            <button
              onClick={() => onChangeTab('profile')}
              className={`p-2 rounded-xl transition hidden sm:flex items-center gap-1.5 ${
                currentTab === 'profile'
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              title="আমার প্রোফাইল"
            >
              <User className="w-5 h-5" />
            </button>
          )}

          {/* More Options Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMenuDropdown(!showMenuDropdown)}
              className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-xl transition"
              aria-label="অতিরিক্ত অপশন"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {showMenuDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 z-50 text-sm animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => {
                    setShowMenuDropdown(false);
                    onOpenAdmin();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition font-medium"
                >
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>অ্যাডমিন ড্যাশবোর্ড</span>
                </button>

                <button
                  onClick={() => {
                    setShowMenuDropdown(false);
                    onOpenQuickDial();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-slate-700 hover:bg-red-50 hover:text-red-700 transition font-medium"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>জরুরি হটলাইন (২৪/৭)</span>
                </button>

                <button
                  onClick={() => {
                    setShowMenuDropdown(false);
                    onOpenMap();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition font-medium"
                >
                  <Compass className="w-4 h-4 text-teal-600" />
                  <span>জেলা মানচিত্র ও উপজেলা</span>
                </button>

                <div className="my-1 border-t border-slate-100"></div>

                <button
                  onClick={handleShare}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-slate-700 hover:bg-slate-50 transition"
                >
                  <Share2 className="w-4 h-4 text-blue-600" />
                  <span>ওয়েবসাইট শেয়ার করুন</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Expandable Bar */}
      {(showSearchInputMobile || (searchQuery && typeof window !== 'undefined' && window.innerWidth < 768)) && (
        <div className="px-3.5 pb-2.5 pt-0 max-w-5xl mx-auto flex items-center gap-2 md:hidden animate-in slide-in-from-top-1">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="ডাক্তার, বাস, লঞ্চ, হাসপাতাল বা সেবা খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
