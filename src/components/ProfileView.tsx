import React, { useState } from 'react';
import {
  User,
  Camera,
  CheckCircle2,
  Calendar,
  MapPin,
  IdCard,
  Users,
  MessageSquare,
  Bell,
  Heart,
  ChevronRight,
  Shield,
  Settings,
  LogOut,
  Pencil,
  Image as ImageIcon,
  Check,
  X,
  Sparkles
} from 'lucide-react';

interface ProfileViewProps {
  onLogout: () => void;
  onOpenNotifications: () => void;
  onOpenSettings: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  onLogout,
  onOpenNotifications,
  onOpenSettings
}) => {
  const [userProfile, setUserProfile] = useState({
    name: 'Kabbo Hasan',
    id: 'AP-000123',
    status: 'সক্রিয় সদস্য',
    motto: 'আমার এলাকা, আমার দায়িত্ব',
    joinedDate: '২৫ জানুয়ারি ২০২৫',
    area: 'আমখোলা ইউনিয়ন, গলাচিপা থানা, পটুয়াখালী',
    phone: '01712-345678',
    email: 'kabbo.hasan@patuakhali.net',
    postsCount: 12,
    commentsCount: 5,
    notificationsCount: 3,
    favoritePlacesCount: 8
  });

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [tempName, setTempName] = useState(userProfile.name);
  const [tempArea, setTempArea] = useState(userProfile.area);
  const [tempPhone, setTempPhone] = useState(userProfile.phone);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleSavePersonalInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile({
      ...userProfile,
      name: tempName,
      area: tempArea,
      phone: tempPhone
    });
    setActiveModal(null);
    setSuccessToast('ব্যক্তিগত তথ্য সফলভাবে সংরক্ষিত হয়েছে!');
    setTimeout(() => setSuccessToast(null), 3000);
  };

  return (
    <div className="pb-16 max-w-5xl mx-auto w-full px-2 sm:px-4 pt-2 space-y-4 animate-in fade-in duration-150">
      {/* Toast Alert */}
      {successToast && (
        <div className="bg-emerald-600 text-white p-3 rounded-2xl text-xs font-semibold flex items-center justify-between shadow-lg animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{successToast}</span>
          </div>
          <button onClick={() => setSuccessToast(null)}>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Profile Card matching screenshot */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-sky-900 text-white p-4 shadow-lg border border-emerald-600/30">
        {/* Subtle decorative river/boat backdrop */}
        <div className="absolute right-0 bottom-0 top-0 w-2/5 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>

        <div className="relative z-10">
          <div className="flex items-start gap-3.5">
            {/* User Avatar with camera badge */}
            <div className="relative shrink-0">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-white shadow-md overflow-hidden bg-emerald-100 flex items-center justify-center text-emerald-800">
                <User className="w-10 h-10" />
              </div>
              <button
                onClick={() => setActiveModal('photo')}
                className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center border-2 border-white shadow-xs"
                title="ছবি পরিবর্তন"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* User Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {userProfile.name}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/80 text-white border border-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{userProfile.status}</span>
                </span>
              </div>

              <p className="text-[11px] text-emerald-200 font-medium italic mt-0.5">
                "{userProfile.motto}"
              </p>

              <div className="mt-2 space-y-1 text-[11px] text-slate-100/90 font-medium">
                <div className="flex items-center gap-1.5">
                  <IdCard className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>ব্যবহারকারী ID: <strong>{userProfile.id}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>যোগদানের তারিখ: {userProfile.joinedDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span className="truncate">{userProfile.area}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stats Cards in row matching screenshot */}
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Posts */}
        <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1">
            <Users className="w-4 h-4" />
          </div>
          <div className="text-sm font-extrabold text-slate-800">
            {userProfile.postsCount}
          </div>
          <div className="text-[10px] font-medium text-slate-500">মোট পোস্ট</div>
        </div>

        {/* Comments */}
        <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-1">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="text-sm font-extrabold text-slate-800">
            {userProfile.commentsCount}
          </div>
          <div className="text-[10px] font-medium text-slate-500">মোট মন্তব্য</div>
        </div>

        {/* Notifications */}
        <button
          onClick={onOpenNotifications}
          className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-300 transition"
        >
          <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-1">
            <Bell className="w-4 h-4" />
          </div>
          <div className="text-sm font-extrabold text-slate-800">
            {userProfile.notificationsCount}
          </div>
          <div className="text-[10px] font-medium text-slate-500">নতুন বার্তা</div>
        </button>

        {/* Favorites */}
        <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-1">
            <Heart className="w-4 h-4" />
          </div>
          <div className="text-sm font-extrabold text-slate-800">
            {userProfile.favoritePlacesCount}
          </div>
          <div className="text-[10px] font-medium text-slate-500">পছন্দ স্থান</div>
        </div>
      </div>

      {/* Profile Menu List matching screenshot */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden divide-y divide-slate-100">
        {/* Item 1: Personal Info */}
        <button
          onClick={() => setActiveModal('personal')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                ব্যক্তিগত তথ্য
              </h4>
              <p className="text-[11px] text-slate-500">
                নাম, মোবাইল, ইমেইল, ঠিকানা ইত্যাদি আপডেট করুন
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
        </button>

        {/* Item 2: Edit Profile */}
        <button
          onClick={() => setActiveModal('personal')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0">
              <Pencil className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition">
                প্রোফাইল সম্পাদনা
              </h4>
              <p className="text-[11px] text-slate-500">
                আপনার প্রোফাইল তথ্য পরিবর্তন করুন
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
        </button>

        {/* Item 3: Change Avatar */}
        <button
          onClick={() => setActiveModal('photo')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition">
                প্রোফাইল ছবি পরিবর্তন
              </h4>
              <p className="text-[11px] text-slate-500">
                নতুন ছবি আপলোড করুন
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
        </button>

        {/* Item 4: Security */}
        <button
          onClick={() => setActiveModal('security')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-700 transition">
                নিরাপত্তা
              </h4>
              <p className="text-[11px] text-slate-500">
                পাসওয়ার্ড পরিবর্তন করুন
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
        </button>

        {/* Item 5: App Settings */}
        <button
          onClick={onOpenSettings}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition">
                অ্যাপ সেটিংস
              </h4>
              <p className="text-[11px] text-slate-500">
                ভাষা, নোটিফিকেশন, ডেটা ব্যবস্থাপনা
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
        </button>

        {/* Item 6: Log Out */}
        <button
          onClick={onLogout}
          className="w-full p-3.5 flex items-center justify-between hover:bg-red-50 transition text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-600 text-white flex items-center justify-center shrink-0">
              <LogOut className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-700 transition">
                লগ আউট
              </h4>
              <p className="text-[11px] text-slate-500">
                অ্যাকাউন্ট থেকে বেরিয়ে যান
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
        </button>
      </div>

      {/* Target Mission Banner matching screenshot bottom */}
      <div className="p-3.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h5 className="text-xs font-bold text-emerald-950">আমাদের লক্ষ্য</h5>
          <p className="text-[11px] text-emerald-800 leading-snug">
            পটুয়াখালীর প্রতিটি মানুষের কাছে সঠিক তথ্য, উন্নয়ন ও সেবার পৌঁছে দেওয়া।
          </p>
        </div>
      </div>

      {/* Edit Personal Info Modal */}
      {activeModal === 'personal' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-5 border border-slate-200 shadow-2xl space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm text-slate-900">ব্যক্তিগত তথ্য সম্পাদনা</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-full hover:bg-slate-100">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSavePersonalInfo} className="space-y-2.5 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">নাম</label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">এলাকা ও উপজেলা</label>
                <input
                  type="text"
                  value={tempArea}
                  onChange={(e) => setTempArea(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">মোবাইল নম্বর</label>
                <input
                  type="tel"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2 bg-slate-100 rounded-xl text-slate-700 font-semibold"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Photo Modal */}
      {activeModal === 'photo' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 border border-slate-200 shadow-2xl text-center space-y-3">
            <h4 className="font-bold text-sm text-slate-900">নতুন ছবি নির্বাচন করুন</h4>
            <p className="text-xs text-slate-500">আপনার ডিভাইস থেকে প্রোফাইল ছবি নির্বাচন করুন</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setActiveModal(null);
                  setSuccessToast('প্রোফাইল ছবি সফলভাবে আপডেট হয়েছে!');
                  setTimeout(() => setSuccessToast(null), 3000);
                }
              }}
              className="text-xs w-full py-2"
            />
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2 bg-slate-100 rounded-xl text-xs font-semibold text-slate-700"
            >
              বাতিল
            </button>
          </div>
        </div>
      )}

      {/* Security Modal */}
      {activeModal === 'security' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 border border-slate-200 shadow-2xl space-y-3 text-xs">
            <h4 className="font-bold text-sm text-slate-900">পাসওয়ার্ড পরিবর্তন</h4>
            <div>
              <label className="block text-slate-600 mb-1">বর্তমান পাসওয়ার্ড</label>
              <input type="password" placeholder="••••••••" className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50" />
            </div>
            <div>
              <label className="block text-slate-600 mb-1">নতুন পাসওয়ার্ড</label>
              <input type="password" placeholder="কমপক্ষে ৬ অক্ষর" className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50" />
            </div>
            <div className="pt-2 flex gap-2">
              <button onClick={() => setActiveModal(null)} className="flex-1 py-2 bg-slate-100 rounded-xl font-semibold">
                বাতিল
              </button>
              <button
                onClick={() => {
                  setActiveModal(null);
                  setSuccessToast('পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!');
                  setTimeout(() => setSuccessToast(null), 3000);
                }}
                className="flex-1 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700"
              >
                আপডেট করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
