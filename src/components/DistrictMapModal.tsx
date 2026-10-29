import React, { useState } from 'react';
import { X, MapPin, Compass, Navigation, Waves, Trees, Anchor } from 'lucide-react';
import { UPAZILAS, Upazila } from '../data/patuakhaliData';

interface DistrictMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUpazila: (upz: Upazila) => void;
}

export const DistrictMapModal: React.FC<DistrictMapModalProps> = ({
  isOpen,
  onClose,
  onSelectUpazila
}) => {
  const [activeArea, setActiveArea] = useState<string>('কুয়াকাটা');

  if (!isOpen) return null;

  const upazilaInfo = [
    { name: 'পটুয়াখালী সদর', dist: '০ কিমি', specialty: 'জেলা প্রশাসন কার্যালয়, ২৫০ শয্যা জেনারেল হাসপাতাল, লোহালিয়া নদী বন্দর' },
    { name: 'কলাপাড়া (কুয়াকাটা)', dist: '৭০ কিমি', specialty: 'সূর্যোদয়-সূর্যাস্তের কুয়াকাটা সৈকত, পায়রা গভীর সমুদ্র বন্দর, রাখাইন পল্লী' },
    { name: 'গলাচিপা', dist: '৩৫ কিমি', specialty: 'আমখোলা ইউনিয়ন, তরমুজের বিশাল আবাদ, আগুনমুখা নদী ও উলানিয়া জমিদার বাড়ি' },
    { name: 'বাউফল', dist: '৩৫ কিমি', specialty: 'ঐতিহ্যবাহী মৃৎশিল্প ও কাঁসার বাসন, বাউফল ডিগ্রি কলেজ, কারখানা নদী' },
    { name: 'মির্জাগঞ্জ', dist: '১৮ কিমি', specialty: 'হযরত ইয়ার উদ্দিন খলিফা (র:) মাজার শরীফ, পায়রা নদী তীর' },
    { name: 'দশমিনা', dist: '৪৫ কিমি', specialty: 'তেঁতুলিয়া নদী তীরবর্তী উর্বর চর ও মহিষের বাথান, মিষ্টি দই' },
    { name: 'দুমকি', dist: '১২ কিমি', specialty: 'পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (PSTU), লেবুখালী পায়রা সেতু' },
    { name: 'রাঙ্গাবালী', dist: '৮০ কিমি', specialty: 'বঙ্গোপসাগরের দ্বীপ উপজেলা, সোনার চর বন্যপ্রাণী অভয়ারণ্য ও নির্জন সৈকত' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-emerald-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Compass className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-base font-bold">পটুয়াখালী জেলা মানচিত্র ও উপজেলা</h3>
              <p className="text-[11px] text-emerald-100">৮টি উপজেলা ও উপকূলীয় সমুদ্র অঞ্চলের বিবরণ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Simulated Map Diagram */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <div className="relative h-44 w-full bg-gradient-to-b from-emerald-100 via-teal-100 to-sky-200 rounded-2xl border border-teal-200 overflow-hidden flex items-center justify-center p-3">
            {/* Water and land contours */}
            <div className="absolute bottom-0 inset-x-0 h-12 bg-sky-400/30 flex items-center justify-center text-[11px] font-bold text-sky-800">
              <Waves className="w-4 h-4 mr-1 text-sky-600 animate-pulse" />
              <span>বঙ্গোপসাগর (Bay of Bengal)</span>
            </div>

            {/* Simulated Nodes for Patuakhali points */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold shadow-md ring-2 ring-white">প</span>
              <span className="text-[10px] font-bold text-emerald-950 bg-white/90 px-1.5 rounded-sm shadow-xs mt-0.5">পটুয়াখালী সদর</span>
            </div>

            <div className="absolute top-12 left-1/4 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs"></span>
              <span className="text-[9px] font-semibold text-slate-800">মির্জাগঞ্জ</span>
            </div>

            <div className="absolute top-10 right-1/4 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs"></span>
              <span className="text-[9px] font-semibold text-slate-800">বাউফল</span>
            </div>

            <div className="absolute top-20 right-1/3 flex flex-col items-center">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[8px] font-bold ring-2 ring-white">গ</span>
              <span className="text-[10px] font-bold text-slate-900 bg-white/90 px-1 rounded-sm mt-0.5">গলাচিপা</span>
            </div>

            <div className="absolute bottom-16 left-1/3 flex flex-col items-center">
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[8px] font-bold ring-2 ring-white">কু</span>
              <span className="text-[10px] font-bold text-cyan-950 bg-cyan-50 px-1 rounded-sm shadow-xs mt-0.5">কুয়াকাটা সৈকত</span>
            </div>

            <div className="absolute bottom-14 right-1/4 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-teal-600 shadow-xs"></span>
              <span className="text-[9px] font-semibold text-slate-800 bg-white/80 px-1 rounded-sm">রাঙ্গাবালী (সোনার চর)</span>
            </div>
          </div>
        </div>

        {/* Upazila Cards Grid */}
        <div className="p-4 space-y-2.5 overflow-y-auto flex-1">
          <h4 className="text-xs font-bold text-slate-800">উপজেলা ভিত্তিক দূরত্ব ও বিশেষত্ব:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {upazilaInfo.map((info) => (
              <div
                key={info.name}
                className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition flex items-start justify-between gap-2"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <h5 className="font-bold text-xs text-slate-900">{info.name}</h5>
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded-md">
                      দূরত্ব: {info.dist}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 pl-6 leading-relaxed">
                    {info.specialty}
                  </p>
                </div>

                <button
                  onClick={() => {
                    onSelectUpazila(info.name as Upazila);
                    onClose();
                  }}
                  className="shrink-0 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-lg border border-emerald-200 transition"
                >
                  বাছাই করুন
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 text-[11px]">মোট আয়তন: ৩,২২০.১৫ বর্গকিলোমিটার</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-emerald-700 text-white rounded-xl font-semibold hover:bg-emerald-800 text-xs"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
