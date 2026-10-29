import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  MessageSquare,
  MapPin,
  Send,
  ShieldCheck,
  HeartHandshake,
  CheckCircle,
  User,
  ExternalLink
} from 'lucide-react';

interface ContactViewProps {
  onOpenComplaintModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenComplaintModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after some time or keep confirmation
  };

  return (
    <div className="pb-16 max-w-5xl mx-auto w-full px-2 sm:px-4 pt-2 space-y-5 animate-in fade-in duration-150">
      {/* Top Graphic Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-sky-900 text-white p-5 sm:p-7 shadow-md">
        <div className="flex items-center justify-between">
          <div className="z-10 max-w-[75%]">
            <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-300 block mb-1">
              যোগাযোগ ও সহায়তা
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
              আমার পটুয়াখালী
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium mt-1">
              একটি ডিজিটাল সিটিজেন প্ল্যাটফর্ম
            </p>
            <p className="text-xs text-slate-200 mt-1 max-w-lg">
              আমাদের ভূমি, নদী, মানুষ, সংস্কৃতি ও সম্ভাবনার দুয়ার — পটুয়াখালীর যেকোনো সেবায় আমরা আপনার পাশে আছি।
            </p>
          </div>

          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-xs flex items-center justify-center p-2 border border-white/20">
            <MapPin className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-300 drop-shadow-md" />
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="px-1">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span>যোগাযোগ ও সহায়তা মাধ্যম</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের মাধ্যমগুলো ব্যবহার করুন
        </p>
      </div>

      {/* 4 Contact Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Phone Card */}
        <a
          href="tel:+8801712345678"
          className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-400 hover:shadow-md transition group text-center flex flex-col items-center justify-center"
        >
          <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition mb-2">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold text-slate-900">ফোন</h4>
          <p className="text-xs font-semibold text-emerald-700 mt-0.5">
            +880 1712 345678
          </p>
          <span className="text-[10px] text-slate-400 mt-0.5">(সকাল ৯টা – রাত ৯টা)</span>
        </a>

        {/* Email Card */}
        <a
          href="mailto:info@amarpatuakhali.com"
          className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition group text-center flex flex-col items-center justify-center"
        >
          <div className="w-11 h-11 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition mb-2">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold text-slate-900">ইমেইল</h4>
          <p className="text-xs font-semibold text-sky-700 mt-0.5 break-all">
            info@amarpatuakhali.com
          </p>
          <span className="text-[10px] text-slate-400 mt-0.5">(২৪/৭)</span>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/8801712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:border-green-400 hover:shadow-md transition group text-center flex flex-col items-center justify-center"
        >
          <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition mb-2">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold text-slate-900">হোয়াটসঅ্যাপ</h4>
          <p className="text-xs font-semibold text-emerald-800 mt-0.5">
            +880 1712 345678
          </p>
          <span className="text-[10px] text-slate-400 mt-0.5">(দ্রুত যোগাযোগ)</span>
        </a>

        {/* Feedback / Complaint Card */}
        <button
          onClick={onOpenComplaintModal}
          className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs hover:border-purple-400 hover:shadow-md transition group text-center flex flex-col items-center justify-center"
        >
          <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition mb-2">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold text-slate-900">মতামত / অভিযোগ</h4>
          <p className="text-xs font-semibold text-purple-700 mt-0.5">
            এখানে ক্লিক করুন
          </p>
          <span className="text-[10px] text-slate-400 mt-0.5">(ফর্ম পূরণ করুন)</span>
        </button>
      </div>

      {/* Address Card matching screenshot */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
        <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>আমাদের ঠিকানা</span>
        </h4>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
            <div>
              <p className="text-xs font-bold text-slate-800">
                আমখোলা ইউনিয়ন পরিষদ সংলগ্ন
              </p>
              <p className="text-[11px] text-slate-500">
                গলাচিপা থানা, পটুয়াখালী, বাংলাদেশ
              </p>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
            হেডকোয়ার্টার
          </span>
        </div>
      </div>

      {/* Message Sending Form matching screenshot */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
          <Send className="w-4 h-4 text-emerald-600" />
          <span>বার্তা পাঠান</span>
        </h4>
        <p className="text-[11px] text-slate-500 mt-0.5 mb-3">
          আপনার মূল্যবান মতামত, পরামর্শ বা যে কোনো প্রশ্ন আমাদের জানান।
        </p>

        {submitted ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
            <h5 className="font-bold text-xs text-emerald-900">
              আপনার বার্তা সফলভাবে পৌঁছানো হয়েছে!
            </h5>
            <p className="text-[11px] text-emerald-700">
              ধন্যবাদ আপনার মতামত জানানোর জন্য। আমাদের প্রতিনিধি শীঘ্রই যোগাযোগ করবেন।
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', email: '', message: '' });
              }}
              className="mt-2 text-xs font-bold text-emerald-800 underline"
            >
              নতুন বার্তা পাঠান
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
              <input
                required
                type="text"
                placeholder="আপনার নাম *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <input
                required
                type="tel"
                placeholder="মোবাইল নম্বর *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="ইমেইল (ঐচ্ছিক)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <textarea
                required
                rows={3}
                placeholder="আপনার বার্তা লিখুন... *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>বার্তা পাঠান</span>
            </button>
          </form>
        )}
      </div>

      {/* Footer reassurance badges matching screenshot */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 px-2 py-1">
        <span className="flex items-center gap-1 text-emerald-800 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>আপনার তথ্য নিরাপদ রয়েছে</span>
        </span>
        <span className="flex items-center gap-1 text-emerald-800 font-medium">
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
          <span>আমরা সবসময় আপনার পাশে</span>
        </span>
      </div>
    </div>
  );
};
