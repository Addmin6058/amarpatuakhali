import React, { useState } from 'react';
import {
  X,
  Phone,
  Search,
  MapPin,
  Clock,
  Sparkles,
  Bookmark,
  Share2,
  ExternalLink,
  Calendar,
  AlertTriangle,
  Send,
  CheckCircle,
  Copy,
  ChevronRight,
  ShieldCheck,
  Building,
  Navigation,
  Maximize2,
  Eye,
  Compass,
  Camera
} from 'lucide-react';
import {
  CATEGORIES,
  DOCTORS,
  HOSPITALS,
  BUS_SCHEDULES,
  LAUNCH_SCHEDULES,
  TOURIST_PLACES,
  EMERGENCY_CONTACTS,
  UPAZILAS,
  Upazila,
  DISTRICT_INFO
} from '../data/patuakhaliData';
import { IconRenderer } from './IconRenderer';
import { RealisticCategoryIcon } from './RealisticCategoryIcons';
import {
  Doctor,
  Hospital,
  BusSchedule,
  LaunchSchedule,
  TouristPlace,
  EmergencyContact,
  CategoryItem
} from '../types';
import { DoctorDetailModal } from './DoctorDetailModal';

interface CategoryDetailModalProps {
  categoryId: string | null;
  onClose: () => void;
  selectedUpazila: Upazila;
  onOpenQuickDial: () => void;
  isAdminAuthenticated?: boolean;
  onOpenAdmin?: () => void;
  categories?: CategoryItem[];
  doctors?: Doctor[];
  hospitals?: Hospital[];
  busSchedules?: BusSchedule[];
  launchSchedules?: LaunchSchedule[];
  touristPlaces?: TouristPlace[];
  emergencyContacts?: EmergencyContact[];
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  categoryId,
  onClose,
  selectedUpazila: defaultUpazila,
  onOpenQuickDial,
  isAdminAuthenticated = false,
  onOpenAdmin,
  categories = CATEGORIES,
  doctors = DOCTORS,
  hospitals = HOSPITALS,
  busSchedules = BUS_SCHEDULES,
  launchSchedules = LAUNCH_SCHEDULES,
  touristPlaces = TOURIST_PLACES,
  emergencyContacts = EMERGENCY_CONTACTS
}) => {
  const [activeUpazila, setActiveUpazila] = useState<Upazila>(defaultUpazila);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [complaintSuccess, setComplaintSuccess] = useState(false);
  const [appointmentSuccess, setAppointmentSuccess] = useState<string | null>(null);
  const [selectedDoctorForDetails, setSelectedDoctorForDetails] = useState<Doctor | null>(null);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState<{
    image: string;
    name: string;
    location: string;
    highlight: string;
  } | null>(null);

  // Form states for complaint
  const [complaintForm, setComplaintForm] = useState({
    name: '',
    phone: '',
    upazila: 'পটুয়াখালী সদর',
    subject: '',
    details: ''
  });

  if (!categoryId) return null;

  const currentCategory = categories.find((c) => c.id === categoryId) || CATEGORIES.find((c) => c.id === categoryId);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShareCategory = () => {
    if (navigator.share) {
      navigator.share({
        title: `${currentCategory?.name} - আমার পটুয়াখালী`,
        text: `পটুয়াখালী জেলার ${currentCategory?.name} সংক্রান্ত তথ্য ও যোগাযোগের মাধ্যম।`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('লিংক কপি করা হয়েছে!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl lg:max-w-5xl bg-slate-50 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className={`p-4 bg-gradient-to-r ${currentCategory?.color || 'from-emerald-700 to-teal-800'} text-white relative`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-12 rounded-2xl bg-white/90 p-1 flex items-center justify-center shadow-xs">
                <RealisticCategoryIcon categoryId={categoryId} className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight flex items-center gap-2">
                  <span>{currentCategory?.name}</span>
                  {currentCategory?.badge && (
                    <span className="text-[10px] bg-red-500 text-white font-semibold px-2 py-0.5 rounded-full">
                      {currentCategory.badge}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-white/80">{currentCategory?.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleShareCategory}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                title="শেয়ার করুন"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                title="বন্ধ করুন"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Sub Header Filters: Upazila & Search */}
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="নাম বা বিবরণ দিয়ে খুঁজুন..."
                className="w-full pl-9 pr-3 py-1.5 bg-white text-slate-800 placeholder-slate-400 text-xs rounded-xl focus:outline-none shadow-xs"
              />
            </div>

            {/* Upazila Select */}
            <select
              value={activeUpazila}
              onChange={(e) => setActiveUpazila(e.target.value as Upazila)}
              className="bg-white/95 text-slate-800 text-xs font-medium py-1.5 px-3 rounded-xl focus:outline-none shadow-xs"
            >
              {UPAZILAS.map((upz) => (
                <option key={upz} value={upz} className="text-slate-800">
                  {upz}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3.5 bg-slate-50">
          {/* Admin Editing Banner */}
          {isAdminAuthenticated && onOpenAdmin && (
            <div className="bg-amber-100 border border-amber-300 text-amber-900 p-2.5 rounded-2xl text-xs font-semibold flex items-center justify-between gap-2 shadow-xs">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>এডমিন মোড সক্রিয়: এই তথ্যগুলো পরিবর্তন বা নতুন তথ্য যোগ করতে পারেন</span>
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenAdmin();
                }}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-[11px] whitespace-nowrap shadow-xs transition"
              >
                এডমিন প্যানেলে এডিট করুন
              </button>
            </div>
          )}

          {/* ================= DOCTOR VIEW ================= */}
          {categoryId === 'doctor' && (
            <div className="space-y-3">
              <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
                <span>পটুয়াখালী ও উপজেলা স্বাস্থ্য কমপ্লেক্সের বিশেষজ্ঞ চিকিৎসক তালিকা ({doctors.length} জন)</span>
                <span className="font-bold text-emerald-700">২৪/৭ সেবা</span>
              </div>

              {appointmentSuccess && (
                <div className="bg-emerald-100 border border-emerald-300 p-3 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>{appointmentSuccess} এর জন্য সিরিয়াল অনুরোধ সফলভাবে গৃহীত হয়েছে! চেম্বার থেকে দ্রুত কল করা হবে।</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {doctors.filter((d) => {
                  const matchUpz = activeUpazila === 'সকল এলাকা' || d.upazila === activeUpazila;
                  const matchSearch =
                    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    d.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (d.degree && d.degree.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (d.chamber && d.chamber.toLowerCase().includes(searchTerm.toLowerCase()));
                  return matchUpz && matchSearch;
                }).map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 cursor-pointer" onClick={() => setSelectedDoctorForDetails(doc)}>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm hover:text-emerald-700 transition">
                              {doc.name}
                            </h4>
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-1.5 py-0.2 rounded-md border border-emerald-200">
                              ভেরিফাইড
                            </span>
                          </div>
                          <p className="text-xs text-emerald-700 font-semibold">{doc.specialty}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{doc.degree}</p>
                          {doc.designation && (
                            <p className="text-[10px] text-blue-700 font-medium mt-0.5 bg-blue-50/70 px-1.5 py-0.5 rounded inline-block">
                              {doc.designation}
                            </p>
                          )}
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 block">
                            ভিজিট {doc.fee}
                          </span>
                          {doc.bmdcReg && (
                            <span className="text-[10px] text-slate-400 font-mono block mt-1">
                              BMDC {doc.bmdcReg}
                            </span>
                          )}
                        </div>
                      </div>

                      <div
                        className="mt-2.5 pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600 cursor-pointer"
                        onClick={() => setSelectedDoctorForDetails(doc)}
                      >
                        <div className="flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="font-medium text-slate-800 line-clamp-1">
                            {doc.chamber} {doc.roomNo ? `(${doc.roomNo})` : ''}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>সময়: {doc.visitingHours} ({doc.availableDays})</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="flex items-center gap-1 text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{doc.upazila}</span>
                          </span>
                          {doc.experience && (
                            <span className="text-emerald-700 font-medium">{doc.experience}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => setSelectedDoctorForDetails(doc)}
                        className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-600" />
                        <span>বিস্তারিত</span>
                      </button>

                      <a
                        href={`tel:${doc.phone}`}
                        className="py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>কল</span>
                      </a>

                      <button
                        onClick={() => setSelectedDoctorForDetails(doc)}
                        className="py-1.5 px-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1 border border-blue-200 transition"
                      >
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <span>সিরিয়াল</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= HOSPITAL VIEW ================= */}
          {categoryId === 'hospital' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {hospitals.filter((h) => {
                const matchUpz = activeUpazila === 'সকল এলাকা' || h.upazila === activeUpazila;
                const matchSearch = h.name.toLowerCase().includes(searchTerm.toLowerCase());
                return matchUpz && matchSearch;
              }).map((hosp) => (
                <div key={hosp.id} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{hosp.name}</h4>
                      <span className="inline-block mt-0.5 text-[10px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                        {hosp.type}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
                      {hosp.beds}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{hosp.address}</span>
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={`tel:${hosp.emergency}`}
                      className="p-2 bg-red-50 hover:bg-red-100 text-red-800 rounded-xl border border-red-200 flex items-center justify-center gap-1 font-semibold"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-600" />
                      <span>জরুরি: {hosp.emergency}</span>
                    </a>
                    <a
                      href={`tel:${hosp.ambulance}`}
                      className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-xl border border-blue-200 flex items-center justify-center gap-1 font-semibold"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>অ্যাম্বুলেন্স: {hosp.ambulance}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= BUS SCHEDULE VIEW ================= */}
          {categoryId === 'bus' && (
            <div className="space-y-3">
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900">
                <span className="font-bold">পদ্মা সেতু হয়ে সরাসরি বাস সার্ভিস:</span> ঢাকা গাবতলী ও সায়েদাবাদ থেকে পটুয়াখালী টার্মিনাল এবং কুয়াকাটা চৌরাস্তা পর্যন্ত নিয়মিত বাস চলাচল করে।
              </div>

              {busSchedules.map((bus) => (
                <div key={bus.id} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{bus.operator}</h4>
                      <p className="text-xs text-emerald-700 font-semibold">{bus.route}</p>
                    </div>
                    <span className="text-xs font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-lg border border-emerald-200">
                      {bus.busType}
                    </span>
                  </div>

                  <div className="mt-2 space-y-1 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>ছাড়ার সময়: <strong className="text-slate-800">{bus.departureTime}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-slate-400" />
                      <span>ভাড়া: <strong className="text-emerald-700">{bus.fare}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>কাউন্টার: {bus.boardingPoint}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={`tel:${bus.counterPhone}`}
                      className="flex-1 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs hover:bg-emerald-700"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>কাউন্টারে কল করুন</span>
                    </a>
                    <button
                      onClick={() => handleCopy(bus.counterPhone, bus.id)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === bus.id ? 'কপি হয়েছে' : 'নম্বর'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= TRAIN SCHEDULE VIEW ================= */}
          {categoryId === 'train' && (
            <div className="space-y-3">
              <div className="bg-sky-50 border border-sky-200 p-3.5 rounded-2xl text-xs text-sky-900 leading-relaxed">
                <h4 className="font-bold text-sm text-sky-950 mb-1">পদ্মা সেতু রেল সংযোগ ও ভাঙ্গা জংশন</h4>
                <p>
                  পটুয়াখালী ও কুয়াকাটাগামী যাত্রীরা ঢাকা কমলাপুর থেকে পদ্মা সেতু হয়ে সরাসরি ভাঙ্গা রেলওয়ে জংশনে নেমে পটুয়াখালী বা কুয়াকাটার বাসে সহজে যাতায়াত করতে পারেন।
                </p>
                <div className="mt-2.5 pt-2 border-t border-sky-200/60 font-semibold text-emerald-800">
                  ভবিষ্যৎ পরিকল্পনা: ঢাকা-বরিশাল-পায়রা বন্দর ব্রডগেজ রেলওয়ে প্রকল্প বাস্তবায়নাধীন।
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">সুন্দরবন এক্সপ্রেস (ভাঙ্গা রুট)</span>
                  <span className="text-emerald-700 font-bold">ভাড়া: ৳ ৩৫০ - ৳ ৮৫০</span>
                </div>
                <p className="text-slate-600">ঢাকা কমলাপুর থেকে সকাল ৮:১৫ | ভাঙ্গা আগমন সকাল ৯:৪০</p>
                <p className="text-slate-500">ভাঙ্গা জংশন থেকে সরাসরি পটুয়াখালী সংযোগ বাস সার্ভিস প্রতি ২০ মিনিট পর পর।</p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">বেনাপোল এক্সপ্রেস (ভাঙ্গা রুট)</span>
                  <span className="text-emerald-700 font-bold">ভাড়া: ৳ ৩৫০ - ৳ ৮৫০</span>
                </div>
                <p className="text-slate-600">ঢাকা থেকে রাত ১১:৪৫ | ভাঙ্গা আগমন রাত ০১:০৫</p>
              </div>
            </div>
          )}

          {/* ================= LAUNCH SCHEDULE VIEW ================= */}
          {categoryId === 'launch' && (
            <div className="space-y-3">
              <div className="p-3 bg-cyan-50 rounded-2xl border border-cyan-200 text-xs text-cyan-950">
                <span className="font-bold">নৌ ভ্রমণ পটুয়াখালী:</span> ঢাকার সদরঘাট থেকে প্রতিদিন বিকাল ৫টা থেকে ৬:৩০ এর মধ্যে পটুয়াখালী ও গলাচিপার উদ্দেশ্যে বিলাসবহুল লঞ্চগুলো ছেড়ে যায়।
              </div>

              {launchSchedules.map((launch) => (
                <div key={launch.id} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{launch.name}</h4>
                      <p className="text-xs text-cyan-800 font-semibold">{launch.route}</p>
                    </div>
                    <span className="text-[11px] font-bold bg-cyan-50 text-cyan-800 px-2.5 py-0.5 rounded-lg border border-cyan-100">
                      লঞ্চ ঘাট: {launch.ghat}
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-slate-600 space-y-1">
                    <p>সময়সূচি: <strong>{launch.departureTime}</strong></p>
                    <p>পৌঁছানোর আনুমানিক সময়: <strong>{launch.arrivalTime}</strong></p>
                  </div>

                  {/* Fares Matrix */}
                  <div className="mt-2.5 grid grid-cols-4 gap-1.5 text-center text-[10px]">
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                      <div className="text-slate-400">ডেক</div>
                      <div className="font-bold text-slate-800">{launch.deckFare}</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                      <div className="text-slate-400">সিঙ্গেল কেবিন</div>
                      <div className="font-bold text-slate-800">{launch.singleCabinFare}</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                      <div className="text-slate-400">ডাবল কেবিন</div>
                      <div className="font-bold text-slate-800">{launch.doubleCabinFare}</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                      <div className="text-slate-400">ভিআইপি কেবিন</div>
                      <div className="font-bold text-emerald-700">{launch.vipCabinFare}</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={`tel:${launch.counterPhone}`}
                      className="flex-1 py-1.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>কেবিন বুকিং কাউন্টারে কল</span>
                    </a>
                    <button
                      onClick={() => handleCopy(launch.counterPhone, launch.id)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                    >
                      {copiedId === launch.id ? 'কপি হয়েছে' : 'নম্বর কপি'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= TOURIST PLACES VIEW ================= */}
          {categoryId === 'tourist' && (() => {
            const filteredPlaces = touristPlaces.filter((place) => {
              const matchUpz = activeUpazila === 'সকল এলাকা' || place.upazila === activeUpazila;
              const matchSearch =
                place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                place.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                place.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                place.highlight.toLowerCase().includes(searchTerm.toLowerCase());
              return matchUpz && matchSearch;
            });

            return (
              <div className="space-y-4">
                {/* Tourist Header Info Banner */}
                <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white p-3.5 rounded-2xl shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-emerald-200" />
                      <h4 className="font-bold text-sm">পটুয়াখালীর দর্শনীয় স্থান ও আলোকচিত্র</h4>
                    </div>
                    <span className="text-[11px] bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-semibold">
                      {filteredPlaces.length}টি স্থান
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-100 mt-1 leading-snug">
                    কুয়াকাটা সাগরকন্যা, মনোরম ঝাউবন, ফাতরার ম্যানগ্রোভ ও সোনার চরের বাস্তব চিত্র
                  </p>
                </div>

                {filteredPlaces.length === 0 ? (
                  <div className="bg-white p-8 rounded-2xl text-center border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500">নির্বাচিত ফিল্টারে কোনো দর্শনীয় স্থান পাওয়া যায়নি</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredPlaces.map((place) => (
                      <div
                        key={place.id}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition group flex flex-col justify-between"
                      >
                      {/* Photo Section with Zoom & Badges */}
                      <div
                        className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
                        onClick={() =>
                          setSelectedPhotoPreview({
                            image: place.image,
                            name: place.name,
                            location: place.location,
                            highlight: place.highlight
                          })
                        }
                      >
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-900/75 backdrop-blur-md text-white border border-white/20 shadow-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-emerald-400" />
                            <span>{place.upazila}</span>
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 shadow-xs">
                            ★ {place.rating}
                          </span>
                        </div>

                        {/* Bottom Title on Photo */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
                          <div className="pr-2">
                            <h4 className="font-bold text-sm sm:text-base leading-tight drop-shadow-md text-white">
                              {place.name}
                            </h4>
                            <p className="text-[11px] text-emerald-200 flex items-center gap-1 mt-0.5 drop-shadow-xs">
                              <MapPin className="w-3 h-3" />
                              <span>{place.location}</span>
                            </p>
                          </div>
                          <button
                            type="button"
                            className="p-1.5 rounded-xl bg-black/50 hover:bg-black/75 backdrop-blur-md text-white border border-white/20 text-[10px] font-semibold flex items-center gap-1 shrink-0 transition"
                            title="বড় ছবি দেখুন"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">বড় ছবি</span>
                          </button>
                        </div>
                      </div>

                      {/* Card Body Details */}
                      <div className="p-3.5 space-y-2.5 text-xs">
                        <p className="text-slate-600 leading-relaxed">
                          {place.description}
                        </p>

                        <div className="p-2 bg-emerald-50 rounded-xl text-[11px] text-emerald-950 border border-emerald-100 flex items-start gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-emerald-800">প্রধান আকর্ষণ:</strong> {place.highlight}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 pt-0.5">
                          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-700 block mb-0.5">ভ্রমণের সেরা সময়:</span>
                            <span>{place.bestTimeToVisit}</span>
                          </div>
                          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-700 block mb-0.5">যাওয়ার উপায়:</span>
                            <span>{place.howToGo}</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedPhotoPreview({
                                image: place.image,
                                name: place.name,
                                location: place.location,
                                highlight: place.highlight
                              })
                            }
                            className="flex-1 py-1.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-emerald-200 transition"
                          >
                            <Eye className="w-3.5 h-3.5 text-emerald-600" />
                            <span>আলোকচিত্র ফুল ভিউ</span>
                          </button>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' ' + place.location)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-1.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-xs"
                          >
                            <Compass className="w-3.5 h-3.5 text-emerald-400" />
                            <span>ম্যাপে লোকেশন</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()}

          {/* ================= EMERGENCY VIEW ================= */}
          {categoryId === 'emergency' && (
            <div className="space-y-2.5">
              <div className="bg-red-500 text-white p-3 rounded-2xl text-xs">
                <h4 className="font-bold text-sm mb-0.5">পটুয়াখালী ২৪/৭ জরুরি হেল্পলাইন</h4>
                <p className="opacity-90">যেকোনো মুহূর্তে তাৎক্ষণিক সহায়তা পেতে নিচের জরুরি নম্বরে স্পর্শ করুন।</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {emergencyContacts.map((emg) => (
                  <div key={emg.id} className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                    <div className="pr-2">
                      <span className="text-[10px] font-bold uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                        {emg.category}
                      </span>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm mt-1">{emg.title}</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">{emg.description}</p>
                      <span className="text-[10px] text-emerald-700 font-semibold">{emg.available}</span>
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
            </div>
          )}

          {/* ================= COMPLAINTS VIEW ================= */}
          {categoryId === 'complaint' && (
            <div className="space-y-3.5">
              <div className="bg-rose-50 border border-rose-200 p-3 rounded-2xl text-xs text-rose-950">
                <h4 className="font-bold text-sm mb-1">নাগরিক অভিযোগ ও জনদুর্ভোগ প্রতিকার</h4>
                <p>পটুয়াখালী জেলা প্রশাসন ও সংশ্লিষ্ট দপ্তরসমূহে আপনার অভিযোগ সরাসরি পাঠান। প্রতিটি অভিযোগের একটি ট্র্যাকিং নম্বর প্রদান করা হবে।</p>
              </div>

              {complaintSuccess ? (
                <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-2xl text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-sm">আপনার অভিযোগ সফলভাবে নিবন্ধিত হয়েছে!</h4>
                  <p className="text-xs text-emerald-700">
                    ট্র্যাকিং নম্বর: <strong>#CP{Math.floor(100000 + Math.random() * 900000)}</strong>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    কর্তৃপক্ষ দ্রুত তদন্তপূর্বক ব্যবস্থা গ্রহণ করবে এবং এসএমএস এর মাধ্যমে আপডেট জানানো হবে।
                  </p>
                  <button
                    onClick={() => setComplaintSuccess(false)}
                    className="mt-2 px-4 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
                  >
                    আরেকটি অভিযোগ দাখিল করুন
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setComplaintSuccess(true);
                  }}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">আপনার নাম *</label>
                    <input
                      required
                      type="text"
                      placeholder="যেমন: কাব্য হাসান"
                      value={complaintForm.name}
                      onChange={(e) => setComplaintForm({ ...complaintForm, name: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">মোবাইল নম্বর *</label>
                      <input
                        required
                        type="tel"
                        placeholder="01712-XXXXXX"
                        value={complaintForm.phone}
                        onChange={(e) => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">উপজেলা *</label>
                      <select
                        value={complaintForm.upazila}
                        onChange={(e) => setComplaintForm({ ...complaintForm, upazila: e.target.value })}
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                      >
                        {UPAZILAS.filter((u) => u !== 'সকল এলাকা').map((u) => (
                          <option key={u} value={u}>{u}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">অভিযোগের বিষয় *</label>
                    <input
                      required
                      type="text"
                      placeholder="যেমন: সড়ক বা ব্রিজ মেরামত, বিদ্যুৎ সমস্যা, সুপেয় পানি"
                      value={complaintForm.subject}
                      onChange={(e) => setComplaintForm({ ...complaintForm, subject: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">অভিযোগের বিস্তারিত বিবরণ *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="সমস্যার স্থান, কারণ ও বিস্তারিত তথ্য লিখুন..."
                      value={complaintForm.details}
                      onChange={(e) => setComplaintForm({ ...complaintForm, details: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>অভিযোগ জমা দিন</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ================= AGRICULTURE & FISHERY VIEW ================= */}
          {(categoryId === 'agriculture' || categoryId === 'fishery') && (
            <div className="space-y-3">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl text-xs text-emerald-950">
                <h4 className="font-bold text-sm mb-1">
                  {categoryId === 'agriculture' ? 'পটুয়াখালী কৃষি তথ্য ও সহায়তা' : 'উপকূলীয় মৎস্য ও সমুদ্র সম্পদ'}
                </h4>
                <p>
                  {categoryId === 'agriculture'
                    ? 'গলাচিপা ও রাঙ্গাবালীর সুস্বাদু মিষ্টি তরমুজ চাষ, লবণাক্ততা সহনশীল ধান ও আধুনিক কৃষি প্রযুক্তি।'
                    : 'ইলিশ সংরক্ষণ অভিযান, মহিপুর ও আলীপুর মৎস্য অবতরণ কেন্দ্র ও বঙ্গোপসাগরে নিরাপদ মৎস্য আহরণ গাইড।'}
                </p>
              </div>

              {categoryId === 'fishery' && (
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <h5 className="font-bold text-cyan-900">মহিপুর ও আলীপুর মৎস্য বন্দর যোগাযোগ</h5>
                  <p className="text-slate-600">উপকূলের বৃহত্তম মাছের আড়ত ও ট্রলার ভিড়ানোর নিরাপদ ঘাট।</p>
                  <div className="flex items-center gap-2 pt-1">
                    <a href="tel:01712000000" className="px-3 py-1.5 bg-cyan-700 text-white rounded-xl font-bold flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      <span>মৎস্য কর্মকর্তা: 01712-443322</span>
                    </a>
                  </div>
                </div>
              )}

              {categoryId === 'agriculture' && (
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <h5 className="font-bold text-emerald-900">কৃষি সম্প্রসারণ অধিদপ্তর হেল্পলাইন (টোল ফ্রি)</h5>
                  <p className="text-slate-600">মাঠপর্যায়ের উপ-সহকারী কৃষি কর্মকর্তাদের সাথে সরাসরি কথা বলতে ১৬১২৩ নম্বরে ডায়াল করুন।</p>
                  <a href="tel:16123" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white rounded-xl font-bold">
                    <Phone className="w-3.5 h-3.5" />
                    <span>কৃষি কল সেন্টার (১৬১২৩)</span>
                  </a>
                </div>
              )}
            </div>
          )}

          {/* ================= MAP & DISTRICT INFO VIEW ================= */}
          {categoryId === 'map' && (
            <div className="space-y-3">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">{DISTRICT_INFO.name}</h4>
                <p className="text-xs text-emerald-700 font-medium mb-2">{DISTRICT_INFO.tagline}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">আয়তন</span>
                    <strong className="text-slate-800">{DISTRICT_INFO.area}</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">জনসংখ্যা</span>
                    <strong className="text-slate-800">{DISTRICT_INFO.population}</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl col-span-2">
                    <span className="text-slate-400 block text-[10px]">প্রধান নদীসমূহ</span>
                    <strong className="text-slate-800">{DISTRICT_INFO.rivers}</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl col-span-2">
                    <span className="text-slate-400 block text-[10px]">বিখ্যাত ঐতিহ্য ও খাবার</span>
                    <strong className="text-slate-800">{DISTRICT_INFO.specialty}</strong>
                  </div>
                </div>
              </div>

              {/* Upazilas overview */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                <h5 className="font-bold text-slate-900 text-xs mb-2">৮টি উপজেলার তালিকা:</h5>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {UPAZILAS.filter((u) => u !== 'সকল এলাকা').map((upz, i) => (
                    <div key={upz} className="p-2 bg-emerald-50/60 rounded-xl flex items-center justify-between border border-emerald-100">
                      <span className="font-medium text-slate-800">{i + 1}. {upz}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= GENERAL FALLBACK / OTHER CATEGORIES VIEW ================= */}
          {![
            'doctor',
            'hospital',
            'bus',
            'train',
            'launch',
            'tourist',
            'emergency',
            'complaint',
            'agriculture',
            'fishery',
            'map'
          ].includes(categoryId) && (
            <div className="space-y-3">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span>{currentCategory?.name} সেবা বিবরণী</span>
                  </h4>
                  {currentCategory?.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700">
                      {currentCategory.badge}
                    </span>
                  )}
                </div>

                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                  {currentCategory?.description || `পটুয়াখালী জেলা ও উপজেলা পর্যায়ের ${currentCategory?.name} সেবার হালনাগাদ তথ্য এখানে অন্তর্ভুক্ত রয়েছে।`}
                </p>

                {currentCategory?.details && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 leading-relaxed whitespace-pre-line text-xs">
                    {currentCategory.details}
                  </div>
                )}

                {currentCategory?.address && (
                  <div className="flex items-center gap-2 text-slate-600 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>অবস্থান / ঠিকানা:</strong> {currentCategory.address}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:${currentCategory?.phone || '01712345678'}`}
                    className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{currentCategory?.phone ? `সরাসরি কল: ${currentCategory.phone}` : 'জেলা তথ্য সেবা ডেস্কে কল (+880 1712 345678)'}</span>
                  </a>
                  {currentCategory?.phone && (
                    <button
                      onClick={() => handleCopy(currentCategory.phone!, 'cat-phone')}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === 'cat-phone' ? 'কপি হয়েছে' : 'নম্বর কপি'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Sample Local Office Contacts */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <strong className="text-slate-800">পটুয়াখালী জেলা সমন্বয় শাখা</strong>
                  <span className="text-emerald-700 font-semibold">সকাল ৯:০০ - বিকেল ৫:০০</span>
                </div>
                <p className="text-slate-500">জেলা প্রশাসক কার্যালয় সংলগ্ন, পটুয়াখালী</p>
                <a href="tel:044162244" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>0441-62244</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onOpenQuickDial}
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>জরুরি হেল্পলাইন (৯৯৯)</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhotoPreview && (
        <div
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPhotoPreview(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={selectedPhotoPreview.image}
                alt={selectedPhotoPreview.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPhotoPreview(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-xs transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-900 text-white space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {selectedPhotoPreview.name}
                  </h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedPhotoPreview.location}</span>
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/50">
                <span className="text-emerald-300 font-semibold">আকর্ষণ: </span>
                {selectedPhotoPreview.highlight}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Doctor Detailed Profile & Serial Modal */}
      {selectedDoctorForDetails && (
        <DoctorDetailModal
          doctor={selectedDoctorForDetails}
          onClose={() => setSelectedDoctorForDetails(null)}
        />
      )}
    </div>
  );
};
