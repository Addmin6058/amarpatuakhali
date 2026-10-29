import React from 'react';
import { X, Phone, ShieldAlert, Flame, HeartPulse, LifeBuoy, AlertTriangle } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/patuakhaliData';

interface QuickDialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickDialModal: React.FC<QuickDialModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-red-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold">জরুরি ডায়াল (২৪/৭)</h3>
              <p className="text-[11px] text-red-100">এক ক্লিকেই সরাসরি জরুরি নম্বরে কল করুন</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Numbers */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 overflow-y-auto">
          {EMERGENCY_CONTACTS.map((emg) => (
            <div
              key={emg.id}
              className="bg-slate-50 p-3 rounded-2xl border border-slate-200 flex items-center justify-between hover:border-red-300 transition"
            >
              <div className="min-w-0 flex-1 pr-2">
                <span className="text-[9px] font-bold text-red-700 bg-red-100/70 px-2 py-0.5 rounded-full inline-block">
                  {emg.category}
                </span>
                <h4 className="text-xs font-bold text-slate-900 mt-1">{emg.title}</h4>
                <p className="text-[11px] text-slate-500 truncate">{emg.description}</p>
              </div>

              <a
                href={`tel:${emg.number}`}
                className="shrink-0 px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs active:scale-95 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{emg.number}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500">
          পটুয়াখালী জেলা দুর্যোগ ব্যবস্থাপনা সেল ও বাংলাদেশ জাতীয় জরুরি সেবা
        </div>
      </div>
    </div>
  );
};
