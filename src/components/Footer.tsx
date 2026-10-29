import React from 'react';
import { Phone, Shield, Heart, MapPin, ExternalLink, Mail, Clock, Compass } from 'lucide-react';
import { UPAZILAS, Upazila } from '../data/patuakhaliData';

interface FooterProps {
  onOpenCategory: (categoryId: string) => void;
  onSelectUpazila: (upazila: Upazila) => void;
  onOpenMap: () => void;
  onOpenQuickDial: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCategory,
  onSelectUpazila,
  onOpenMap,
  onOpenQuickDial,
  onOpenAdmin,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12 border-t border-slate-800">
      {/* 24/7 Emergency Numbers Banner */}
      <div className="bg-emerald-900/60 border-b border-emerald-800/60 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-emerald-300 font-semibold">
            <Phone className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>২৪/৭ জেলা জরুরি হটলাইন:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono font-bold text-white text-xs sm:text-sm">
            <a
              href="tel:999"
              className="px-2.5 py-1 bg-red-600 hover:bg-red-500 rounded-md transition flex items-center gap-1.5 shadow-xs"
            >
              <span className="text-[10px] font-sans font-normal text-red-100">জরুরি</span>
              <span>৯৯৯</span>
            </a>
            <a
              href="tel:333"
              className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 rounded-md transition flex items-center gap-1.5 shadow-xs"
            >
              <span className="text-[10px] font-sans font-normal text-amber-100">সরকারি সেবা</span>
              <span>৩৩৩</span>
            </a>
            <a
              href="tel:16263"
              className="px-2.5 py-1 bg-teal-600 hover:bg-teal-500 rounded-md transition flex items-center gap-1.5 shadow-xs"
            >
              <span className="text-[10px] font-sans font-normal text-teal-100">স্বাস্থ্য বাতায়ন</span>
              <span>১৬২৬৩</span>
            </a>
            <a
              href="tel:109"
              className="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 rounded-md transition flex items-center gap-1.5 shadow-xs"
            >
              <span className="text-[10px] font-sans font-normal text-purple-100">নারী ও শিশু</span>
              <span>১০৯</span>
            </a>
            <button
              onClick={onOpenQuickDial}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-600/40 rounded-md transition font-sans text-xs font-semibold"
            >
              সকল হটলাইন নম্বর &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-serif font-black text-xl shadow-md">
                প
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span className="text-emerald-400 font-serif">Amar</span>
                  <span className="text-cyan-300 font-serif">Patuakhali</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-mono font-medium not-italic">
                    ওয়েব পোর্টাল
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-medium">আমার এলাকা, আমার পরিচয়</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              পটুয়াখালী জেলার সর্বস্তরের নাগরিকদের জন্য ডিজিটাল প্ল্যাটফর্ম। বিশেষজ্ঞ চিকিৎসক চেম্বার, হাসপাতাল, বাস ও লঞ্চের সময়সূচী, পর্যটন আকর্ষণ, জরুরি পুলিশ ও ফায়ার সার্ভিসসহ সকল নাগরিক তথ্য এক ক্লিকেই।
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={onOpenMap}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold rounded-lg border border-slate-700 transition"
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>জেলা মানচিত্র</span>
              </button>
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-lg border border-slate-700 transition"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>অ্যাডমিন প্যানেল</span>
              </button>
            </div>
          </div>

          {/* Col 2: নাগরিক সেবাসমূহ */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              নাগরিক সেবাসমূহ
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onOpenCategory('doctor')}
                  className="hover:text-emerald-400 transition"
                >
                  বিশেষজ্ঞ চিকিৎসক ও সিরিয়াল
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCategory('hospital')}
                  className="hover:text-emerald-400 transition"
                >
                  হাসপাতাল ও ডায়াগনস্টিক
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCategory('bus')}
                  className="hover:text-emerald-400 transition"
                >
                  বাসের সময়সূচী ও ভাড়া
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCategory('launch')}
                  className="hover:text-emerald-400 transition"
                >
                  লঞ্চের সময়সূচী ও রুট
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCategory('tourist')}
                  className="hover:text-emerald-400 transition"
                >
                  দর্শনীয় স্থান ও কুয়াকাটা
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCategory('police')}
                  className="hover:text-emerald-400 transition"
                >
                  পুলিশ ও নিরাপত্তা
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCategory('fire-service')}
                  className="hover:text-emerald-400 transition"
                >
                  ফায়ার সার্ভিস স্টেশন
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: ৮টি উপজেলাসমূহ */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              উপজেলাসমূহ
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {UPAZILAS.filter((u) => u !== 'সকল এলাকা').map((upz) => (
                <li key={upz}>
                  <button
                    onClick={() => onSelectUpazila(upz)}
                    className="hover:text-cyan-400 transition flex items-center gap-1.5"
                  >
                    <span className="text-slate-500 text-[10px]">&bull;</span>
                    <span>{upz}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: গুরুত্বপূর্ণ সরকারি লিংক */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              গুরুত্বপূর্ণ লিংক
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://bangladesh.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition flex items-center gap-1.5"
                >
                  <span>বাংলাদেশ জাতীয় বাতায়ন</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://patuakhali.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition flex items-center gap-1.5"
                >
                  <span>জেলা প্রশাসন, পটুয়াখালী</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://eporcha.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition flex items-center gap-1.5"
                >
                  <span>অনলাইন ই-পর্চা সেবা</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://bdris.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition flex items-center gap-1.5"
                >
                  <span>জন্ম ও মৃত্যু নিবন্ধন</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://police.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition flex items-center gap-1.5"
                >
                  <span>বাংলাদেশ পুলিশ</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenCategory('complaint')}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition"
                >
                  নাগরিক অভিযোগ ও আবেদন &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Amar Patuakhali Digital Portal. সর্বস্বত্ব সংরক্ষিত।</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>পটুয়াখালী জেলা নাগরিক সেবা সংযোগ</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              পটুয়াখালীবাসীর সেবায় নিবেদিত
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
