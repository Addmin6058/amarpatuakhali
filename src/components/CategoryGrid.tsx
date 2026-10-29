import React, { useState } from 'react';
import { CATEGORIES } from '../data/patuakhaliData';
import { CategoryItem } from '../types';
import { RealisticCategoryIcon } from './RealisticCategoryIcons';
import { Search, Compass, Sparkles, Filter, Plus, Layers } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
  searchFilter?: string;
  categories?: CategoryItem[];
  onOpenAddCategory?: () => void;
  isAdminAuthenticated?: boolean;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  searchFilter = '',
  categories = CATEGORIES,
  onOpenAddCategory,
  isAdminAuthenticated = false
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const groups = [
    { id: 'all', label: 'সব নাগরিক সেবা' },
    { id: 'health', label: 'স্বাস্থ্য ও চিকিৎসা', catIds: ['doctor', 'hospital'] },
    { id: 'transport', label: 'যাতায়াত ও পর্যটন', catIds: ['bus', 'launch', 'train', 'tourist'] },
    { id: 'emergency', label: 'জরুরি ও নিরাপত্তা', catIds: ['emergency', 'police', 'fire-service', 'fire'] },
    { id: 'utility', label: 'ইউটিলিটি ও সরকার', catIds: ['electric', 'water', 'gas', 'fuel', 'bank', 'land', 'gov', 'courier', 'market', 'agriculture', 'fishery', 'electricity'] },
    { id: 'info', label: 'তথ্য, শিক্ষা ও অন্যান্য', catIds: ['school', 'education', 'job', 'complaint', 'news', 'info', 'event', 'weather', 'map', 'gallery', 'settings'] }
  ];

  const filteredCategories = categories.filter((cat) => {
    // Search query filter
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const matchSearch =
        cat.name.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q) ||
        (cat.details && cat.details.toLowerCase().includes(q));
      if (!matchSearch) return false;
    }

    // Group filter
    if (selectedGroup !== 'all') {
      const currentGroup = groups.find((g) => g.id === selectedGroup);
      const isCustomInGroup = cat.group === selectedGroup;
      if (currentGroup?.catIds && !currentGroup.catIds.includes(cat.id) && !isCustomInGroup) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="w-full pb-8">
      {/* Section Header with Category Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-5 bg-emerald-600 rounded-full inline-block"></span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight flex items-center gap-2">
                <span>সকল ডিজিটাল নাগরিক সেবা ডিরেক্টরি</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {categories.length}টি
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                প্রয়োজনীয় সেবা নির্বাচনে ক্লিক করুন
              </p>
            </div>
          </div>

          {/* Quick Add Category Button (if admin is authenticated or callback passed) */}
          {onOpenAddCategory && (
            <button
              onClick={onOpenAddCategory}
              className="sm:hidden px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-xs transition active:scale-95 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>নতুন ক্যাটাগরি</span>
            </button>
          )}
        </div>

        {/* Category Group Filter Tabs & Add Category Button */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {groups.map((group) => {
            const isActive = selectedGroup === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-emerald-800 border border-slate-200'
                }`}
              >
                {group.label}
              </button>
            );
          })}

          {/* Desktop Add Category Trigger */}
          {onOpenAddCategory && (
            <button
              onClick={onOpenAddCategory}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold shadow-xs transition active:scale-95 shrink-0 cursor-pointer"
              title="এডমিন প্যানেলে নতুন সেবা ক্যাটাগরি যোগ করুন"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>ক্যাটাগরি এড</span>
            </button>
          )}
        </div>
      </div>

      {/* Responsive Grid: 4 cols on mobile, 5 on small tablet, 6 on tablet, 8 on desktop, 10 on wide */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-3 lg:gap-3.5">
        {filteredCategories.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectCategory(item.id)}
            className="group relative flex flex-col items-center justify-between p-2 sm:p-2.5 bg-white rounded-2xl border border-sky-100 shadow-[0_2px_6px_rgba(0,100,180,0.04)] hover:shadow-lg hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 text-center h-[96px] sm:h-[106px] md:h-[116px] lg:h-[124px] cursor-pointer"
          >
            {/* Optional Small Tag/Badge */}
            {item.badge && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8.5px] sm:text-[9px] font-bold px-1.5 py-0.2 rounded-full shadow-xs ring-2 ring-white z-10 scale-90">
                {item.badge}
              </span>
            )}

            {/* Realistic Picture Icon with smooth hover animation */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-200 shrink-0">
              <RealisticCategoryIcon
                categoryId={item.id}
                className="w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 md:w-10 md:h-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
              />
            </div>

            {/* Label - Consistent 2-line height and alignment */}
            <span className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight line-clamp-2 group-hover:text-emerald-700 transition-colors w-full flex items-center justify-center px-0.5">
              {item.name}
            </span>
          </button>
        ))}

        {/* Add Category Quick Card at end of grid */}
        {onOpenAddCategory && (
          <button
            onClick={onOpenAddCategory}
            className="group relative flex flex-col items-center justify-center p-2 bg-emerald-50/60 hover:bg-emerald-100/80 rounded-2xl border-2 border-dashed border-emerald-300 hover:border-emerald-500 transition-all duration-200 active:scale-95 text-center h-[96px] sm:h-[106px] md:h-[116px] lg:h-[124px] cursor-pointer"
            title="নতুন ক্যাটাগরি যোগ করুন"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-600 group-hover:bg-emerald-700 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <Plus className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-[10.5px] sm:text-xs font-bold text-emerald-800 mt-1 leading-tight">
              + নতুন সেবা
            </span>
          </button>
        )}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-200 p-8 my-6">
          <p className="text-slate-600 text-sm font-medium">
            "{searchFilter}" এর সাথে মিলে এমন কোনো সেবা খুঁজে পাওয়া যায়নি।
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setSelectedGroup('all')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
            >
              সব সেবা ফিল্টার রিসেট
            </button>
            {onOpenAddCategory && (
              <button
                onClick={onOpenAddCategory}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>নতুন ক্যাটাগরি তৈরি করুন</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Website View: District Interactive Map & Quick Dial Banner Card */}
      <div className="mt-6 p-4 sm:p-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-emerald-950">
              পটুয়াখালী জেলার ভৌগোলিক মানচিত্র ও ৮টি উপজেলা পরিচিতি
            </h4>
            <p className="text-xs text-emerald-800/80">
              সদর, বাউফল, দুমকি, গলাচিপা, দশমিনা, কলাপাড়া, মির্জাগঞ্জ ও রাঙ্গাবালী উপজেলার সার্বিক তথ্য
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectCategory('map')}
          className="shrink-0 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <span>মানচিত্র দেখুন</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};
