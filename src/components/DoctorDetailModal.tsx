import React, { useState } from 'react';
import {
  X,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Building,
  ShieldCheck,
  CheckCircle,
  Share2,
  Copy,
  User,
  HeartPulse,
  Award,
  Stethoscope,
  ChevronRight,
  Send,
  Sparkles,
  Info
} from 'lucide-react';
import { Doctor } from '../types';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({ doctor, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'serial'>('details');
  const [copied, setCopied] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    patientName: '',
    patientPhone: '',
    patientAge: '',
    preferredDate: new Date().toISOString().split('T')[0],
    patientType: 'নতুন রোগী',
    symptoms: ''
  });
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);

  if (!doctor) return null;

  const handleCopyChamberInfo = () => {
    const text = `${doctor.name}
বিশেষজ্ঞ: ${doctor.specialty}
ডিগ্রি: ${doctor.degree}
চেম্বার: ${doctor.chamber} (${doctor.roomNo || ''})
ঠিকানা: ${doctor.chamberAddress || doctor.upazila}
সময়: ${doctor.visitingHours} (${doctor.availableDays})
ফি: ${doctor.fee}
সিরিয়াল নম্বর: ${doctor.serialPhone || doctor.phone}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${doctor.name} - বিশেষজ্ঞ চিকিৎসক প্রোফাইল`,
        text: `${doctor.name} (${doctor.specialty}), চেম্বার: ${doctor.chamber}, সময়: ${doctor.visitingHours}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      handleCopyChamberInfo();
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.patientName || !bookingData.patientPhone) return;

    // Generate random serial token number
    const randomSerial = Math.floor(Math.random() * 25) + 5;
    const token = `PTK-${doctor.upazila.substring(0, 2)}-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedToken(`${token} (সিরিয়াল নং: #${randomSerial})`);
    setBookingSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 text-white p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-white/10 backdrop-blur-md text-emerald-200">
                <Stethoscope className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>চিকিৎসক প্রোফাইল ও চেম্বার তথ্য</span>
                  <span className="text-[10px] bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 px-2 py-0.5 rounded-full font-semibold">
                    ভেরিফাইড
                  </span>
                </h3>
                <p className="text-[11px] text-emerald-100/80">পটুয়াখালী জেলা ডিজিটাল স্বাস্থ্য সেবা</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleShare}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition"
                title="শেয়ার করুন"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyChamberInfo}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition"
                title="তথ্য কপি করুন"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition ml-1"
                title="বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs (Details vs Serial Booking) */}
          <div className="flex mt-3 bg-black/20 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('details')}
              className={`flex-1 py-1.5 rounded-lg transition flex items-center justify-center gap-1.5 ${
                activeTab === 'details'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>বিস্তারিত তথ্য</span>
            </button>
            <button
              onClick={() => setActiveTab('serial')}
              className={`flex-1 py-1.5 rounded-lg transition flex items-center justify-center gap-1.5 ${
                activeTab === 'serial'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>সিরিয়াল বুকিং</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-4 bg-slate-50 text-slate-800">
          {copied && (
            <div className="p-2.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>ডাক্তারের চেম্বার ও সিরিয়াল তথ্য ক্লিপবোর্ডে কপি হয়েছে!</span>
            </div>
          )}

          {activeTab === 'details' ? (
            <>
              {/* Doctor Main Profile Card */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-100 to-cyan-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0 shadow-xs">
                    <Stethoscope className="w-8 h-8" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        {doctor.name}
                      </h2>
                      <span title="বিএমডিসি অনুমোদিত" className="shrink-0 text-emerald-600">
                        <ShieldCheck className="w-4 h-4" />
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {doctor.specialty}
                    </p>

                    <p className="text-[11px] text-slate-600 font-medium mt-1 leading-snug">
                      {doctor.degree}
                    </p>

                    {doctor.designation && (
                      <p className="text-[11px] text-blue-700 font-semibold mt-1 bg-blue-50/80 px-2 py-0.5 rounded-md inline-block">
                        {doctor.designation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Badges / Quick stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-xs">
                  {doctor.bmdcReg && (
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">বিএমডিসি রেজিঃ</span>
                      <strong className="text-slate-800 font-mono text-[11px]">{doctor.bmdcReg}</strong>
                    </div>
                  )}

                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">উপজেলা</span>
                    <strong className="text-slate-800 text-[11px]">{doctor.upazila}</strong>
                  </div>

                  {doctor.experience && (
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-slate-400 block">অভিজ্ঞতা</span>
                      <strong className="text-emerald-700 text-[11px]">{doctor.experience}</strong>
                    </div>
                  )}
                </div>

                {doctor.bio && (
                  <p className="text-xs text-slate-600 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/70 leading-relaxed">
                    {doctor.bio}
                  </p>
                )}
              </div>

              {/* Chamber & Schedule Card */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-emerald-900 font-bold text-xs uppercase tracking-wide">
                  <Building className="w-4 h-4 text-emerald-600" />
                  <span>চেম্বার ও রোগী দেখার সময়সূচি</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 text-sm">{doctor.chamber}</strong>
                      {doctor.roomNo && (
                        <span className="inline-block mt-0.5 text-[11px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md">
                          {doctor.roomNo}
                        </span>
                      )}
                      {doctor.chamberAddress && (
                        <p className="text-xs text-slate-500 mt-1">{doctor.chamberAddress}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">রোগী দেখার সময়</span>
                        <strong className="text-slate-800 text-xs">{doctor.visitingHours}</strong>
                        <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
                          {doctor.availableDays}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">রিপোর্ট দেখানোর সময়</span>
                        <strong className="text-slate-800 text-xs">
                          {doctor.reportTime || 'সন্ধ্যা ৬:০০ - ৭:০০'}
                        </strong>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          {doctor.availableDays}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Fees & Rules */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-emerald-900 font-bold text-xs uppercase tracking-wide">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>পরামর্শ ফি ও নিয়মাবলী</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                    <span className="text-[10px] text-blue-600 font-semibold block">নতুন রোগী ভিজিট</span>
                    <strong className="text-blue-900 font-extrabold text-base block mt-0.5">
                      {doctor.fee}
                    </strong>
                    <span className="text-[10px] text-slate-500">প্রথম সাক্ষাতের জন্য</span>
                  </div>

                  <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                    <span className="text-[10px] text-emerald-700 font-semibold block">পুরাতন / রিপোর্ট ফি</span>
                    <strong className="text-emerald-900 font-extrabold text-base block mt-0.5">
                      {doctor.followUpFee || '৳ ৩০০'}
                    </strong>
                    <span className="text-[10px] text-slate-500">নির্ধারিত মেয়াদের মধ্যে</span>
                  </div>
                </div>
              </div>

              {/* Specialized Services Provided */}
              {doctor.services && doctor.services.length > 0 && (
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-emerald-900 font-bold text-xs uppercase tracking-wide">
                    <HeartPulse className="w-4 h-4 text-emerald-600" />
                    <span>চিকিৎসাসেবা ও বিশেষ ক্ষেত্রসমূহ</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-100 text-xs text-slate-700 transition"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-medium text-[11px] leading-tight">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Booking & Serial Call Bar */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 rounded-2xl text-white shadow-md space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm">চেম্বার সিরিয়াল ও সরাসরি যোগাযোগ</h4>
                    <p className="text-[11px] text-emerald-100">
                      সরাসরি ফোন করুন অথবা অ্যাপ থেকে ফ্রি সিরিয়াল রিকোয়েস্ট পাঠান
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${doctor.serialPhone || doctor.phone}`}
                    className="flex-1 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>সিরিয়াল হটলাইন: {doctor.serialPhone || doctor.phone}</span>
                  </a>

                  <button
                    onClick={() => setActiveTab('serial')}
                    className="flex-1 py-2.5 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-300/40 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95"
                  >
                    <Calendar className="w-4 h-4 text-amber-300" />
                    <span>অ্যাপে সিরিয়াল বুক করুন</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* ================= SERIAL BOOKING FORM ================= */
            <div className="space-y-4">
              {bookingSubmitted && generatedToken ? (
                <div className="bg-white p-5 rounded-2xl border-2 border-emerald-400 shadow-md text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">সিরিয়াল অনুরোধ সফল হয়েছে!</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      চেম্বার সহকারী থেকে আপনার প্রদত্ত মোবাইল নম্বরে নিশ্চিতকরণ কল করা হবে।
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
                    <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider block">
                      ডিজিটাল সিরিয়াল টোকেন
                    </span>
                    <strong className="text-base font-mono font-bold text-emerald-900 block">
                      {generatedToken}
                    </strong>
                    <div className="text-[11px] text-slate-600 pt-1 border-t border-emerald-200/60 flex items-center justify-between">
                      <span>রোগীর নাম: {bookingData.patientName}</span>
                      <span>তারিখ: {bookingData.preferredDate}</span>
                    </div>
                  </div>

                  <div className="text-left text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-slate-600">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <Building className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{doctor.chamber}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{doctor.chamberAddress || doctor.upazila}</p>
                    <p className="text-[11px] text-emerald-700 font-medium">
                      সময়: {doctor.visitingHours} ({doctor.availableDays})
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => {
                        const tokenInfo = `রোগী: ${bookingData.patientName}\nডাক্তার: ${doctor.name}\nটোকেন: ${generatedToken}\nচেম্বার: ${doctor.chamber}\nতারিখ: ${bookingData.preferredDate}`;
                        navigator.clipboard.writeText(tokenInfo);
                        alert('সিরিয়াল টোকেন তথ্য কপি করা হয়েছে!');
                      }}
                      className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>টোকেন কপি করুন</span>
                    </button>

                    <button
                      onClick={() => {
                        setBookingSubmitted(false);
                        setActiveTab('details');
                      }}
                      className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition"
                    >
                      সম্পন্ন
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3.5">
                  <div className="border-b border-slate-100 pb-2">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>{doctor.name} এর সিরিয়াল ফর্ম</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      চেম্বার: {doctor.chamber} ({doctor.visitingHours})
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        রোগীর পূর্ণ নাম <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingData.patientName}
                        onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                        placeholder="যেমন: মোঃ আবুল কালাম"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          মোবাইল নম্বর <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingData.patientPhone}
                          onChange={(e) => setBookingData({ ...bookingData, patientPhone: e.target.value })}
                          placeholder="017XXXXXXXX"
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">রোগীর বয়স</label>
                        <input
                          type="text"
                          value={bookingData.patientAge}
                          onChange={(e) => setBookingData({ ...bookingData, patientAge: e.target.value })}
                          placeholder="যেমন: ৩৫ বছর"
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">রোগীর ধরণ</label>
                        <select
                          value={bookingData.patientType}
                          onChange={(e) => setBookingData({ ...bookingData, patientType: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        >
                          <option value="নতুন রোগী">নতুন রোগী ({doctor.fee})</option>
                          <option value="পুরাতন রোগী">পুরাতন / রিপোর্ট ({doctor.followUpFee || '৳ ৩০০'})</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">কাঙ্ক্ষিত তারিখ</label>
                        <input
                          type="date"
                          value={bookingData.preferredDate}
                          onChange={(e) => setBookingData({ ...bookingData, preferredDate: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        সমস্যার সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)
                      </label>
                      <textarea
                        rows={2}
                        value={bookingData.symptoms}
                        onChange={(e) => setBookingData({ ...bookingData, symptoms: e.target.value })}
                        placeholder="যেমন: গত ৩ দিন ধরে জ্বর ও কাশি..."
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-800 flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      সিরিয়াল বুকিংয়ের কোনো অগ্রিম ফি নেই। চেম্বারে উপস্থিত হয়ে ডাক্তারের নির্ধারিত ভিজিট প্রদান করুন।
                    </span>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                    >
                      বাতিল
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>সিরিয়াল নিশ্চিত করুন</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
