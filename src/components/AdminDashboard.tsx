import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  FileText,
  Bell,
  MapPin,
  Newspaper,
  Calendar,
  MessageSquareWarning,
  Wrench,
  Image as ImageIcon,
  Settings,
  Eye,
  Plus,
  UserPlus,
  Send,
  CheckCircle2,
  TrendingUp,
  Search,
  ChevronRight,
  ShieldAlert,
  ArrowUpRight,
  Clock,
  Sparkles,
  BarChart3,
  X,
  Edit2,
  Trash2,
  Stethoscope,
  Building2,
  Bus,
  Ship,
  Palmtree,
  PhoneCall,
  Check,
  RefreshCw,
  Phone,
  Layers,
  Tag,
  Grid
} from 'lucide-react';
import {
  RegisteredUser,
  NotificationItem,
  CitizenComplaint,
  Doctor,
  Hospital,
  BusSchedule,
  LaunchSchedule,
  TouristPlace,
  EmergencyContact,
  BannerSlide,
  Upazila,
  CategoryItem
} from '../types';
import { UPAZILAS, INITIAL_BANNERS, CATEGORIES } from '../data/patuakhaliData';

export interface AdminDashboardProps {
  onSwitchToSite: () => void;
  onAdminLogout: () => void;
  users: RegisteredUser[];
  notifications: NotificationItem[];
  complaints: CitizenComplaint[];
  doctors: Doctor[];
  hospitals: Hospital[];
  busSchedules: BusSchedule[];
  launchSchedules: LaunchSchedule[];
  touristPlaces: TouristPlace[];
  emergencyContacts: EmergencyContact[];
  banners?: BannerSlide[];
  categories?: CategoryItem[];
  onAddNotice: (notice: NotificationItem) => void;
  onUpdateNotice: (notice: NotificationItem) => void;
  onDeleteNotice: (id: string) => void;
  onAddUser: (user: RegisteredUser) => void;
  onUpdateUser: (user: RegisteredUser) => void;
  onDeleteUser: (id: string) => void;
  onAddDoctor: (doc: Doctor) => void;
  onUpdateDoctor: (doc: Doctor) => void;
  onDeleteDoctor: (id: string) => void;
  onAddHospital: (hosp: Hospital) => void;
  onUpdateHospital: (hosp: Hospital) => void;
  onDeleteHospital: (id: string) => void;
  onAddBus: (bus: BusSchedule) => void;
  onUpdateBus: (bus: BusSchedule) => void;
  onDeleteBus: (id: string) => void;
  onAddLaunch: (launch: LaunchSchedule) => void;
  onUpdateLaunch: (launch: LaunchSchedule) => void;
  onDeleteLaunch: (id: string) => void;
  onAddPlace: (place: TouristPlace) => void;
  onUpdatePlace: (place: TouristPlace) => void;
  onDeletePlace: (id: string) => void;
  onUpdateComplaintStatus: (id: string, status: 'প্রাপ্ত' | 'তদন্তাধীন' | 'নিষ্পন্ন') => void;
  onDeleteComplaint: (id: string) => void;
  onAddBanner?: (banner: BannerSlide) => void;
  onUpdateBanner?: (banner: BannerSlide) => void;
  onDeleteBanner?: (id: string) => void;
  onAddCategory?: (category: CategoryItem) => void;
  onUpdateCategory?: (category: CategoryItem) => void;
  onDeleteCategory?: (id: string) => void;
  onResetToDefaults: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onSwitchToSite,
  onAdminLogout,
  users,
  notifications,
  complaints,
  doctors,
  hospitals,
  busSchedules,
  launchSchedules,
  touristPlaces,
  emergencyContacts,
  banners = INITIAL_BANNERS,
  categories = CATEGORIES,
  onAddNotice,
  onUpdateNotice,
  onDeleteNotice,
  onAddUser,
  onUpdateUser,
  onDeleteUser,
  onAddDoctor,
  onUpdateDoctor,
  onDeleteDoctor,
  onAddHospital,
  onUpdateHospital,
  onDeleteHospital,
  onAddBus,
  onUpdateBus,
  onDeleteBus,
  onAddLaunch,
  onUpdateLaunch,
  onDeleteLaunch,
  onAddPlace,
  onUpdatePlace,
  onDeletePlace,
  onUpdateComplaintStatus,
  onDeleteComplaint,
  onAddBanner,
  onUpdateBanner,
  onDeleteBanner,
  onAddCategory,
  onUpdateCategory,
  onDeleteCategory,
  onResetToDefaults
}) => {
  const [activeMenu, setActiveMenu] = useState('ড্যাশবোর্ড');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Search filters
  const [adminSearch, setAdminSearch] = useState('');

  // Modals state
  const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [categoryGroupFilter, setCategoryGroupFilter] = useState('সকল');

  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [isAddingDoctor, setIsAddingDoctor] = useState(false);

  const [editingHospital, setEditingHospital] = useState<Hospital | null>(null);
  const [isAddingHospital, setIsAddingHospital] = useState(false);

  const [editingBus, setEditingBus] = useState<BusSchedule | null>(null);
  const [isAddingBus, setIsAddingBus] = useState(false);

  const [editingLaunch, setEditingLaunch] = useState<LaunchSchedule | null>(null);
  const [isAddingLaunch, setIsAddingLaunch] = useState(false);

  const [editingNotice, setEditingNotice] = useState<NotificationItem | null>(null);
  const [isAddingNotice, setIsAddingNotice] = useState(false);

  const [editingUser, setEditingUser] = useState<RegisteredUser | null>(null);
  const [isAddingUser, setIsAddingUser] = useState(false);

  const [editingPlace, setEditingPlace] = useState<TouristPlace | null>(null);
  const [isAddingPlace, setIsAddingPlace] = useState(false);

  const [editingBanner, setEditingBanner] = useState<BannerSlide | null>(null);
  const [isAddingBanner, setIsAddingBanner] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const sidebarItems = [
    { name: 'ড্যাশবোর্ড', icon: LayoutDashboard },
    { name: 'ব্যানার স্লাইডার', icon: ImageIcon },
    { name: 'ক্যাটাগরি ও নাগরিক সেবা', icon: Layers },
    { name: 'ডাক্তার ও স্বাস্থ্যসেবা', icon: Stethoscope },
    { name: 'হাসপাতাল ও ক্লিনিক', icon: Building2 },
    { name: 'বাসের সময়সূচী', icon: Bus },
    { name: 'লঞ্চের সময়সূচী', icon: Ship },
    { name: 'নোটিশ ও বিজ্ঞপ্তি', icon: Bell },
    { name: 'ব্যবহারকারী ব্যবস্থাপনা', icon: Users },
    { name: 'নাগরিক অভিযোগ ও সমাধান', icon: MessageSquareWarning },
    { name: 'দর্শনীয় স্থান', icon: Palmtree },
    { name: 'জরুরি সেবা ও হটলাইন', icon: PhoneCall },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-['Hind_Siliguri',sans-serif]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-emerald-700 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-bold animate-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar matching screenshot */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-200 flex flex-col shrink-0">
        {/* Sidebar Header Branding */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 font-bold text-lg text-emerald-400">
              <span className="font-serif">Amar</span>
              <span className="text-cyan-400 font-serif">Patuakhali</span>
              <span className="text-[10px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded-sm font-sans font-bold">এডমিন</span>
            </div>
            <p className="text-[10px] text-slate-400">আমার এলাকা, আমার পরিচয়</p>
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <nav className="p-2 space-y-0.5 flex-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.name;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  setAdminSearch('');
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition ${
                  isActive
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </button>
            );
          })}
        </nav>

        {/* Sidebar Bottom Card */}
        <div className="p-3 border-t border-slate-800">
          <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60 text-center">
            <h5 className="text-xs font-bold text-emerald-300">Amar Patuakhali</h5>
            <p className="text-[10px] text-slate-300 mt-0.5">ডিজিটাল জেলা ব্যবস্থাপনা কন্ট্রোল</p>
            <p className="text-[10px] text-emerald-400 italic mt-1 font-serif">“এডমিন সম্পাদনা মোড সক্রিয়”</p>
            <div className="mt-2 pt-2 border-t border-slate-700 text-[9px] text-slate-500">
              © 2026 Amar Patuakhali • Master Admin
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Navbar matching screenshot */}
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <span className="text-xs text-slate-500 block">তারিখ ও সময়</span>
              <strong className="text-xs text-slate-800">২৬ অক্টোবর ২০২৬, সোমবার ১০:৩৬ AM</strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Switch to site button */}
            <button
              onClick={onSwitchToSite}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>সাইট ভিউ করুন</span>
            </button>

            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => setActiveMenu('নোটিশ ও বিজ্ঞপ্তি')}
                className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-xl relative"
                title="বিজ্ঞপ্তি"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {notifications.filter((n) => n.unread).length}
                </span>
              </button>
            </div>

            {/* Admin Profile */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div className="text-left text-xs">
                <strong className="block text-slate-900 leading-tight">Admin (246058)</strong>
                <span className="text-[10px] text-emerald-700">মাস্টার এডমিন</span>
              </div>
            </div>

            {/* Admin Logout Button */}
            <button
              onClick={onAdminLogout}
              className="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl border border-red-200 transition flex items-center gap-1 shadow-2xs active:scale-95"
              title="এডমিন প্যানেল থেকে লগআউট করুন"
            >
              <span>লগআউট</span>
            </button>
          </div>
        </header>

        {/* Dashboard Body Content */}
        <main className="p-4 sm:p-6 space-y-5 flex-1 max-w-7xl w-full mx-auto">
          {/* ================= 1. DASHBOARD OVERVIEW ================= */}
          {activeMenu === 'ড্যাশবোর্ড' && (
            <>
              {/* Welcome Banner matching screenshot */}
              <div className="bg-emerald-700 text-white p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Sparkles className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">স্বাগতম, অ্যাডমিন!</h2>
                    <p className="text-xs text-emerald-100">
                      আজকের সারসংক্ষেপ দেখুন এবং যেকোনো তথ্য সরাসরি এডিট ও আপডেট করুন।
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAddingNotice(true)}
                    className="px-3 py-1.5 bg-white text-emerald-900 font-bold text-xs rounded-xl hover:bg-emerald-50 transition shadow-xs flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>নতুন নোটিশ</span>
                  </button>
                  <button
                    onClick={() => setIsAddingDoctor(true)}
                    className="px-3 py-1.5 bg-emerald-800 text-white font-bold text-xs rounded-xl hover:bg-emerald-900 transition shadow-xs flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>ডাক্তার যোগ</span>
                  </button>
                </div>
              </div>

              {/* 4 Stat Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div
                  onClick={() => setActiveMenu('ব্যবহারকারী ব্যবস্থাপনা')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs cursor-pointer hover:border-blue-400 transition"
                >
                  <div className="flex items-center justify-between text-slate-500 mb-1">
                    <span className="text-xs font-medium">মোট ব্যবহারকারী</span>
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">{users.length} জন</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>সক্রিয় নাগরিক ডাটাবেস</span>
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu('ডাক্তার ও স্বাস্থ্যসেবা')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs cursor-pointer hover:border-emerald-400 transition"
                >
                  <div className="flex items-center justify-between text-slate-500 mb-1">
                    <span className="text-xs font-medium">নিবন্ধিত ডাক্তার</span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">{doctors.length} জন</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>বিশেষজ্ঞ সেবা তালিকা</span>
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu('নোটিশ ও বিজ্ঞপ্তি')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs cursor-pointer hover:border-amber-400 transition"
                >
                  <div className="flex items-center justify-between text-slate-500 mb-1">
                    <span className="text-xs font-medium">মোট নোটিফিকেশন</span>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Bell className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">{notifications.length} টি</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>জরুরি ও সাধারণ ঘোষণা</span>
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu('নাগরিক অভিযোগ ও সমাধান')}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs cursor-pointer hover:border-purple-400 transition"
                >
                  <div className="flex items-center justify-between text-slate-500 mb-1">
                    <span className="text-xs font-medium">নাগরিক অভিযোগ</span>
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <MessageSquareWarning className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">{complaints.length} টি</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>দ্রুত প্রতিকার সেল</span>
                  </div>
                </div>
              </div>

              {/* Middle Row: Activity Graph (Left) & Selected Area Card (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-emerald-600" />
                      <span>সাম্প্রতিক কার্যক্রম (গত ৭ দিন)</span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span>ব্যবহারকারী</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        <span>পোস্ট</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span>নোটিফিকেশন</span>
                      </span>
                    </div>
                  </div>

                  <div className="h-48 w-full relative pt-2">
                    <svg className="w-full h-full" viewBox="0 0 600 160">
                      <line x1="0" y1="30" x2="600" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="70" x2="600" y2="70" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="110" x2="600" y2="110" stroke="#f1f5f9" strokeWidth="1" />
                      <path d="M 20 120 Q 100 85 180 95 T 320 60 T 450 40 T 580 48" fill="none" stroke="#10b981" strokeWidth="3" />
                      <path d="M 20 140 Q 100 110 180 125 T 320 100 T 450 78 T 580 90" fill="none" stroke="#3b82f6" strokeWidth="3" />
                      <path d="M 20 150 Q 100 135 180 140 T 320 125 T 450 115 T 580 118" fill="none" stroke="#f59e0b" strokeWidth="3" />
                      <circle cx="20" cy="120" r="4" fill="#10b981" />
                      <circle cx="100" cy="95" r="4" fill="#10b981" />
                      <circle cx="180" cy="95" r="4" fill="#10b981" />
                      <circle cx="320" cy="60" r="4" fill="#10b981" />
                      <circle cx="450" cy="40" r="4" fill="#10b981" />
                      <circle cx="580" cy="48" r="4" fill="#10b981" />
                    </svg>

                    <div className="flex justify-between text-[11px] text-slate-400 mt-2 px-2">
                      <span>২০ Oct</span>
                      <span>২১ Oct</span>
                      <span>২২ Oct</span>
                      <span>২৩ Oct</span>
                      <span>২৪ Oct</span>
                      <span>২৫ Oct</span>
                      <span>২৬ Oct</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>আমখোলা ইউনিয়ন (কেন্দ্রীয় এলাকা)</span>
                    </h4>

                    <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">জেলা:</span>
                        <strong className="text-slate-800">পটুয়াখালী</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">উপজেলা:</span>
                        <strong className="text-slate-800">গলাচিপা</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">ইউনিয়ন:</span>
                        <strong className="text-emerald-700">আমখোলা</strong>
                      </div>
                    </div>

                    <div className="mt-3 p-3 bg-emerald-50 rounded-xl text-center border border-emerald-100">
                      <span className="text-[11px] text-emerald-800 font-medium block">
                        আমখোলা ইউনিয়ন পরিষদ থেকে পরিচালিত পটুয়াখালী জেলা ডিজিটাল তথ্য ও নাগরিক পোর্টাল।
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={onSwitchToSite}
                    className="mt-4 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition"
                  >
                    <span>লাইভ সাইট দেখুন</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Lower Section: Users Table & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>সর্বশেষ নিবন্ধিত ব্যবহারকারী</span>
                    </h3>
                    <button
                      onClick={() => setIsAddingUser(true)}
                      className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-0.5"
                    >
                      <Plus className="w-3 h-3" />
                      <span>নতুন যোগ করুন</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500 border-y border-slate-100 font-semibold">
                        <tr>
                          <th className="py-2.5 px-3">নাম</th>
                          <th className="py-2.5 px-3">মোবাইল</th>
                          <th className="py-2.5 px-3">এলাকা</th>
                          <th className="py-2.5 px-3">তারিখ</th>
                          <th className="py-2.5 px-3 text-right">অ্যাকশন</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {users.slice(0, 5).map((u) => (
                          <tr key={u.id} className="hover:bg-slate-50 transition">
                            <td className="py-2.5 px-3 font-bold text-slate-800 flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px]">
                                {u.name.charAt(0)}
                              </div>
                              <span>{u.name}</span>
                            </td>
                            <td className="py-2.5 px-3 text-slate-600 font-mono text-[11px]">{u.mobile}</td>
                            <td className="py-2.5 px-3 text-slate-600">{u.area}</td>
                            <td className="py-2.5 px-3 text-slate-500">{u.joinedDate}</td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                onClick={() => setEditingUser(u)}
                                className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg mr-1"
                                title="এডিট করুন"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(`নিশ্চিত আপনি ${u.name}-কে মুছে ফেলতে চান?`)) {
                                    onDeleteUser(u.id);
                                    showToast('ব্যবহারকারী মুছে ফেলা হয়েছে!');
                                  }
                                }}
                                className="p-1 text-red-600 hover:bg-red-50 rounded-lg"
                                title="মুছে ফেলুন"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                    <h4 className="text-xs font-bold text-slate-900 mb-2.5">সরাসরি ডেটা এডিটিং শর্টকাট</h4>
                    <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold text-slate-700">
                      <button
                        onClick={() => setActiveMenu('ডাক্তার ও স্বাস্থ্যসেবা')}
                        className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 flex items-center justify-center gap-1.5 transition"
                      >
                        <Stethoscope className="w-4 h-4 text-blue-600" />
                        <span>ডাক্তার তালিকা</span>
                      </button>

                      <button
                        onClick={() => setActiveMenu('বাসের সময়সূচী')}
                        className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 flex items-center justify-center gap-1.5 transition"
                      >
                        <Bus className="w-4 h-4 text-emerald-600" />
                        <span>বাসের রুট</span>
                      </button>

                      <button
                        onClick={() => setActiveMenu('লঞ্চের সময়সূচী')}
                        className="p-2.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 flex items-center justify-center gap-1.5 transition"
                      >
                        <Ship className="w-4 h-4 text-cyan-600" />
                        <span>লঞ্চ ও কেবিন</span>
                      </button>

                      <button
                        onClick={() => setActiveMenu('নোটিশ ও বিজ্ঞপ্তি')}
                        className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 flex items-center justify-center gap-1.5 transition"
                      >
                        <Bell className="w-4 h-4 text-amber-600" />
                        <span>বিজ্ঞপ্তি প্রকাশ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ================= BANNER SLIDER MANAGEMENT ================= */}
          {activeMenu === 'ব্যানার স্লাইডার' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-emerald-600" />
                    <span>হোমস্ক্রিন ব্যানার ও স্লাইডার ফটো ব্যবস্থাপনা</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    বাস্তব ছবি সহ ব্যানার স্লাইড তৈরি, ছবি পরিবর্তন, টেক্সট এডিট ও সক্রিয়/নিষ্ক্রিয় করুন
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingBanner(true)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন ব্যানার যোগ করুন</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {banners.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between">
                    <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                      
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-slate-950 shadow-xs">
                          {item.badge}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.active !== false ? 'bg-emerald-600/90 text-white' : 'bg-rose-600/90 text-white'}`}>
                          {item.active !== false ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <h4 className="font-bold text-sm leading-tight text-white drop-shadow-xs">{item.title}</h4>
                        <p className="text-xs text-emerald-300 font-semibold">{item.subtitle}</p>
                      </div>
                    </div>

                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between text-xs text-slate-600">
                      <p className="line-clamp-2 text-slate-700 italic">"{item.motto}"</p>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                        <span>বাটন: <strong>{item.actionText}</strong></span>
                        <span>ক্যাটাগরি: <strong>{item.targetCategory}</strong></span>
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                        {/* Toggle active status */}
                        <button
                          onClick={() => {
                            if (onUpdateBanner) {
                              onUpdateBanner({ ...item, active: item.active === false ? true : false });
                              showToast(`ব্যানারটি ${item.active === false ? 'সক্রিয়' : 'নিষ্ক্রিয়'} করা হয়েছে!`);
                            }
                          }}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                            item.active !== false ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                          }`}
                        >
                          {item.active !== false ? 'হাইড করুন' : 'শো করুন'}
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setEditingBanner(item)}
                            className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1 transition"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>এডিট</span>
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('নিশ্চিত এই ব্যানারটি মুছে ফেলতে চান?')) {
                                if (onDeleteBanner) onDeleteBanner(item.id);
                                showToast('ব্যানার মুছে ফেলা হয়েছে!');
                              }
                            }}
                            className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold flex items-center gap-1 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>ডিলিট</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= CATEGORY MANAGEMENT ================= */}
          {activeMenu === 'ক্যাটাগরি ও নাগরিক সেবা' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-emerald-600" />
                    <span>নাগরিক সেবা ক্যাটাগরি ও আইকন ব্যবস্থাপনা</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    হোমস্ক্রিনের ক্যাটাগরি গ্রিড, নতুন নাগরিক সেবা ক্যাটাগরি যোগ, আইকন, গ্রুপ ও হেল্পলাইন সম্পাদনা করুন
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditingCategory(null);
                    setIsAddingCategory(true);
                  }}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন ক্যাটাগরি যোগ করুন</span>
                </button>
              </div>

              {/* Stats overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">মোট ক্যাটাগরি</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">{categories.length} টি</div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="text-emerald-700 font-medium">কাস্টম সংযোজিত</div>
                  <div className="text-lg font-bold text-emerald-900 mt-0.5">
                    {categories.filter((c) => c.isCustom).length} টি
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="text-blue-700 font-medium">জরুরি হটলাইনযুক্ত</div>
                  <div className="text-lg font-bold text-blue-900 mt-0.5">
                    {categories.filter((c) => c.phone).length} টি
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-purple-50 border border-purple-100">
                  <div className="text-purple-700 font-medium">সেবা গ্রুপ ফিল্টার</div>
                  <div className="text-lg font-bold text-purple-900 mt-0.5">৭ টি বিভাগ</div>
                </div>
              </div>

              {/* Search & Group Filter */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={adminSearch}
                    onChange={(e) => setAdminSearch(e.target.value)}
                    placeholder="ক্যাটাগরির নাম, আইডি বা বিবরণ দিয়ে খুঁজুন..."
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  {adminSearch && (
                    <button
                      onClick={() => setAdminSearch('')}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Group Filter pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
                  {['সকল', 'জরুরি সেবা', 'যাতায়াত ও ভ্রমণ', 'স্বাস্থ্য ও কল্যাণ', 'শিক্ষা ও তথ্য', 'নাগরিক ও প্রশাসন', 'ব্যবসা ও বাণিজ্য', 'অন্যান্য'].map((grp) => (
                    <button
                      key={grp}
                      onClick={() => setCategoryGroupFilter(grp)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                        categoryGroupFilter === grp
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {grp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categories
                  .filter((cat) => {
                    const matchesSearch =
                      !adminSearch ||
                      cat.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
                      cat.id.toLowerCase().includes(adminSearch.toLowerCase()) ||
                      (cat.description && cat.description.toLowerCase().includes(adminSearch.toLowerCase())) ||
                      (cat.group && cat.group.toLowerCase().includes(adminSearch.toLowerCase()));
                    const matchesGroup =
                      categoryGroupFilter === 'সকল' ||
                      cat.group === categoryGroupFilter ||
                      (!cat.group && categoryGroupFilter === 'অন্যান্য');
                    return matchesSearch && matchesGroup;
                  })
                  .map((cat) => (
                    <div
                      key={cat.id}
                      className="p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition bg-white flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                              <span className="text-lg">
                                {(cat.icon === 'doctor' || cat.iconName === 'Stethoscope' || cat.id === 'doctor') && '🩺'}
                                {(cat.icon === 'hospital' || cat.iconName === 'Building2' || cat.id === 'hospital') && '🏥'}
                                {(cat.icon === 'bus' || cat.iconName === 'Bus' || cat.id === 'bus') && '🚌'}
                                {(cat.icon === 'launch' || cat.iconName === 'Ship' || cat.id === 'launch') && '🚢'}
                                {(cat.icon === 'tourist' || cat.iconName === 'Palmtree' || cat.id === 'tourist') && '🏖️'}
                                {(cat.icon === 'police' || cat.iconName === 'Shield' || cat.id === 'police') && '👮'}
                                {(cat.icon === 'fire' || cat.iconName === 'Flame' || cat.id === 'fire') && '🚒'}
                                {(cat.icon === 'electricity' || cat.iconName === 'Zap' || cat.id === 'electricity') && '⚡'}
                                {(cat.icon === 'blood-bank' || cat.iconName === 'HeartPulse' || cat.id === 'blood-bank') && '🩸'}
                                {!['doctor', 'hospital', 'bus', 'launch', 'tourist', 'police', 'fire', 'electricity', 'blood-bank'].includes(cat.icon || '') &&
                                 !['doctor', 'hospital', 'bus', 'launch', 'tourist', 'police', 'fire', 'electricity', 'blood-bank'].includes(cat.id) && '🏷️'}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h4 className="font-bold text-sm text-slate-900">{cat.name}</h4>
                                {cat.badge && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-rose-500 text-white shadow-2xs">
                                    {cat.badge}
                                  </span>
                                )}
                                {cat.isCustom && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                                    কাস্টম
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] font-mono text-slate-400">ID: {cat.id}</span>
                            </div>
                          </div>
                        </div>

                        {cat.description && (
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {cat.description}
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
                          {cat.group && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                              {cat.group}
                            </span>
                          )}
                          {cat.phone && (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-mono flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {cat.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <span className="text-[11px] text-slate-400">
                          {cat.isCustom ? 'ব্যবহারকারীর সংযোজন' : 'সিস্টেম ক্যাটাগরি'}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingCategory(cat);
                              setIsAddingCategory(false);
                            }}
                            className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1 transition"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>এডিট</span>
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`নিশ্চিত আপনি "${cat.name}" ক্যাটাগরি মুছে ফেলতে চান?`)) {
                                if (onDeleteCategory) {
                                  onDeleteCategory(cat.id);
                                  showToast('ক্যাটাগরি মুছে ফেলা হয়েছে!');
                                }
                              }
                            }}
                            className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold flex items-center gap-1 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>ডিলিট</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* ================= 2. DOCTOR MANAGEMENT ================= */}
          {activeMenu === 'ডাক্তার ও স্বাস্থ্যসেবা' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-emerald-600" />
                    <span>ডাক্তার তালিকা ব্যবস্থাপনা ও সম্পাদনা</span>
                  </h3>
                  <p className="text-xs text-slate-500">বিশেষজ্ঞ চিকিৎসকদের তথ্য, চেম্বার, সময়সূচি ও ভিজিট পরিবর্তন করুন</p>
                </div>
                <button
                  onClick={() => setIsAddingDoctor(true)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন ডাক্তার যোগ করুন</span>
                </button>
              </div>

              {/* List */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 border-y border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">নাম ও ডিগ্রি</th>
                      <th className="py-2.5 px-3">বিশেষজ্ঞ</th>
                      <th className="py-2.5 px-3">চেম্বার ও উপজেলা</th>
                      <th className="py-2.5 px-3">ফোন নম্বর</th>
                      <th className="py-2.5 px-3">ভিজিট</th>
                      <th className="py-2.5 px-3 text-right">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {doctors.map((doc) => (
                      <tr key={doc.id} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-bold text-slate-800">
                          {doc.name}
                          <span className="block text-[10px] text-slate-400 font-normal">{doc.degree}</span>
                        </td>
                        <td className="py-2.5 px-3 text-emerald-700 font-semibold">{doc.specialty}</td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {doc.chamber}
                          <span className="block text-[10px] text-slate-400">{doc.upazila}</span>
                        </td>
                        <td className="py-2.5 px-3 font-mono">{doc.phone}</td>
                        <td className="py-2.5 px-3 font-bold text-blue-700">{doc.fee}</td>
                        <td className="py-2.5 px-3 text-right whitespace-nowrap">
                          <button
                            onClick={() => setEditingDoctor(doc)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg mr-1.5"
                            title="এডিট"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`নিশ্চিত আপনি ডাঃ ${doc.name}-কে তালিকা থেকে মুছতে চান?`)) {
                                onDeleteDoctor(doc.id);
                                showToast('ডাক্তার তথ্য মুছে ফেলা হয়েছে!');
                              }
                            }}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                            title="মুছে ফেলুন"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= 3. HOSPITAL MANAGEMENT ================= */}
          {activeMenu === 'হাসপাতাল ও ক্লিনিক' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-red-600" />
                    <span>হাসপাতাল ও ক্লিনিক ব্যবস্থাপনা</span>
                  </h3>
                  <p className="text-xs text-slate-500">সরকারি ও বেসরকারি হাসপাতালের জরুরি ও অ্যাম্বুলেন্স নম্বর হালনাগাদ করুন</p>
                </div>
                <button
                  onClick={() => setIsAddingHospital(true)}
                  className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন হাসপাতাল যোগ করুন</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 border-y border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">হাসপাতালের নাম</th>
                      <th className="py-2.5 px-3">ধরন ও এলাকা</th>
                      <th className="py-2.5 px-3">জরুরি হেল্পলাইন</th>
                      <th className="py-2.5 px-3">অ্যাম্বুলেন্স</th>
                      <th className="py-2.5 px-3 text-right">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {hospitals.map((hosp) => (
                      <tr key={hosp.id} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-bold text-slate-800">{hosp.name}</td>
                        <td className="py-2.5 px-3">
                          <span className="text-red-700 font-semibold">{hosp.type}</span>
                          <span className="block text-[10px] text-slate-400">{hosp.upazila}</span>
                        </td>
                        <td className="py-2.5 px-3 font-mono">{hosp.emergency}</td>
                        <td className="py-2.5 px-3 font-mono text-emerald-700">{hosp.ambulance}</td>
                        <td className="py-2.5 px-3 text-right whitespace-nowrap">
                          <button
                            onClick={() => setEditingHospital(hosp)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg mr-1.5"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`নিশ্চিত মুছে ফেলতে চান?`)) {
                                onDeleteHospital(hosp.id);
                                showToast('হাসপাতাল মুছে ফেলা হয়েছে!');
                              }
                            }}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= 4. BUS SCHEDULES ================= */}
          {activeMenu === 'বাসের সময়সূচী' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Bus className="w-5 h-5 text-emerald-600" />
                    <span>বাসের সময়সূচী ও ভাড়া ব্যবস্থাপনা</span>
                  </h3>
                  <p className="text-xs text-slate-500">বাসের নাম, রুট, ছাড়ার সময়, ভাড়া ও কাউন্টার নম্বর এডিট করুন</p>
                </div>
                <button
                  onClick={() => setIsAddingBus(true)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন বাস রুট যোগ করুন</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {busSchedules.map((bus) => (
                  <div key={bus.id} className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">{bus.operator}</h4>
                          <span className="text-xs font-semibold text-emerald-700">{bus.route}</span>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                          {bus.busType}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-slate-600 space-y-0.5">
                        <p>সময়সূচি: <strong>{bus.departureTime}</strong></p>
                        <p>ভাড়া: <strong className="text-emerald-700">{bus.fare}</strong></p>
                        <p>কাউন্টার: {bus.counterPhone}</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200 flex justify-end gap-2">
                      <button
                        onClick={() => setEditingBus(bus)}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>এডিট</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('নিশ্চিত এই বাস রুট মুছে ফেলতে চান?')) {
                            onDeleteBus(bus.id);
                            showToast('বাস রুট মুছে ফেলা হয়েছে!');
                          }
                        }}
                        className="px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>মুছে ফেলুন</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= 5. LAUNCH SCHEDULES ================= */}
          {activeMenu === 'লঞ্চের সময়সূচী' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Ship className="w-5 h-5 text-cyan-600" />
                    <span>লঞ্চের সময়সূচী ও কেবিন বুকিং রেট</span>
                  </h3>
                  <p className="text-xs text-slate-500">লঞ্চের নাম, ছাড়ার সময়, ঘাট ও কেবিন ভাড়ার তালিকা হালনাগাদ করুন</p>
                </div>
                <button
                  onClick={() => setIsAddingLaunch(true)}
                  className="px-3.5 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন লঞ্চ যোগ করুন</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {launchSchedules.map((launch) => (
                  <div key={launch.id} className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">{launch.name}</h4>
                          <span className="text-xs font-semibold text-cyan-800">{launch.route}</span>
                        </div>
                        <span className="text-[11px] bg-cyan-100 text-cyan-900 font-bold px-2 py-0.5 rounded-md">
                          {launch.ghat}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-slate-600 space-y-0.5">
                        <p>সময়: {launch.departureTime}</p>
                        <p>কেবিন: ডেক {launch.deckFare} | সিঙ্গেল {launch.singleCabinFare} | ডাবল {launch.doubleCabinFare}</p>
                        <p>বুকিং কাউন্টার: {launch.counterPhone}</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200 flex justify-end gap-2">
                      <button
                        onClick={() => setEditingLaunch(launch)}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>এডিট</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('নিশ্চিত মুছে ফেলতে চান?')) {
                            onDeleteLaunch(launch.id);
                            showToast('লঞ্চ মুছে ফেলা হয়েছে!');
                          }
                        }}
                        className="px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>মুছে ফেলুন</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= 6. NOTICES & ANNOUNCEMENTS ================= */}
          {activeMenu === 'নোটিশ ও বিজ্ঞপ্তি' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-amber-500" />
                    <span>নোটিশ ও বিজ্ঞপ্তি প্রকাশনা</span>
                  </h3>
                  <p className="text-xs text-slate-500">সরকারি নোটিশ, ইউনিয়ন সংবাদ ও আবহাওয়া বার্তা প্রকাশ ও এডিট করুন</p>
                </div>
                <button
                  onClick={() => setIsAddingNotice(true)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন নোটিশ প্রকাশ</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {notif.category}
                        </span>
                        <span className="text-[11px] text-slate-400">{notif.date} • {notif.time}</span>
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">{notif.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{notif.description}</p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => setEditingNotice(notif)}
                        className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg"
                        title="এডিট"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('নিশ্চিত এই নোটিশ মুছে ফেলতে চান?')) {
                            onDeleteNotice(notif.id);
                            showToast('নোটিশ মুছে ফেলা হয়েছে!');
                          }
                        }}
                        className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg"
                        title="মুছে ফেলুন"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= 7. CITIZEN COMPLAINTS ================= */}
          {activeMenu === 'নাগরিক অভিযোগ ও সমাধান' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquareWarning className="w-5 h-5 text-rose-600" />
                  <span>নাগরিক অভিযোগ নিষ্পত্তি ও স্ট্যাটাস</span>
                </h3>
                <p className="text-xs text-slate-500">নাগরিকদের দাখিলকৃত অভিযোগের তদন্ত ও নিষ্পত্তি স্ট্যাটাস আপডেট করুন</p>
              </div>

              <div className="space-y-3">
                {complaints.map((comp) => (
                  <div key={comp.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                          #{comp.trackingNo}
                        </span>
                        <h4 className="font-bold text-sm text-slate-900 mt-1">{comp.title}</h4>
                        <p className="text-xs text-slate-500">
                          আবেদনকারী: {comp.applicant} | এলাকা: {comp.area} | তারিখ: {comp.date}
                        </p>
                      </div>

                      {/* Status Selector */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-600">স্ট্যাটাস:</span>
                        <select
                          value={comp.status}
                          onChange={(e) => {
                            onUpdateComplaintStatus(comp.id, e.target.value as any);
                            showToast('অভিযোগের স্ট্যাটাস আপডেট হয়েছে!');
                          }}
                          className={`text-xs font-bold py-1.5 px-3 rounded-xl border ${
                            comp.status === 'নিষ্পন্ন'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : comp.status === 'তদন্তাধীন'
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : 'bg-rose-50 text-rose-800 border-rose-300'
                          }`}
                        >
                          <option value="প্রাপ্ত">প্রাপ্ত</option>
                          <option value="তদন্তাধীন">তদন্তাধীন</option>
                          <option value="নিষ্পন্ন">নিষ্পন্ন</option>
                        </select>

                        <button
                          onClick={() => {
                            if (confirm('নিশ্চিত অভিযোগ মুছে ফেলতে চান?')) {
                              onDeleteComplaint(comp.id);
                              showToast('অভিযোগ মুছে ফেলা হয়েছে!');
                            }
                          }}
                          className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TOURIST PLACES MANAGEMENT ================= */}
          {activeMenu === 'দর্শনীয় স্থান' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Palmtree className="w-5 h-5 text-emerald-600" />
                    <span>দর্শনীয় স্থান ও পর্যটন ব্যবস্থাপনা</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    কুয়াকাটা, ঝাউবন, ফাতরার চর ইত্যাদির ছবি, বিবরণ ও পর্যটন তথ্য সম্পাদনা করুন
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingPlace(true)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>নতুন দর্শনীয় স্থান যোগ</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {touristPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                          {place.upazila}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950">
                          ★ {place.rating}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <h4 className="font-bold text-sm text-white drop-shadow-xs">{place.name}</h4>
                        <p className="text-[11px] text-emerald-300 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{place.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between text-xs text-slate-600">
                      <p className="line-clamp-2 text-slate-700">{place.description}</p>
                      <div className="p-2 bg-emerald-50 rounded-xl text-[11px] text-emerald-950 border border-emerald-100">
                        <strong className="text-emerald-800">আকর্ষণ:</strong> {place.highlight}
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-end gap-2">
                        <button
                          onClick={() => setEditingPlace(place)}
                          className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1 transition"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>এডিট</span>
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`নিশ্চিত '${place.name}' স্থানটি তালিকা থেকে মুছতে চান?`)) {
                              onDeletePlace(place.id);
                              showToast('দর্শনীয় স্থান মুছে ফেলা হয়েছে!');
                            }
                          }}
                          className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold flex items-center gap-1 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>ডিলিট</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= 8. SYSTEM SETTINGS & RESET ================= */}
          {activeMenu === 'সিস্টেম সেটিংস' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 max-w-xl">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-slate-700" />
                  <span>সিস্টেম কন্ট্রোল ও রিসেট</span>
                </h3>
                <p className="text-xs text-slate-500">অ্যাপের সামগ্রিক ডেটা ব্যবস্থাপনা ও ডিফল্ট রিস্টোর</p>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-2">
                <h4 className="font-bold">তথ্য সুরক্ষিত রয়েছে</h4>
                <p>এডমিন প্যানেলে আপনার করা প্রতিটি এডিট রিয়েল-টাইমে ব্রাউজারের লোকাল স্টোরেজে স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকে।</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    if (confirm('আপনি কি সব ডেটা প্রাথমিক ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?')) {
                      onResetToDefaults();
                      showToast('সব তথ্য ডিফল্ট অবস্থায় রিস্টোর করা হয়েছে!');
                    }
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>সব ডেটা ডিফল্ট রিস্টোর করুন</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ================= MODAL: ADD / EDIT DOCTOR ================= */}
      {(isAddingDoctor || editingDoctor) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-5 border border-slate-200 shadow-2xl space-y-3 text-xs max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="font-bold text-sm text-slate-900">
                {editingDoctor ? 'ডাক্তার তথ্য সম্পাদনা' : 'নতুন ডাক্তার যোগ করুন'}
              </h3>
              <button onClick={() => { setIsAddingDoctor(false); setEditingDoctor(null); }}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const docData: Doctor = {
                  ...(editingDoctor || {}),
                  id: editingDoctor ? editingDoctor.id : `doc-${Date.now()}`,
                  name: form.docName.value,
                  specialty: form.specialty.value,
                  degree: form.degree.value,
                  designation: form.designation.value || editingDoctor?.designation,
                  bmdcReg: form.bmdcReg.value || editingDoctor?.bmdcReg,
                  experience: form.experience.value || editingDoctor?.experience,
                  chamber: form.chamber.value,
                  chamberAddress: form.chamberAddress.value || editingDoctor?.chamberAddress,
                  upazila: form.upazila.value,
                  phone: form.phone.value,
                  visitingHours: form.visitingHours.value,
                  fee: form.fee.value,
                  availableDays: form.availableDays.value
                };
                if (editingDoctor) {
                  onUpdateDoctor(docData);
                  showToast('ডাক্তার তথ্য সফলভাবে আপডেট হয়েছে!');
                } else {
                  onAddDoctor(docData);
                  showToast('নতুন ডাক্তার সফলভাবে যুক্ত হয়েছে!');
                }
                setIsAddingDoctor(false);
                setEditingDoctor(null);
              }}
              className="space-y-2.5 max-h-[75vh] overflow-y-auto pr-1"
            >
              <div>
                <label className="block font-semibold mb-0.5">ডাক্তারের নাম *</label>
                <input required name="docName" defaultValue={editingDoctor?.name || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">বিশেষজ্ঞ বিষয় *</label>
                  <input required name="specialty" defaultValue={editingDoctor?.specialty || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">ডিগ্রি *</label>
                  <input required name="degree" defaultValue={editingDoctor?.degree || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">পদবী / হাসপাতাল</label>
                  <input name="designation" placeholder="যেমন: সহকারী অধ্যাপক, মেডিসিন" defaultValue={editingDoctor?.designation || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">বিএমডিসি রেজিঃ নং</label>
                  <input name="bmdcReg" placeholder="যেমন: A-54912" defaultValue={editingDoctor?.bmdcReg || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-0.5">চেম্বার / ক্লিনিক নাম *</label>
                <input required name="chamber" defaultValue={editingDoctor?.chamber || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-0.5">চেম্বারের বিস্তারিত ঠিকানা</label>
                <input name="chamberAddress" placeholder="যেমন: সদর রোড, ২য় তলা" defaultValue={editingDoctor?.chamberAddress || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">অভিজ্ঞতা</label>
                  <input name="experience" placeholder="যেমন: ১০+ বছরের অভিজ্ঞতা" defaultValue={editingDoctor?.experience || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">উপজেলা *</label>
                  <select name="upazila" defaultValue={editingDoctor?.upazila || 'পটুয়াখালী সদর'} className="w-full p-2 rounded-xl border bg-slate-50">
                    {UPAZILAS.filter((u) => u !== 'সকল এলাকা').map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">ফোন নম্বর / সিরিয়াল *</label>
                  <input required name="phone" defaultValue={editingDoctor?.phone || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">ভিজিট ফি *</label>
                  <input required name="fee" defaultValue={editingDoctor?.fee || '৳ ৫০০'} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">সপ্তাহের দিন *</label>
                  <input required name="availableDays" defaultValue={editingDoctor?.availableDays || 'প্রতিদিন'} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">রোগী দেখার সময় *</label>
                  <input required name="visitingHours" defaultValue={editingDoctor?.visitingHours || 'বিকাল ৪:০০ - রাত ৮:০০'} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => { setIsAddingDoctor(false); setEditingDoctor(null); }} className="flex-1 py-2 bg-slate-100 rounded-xl font-bold">বাতিল</button>
                <button type="submit" className="flex-1 py-2 bg-emerald-600 text-white rounded-xl font-bold">সংরক্ষণ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD / EDIT NOTICE ================= */}
      {(isAddingNotice || editingNotice) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-5 border border-slate-200 shadow-2xl space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="font-bold text-sm text-slate-900">
                {editingNotice ? 'নোটিশ সম্পাদনা' : 'নতুন নোটিশ প্রকাশ'}
              </h3>
              <button onClick={() => { setIsAddingNotice(false); setEditingNotice(null); }}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const notifData: NotificationItem = {
                  id: editingNotice ? editingNotice.id : `notif-${Date.now()}`,
                  title: form.notifTitle.value,
                  description: form.notifDesc.value,
                  category: form.notifCategory.value,
                  date: 'আজ, ২৬ অক্টোবর ২০২৬',
                  time: '১০:৩০ AM',
                  unread: true
                };
                if (editingNotice) {
                  onUpdateNotice(notifData);
                  showToast('নোটিশ সফলভাবে আপডেট হয়েছে!');
                } else {
                  onAddNotice(notifData);
                  showToast('নতুন নোটিশ প্রকাশিত হয়েছে!');
                }
                setIsAddingNotice(false);
                setEditingNotice(null);
              }}
              className="space-y-2.5"
            >
              <div>
                <label className="block font-semibold mb-0.5">ক্যাটাগরি</label>
                <select name="notifCategory" defaultValue={editingNotice?.category || 'সরকারি বিজ্ঞপ্তি'} className="w-full p-2 rounded-xl border bg-slate-50">
                  <option value="সরকারি বিজ্ঞপ্তি">সরকারি বিজ্ঞপ্তি</option>
                  <option value="জরুরি বিজ্ঞপ্তি">জরুরি বিজ্ঞপ্তি</option>
                  <option value="ইউনিয়ন সংবাদ">ইউনিয়ন সংবাদ</option>
                  <option value="সেবা আপডেট">সেবা আপডেট</option>
                  <option value="আবহাওয়া">আবহাওয়া</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-0.5">শিরোনাম *</label>
                <input required name="notifTitle" defaultValue={editingNotice?.title || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-0.5">বিস্তারিত বিবরণ *</label>
                <textarea required rows={4} name="notifDesc" defaultValue={editingNotice?.description || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => { setIsAddingNotice(false); setEditingNotice(null); }} className="flex-1 py-2 bg-slate-100 rounded-xl font-bold">বাতিল</button>
                <button type="submit" className="flex-1 py-2 bg-emerald-600 text-white rounded-xl font-bold">সংরক্ষণ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD / EDIT BUS ================= */}
      {(isAddingBus || editingBus) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-5 border border-slate-200 shadow-2xl space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="font-bold text-sm text-slate-900">
                {editingBus ? 'বাস রুট সম্পাদনা' : 'নতুন বাস রুট যোগ'}
              </h3>
              <button onClick={() => { setIsAddingBus(false); setEditingBus(null); }}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const busData: BusSchedule = {
                  id: editingBus ? editingBus.id : `bus-${Date.now()}`,
                  operator: form.operator.value,
                  route: form.route.value,
                  busType: form.busType.value,
                  departureTime: form.departureTime.value,
                  fare: form.fare.value,
                  counterPhone: form.counterPhone.value,
                  boardingPoint: form.boardingPoint.value
                };
                if (editingBus) {
                  onUpdateBus(busData);
                  showToast('বাসের তথ্য আপডেট হয়েছে!');
                } else {
                  onAddBus(busData);
                  showToast('নতুন বাস রুট যুক্ত হয়েছে!');
                }
                setIsAddingBus(false);
                setEditingBus(null);
              }}
              className="space-y-2.5"
            >
              <div>
                <label className="block font-semibold mb-0.5">অপারেটর / বাসের নাম *</label>
                <input required name="operator" defaultValue={editingBus?.operator || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-0.5">রুট *</label>
                <input required name="route" defaultValue={editingBus?.route || 'ঢাকা ⇌ পটুয়াখালী ⇌ কুয়াকাটা'} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">বাসের ধরন</label>
                  <select name="busType" defaultValue={editingBus?.busType || 'এসি'} className="w-full p-2 rounded-xl border bg-slate-50">
                    <option value="এসি">এসি</option>
                    <option value="নন-এসি">নন-এসি</option>
                    <option value="স্লিপার কোচ">স্লিপার কোচ</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">ভাড়া *</label>
                  <input required name="fare" defaultValue={editingBus?.fare || '৳ ৮০০'} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-0.5">ছাড়ার সময়সূচী *</label>
                <input required name="departureTime" defaultValue={editingBus?.departureTime || 'সকাল ৭:০০, রাত ৯:০০'} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">কাউন্টার ফোন *</label>
                  <input required name="counterPhone" defaultValue={editingBus?.counterPhone || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">বোর্ডিং পয়েন্ট</label>
                  <input required name="boardingPoint" defaultValue={editingBus?.boardingPoint || 'পটুয়াখালী নতুন টার্মিনাল'} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => { setIsAddingBus(false); setEditingBus(null); }} className="flex-1 py-2 bg-slate-100 rounded-xl font-bold">বাতিল</button>
                <button type="submit" className="flex-1 py-2 bg-emerald-600 text-white rounded-xl font-bold">সংরক্ষণ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD / EDIT USER ================= */}
      {(isAddingUser || editingUser) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 border border-slate-200 shadow-2xl space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="font-bold text-sm text-slate-900">
                {editingUser ? 'ব্যবহারকারী সম্পাদনা' : 'নতুন ব্যবহারকারী নিবন্ধন'}
              </h3>
              <button onClick={() => { setIsAddingUser(false); setEditingUser(null); }}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const userData: RegisteredUser = {
                  id: editingUser ? editingUser.id : `usr-${Date.now()}`,
                  name: form.userName.value,
                  mobile: form.userMobile.value,
                  area: form.userArea.value,
                  upazila: form.userUpazila.value,
                  joinedDate: editingUser ? editingUser.joinedDate : '২৬ অক্টোবর ২০২৬',
                  status: form.userStatus.value,
                  postsCount: editingUser ? editingUser.postsCount : 0,
                  commentsCount: editingUser ? editingUser.commentsCount : 0
                };
                if (editingUser) {
                  onUpdateUser(userData);
                  showToast('ব্যবহারকারী তথ্য আপডেট হয়েছে!');
                } else {
                  onAddUser(userData);
                  showToast('নতুন ব্যবহারকারী নিবন্ধিত হয়েছে!');
                }
                setIsAddingUser(false);
                setEditingUser(null);
              }}
              className="space-y-2.5"
            >
              <div>
                <label className="block font-semibold mb-0.5">পূর্ণ নাম *</label>
                <input required name="userName" defaultValue={editingUser?.name || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-0.5">মোবাইল নম্বর *</label>
                <input required name="userMobile" defaultValue={editingUser?.mobile || ''} className="w-full p-2 rounded-xl border bg-slate-50" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">গ্রাম / ইউনিয়ন</label>
                  <input required name="userArea" defaultValue={editingUser?.area || 'আমখোলা'} className="w-full p-2 rounded-xl border bg-slate-50" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">উপজেলা</label>
                  <select name="userUpazila" defaultValue={editingUser?.upazila || 'গলাচিপা'} className="w-full p-2 rounded-xl border bg-slate-50">
                    {UPAZILAS.filter((u) => u !== 'সকল এলাকা').map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-0.5">স্ট্যাটাস</label>
                <select name="userStatus" defaultValue={editingUser?.status || 'সক্রিয়'} className="w-full p-2 rounded-xl border bg-slate-50">
                  <option value="সক্রিয়">সক্রিয়</option>
                  <option value="নিষ্ক্রিয়">নিষ্ক্রিয়</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => { setIsAddingUser(false); setEditingUser(null); }} className="flex-1 py-2 bg-slate-100 rounded-xl font-bold">বাতিল</button>
                <button type="submit" className="flex-1 py-2 bg-emerald-600 text-white rounded-xl font-bold">সংরক্ষণ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= BANNER ADD / EDIT MODAL ================= */}
      {(isAddingBanner || editingBanner) && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 shadow-2xl space-y-4 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-emerald-600" />
                <span>{editingBanner ? 'ব্যানার সম্পাদন (Edit Banner)' : 'নতুন ব্যানার স্লাইড যোগ করুন'}</span>
              </h3>
              <button
                onClick={() => {
                  setIsAddingBanner(false);
                  setEditingBanner(null);
                }}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const bannerData: BannerSlide = {
                  id: editingBanner ? editingBanner.id : `banner-${Date.now()}`,
                  title: form.bannerTitle.value,
                  subtitle: form.bannerSubtitle.value,
                  motto: form.bannerMotto.value,
                  badge: form.bannerBadge.value,
                  image: form.bannerImage.value,
                  actionText: form.bannerActionText.value,
                  targetCategory: form.bannerCategory.value,
                  tagColor: editingBanner?.tagColor || 'bg-emerald-500/90 text-white',
                  active: form.bannerStatus.value === 'true'
                };

                if (editingBanner) {
                  if (onUpdateBanner) onUpdateBanner(bannerData);
                  showToast('ব্যানার তথ্য সফলভাবে আপডেট হয়েছে!');
                } else {
                  if (onAddBanner) onAddBanner(bannerData);
                  showToast('নতুন ব্যানার স্লাইডারে যোগ হয়েছে!');
                }
                setIsAddingBanner(false);
                setEditingBanner(null);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold mb-1 text-slate-700">ব্যানার শিরোনাম (Title) *</label>
                <input
                  required
                  name="bannerTitle"
                  defaultValue={editingBanner?.title || ''}
                  placeholder="যেমন: কুয়াকাটা সৈকত"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">উপ-শিরোনাম (Subtitle) *</label>
                <input
                  required
                  name="bannerSubtitle"
                  defaultValue={editingBanner?.subtitle || ''}
                  placeholder="যেমন: সূর্যোদয় ও সূর্যাস্তের বেলাভূমি"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">বিবরণ / মূল বাণী (ঐচ্ছিক)</label>
                <input
                  name="bannerMotto"
                  defaultValue={editingBanner?.motto || ''}
                  placeholder="সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">ট্যাগ / ব্যাজ *</label>
                  <input
                    required
                    name="bannerBadge"
                    defaultValue={editingBanner?.badge || 'পটুয়াখালী'}
                    placeholder="যেমন: কুয়াকাটা"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">বাটনের লেখা (CTA Text) *</label>
                  <input
                    required
                    name="bannerActionText"
                    defaultValue={editingBanner?.actionText || 'ঘুরুন'}
                    placeholder="যেমন: ঘুরুন / রুট দেখুন"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">ক্লিক করলে ক্যাটাগরি *</label>
                  <select
                    name="bannerCategory"
                    defaultValue={editingBanner?.targetCategory || 'tourist'}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                  >
                    <option value="tourist">দর্শনীয় স্থান (কুয়াকাটা)</option>
                    <option value="bus">বাসের সময়সূচী</option>
                    <option value="launch">লঞ্চের সময়সূচী</option>
                    <option value="fishery">মৎস্য ও সমুদ্র সম্পদ</option>
                    <option value="doctor">ডাক্তার</option>
                    <option value="hospital">হাসপাতাল</option>
                    <option value="emergency">জরুরি সেবা</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">স্ট্যাটাস (Status)</label>
                  <select
                    name="bannerStatus"
                    defaultValue={editingBanner?.active === false ? 'false' : 'true'}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                  >
                    <option value="true">সক্রিয় (Active)</option>
                    <option value="false">নিষ্ক্রিয় (Inactive)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">ছবির লিঙ্ক / পাথ (Image URL or Path) *</label>
                <input
                  required
                  name="bannerImage"
                  defaultValue={editingBanner?.image || ''}
                  placeholder="ছবির URL বা পাথ পেস্ট করুন"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                />
              </div>

              <div className="flex gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingBanner(false);
                    setEditingBanner(null);
                  }}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md shadow-emerald-700/20 transition"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD / EDIT TOURIST PLACE ================= */}
      {(isAddingPlace || editingPlace) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 border border-slate-200 shadow-2xl space-y-3 text-xs max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Palmtree className="w-4 h-4 text-emerald-600" />
                <span>{editingPlace ? 'দর্শনীয় স্থান তথ্য সম্পাদনা' : 'নতুন দর্শনীয় স্থান যোগ করুন'}</span>
              </h3>
              <button onClick={() => { setIsAddingPlace(false); setEditingPlace(null); }}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const placeData: TouristPlace = {
                  id: editingPlace ? editingPlace.id : `tour-${Date.now()}`,
                  name: form.placeName.value,
                  location: form.location.value,
                  upazila: form.upazila.value,
                  description: form.description.value,
                  highlight: form.highlight.value,
                  bestTimeToVisit: form.bestTimeToVisit.value,
                  howToGo: form.howToGo.value,
                  image: form.image.value,
                  rating: parseFloat(form.rating.value) || 4.8
                };
                if (editingPlace) {
                  onUpdatePlace(placeData);
                  showToast('দর্শনীয় স্থান সফলভাবে আপডেট হয়েছে!');
                } else {
                  onAddPlace(placeData);
                  showToast('নতুন স্থান সফলভাবে যুক্ত হয়েছে!');
                }
                setIsAddingPlace(false);
                setEditingPlace(null);
              }}
              className="space-y-2.5"
            >
              <div>
                <label className="block font-semibold mb-0.5">স্থানের নাম *</label>
                <input required name="placeName" defaultValue={editingPlace?.name || ''} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" placeholder="যেমন: কুয়াকাটা সমুদ্র সৈকত" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">উপজেলা *</label>
                  <select name="upazila" defaultValue={editingPlace?.upazila || 'কলাপাড়া (কুয়াকাটা)'} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900">
                    {UPAZILAS.filter((u) => u !== 'সকল এলাকা').map((u) => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">লোকেশন / ঠিকানা *</label>
                  <input required name="location" defaultValue={editingPlace?.location || ''} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" placeholder="যেমন: কুয়াকাটা, কলাপাড়া" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-0.5">ছবির পাথ বা URL *</label>
                <input required name="image" defaultValue={editingPlace?.image || ''} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" placeholder="ছবির URL বা ফাইল পাথ" />
              </div>

              <div>
                <label className="block font-semibold mb-0.5">বিস্তারিত বিবরণ *</label>
                <textarea required rows={3} name="description" defaultValue={editingPlace?.description || ''} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" placeholder="দর্শনীয় স্থানের বর্ণনা লিখুন" />
              </div>

              <div>
                <label className="block font-semibold mb-0.5">মূল আকর্ষণ *</label>
                <input required name="highlight" defaultValue={editingPlace?.highlight || ''} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" placeholder="যেমন: সূর্যোদয় ও সূর্যাস্ত দর্শন" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold mb-0.5">ভ্রমণের সেরা সময়</label>
                  <input name="bestTimeToVisit" defaultValue={editingPlace?.bestTimeToVisit || 'সকাল ৮:০০ - বিকাল ৫:৩০'} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-0.5">রেটিং (১-৫)</label>
                  <input name="rating" type="number" step="0.1" max="5" min="1" defaultValue={editingPlace?.rating || 4.8} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-0.5">যাওয়ার উপায়</label>
                <input name="howToGo" defaultValue={editingPlace?.howToGo || ''} className="w-full p-2 rounded-xl border bg-slate-50 text-slate-900" placeholder="যেমন: জেলা শহর থেকে বাসে ১.৫ ঘণ্টা" />
              </div>

              <div className="flex gap-2 pt-2 border-t">
                <button type="button" onClick={() => { setIsAddingPlace(false); setEditingPlace(null); }} className="flex-1 py-2 bg-slate-100 rounded-xl font-bold">বাতিল</button>
                <button type="submit" className="flex-1 py-2 bg-emerald-600 text-white rounded-xl font-bold">সংরক্ষণ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD / EDIT CATEGORY ================= */}
      {(isAddingCategory || editingCategory) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 border border-slate-200 shadow-2xl space-y-3.5 text-xs max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-2 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">
                    {editingCategory ? 'ক্যাটাগরি তথ্য সম্পাদনা' : 'নতুন ক্যাটাগরি যোগ করুন'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    নাগরিক সেবা ও হোমস্ক্রিন আইকনের বিস্তারিত বিবরণ
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsAddingCategory(false);
                  setEditingCategory(null);
                }}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const catName = form.catName.value.trim();
                const rawId = form.catId ? form.catId.value.trim().toLowerCase().replace(/\s+/g, '-') : '';
                const catId = editingCategory ? editingCategory.id : (rawId || `cat-${Date.now()}`);
                const iconVal = form.catIcon.value || 'custom';
                const gradVal = form.catGradient.value || 'from-emerald-50 to-teal-100';

                const categoryData: CategoryItem = {
                  ...(editingCategory || {}),
                  id: catId,
                  name: catName,
                  icon: iconVal,
                  iconName: iconVal,
                  color: gradVal,
                  gradient: gradVal,
                  badge: form.catBadge.value.trim() || undefined,
                  description: form.catDesc.value.trim(),
                  group: form.catGroup.value || 'অন্যান্য',
                  phone: form.catPhone.value.trim() || undefined,
                  address: form.catAddress.value.trim() || undefined,
                  details: form.catDetails.value.trim() || undefined,
                  isCustom: editingCategory ? (editingCategory.isCustom ?? true) : true
                };

                if (editingCategory) {
                  if (onUpdateCategory) onUpdateCategory(categoryData);
                  showToast('ক্যাটাগরি সফলভাবে আপডেট হয়েছে!');
                } else {
                  if (onAddCategory) onAddCategory(categoryData);
                  showToast('নতুন ক্যাটাগরি সফলভাবে যুক্ত হয়েছে!');
                }

                setIsAddingCategory(false);
                setEditingCategory(null);
              }}
              className="space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    ক্যাটাগরির নাম (বাংলা) *
                  </label>
                  <input
                    required
                    name="catName"
                    defaultValue={editingCategory?.name || ''}
                    placeholder="যেমন: ব্লাড ব্যাংক ও রক্তদান"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    ক্যাটাগরি আইডি / স্লাগ (ইংরেজি) *
                  </label>
                  <input
                    required
                    name="catId"
                    defaultValue={editingCategory?.id || ''}
                    disabled={!!editingCategory}
                    placeholder="যেমন: blood-bank"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 font-mono disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    সেবা গ্রুপ / বিভাগ *
                  </label>
                  <select
                    name="catGroup"
                    defaultValue={editingCategory?.group || 'জরুরি সেবা'}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                  >
                    <option value="জরুরি সেবা">জরুরি সেবা</option>
                    <option value="স্বাস্থ্য ও কল্যাণ">স্বাস্থ্য ও কল্যাণ</option>
                    <option value="যাতায়াত ও ভ্রমণ">যাতায়াত ও ভ্রমণ</option>
                    <option value="শিক্ষা ও তথ্য">শিক্ষা ও তথ্য</option>
                    <option value="নাগরিক ও প্রশাসন">নাগরিক ও প্রশাসন</option>
                    <option value="ব্যবসা ও বাণিজ্য">ব্যবসা ও বাণিজ্য</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    আইকন প্রতীক নির্বাচন *
                  </label>
                  <select
                    name="catIcon"
                    defaultValue={editingCategory?.icon || editingCategory?.iconName || 'blood-bank'}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900"
                  >
                    <option value="blood-bank">🩸 রক্তদান / ব্লাড ব্যাংক</option>
                    <option value="doctor">🩺 ডাক্তার ও স্বাস্থ্যসেবা</option>
                    <option value="hospital">🏥 হাসপাতাল ও ক্লিনিক</option>
                    <option value="emergency">🚨 জরুরি হটলাইন</option>
                    <option value="police">👮 পুলিশ ও নিরাপত্তা</option>
                    <option value="fire">🚒 ফায়ার সার্ভিস</option>
                    <option value="bus">🚌 বাস যোগাযোগ</option>
                    <option value="launch">🚢 লঞ্চ ও নদীপথ</option>
                    <option value="tourist">🏖️ পর্যটন ও দর্শনীয় স্থান</option>
                    <option value="school">🏫 স্কুল, কলেজ ও মাদ্রাসা</option>
                    <option value="electricity">⚡ বিদ্যুৎ ও বিদ্যুৎ অফিস</option>
                    <option value="gas">🔥 গ্যাস সংযোগ</option>
                    <option value="fuel">⛽ জ্বালানি পাম্প</option>
                    <option value="agriculture">🌾 কৃষি তথ্য ও সহায়তা</option>
                    <option value="fisheries">🐟 মৎস্য ও প্রাণিসম্পদ</option>
                    <option value="bank">🏦 ব্যাংক ও এটিএম</option>
                    <option value="land">🏡 ভূমি ও জমি সেবা</option>
                    <option value="gov">🏛️ সরকারি অফিস</option>
                    <option value="job">💼 চাকরি ও বিজ্ঞপ্তি</option>
                    <option value="complaint">📝 অভিযোগ ও সমাধান</option>
                    <option value="news">📰 সংবাদ ও খবর</option>
                    <option value="info">ℹ️ তথ্য ও অনুসন্ধান</option>
                    <option value="custom">✨ অন্যান্য / বিশেষ সেবা</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    হাইলাইট ব্যাজ (ঐচ্ছিক)
                  </label>
                  <input
                    name="catBadge"
                    defaultValue={editingCategory?.badge || ''}
                    placeholder="যেমন: জরুরি / নতুন / হট / লাইভ"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    কালার গ্রেডিয়েন্ট থিম
                  </label>
                  <select
                    name="catGradient"
                    defaultValue={editingCategory?.gradient || editingCategory?.color || 'from-emerald-50 to-teal-100'}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                  >
                    <option value="from-emerald-50 to-teal-100">সবুজ (Emerald - Teal)</option>
                    <option value="from-rose-50 to-red-100">লাল / জরুরি (Rose - Red)</option>
                    <option value="from-blue-50 to-cyan-100">নীল (Blue - Cyan)</option>
                    <option value="from-amber-50 to-yellow-100">হলুদ / আম্বার (Amber - Yellow)</option>
                    <option value="from-purple-50 to-violet-100">বেগুনি (Purple - Violet)</option>
                    <option value="from-slate-50 to-slate-200">ধূসর (Slate Modern)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-800">
                  সংক্ষিপ্ত বিবরণ *
                </label>
                <input
                  required
                  name="catDesc"
                  defaultValue={editingCategory?.description || ''}
                  placeholder="যেমন: পটুয়াখালী জেলার জরুরি রক্তদাতা তালিকা ও সরাসরি যোগাযোগের তথ্য"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    হটলাইন / হেল্পলাইন নম্বর (ঐচ্ছিক)
                  </label>
                  <input
                    name="catPhone"
                    defaultValue={editingCategory?.phone || ''}
                    placeholder="যেমন: 01712345678 বা 16122"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-mono text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-slate-800">
                    অফিস / সেবা কেন্দ্রের ঠিকানা (ঐচ্ছিক)
                  </label>
                  <input
                    name="catAddress"
                    defaultValue={editingCategory?.address || ''}
                    placeholder="যেমন: জেলা প্রশাসক কার্যালয় সংলগ্ন, পটুয়াখালী"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-800">
                  বিস্তারিত সেবা নির্দেশিকা ও অধিকার (ঐচ্ছিক)
                </label>
                <textarea
                  rows={3}
                  name="catDetails"
                  defaultValue={editingCategory?.details || ''}
                  placeholder="এই সেবা গ্রহণের নিয়মাবলি, নাগরিক অধিকার, কর্মঘণ্টা বা অন্যান্য তথ্য লিখুন"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                />
              </div>

              <div className="flex gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingCategory(false);
                    setEditingCategory(null);
                  }}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md shadow-emerald-600/20 transition active:scale-98"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
