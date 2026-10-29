import React, { useState } from 'react';
import {
  Bell,
  Megaphone,
  Newspaper,
  CloudRain,
  Building,
  Droplets,
  Users,
  ChevronRight,
  CheckCircle,
  Filter,
  CheckCheck,
  X
} from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationViewProps {
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onSelectNotice: (notice: NotificationItem) => void;
}

export const NotificationView: React.FC<NotificationViewProps> = ({
  notifications,
  onMarkAllAsRead,
  onSelectNotice
}) => {
  const [selectedFilter, setSelectedFilter] = useState('সব ধরনের');
  const [openedNotice, setOpenedNotice] = useState<NotificationItem | null>(null);

  const filterChips = [
    'সব ধরনের',
    'সরকারি বিজ্ঞপ্তি',
    'ইউনিয়ন সংবাদ',
    'সেবা আপডেট',
    'অন্যান্য'
  ];

  const filteredNotifs = notifications.filter((item) => {
    if (selectedFilter === 'সব ধরনের') return true;
    if (selectedFilter === 'অন্যান্য') {
      return item.category !== 'সরকারি বিজ্ঞপ্তি' &&
             item.category !== 'ইউনিয়ন সংবাদ' &&
             item.category !== 'সেবা আপডেট';
    }
    return item.category === selectedFilter || (selectedFilter === 'সরকারি বিজ্ঞপ্তি' && item.category === 'জরুরি বিজ্ঞপ্তি');
  });

  // Group by date
  const groupedDates = Array.from(new Set(filteredNotifs.map((n) => n.date)));

  const getNoticeIcon = (category: string) => {
    switch (category) {
      case 'জরুরি বিজ্ঞপ্তি':
        return <Megaphone className="w-5 h-5 text-red-600" />;
      case 'ইউনিয়ন সংবাদ':
        return <Newspaper className="w-5 h-5 text-emerald-600" />;
      case 'আবহাওয়া':
        return <CloudRain className="w-5 h-5 text-amber-500" />;
      case 'সরকারি বিজ্ঞপ্তি':
        return <Building className="w-5 h-5 text-purple-600" />;
      case 'সেবা আপডেট':
        return <Droplets className="w-5 h-5 text-sky-600" />;
      default:
        return <Users className="w-5 h-5 text-teal-600" />;
    }
  };

  const getNoticeBadgeStyle = (category: string) => {
    switch (category) {
      case 'জরুরি বিজ্ঞপ্তি':
        return 'bg-red-500 text-white';
      case 'ইউনিয়ন সংবাদ':
        return 'bg-emerald-600 text-white';
      case 'আবহাওয়া':
        return 'bg-amber-400 text-slate-900';
      case 'সরকারি বিজ্ঞপ্তি':
        return 'bg-purple-600 text-white';
      case 'সেবা আপডেট':
        return 'bg-sky-500 text-white';
      default:
        return 'bg-slate-600 text-white';
    }
  };

  return (
    <div className="pb-16 max-w-5xl mx-auto w-full px-2 sm:px-4 pt-2 space-y-4 animate-in fade-in duration-150">
      {/* Header Banner matching screenshot */}
      <div className="bg-emerald-800 text-white p-3.5 rounded-2xl shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold">নোটিফিকেশন</h3>
            <p className="text-[11px] text-emerald-100">
              আপনার এলাকার সর্বশেষ খবর ও গুরুত্বপূর্ণ বার্তা
            </p>
          </div>
        </div>

        <button
          onClick={onMarkAllAsRead}
          className="text-xs bg-white/15 hover:bg-white/25 px-2.5 py-1.5 rounded-xl font-medium flex items-center gap-1 transition"
        >
          <CheckCheck className="w-3.5 h-3.5" />
          <span>সব দেখুন</span>
        </button>
      </div>

      {/* Filter Chips Bar matching screenshot */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
        {filterChips.map((chip) => (
          <button
            key={chip}
            onClick={() => setSelectedFilter(chip)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl font-semibold transition ${
              selectedFilter === chip
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Notifications List Grouped by Date */}
      <div className="space-y-4">
        {groupedDates.map((dateStr) => {
          const notifsForDate = filteredNotifs.filter((n) => n.date === dateStr);

          return (
            <div key={dateStr} className="space-y-2">
              {/* Date Header */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 px-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>{dateStr}</span>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {notifsForDate.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setOpenedNotice(item);
                      onSelectNotice(item);
                    }}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 relative ${
                      item.unread
                        ? 'bg-white border-emerald-300 shadow-xs ring-1 ring-emerald-500/10'
                        : 'bg-white/90 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Category Icon Circle */}
                    <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      {getNoticeIcon(item.category)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${getNoticeBadgeStyle(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {item.time}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    {/* Right indicator: Unread badge count or chevron */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {item.unread ? (
                        <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                          1
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {filteredNotifs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 p-6">
            <Bell className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs text-slate-500">এই বিভাগে কোনো বিজ্ঞপ্তি পাওয়া যায়নি।</p>
          </div>
        )}
      </div>

      {/* Notice Detail Popup Modal */}
      {openedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 border border-slate-200 shadow-2xl relative">
            <button
              onClick={() => setOpenedNotice(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            <span
              className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 ${getNoticeBadgeStyle(
                openedNotice.category
              )}`}
            >
              {openedNotice.category}
            </span>

            <h3 className="text-base font-bold text-slate-900 mb-1">
              {openedNotice.title}
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              {openedNotice.date} • {openedNotice.time}
            </p>

            <div className="p-3.5 bg-slate-50 rounded-2xl text-xs text-slate-700 leading-relaxed border border-slate-100">
              {openedNotice.description}
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                onClick={() => setOpenedNotice(null)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
