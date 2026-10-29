import {
  CategoryItem,
  Doctor,
  Hospital,
  BusSchedule,
  LaunchSchedule,
  TouristPlace,
  EmergencyContact,
  NotificationItem,
  RegisteredUser,
  CitizenComplaint,
  BannerSlide,
  Upazila
} from '../types';

import seaBeachImg from '../assets/images/kuakata_sea_beach_1793010943047.jpg';
import dcOfficeImg from '../assets/images/patuakhali_dc_office_1793010943308.jpg';
import payraBridgeImg from '../assets/images/payra_bridge_new_1793010960464.jpg';
import luminariesImg from '../assets/images/patuakhali_luminaries_1793010960806.jpg';
import jhautalaImg from '../assets/images/patuakhali_jhautala_1793010978290.jpg';
import redCrabsImg from '../assets/images/kuakata_red_crabs_1793009598792.jpg';
import fatrarForestImg from '../assets/images/fatrar_mangrove_forest_1793009620927.jpg';
import rakhineTempleImg from '../assets/images/rakhine_temple_kuakata_1793009620549.jpg';
import sonarCharImg from '../assets/images/sonar_char_deer_1793009640884.jpg';
import payraPortImg from '../assets/images/payra_sea_port_1793009599214.jpg';
import pstuCampusImg from '../assets/images/pstu_dumki_campus_1793009642264.jpg';

export type { Upazila };

export const INITIAL_BANNERS: BannerSlide[] = [
  {
    id: 'sea-beach',
    title: 'কুয়াকাটা সমুদ্র সৈকত',
    subtitle: 'সাগরকন্যার অপূর্ব বেলাভূমি',
    badge: 'সমুদ্র সৈকত',
    image: seaBeachImg,
    actionText: 'ঘুরুন',
    targetCategory: 'tourist',
    tagColor: 'bg-amber-500/80 text-white',
    active: true
  },
  {
    id: 'dc-office',
    title: 'জেলা প্রশাসন ভবন',
    subtitle: 'পটুয়াখালী কালেক্টরেট ও প্রশাসন',
    badge: 'প্রশাসনিক ভবন',
    image: dcOfficeImg,
    actionText: 'সেবা দেখুন',
    targetCategory: 'gov',
    tagColor: 'bg-emerald-600/80 text-white',
    active: true
  },
  {
    id: 'payra-bridge',
    title: 'পায়রা মেগা সেতু',
    subtitle: 'লেবুখালী দৃষ্টিনন্দন সংযোগ',
    badge: 'সেতু',
    image: payraBridgeImg,
    actionText: 'রুট দেখুন',
    targetCategory: 'bus',
    tagColor: 'bg-blue-600/80 text-white',
    active: true
  },
  {
    id: 'patuakhali-luminaries',
    title: 'পটুয়াখালীর গুণীজন',
    subtitle: 'ইতিহাস ও বরেণ্য ব্যক্তিত্ব',
    badge: 'গুণী মানুষ',
    image: luminariesImg,
    actionText: 'ইতিহাস',
    targetCategory: 'tourist',
    tagColor: 'bg-yellow-600/80 text-white',
    active: true
  },
  {
    id: 'jhautala-view',
    title: 'পটুয়াখালী ঝাউতলা',
    subtitle: 'সবুজ ছায়াঘেরা রূপময় দৃশ্য',
    badge: 'ঝাউতলা দৃশ্য',
    image: jhautalaImg,
    actionText: 'পরিদর্শন',
    targetCategory: 'tourist',
    tagColor: 'bg-teal-600/80 text-white',
    active: true
  }
];

export const CATEGORIES: CategoryItem[] = [
  { id: 'doctor', name: 'ডাক্তার', iconName: 'Stethoscope', color: 'from-blue-500 to-indigo-600', description: 'বিশেষজ্ঞ চিকিৎসক ও চেম্বার' },
  { id: 'hospital', name: 'হাসপাতাল', iconName: 'Building2', color: 'from-red-500 to-rose-600', description: 'সরকারি ও বেসরকারি স্বাস্থ্যসেবা' },
  { id: 'bus', name: 'বাসের সময়সূচী', iconName: 'Bus', color: 'from-emerald-500 to-green-600', description: 'ঢাকা-পটুয়াখালী-কুয়াকাটা বাস' },
  { id: 'train', name: 'ট্রেনের সময়সূচী', iconName: 'Train', color: 'from-sky-500 to-blue-600', description: 'পদ্মা সেতু সংযোগ ও ভাঙা জংশন' },
  { id: 'launch', name: 'লঞ্চের সময়সূচী', iconName: 'Ship', color: 'from-cyan-500 to-teal-600', badge: 'জনপ্রিয়', description: 'ঢাকা-পটুয়াখালী-গলাচিপা নৌপথ' },
  
  { id: 'tourist', name: 'দর্শনীয় স্থান', iconName: 'Palmtree', color: 'from-teal-500 to-emerald-600', badge: 'হটস্পট', description: 'কুয়াকাটা সৈকত, ফাতরার বন ও চর' },
  { id: 'education', name: 'স্কুল-কলেজ', iconName: 'GraduationCap', color: 'from-amber-500 to-orange-600', description: 'পবিপ্রবি, সরকারি কলেজ ও মাদ্রাসা' },
  { id: 'market', name: 'মার্কেট ও দোকান', iconName: 'ShoppingBag', color: 'from-pink-500 to-rose-600', description: 'রাখাইন মার্কেট ও স্থানীয় বাজার' },
  { id: 'fire', name: 'ফায়ার সার্ভিস', iconName: 'Flame', color: 'from-red-600 to-red-700', badge: 'জরুরি', description: 'অগ্নি নির্বাপণ ও উদ্ধার দল' },
  { id: 'police', name: 'পুলিশ', iconName: 'ShieldAlert', color: 'from-indigo-600 to-blue-700', description: 'থানা ও ট্যুরিস্ট পুলিশ ফাঁড়ি' },
  
  { id: 'courier', name: 'কুরিয়ার সার্ভিস', iconName: 'Truck', color: 'from-blue-500 to-cyan-600', description: 'সুন্দরবন, এসএ পরিবহন ও পার্সেল' },
  { id: 'electricity', name: 'বিদ্যুৎ অফিস', iconName: 'Zap', color: 'from-yellow-500 to-amber-600', description: 'ওজোপাডিকো ও পল্লী বিদ্যুৎ সমিতি' },
  { id: 'water', name: 'পানি সরবরাহ', iconName: 'Droplets', color: 'from-sky-400 to-blue-600', description: 'পৌরসভা পানি শাখা ও ডিপিএইচই' },
  { id: 'gas', name: 'গ্যাস সংযোগ', iconName: 'FlameKindling', color: 'from-orange-500 to-red-500', description: 'এলপিজি ডিলার ও হোম ডেলিভারি' },
  { id: 'fuel', name: 'জ্বালানি পাম্প', iconName: 'Fuel', color: 'from-emerald-600 to-teal-700', description: 'পেট্রোল পাম্প ও সিএনজি ফিলিং' },
  
  { id: 'agriculture', name: 'কৃষি তথ্য', iconName: 'Wheat', color: 'from-green-600 to-emerald-700', description: 'আমন-বোরো ধান ও তরমুজ প্রযুক্তি' },
  { id: 'fishery', name: 'মৎস্য ও সমুদ্র সম্পদ', iconName: 'Fish', color: 'from-cyan-600 to-blue-700', badge: 'উপকূল', description: 'ইলিশ আহরণ, মহিপুর ঘাট ও জোয়ার' },
  { id: 'bank', name: 'ব্যাংক ও এটিএম', iconName: 'Landmark', color: 'from-indigo-500 to-purple-600', description: 'ব্যাংক শাখা, এটিএম বুথ ও এজেন্ট' },
  { id: 'land', name: 'ভূমি ও জমি', iconName: 'Home', color: 'from-amber-600 to-orange-700', description: 'খতিয়ান, নামজারি ও সাব-রেজিস্ট্রি' },
  { id: 'gov', name: 'সরকারি সেবা', iconName: 'Building', color: 'from-slate-700 to-slate-900', description: 'ডিসি অফিস, ইউএনও ও পাসপোর্ট' },
  
  { id: 'job', name: 'চাকরি', iconName: 'Briefcase', color: 'from-violet-600 to-purple-700', description: 'সরকারি ও বেসরকারি নিয়োগ বিজ্ঞপ্তি' },
  { id: 'complaint', name: 'অভিযোগ', iconName: 'MessageSquareWarning', color: 'from-rose-500 to-red-600', description: 'জনদুর্ভোগ ও সুশাসন সংক্রান্ত আবেদন' },
  { id: 'news', name: 'নিউজ', iconName: 'Newspaper', color: 'from-blue-600 to-indigo-800', description: 'পটুয়াখালী ও উপকূলের তাজা সংবাদ' },
  { id: 'info', name: 'তথ্য ও পরামর্শ', iconName: 'Info', color: 'from-teal-600 to-emerald-800', description: 'আইনি, স্বাস্থ্য ও পারিবারিক সহায়তা' },
  { id: 'emergency', name: 'জরুরি সেবা', iconName: 'PhoneCall', color: 'from-red-600 to-rose-700', badge: '২৪/৭', description: 'জাতীয় ৯৯৯ ও জেলা হটলাইন' },

  { id: 'event', name: 'ইভেন্ট ও অনুষ্ঠান', iconName: 'CalendarDays', color: 'from-pink-500 to-purple-600', description: 'রাসমেলা, স্বাধীনতা মেলা ও সংস্কৃতি' },
  { id: 'weather', name: 'আবহাওয়া', iconName: 'CloudSun', color: 'from-sky-500 to-cyan-600', description: 'উপকূলীয় আবহাওয়া ও ঘূর্ণিঝড় সংকেত' },
  { id: 'map', name: 'মানচিত্র', iconName: 'MapPin', color: 'from-emerald-500 to-teal-600', description: 'উপজেলা ও গুরুত্বপূর্ণ স্থানের ম্যাপ' },
  { id: 'gallery', name: 'গ্যালারি', iconName: 'Image', color: 'from-purple-500 to-indigo-600', description: 'সৈকত, নদী ও প্রকৃতির ছবি' },
  { id: 'settings', name: 'অ্যাপ সেটিংস', iconName: 'Settings', color: 'from-slate-600 to-slate-800', description: 'ভাষা, প্রোফাইল ও কন্ট্রোল' }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'ডাঃ মোঃ রফিকুল ইসলাম',
    specialty: 'মেডিসিন ও হৃদরোগ বিশেষজ্ঞ',
    degree: 'MBBS, BCS (স্বাস্থ্য), FCPS (মেডিসিন), MD (কার্ডিওলজি)',
    designation: 'সহকারী অধ্যাপক ও বিভাগীয় প্রধান, মেডিসিন বিভাগ',
    bmdcReg: 'A-54912',
    experience: '১৫+ বছরের চিকিৎসা ও ক্লিনিক্যাল অভিজ্ঞতা',
    chamber: 'সাউথ বাংলা ডায়াগনস্টিক অ্যান্ড কনসালটেশন সেন্টার',
    chamberAddress: 'সদর রোড (প্রেসক্লাবের বিপরীত ভবন, ২য় তলা), পটুয়াখালী সদর',
    roomNo: 'রুম নং ২০৪',
    upazila: 'পটুয়াখালী সদর',
    phone: '01712-889901',
    serialPhone: '01720-334411',
    visitingHours: 'বিকাল ৪:০০ - রাত ৯:০০',
    availableDays: 'শনিবার - বৃহস্পতিবার',
    fee: '৳ ৭০০',
    followUpFee: '৳ ৪০০ (১৫ দিনের মধ্যে)',
    reportTime: 'প্রতিদিন সন্ধ্যা ৬:০০ - ৭:০০',
    services: [
      'উচ্চ রক্তচাপ ও জটিল হৃদরোগ ব্যবস্থাপনা',
      'অনিয়ন্ত্রিত ডায়াবেটিস ও কোলেস্টেরল নিয়ন্ত্রণ',
      'বুকের ব্যথা, শ্বাসকষ্ট ও বুক ধড়ফড় চিকিৎসা',
      'জটিল ও দীর্ঘমেয়াদী জ্বর এবং ফুসফুসের রোগ',
      'ইসিজি ও ইকোকার্ডিওগ্রাম রিপোর্ট পর্যালোচনা'
    ],
    bio: 'পটুয়াখালী মেডিকেল কলেজ ও জেনারেল হাসপাতালের অন্যতম প্রবীণ মেডিসিন বিশেষজ্ঞ। রোগীদের আন্তরিক সেবা ও নির্ভরযোগ্য ডায়াগনসিসের জন্য বিশেষ পরিচিত।'
  },
  {
    id: 'doc-2',
    name: 'ডাঃ ফারহানা ইয়াসমিন',
    specialty: 'গাইনী ও ধাত্রীবিদ্যা বিশেষজ্ঞ ও ল্যাপারোস্কোপিক সার্জন',
    degree: 'MBBS, DGO, MCPS (Obs & Gynae)',
    designation: 'কনসালট্যান্ট (গাইনী), ২৫০ শয্যা জেনারেল হাসপাতাল',
    bmdcReg: 'A-62438',
    experience: '১২ বছরের সফল প্রসূতি ও নারী স্বাস্থ্য বিশেষজ্ঞ',
    chamber: 'পটুয়াখালী সেন্ট্রাল ক্লিনিক ও ডায়াগনস্টিক',
    chamberAddress: 'নতুন বাজার মেইন রোড, পটুয়াখালী সদর',
    roomNo: 'রুম নং ১০২ (নিচতলা)',
    upazila: 'পটুয়াখালী সদর',
    phone: '01715-442233',
    serialPhone: '01715-442234',
    visitingHours: 'সকাল ১০:০০ - দুপুর ২:০০ ও বিকাল ৫:০০ - ৮:০০',
    availableDays: 'প্রতিদিন (শুক্রবার বিকাল ব্যতীত)',
    fee: '৳ ৬০০',
    followUpFee: '৳ ৩০০ (১০ দিনের মধ্যে)',
    reportTime: 'দুপুর ১:০০ - ২:০০ ও রাত ৮:০০ - ৮:৩০',
    services: [
      'গর্ভকালীন ও প্রসবকালীন নিরাপদ মাতৃসেবা (ANC/PNC)',
      'উচ্চ ঝুঁকিপূর্ণ গর্ভধারণ ও সিজারিয়ান ডেলিভারি',
      'বন্ধ্যাত্ব চিকিৎসা ও হরমোনজনিত সমস্যা সমাধান',
      'জরায়ুর টিউমার ও সিস্টের অত্যাধুনিক ল্যাপারোস্কোপিক অপারেশন',
      'কিশোরী ও নারীদের মাসিকজনিত জটিলতার চিকিৎসা'
    ],
    bio: 'মা ও শিশুর সুস্বাস্থ্য রক্ষায় দীর্ঘদিন ধরে পটুয়াখালীর মহিলাদের বিশ্বস্ত পরামর্শক ও অভিজ্ঞ সার্জন।'
  },
  {
    id: 'doc-3',
    name: 'ডাঃ মোস্তাফিজুর রহমান',
    specialty: 'নবজাতক ও শিশু-কিশোর রোগ বিশেষজ্ঞ',
    degree: 'MBBS, DCH, MD (শিশু স্বাস্থ্য)',
    designation: 'জুনিয়র কনসালট্যান্ট (পেডিয়াট্রিক্স), উপজেলা স্বাস্থ্য কমপ্লেক্স',
    bmdcReg: 'A-58210',
    experience: '১০+ বছর ধরে শিশুদের স্বাস্থ্য সেবায় নিয়োজিত',
    chamber: 'শেফা পপুলার চাইল্ড কেয়ার সেন্টার',
    chamberAddress: 'হাসপাতাল রোড, উপজেলা স্বাস্থ্য কমপ্লেক্সের পূর্ব পাশে, গলাচিপা',
    roomNo: 'রুম নং ৩',
    upazila: 'গলাচিপা',
    phone: '01720-334455',
    serialPhone: '01720-334456',
    visitingHours: 'বিকাল ৩:৩০ - রাত ৮:৩০',
    availableDays: 'শনিবার - বুধবার',
    fee: '৳ ৫০০',
    followUpFee: '৳ ৩০০',
    reportTime: 'বিকাল ৫:০০ - ৬:০০',
    services: [
      'নবজাতকের জন্ডিস, শ্বাসকষ্ট ও নিউমোনিয়ার চিকিৎসা',
      'শিশুর অপুষ্টি ও শারীরিক বৃদ্ধি মনিটরিং',
      'শিশুদের খিঁচুনি, জ্বর ও সংক্রামক রোগ প্রতিরোধ',
      'জাতীয় ও আন্তর্জাতিক টিকাদান পরামর্শ',
      'অ্যালার্জি, অ্যাজমা ও চর্মরোগের বিশেষ যত্ন'
    ],
    bio: 'শিশুদের ভয়ভীতিহীন বন্ধুত্বপূর্ণ পরিবেশে স্বাস্থ্য পরীক্ষা ও সঠিক পরিচর্যার জন্য গলাচিপায় অত্যন্ত জনপ্রিয়।'
  },
  {
    id: 'doc-4',
    name: 'ডাঃ এস এম জিয়াউল হক',
    specialty: 'হাড়জোড়া, বাতব্যথা ও ট্রমা সার্জন',
    degree: 'MBBS, MS (অর্থোপেডিক সার্জারি)',
    designation: 'সহকারী অধ্যাপক (অর্থো), ট্রমা কেয়ার সেন্টার',
    bmdcReg: 'A-49103',
    experience: '১৮ বছরের অভিজ্ঞ অর্থোপেডিক সার্জন',
    chamber: 'কুয়াকাটা সেবা ক্লিনিক ও ট্রমা সেন্টার',
    chamberAddress: 'কলাপাড়া প্রধান সড়ক (বাসস্ট্যান্ড মোড়), কলাপাড়া',
    roomNo: 'রুম নং ১০৫',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    phone: '01718-990011',
    serialPhone: '01718-990012',
    visitingHours: 'শনি, সোম ও বুধবার বিকাল ৫:০০ - রাত ৯:০০',
    availableDays: 'শনিবার, সোমবার, বুধবার',
    fee: '৳ ৭০০',
    followUpFee: '৳ ৪০০',
    reportTime: 'বিকাল ৫:০০ - ৬:০০',
    services: [
      'ভাঙা হাড় জোড়া ও জটিল ফ্র্যাকচারের আধুনিক প্লাস্টার/অপারেশন',
      'হাঁটু ও কোমর ব্যথা, বাতরোগ এবং স্পাইনাল সমস্যা',
      'আর্থ্রাইটিস ও সাইটিকার আধুনিক চিকিৎসা',
      'সড়ক দুর্ঘটনায় আঘাতপ্রাপ্ত রোগীদের জরুরি সেবা',
      'হাঁটুর জয়েন্ট রিপ্লেসমেন্ট পরামর্শ'
    ],
    bio: 'উপকূলীয় অঞ্চল ও কুয়াকাটায় পর্যটক এবং স্থানীয়দের জরুরি হাড়ভাঙা ও বাতব্যথায় সার্বক্ষণিক নির্ভরযোগ্য সার্জন।'
  },
  {
    id: 'doc-5',
    name: 'ডাঃ তাসনিম জাহান',
    specialty: 'চক্ষু রোগ বিশেষজ্ঞ ও ফ্যাকো সার্জন',
    degree: 'MBBS, DO (Eye), এফসিপিএস (চক্ষু)',
    designation: 'চক্ষু বিশেষজ্ঞ সার্জন, পটুয়াখালী আই কেয়ার হসপিটাল',
    bmdcReg: 'A-71190',
    experience: '৯ বছরের মাইক্রোসার্জিক্যাল অভিজ্ঞতা',
    chamber: 'পটুয়াখালী আই কেয়ার হসপিটাল',
    chamberAddress: 'কলেজ রোড (সরকারি কলেজের বিপরীতে), পটুয়াখালী সদর',
    roomNo: 'চেম্বার ০১',
    upazila: 'পটুয়াখালী সদর',
    phone: '01733-112244',
    serialPhone: '01733-112245',
    visitingHours: 'সকাল ৯:০০ - দুপুর ১:০০',
    availableDays: 'রবিবার - শুক্রবার',
    fee: '৳ ৫০০',
    followUpFee: '৳ ২৫০',
    reportTime: 'সকাল ১১:০০ - ১২:০০',
    services: [
      'কম্পিউটারাইজড চক্ষু পরীক্ষা ও আধুনিক চশমার পাওয়ার নির্ধারণ',
      'ইনজেকশন ও সেলাইবিহীন আধুনিক ফ্যাকো ছানি অপারেশন',
      'গ্লুকোমা ও ডায়াবেটিক রেটিনোপ্যাথি চিকিৎসা',
      'চোখের লাল হওয়া, চুলকানি ও কর্নিয়া আলসারের চিকিৎসা',
      'শিশুদের ট্যারা চোখ ও দৃষ্টি ত্রুটির বিশেষ চিকিৎসা'
    ],
    bio: 'আধুনিক জার্মান প্রযুক্তি ব্যবহার করে চোখের ছানি ও পাওয়ারের নির্ভুল সমাধানের বিশেষজ্ঞ।'
  },
  {
    id: 'doc-6',
    name: 'ডাঃ কামরুল হাসান',
    specialty: 'নাক, কান ও গলা (ENT) রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
    degree: 'MBBS, DLO, ট্রেইন্ড ইন মাইক্রো ইয়ার সার্জারি',
    designation: 'কনসালট্যান্ট (ইএনটি), বাউফল স্বাস্থ্য কমপ্লেক্স',
    bmdcReg: 'A-63301',
    experience: '১১ বছরের বিশেষজ্ঞ সেবা',
    chamber: 'সেবাসদন ডায়াগনস্টিক অ্যান্ড কনসালটেশন',
    chamberAddress: 'বাউফল উপজেলা মোড় (থানা রোডের মুখে), বাউফল',
    roomNo: 'রুম নং ২০২',
    upazila: 'বাউফল',
    phone: '01711-667788',
    serialPhone: '01711-667789',
    visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
    availableDays: 'প্রতিদিন',
    fee: '৳ ৫০০',
    followUpFee: '৳ ৩০০',
    reportTime: 'সন্ধ্যা ৭:০০ - ৮:০০',
    services: [
      'কানের পর্দা ফাটা, পুঁজ পড়া ও কম শোনার আধুনিক চিকিৎসা',
      'নাকের অ্যালার্জি, পলিপাস, সাইনুসাইটিস ও ডিএনএস অপারেশন',
      'টনসিল ও এডিনয়েডের অত্যাধুনিক মাইক্রোসার্জারি',
      'স্বরভঙ্গ, গলার ঘা ও থাইরয়েড গ্রন্থির চিকিৎসা',
      'কানে/নাকে আটকে থাকা বাহ্যিক বস্তু অপসারণ'
    ],
    bio: 'বাউফল ও সংলগ্ন এলাকার নাক-কান-গলার জটিল রোগের ক্ষেত্রে অত্যন্ত নিবেদিতপ্রাণ চিকিৎসক।'
  },
  {
    id: 'doc-7',
    name: 'ডাঃ নাজমুল হুদা',
    specialty: 'ডায়াবেটিস, থাইরয়েড ও হরমোন রোগ বিশেষজ্ঞ',
    degree: 'MBBS, CCD (বারডেম), PGT (এন্ডোক্রাইনোলজি)',
    designation: 'সিনিয়র ডায়াবেটোলজিস্ট, পটুয়াখালী ডায়াবেটিক হাসপাতাল',
    bmdcReg: 'A-67854',
    experience: '১৩ বছরের ডায়াবেটিস ও মেটাবলিক কেয়ার অভিজ্ঞতা',
    chamber: 'পটুয়াখালী ডায়াবেটিক অ্যান্ড হরমোন কেয়ার',
    chamberAddress: 'জেলখানা রোড, পটুয়াখালী সদর',
    roomNo: 'রুম নং ১০৪',
    upazila: 'পটুয়াখালী সদর',
    phone: '01716-554433',
    serialPhone: '01716-554434',
    visitingHours: 'বিকাল ৩:০০ - রাত ৮:০০',
    availableDays: 'শনিবার - বুধবার',
    fee: '৳ ৬০০',
    followUpFee: '৳ ৩০০',
    reportTime: 'সন্ধ্যা ৬:৩০ - ৭:৩০',
    services: [
      'টাইপ-১ ও টাইপ-২ ডায়াবেটিসের বৈজ্ঞানিক নিয়ন্ত্রণ ও ইনসুলিন থেরাপি',
      'গর্ভকালীন ডায়াবেটিস (GDM) ব্যবস্থাপনা',
      'থাইরয়েড সমস্যা (হাইপো ও হাইপারথাইরয়েডিজম) সমাধান',
      'ওজন বৃদ্ধি, স্থূলতা ও ফ্যাটি লিভার চিকিৎসা',
      'ডায়াবেটিক ফুট কেয়ার ও পায়ের ঘা প্রতিরোধ'
    ],
    bio: 'বারডেমের আধুনিক নির্দেশিকা অনুযায়ী পটুয়াখালীতে ডায়াবেটিস রোগীদের জীবনযাত্রার মানোন্নয়নে দীর্ঘদিনের সেবাপ্রদানকারী।'
  },
  {
    id: 'doc-8',
    name: 'ডাঃ মেহজাবীন সুলতানা',
    specialty: 'চর্ম, এলার্জি ও যৌন রোগ (VD) বিশেষজ্ঞ',
    degree: 'MBBS, DDV (চর্ম ও যৌন রোগ), ট্রেইন্ড ইন ডার্মাটোসার্জারি',
    designation: 'সহকারী অধ্যাপক (ডার্মাটোলজি), পটুয়াখালী মেডিকেল কলেজ',
    bmdcReg: 'A-59841',
    experience: '১০ বছরের চর্ম ও সৌন্দর্য চিকিৎসার অভিজ্ঞতা',
    chamber: 'স্কিন কেয়ার অ্যান্ড লেজার সেন্টার',
    chamberAddress: 'সদর হাসপাতাল রোড (ফার্মেসি মার্কেটের ৩য় তলা), পটুয়াখালী সদর',
    roomNo: 'রুম নং ৩০১',
    upazila: 'পটুয়াখালী সদর',
    phone: '01740-998877',
    serialPhone: '01740-998878',
    visitingHours: 'বিকাল ৪:৩০ - রাত ৮:৩০',
    availableDays: 'রবিবার - বৃহস্পতিবার',
    fee: '৳ ৬০০',
    followUpFee: '৳ ৩০০',
    reportTime: 'সন্ধ্যা ৭:০০ - ৭:৪৫',
    services: [
      'দাদ, খোসপাঁচড়া, স্ক্যাবিস ও ফাঙ্গাল ইনফেকশনের চিকিৎসা',
      'দীর্ঘমেয়াদী একজিমা, সোরিয়াসিস ও অ্যালার্জি নিরাময়',
      'ব্রণ, মেছতা ও মুখের কালো দাগ দূরীকরণ পরামর্শ',
      'চুল পড়া, টাক পড়া ও খুশকির আধুনিক চিকিৎসা',
      'যৌন ও প্রজননতন্ত্রের সংক্রামক ব্যাধি ও গোপন রোগ ব্যবস্থাপনা'
    ],
    bio: 'উপকূলীয় আর্দ্র আবহাওয়াজনিত চর্মরোগ ও অ্যালার্জি চিকিৎসায় অত্যন্ত সফল বিশেষজ্ঞ।'
  }
];

export const HOSPITALS: Hospital[] = [
  {
    id: 'hosp-1',
    name: 'পটুয়াখালী ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল',
    type: 'সরকারি হাসপাতাল',
    address: 'হাসপাতাল রোড, পটুয়াখালী সদর',
    upazila: 'পটুয়াখালী সদর',
    phone: '0441-62244',
    emergency: '01730-324888',
    ambulance: '01712-445566',
    beds: '২৫০ শয্যা (আইসিইউ ও সিসিইউ সমৃদ্ধ)'
  },
  {
    id: 'hosp-2',
    name: 'গলাচিপা উপজেলা স্বাস্থ্য কমপ্লেক্স',
    type: 'সরকারি হাসপাতাল',
    address: 'উপজেলা পরিষদ সংলগ্ন, গলাচিপা',
    upazila: 'গলাচিপা',
    phone: '04424-56123',
    emergency: '01712-998877',
    ambulance: '01711-887766',
    beds: '৫০ শয্যা'
  },
  {
    id: 'hosp-3',
    name: 'কলাপাড়া ৫০ শয্যা বিশিষ্ট হাসপাতাল ও কুয়াকাটা ২০ শয্যা হাসপাতাল',
    type: 'সরকারি হাসপাতাল',
    address: 'হাসপাতাল মোড়, কলাপাড়া, পটুয়াখালী',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    phone: '04425-56012',
    emergency: '01730-324900',
    ambulance: '01714-332211',
    beds: '৫০ + ২০ শয্যা'
  },
  {
    id: 'hosp-4',
    name: 'বাউফল উপজেলা স্বাস্থ্য কমপ্লেক্স',
    type: 'সরকারি হাসপাতাল',
    address: 'বাউফল সদর, পটুয়াখালী',
    upazila: 'বাউফল',
    phone: '04422-56100',
    emergency: '01730-324890',
    ambulance: '01712-114477',
    beds: '৫০ শয্যা'
  },
  {
    id: 'hosp-5',
    name: 'সাউথ বাংলা ডায়াগনস্টিক ও আধুনিক হাসপাতাল',
    type: 'বেসরকারি ক্লিনিক',
    address: 'লতিফ মিউনিসিপ্যাল রোডের সামনে, পটুয়াখালী সদর',
    upazila: 'পটুয়াখালী সদর',
    phone: '01718-556677',
    emergency: '01718-556678',
    ambulance: '01718-556679',
    beds: '৫০ শয্যা'
  }
];

export const BUS_SCHEDULES: BusSchedule[] = [
  {
    id: 'bus-1',
    operator: 'সাকুরা পরিবহন (Sakura Paribahan)',
    route: 'ঢাকা ⇌ পটুয়াখালী ⇌ কুয়াকাটা',
    busType: 'এসি',
    departureTime: 'সকাল ৭:০০, রাত ৮:৩০, রাত ১০:০০, রাত ১১:১৫',
    fare: '৳ ৯৫০ - ৳ ১,২০০',
    counterPhone: '01711-234567 (পটুয়াখালী কাউন্টার)',
    boardingPoint: 'পটুয়াখালী নতুন বাস টার্মিনাল / গাবতলী ও সায়দাবাদ (ঢাকা)'
  },
  {
    id: 'bus-2',
    operator: 'হানিফ এন্টারপ্রাইজ (Hanif Enterprise)',
    route: 'পটুয়াখালী ⇌ ঢাকা (পদ্মা সেতু হয়ে)',
    busType: 'নন-এসি',
    departureTime: 'সকাল ৬:৩০, ৮:০০, ১০:০০, দুপুর ১:০০, রাত ৯:০০',
    fare: '৳ ৬৫০ - ৳ ৭০০',
    counterPhone: '01713-049580',
    boardingPoint: 'পটুয়াখালী বাস টার্মিনাল / কলাপাড়া কাউন্টার'
  },
  {
    id: 'bus-3',
    operator: 'শ্যামলী এন আর ট্রাভেলস (Shyamoli NR)',
    route: 'ঢাকা ⇌ বরিশাল ⇌ পটুয়াখালী ⇌ কুয়াকাটা',
    busType: 'স্লিপার কোচ',
    departureTime: 'রাত ৯:৪৫ ও রাত ১০:৩০',
    fare: '৳ ১,৫০০ - ৳ ১,৮০০',
    counterPhone: '01711-889922',
    boardingPoint: 'কুয়াকাটা চৌরাস্তা ও পটুয়াখালী টার্মিনাল'
  },
  {
    id: 'bus-4',
    operator: 'গ্রীন সেন্টমার্টিন এক্সপ্রেস',
    route: 'চট্টগ্রাম ⇌ পটুয়াখালী ⇌ কুয়াকাটা',
    busType: 'এসি',
    departureTime: 'সন্ধ্যা ৭:৩০',
    fare: '৳ ১,৩৫০',
    counterPhone: '01819-334455',
    boardingPoint: 'পটুয়াখালী বাসস্ট্যান্ড'
  }
];

export const LAUNCH_SCHEDULES: LaunchSchedule[] = [
  {
    id: 'launch-1',
    name: 'এমভি মানামী (MV Manami)',
    route: 'ঢাকা (সদরঘাট) ⇌ পটুয়াখালী ঘাট',
    departureTime: 'ঢাকা থেকে বিকাল ৫:৩০ | পটুয়াখালী থেকে বিকাল ৫:০০',
    arrivalTime: 'পরদিন ভোর ৫:৩০',
    deckFare: '৳ ৩৫০',
    singleCabinFare: '৳ ১,৪০০',
    doubleCabinFare: '৳ ২,৬০০',
    vipCabinFare: '৳ ৫,৫০০ - ৳ ৮,০০০',
    counterPhone: '01712-445599',
    ghat: 'পটুয়াখালী প্রধান লঞ্চ টার্মিনাল'
  },
  {
    id: 'launch-2',
    name: 'এমভি সুন্দরবন-১২ (MV Sundarban 12)',
    route: 'ঢাকা ⇌ পটুয়াখালী ⇌ মির্জাগঞ্জ',
    departureTime: 'ঢাকা থেকে সন্ধ্যা ৬:০০ | পটুয়াখালী থেকে বিকাল ৫:১৫',
    arrivalTime: 'সকাল ৬:০০',
    deckFare: '৳ ৩৫০',
    singleCabinFare: '৳ ১,৪০০',
    doubleCabinFare: '৳ ২,৫০০',
    vipCabinFare: '৳ ৬,০০০',
    counterPhone: '01711-002233',
    ghat: 'পটুয়াখালী লঞ্চঘাট'
  },
  {
    id: 'launch-3',
    name: 'এমভি প্রিন্স আওলাদ (Prince Awlad)',
    route: 'ঢাকা ⇌ গলাচিপা ⇌ উলানিয়া ঘাট',
    departureTime: 'ঢাকা সদরঘাট থেকে বিকাল ৫:০০ | গলাচিপা থেকে দুপুর ২:৩০',
    arrivalTime: 'সকাল ৭:০০',
    deckFare: '৳ ৪০০',
    singleCabinFare: '৳ ১,৫০০',
    doubleCabinFare: '৳ ২,৮০০',
    vipCabinFare: '৳ ৬,৫০০',
    counterPhone: '01715-778899',
    ghat: 'গলাচিপা পুরাতন লঞ্চঘাট'
  },
  {
    id: 'launch-4',
    name: 'এমভি দোয়েল পাখি-১',
    route: 'ঢাকা ⇌ কলাপাড়া ⇌ কুয়াকাটা সংযোগ',
    departureTime: 'ঢাকা থেকে সন্ধ্যা ৬:৩০',
    arrivalTime: 'সকাল ৭:৩০',
    deckFare: '৳ ৩৫০',
    singleCabinFare: '৳ ১,৩৫০',
    doubleCabinFare: '৳ ২,৫০০',
    vipCabinFare: '৳ ৫,০০০',
    counterPhone: '01713-998811',
    ghat: 'কলাপাড়া নদী বন্দর ঘাট'
  }
];

export const TOURIST_PLACES: TouristPlace[] = [
  {
    id: 'tour-1',
    name: 'কুয়াকাটা সমুদ্র সৈকত (সাগরকন্যা)',
    location: 'কুয়াকাটা, কলাপাড়া, পটুয়াখালী',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    description: '১৮ কিমি দীর্ঘ মনোরম সমুদ্র সৈকত যেখান থেকে একই স্থানে দাঁড়িয়ে সূর্যোদয় ও সূর্যাস্তের অপূর্ব দৃশ্য উপভোগ করা যায়।',
    highlight: 'একই সৈকতে সূর্যোদয় ও সূর্যাস্ত দর্শন, পরিচ্ছন্ন দীর্ঘ বেলাভূমি',
    bestTimeToVisit: 'অক্টোবর থেকে মার্চ (শীত ও বসন্তকাল)',
    howToGo: 'পটুয়াখালী জেলা শহর থেকে সরাসরি বাসে ১.৫ ঘণ্টায় কুয়াকাটা চৌরাস্তা।',
    image: seaBeachImg,
    rating: 4.9
  },
  {
    id: 'tour-jhautala',
    name: 'পটুয়াখালী ঝাউবন ও ঝাউতলা সৈকত',
    location: 'কুয়াকাটা সৈকত সংলগ্ন ঝাউবন এলাকা',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    description: 'সৈকত ঘেঁষে বিস্তৃত চিরসবুজ সুবিশাল ঝাউবন। সমুদ্রের মৃদু বাতাস আর ঝাউপাতার শনশন শব্দে এক প্রশান্তিময় পরিবেশ।',
    highlight: 'সবুজ ঝাউগাছের ছায়া, সমুদ্রের স্নিগ্ধ বাতাস ও মনোরম ফটোগ্রাফি স্পট',
    bestTimeToVisit: 'সকাল ৮:০০ - বিকাল ৫:৩০',
    howToGo: 'কুয়াকাটা জিরো পয়েন্ট থেকে হেঁটে বা ইজিবাইকে পূর্ব দিকে ৫ মিনিট।',
    image: jhautalaImg,
    rating: 4.8
  },
  {
    id: 'tour-3',
    name: 'লেবুর চর ও লাল কাঁকড়ার দ্বীপ',
    location: 'কুয়াকাটা সৈকতের পূর্ব প্রান্ত, গঙ্গামতি সংলগ্ন',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    description: 'অসংখ্য রক্তবর্ণ লাল কাঁকড়ার ঝাঁক এবং তিন নদীর মোহনার অপরূপ মেলবন্ধন। এখানে বিকেলে তাজা মাছ ফ্রাই খাওয়ার বিশেষ সুযোগ রয়েছে।',
    highlight: 'লাখো লাল কাঁকড়ার ছোটাছুটি, তাজা রূপচাঁদা ফ্রাই ও সূর্যাস্ত',
    bestTimeToVisit: 'সকাল ৬:০০ - ৯:০০ ও বিকাল ৩:০০ - ৫:৩০',
    howToGo: 'কুয়াকাটা সৈকত থেকে মোটরসাইকেল বা বোটে ২০ মিনিট।',
    image: redCrabsImg,
    rating: 4.8
  },
  {
    id: 'tour-2',
    name: 'ফাতরার চর (ম্যানগ্রোভ বন)',
    location: 'সুন্দরবনের পূর্ব অংশ, কুয়াকাটার পশ্চিমে',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    description: 'প্রাকৃতিক সৌন্দর্যে ভরপুর ম্যানগ্রোভ বনভূমি, হরিণ, বানর ও দেশি-বিদেশি নানা প্রজাতির পাখির অভয়ারণ্য। ট্রলারে নদী পাড়ি দিয়ে যেতে হয়।',
    highlight: 'সুন্দরবনের ছোঁয়া, বন্যপ্রাণী ও গভীর খালের মধ্য দিয়ে রোমাঞ্চকর বোট সাফারি',
    bestTimeToVisit: 'সকাল ৮:০০ থেকে দুপুর ২:০০',
    howToGo: 'কুয়াকাটা ঘাট থেকে ইঞ্জিনচালিত ট্রলারে দেড় ঘণ্টার নদী ভ্রমণ।',
    image: fatrarForestImg,
    rating: 4.8
  },
  {
    id: 'tour-5',
    name: 'রাখাইন মহিলা মার্কেট ও মিশ্রিপাড়া সীমা বৌদ্ধ বিহার',
    location: 'মিশ্রিপাড়া ও কুয়াকাটা রাখাইন পল্লী',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    description: 'রাখাইন সম্প্রদায়ের ঐতিহ্যবাহী তাঁতের কাপড়, হস্তশিল্প এবং উপমহাদেশের অন্যতম প্রাচীন ও সুবিশাল অষ্টধাতু-পিতলের গৌতম বুদ্ধ মূর্তি।',
    highlight: 'ঐতিহ্যবাহী রাখাইন সংস্কৃতি ও সুবিশাল ঐতিহাসিক পিতলের বুদ্ধমূর্তি',
    bestTimeToVisit: 'সকাল ৯:০০ - রাত ৮:০০',
    howToGo: 'কুয়াকাটা সৈকত থেকে ভ্যানে বা ইজিবাইকে ১০ মিনিট।',
    image: rakhineTempleImg,
    rating: 4.7
  },
  {
    id: 'tour-6',
    name: 'সোনার চর বন্যপ্রাণী অভয়ারণ্য',
    location: 'রাঙ্গাবালী উপজেলা, পটুয়াখালী',
    upazila: 'রাঙ্গাবালী',
    description: 'বঙ্গোপসাগরের বুকে এক নির্জন স্বর্গ। হরিণ ও নানা প্রজাতির পাখির অবাধ বিচরণ এবং বিস্তৃত সোনালী বালুকাময় সৈকত। ক্যাম্পিংয়ের দারুণ জায়গা।',
    highlight: 'প্রকৃতির আদিম রূপ, সোনালী বালুকা সৈকত ও চিত্রা হরিণের পাল',
    bestTimeToVisit: 'নভেম্বর - ফেব্রুয়ারি',
    howToGo: 'গলাচিপা থেকে স্পিডবোট বা লঞ্চে রাঙ্গাবালী হয়ে সোনার চর।',
    image: sonarCharImg,
    rating: 4.9
  },
  {
    id: 'tour-payra-bridge',
    name: 'পায়রা মেগা সেতু (লেবুখালী সেতু)',
    location: 'লেবুখালী, পটুয়াখালী-বরিশাল মহাসড়ক',
    upazila: 'দুমকি',
    description: 'পায়রা নদীর ওপর নির্মিত দক্ষিণবঙ্গের দৃষ্টিনন্দন এক্সট্রাডোজড ক্যাবল-স্টেড মেগা সেতু। সন্ধ্যার আলোকসজ্জা দেখার মতো।',
    highlight: 'ঝুলন্ত তারের স্থাপত্যশৈলী ও নদী তীরের দৃষ্টিনন্দন রিভারভিউ',
    bestTimeToVisit: 'বিকেল ৪:০০ - রাত ৮:০০',
    howToGo: 'পটুয়াখালী জেলা শহর থেকে বাস বা সিএনজিতে ১৫-২০ মিনিট।',
    image: payraBridgeImg,
    rating: 4.9
  },
  {
    id: 'tour-4',
    name: 'পায়রা গভীর সমুদ্র বন্দর',
    location: 'রাবনাবাদ চ্যানেল, কলাপাড়া',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    description: 'বাংলাদেশের তৃতীয় আন্তর্জাতিক সমুদ্র বন্দর। বিশাল আধুনিক জেটি, টার্মিনাল ও সুবিশাল সাগরে বিদেশি জাহাজ নোঙরের দর্শনীয় দৃশ্য।',
    highlight: 'আন্তর্জাতিক গভীর সমুদ্র বন্দর ও রাবনাবাদ চ্যানেলের রূপ',
    bestTimeToVisit: 'সকাল ৯:০০ - বিকেল ৪:০০',
    howToGo: 'পটুয়াখালী সদর বা কলাপাড়া শহর থেকে মাইক্রোবাস বা সিএনজি যোগে।',
    image: payraPortImg,
    rating: 4.6
  },
  {
    id: 'tour-pstu',
    name: 'পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (PSTU)',
    location: 'দুমকি উপজেলা সদর, পটুয়াখালী',
    upazila: 'দুমকি',
    description: 'চিরসবুজ ছায়াঘেরা দক্ষিণবঙ্গের অন্যতম শীর্ষ বিজ্ঞান ও কৃষি উচ্চশিক্ষা প্রতিষ্ঠান। সুন্দর লেক ও সুশোভিত বৃক্ষরাজি।',
    highlight: 'সবুজ দৃষ্টিনন্দন ক্যাম্পাস, কেন্দ্রীয় লেক ও বোটানিক্যাল গার্ডেন',
    bestTimeToVisit: 'সকাল ৯:০০ - বিকাল ৫:০০',
    howToGo: 'পটুয়াখালী জেলা সদর থেকে সিএনজি বা বাসে ১৫ মিনিট।',
    image: pstuCampusImg,
    rating: 4.7
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'emg-1',
    title: 'জাতীয় জরুরি সেবা (পুলিশ, অ্যাম্বুলেন্স, ফায়ার)',
    category: 'জাতীয় জরুরি সেবা',
    number: '999',
    available: '২৪ ঘণ্টা বিনামূল্যে',
    description: 'যেকোনো বিপদে পুলিশ, ফায়ার সার্ভিস বা অ্যাম্বুলেন্স সহায়তার জন্য বিনামূল্যে কল করুন।'
  },
  {
    id: 'emg-2',
    title: 'পটুয়াখালী পুলিশ কন্ট্রোল রুম',
    category: 'পুলিশ',
    number: '01320-155998',
    alternateNumber: '0441-62222',
    available: '২৪ ঘণ্টা',
    description: 'জেলা পুলিশ সুপার কার্যালয় জরুরি কন্ট্রোল রুম।'
  },
  {
    id: 'emg-3',
    title: 'কুয়াকাটা ট্যুরিস্ট পুলিশ হেল্পলাইন',
    category: 'পুলিশ',
    number: '01320-155999',
    available: '২৪ ঘণ্টা পর্যটক সহায়তা',
    description: 'কুয়াকাটায় ভ্রমণরত পর্যটকদের নিরাপত্তা ও যেকোনো সহায়তায় ২৪ ঘণ্টা তৎপর।'
  },
  {
    id: 'emg-4',
    title: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স পটুয়াখালী',
    category: 'ফায়ার সার্ভিস',
    number: '16163',
    alternateNumber: '01730-002444',
    available: '২৪ ঘণ্টা',
    description: 'অগ্নিকাণ্ড, লঞ্চ বা সড়ক দুর্ঘটনায় তাৎক্ষণিক উদ্ধারকারী দল।'
  },
  {
    id: 'emg-5',
    title: 'উপকূলীয় আবহাওয়া ও দুর্যোগ বার্তা',
    category: 'উপকূলীয় দুর্যোগ',
    number: '1090',
    available: 'টোল ফ্রি ২৪ ঘণ্টা',
    description: 'বঙ্গোপসাগরে ঘূর্ণিঝড় সতর্কবার্তা, সমুদ্র সংকেত ও জলোচ্ছ্বাসের তথ্য পেতে ডায়াল করুন।'
  },
  {
    id: 'emg-6',
    title: 'সরকারি স্বাস্থ্য বাতায়ন',
    category: 'হাসপাতাল',
    number: '16263',
    available: '২৪ ঘণ্টা বিনামূল্যে পরামর্শ',
    description: 'ঘরে বসেই সরকারি নিবন্ধিত চিকিৎসকের স্বাস্থ্য পরামর্শ ও তথ্য।'
  },
  {
    id: 'emg-7',
    title: 'শিশু সহায়তা হেল্পলাইন',
    category: 'জাতীয় জরুরি সেবা',
    number: '1098',
    available: 'টোল ফ্রি',
    description: 'ঝুঁকিতে থাকা শিশুদের সুরক্ষা ও বাল্যবিয়ে প্রতিরোধে তথ্য জানান।'
  },
  {
    id: 'emg-8',
    title: 'নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন',
    category: 'জাতীয় জরুরি সেবা',
    number: '109',
    available: '২৪ ঘণ্টা',
    description: 'নির্যাতনের শিকার নারী ও শিশুদের দ্রুত সরকারি আইনি ও সামাজিক সহায়তা।'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'আমখোলা ইউনিয়ন পরিষদে ভ্যাকসিন ক্যাম্প',
    description: 'আগামী ২৮ অক্টোবর ২০২৬, বুধবার সকাল ৯টা থেকে দুপুর ২টা পর্যন্ত আমখোলা ইউনিয়ন পরিষদ প্রাঙ্গণে বিনামূল্যে স্বাস্থ্য ক্যাম্প ও টিকা প্রদান করা হবে।',
    date: 'আজ, ২৬ অক্টোবর ২০২৬',
    time: '১০:২৪ AM',
    category: 'জরুরি বিজ্ঞপ্তি',
    unread: true
  },
  {
    id: 'notif-2',
    title: 'নতুন রাস্তা নির্মাণ কাজের উদ্বোধন',
    description: 'আমখোলা ইউনিয়নের দারীবাহেরচর গ্রামে নতুন রাস্তা নির্মাণ কাজের উদ্বোধন করা হয়েছে। বিস্তারিত জানতে অ্যাডমিন প্যানেলে দেখুন।',
    date: 'আজ, ২৬ অক্টোবর ২০২৬',
    time: '০৯:১৫ AM',
    category: 'ইউনিয়ন সংবাদ',
    unread: true
  },
  {
    id: 'notif-3',
    title: 'পটুয়াখালীতে আগামী ৩ দিন বৃষ্টির সম্ভাবনা',
    description: 'আবহাওয়া অধিদপ্তরের পূর্বাভাস অনুযায়ী, আগামী ৩ দিন মাঝারি থেকে ভারী বৃষ্টিপাতের সম্ভাবনা রয়েছে। নদী উপকূলের বাসিন্দাদের সতর্ক থাকার পরামর্শ দেওয়া হলো।',
    date: 'আজ, ২৬ অক্টোবর ২০২৬',
    time: '০৮:২০ AM',
    category: 'আবহাওয়া',
    unread: true
  },
  {
    id: 'notif-4',
    title: 'উপজেলা পরিষদের সভার নোটিশ',
    description: 'আগামী ২৯ অক্টোবর ২০২৬ তারিখে আমখোলা ইউনিয়ন পরিষদ কক্ষে মাসিক সাধারণ সভা অনুষ্ঠিত হবে। সকল ইউপি সদস্যদের যথাসময়ে উপস্থিতি কাম্য।',
    date: 'গতকাল, ২৫ অক্টোবর ২০২৬',
    time: '০৫:৩২ PM',
    category: 'সরকারি বিজ্ঞপ্তি',
    unread: false
  },
  {
    id: 'notif-5',
    title: 'পানি সরবরাহের সময়সূচি পরিবর্তন',
    description: 'আজ থেকে আমখোলা গ্রামে বিশুদ্ধ সুপেয় পানি সরবরাহের সময় দুপুর ১টা থেকে বিকেল ৪টা পর্যন্ত নির্ধারণ করা হলো। লাইন মেরামতের কাজ সমাপ্ত হয়েছে।',
    date: 'গতকাল, ২৫ অক্টোবর ২০২৬',
    time: '১১:১৮ AM',
    category: 'সেবা আপডেট',
    unread: false
  },
  {
    id: 'notif-6',
    title: 'স্বেচ্ছাসেবক নিবন্ধন শুরু',
    description: 'আমখোলা ইউনিয়ন যুব উন্নয়ন ক্লাবের পক্ষ থেকে নতুন স্বেচ্ছাসেবক নিবন্ধন কার্যক্রম শুরু হয়েছে। আগ্রহীরা আগামী ৫ নভেম্বর পর্যন্ত আবেদন করতে পারেন।',
    date: '২৫ অক্টোবর ২০২৬ (আগের দিন)',
    time: '০৪:৪৫ PM',
    category: 'ইউনিয়ন সংবাদ',
    unread: false
  }
];

export const INITIAL_USERS: RegisteredUser[] = [
  {
    id: 'usr-1',
    name: 'রহিম উদ্দিন',
    mobile: '01712-345678',
    area: 'আমখোলা',
    upazila: 'গলাচিপা',
    joinedDate: '২৬ অক্টোবর ২০২৬',
    status: 'সক্রিয়',
    postsCount: 4,
    commentsCount: 12
  },
  {
    id: 'usr-2',
    name: 'সুমাইয়া আক্তার',
    mobile: '01845-678901',
    area: 'চিংগুরিয়া',
    upazila: 'পটুয়াখালী সদর',
    joinedDate: '২৫ অক্টোবর ২০২৬',
    status: 'সক্রিয়',
    postsCount: 2,
    commentsCount: 8
  },
  {
    id: 'usr-3',
    name: 'মোঃ নাসির',
    mobile: '01988-776655',
    area: 'দারী বাহেরচর',
    upazila: 'গলাচিপা',
    joinedDate: '২৫ অক্টোবর ২০২৬',
    status: 'সক্রিয়',
    postsCount: 7,
    commentsCount: 15
  },
  {
    id: 'usr-4',
    name: 'আফরোজ বেগম',
    mobile: '01726-554433',
    area: 'কাখনবাড়িয়া',
    upazila: 'বাউফল',
    joinedDate: '২৪ অক্টোবর ২০২৬',
    status: 'সক্রিয়',
    postsCount: 1,
    commentsCount: 3
  },
  {
    id: 'usr-5',
    name: 'ইমরান হোসেন',
    mobile: '01670-223344',
    area: 'ডাঙ্গা',
    upazila: 'কলাপাড়া (কুয়াকাটা)',
    joinedDate: '২৪ অক্টোবর ২০২৬',
    status: 'সক্রিয়',
    postsCount: 5,
    commentsCount: 10
  }
];

export const INITIAL_COMPLAINTS: CitizenComplaint[] = [
  {
    id: 'comp-1',
    trackingNo: 'CP20261025',
    title: 'আমখোলা দক্ষিণ বাজার ব্রিজের পাটাতন মেরামত প্রয়োজন',
    category: 'যোগাযোগ ও সড়ক',
    area: 'আমখোলা, গলাচিপা',
    date: '২৫ অক্টোবর ২০২৬',
    status: 'তদন্তাধীন',
    applicant: 'কাব্য হাসান'
  },
  {
    id: 'comp-2',
    trackingNo: 'CP20261020',
    title: 'কৃষি সেচের লাইন বিদ্যুৎ বিভ্রাট সমস্যা',
    category: 'বিদ্যুৎ',
    area: 'দারীবাহেরচর',
    date: '২০ অক্টোবর ২০২৬',
    status: 'নিষ্পন্ন',
    applicant: 'মোঃ নাসির'
  },
  {
    id: 'comp-3',
    trackingNo: 'CP20261014',
    title: 'নলকূপে লবণাক্ততা ও বিশুদ্ধ পানির সংকট',
    category: 'পানি সরবরাহ',
    area: 'চিংগুরিয়া',
    date: '১৪ অক্টোবর ২০২৬',
    status: 'নিষ্পন্ন',
    applicant: 'রহিম উদ্দিন'
  }
];

export const UPAZILAS: Upazila[] = [
  'সকল এলাকা',
  'পটুয়াখালী সদর',
  'গলাচিপা',
  'কলাপাড়া (কুয়াকাটা)',
  'বাউফল',
  'মির্জাগঞ্জ',
  'দশমিনা',
  'দুমকি',
  'রাঙ্গাবালী'
];

export const DISTRICT_INFO = {
  name: 'পটুয়াখালী জেলা',
  tagline: 'আমার এলাকা, আমার পরিচয়',
  established: '১৯৬৯ (জেলা হিসেবে গঠন)',
  area: '৩,২২০.১৫ বর্গকিলোমিটার',
  population: 'প্রায় ১৭ লাখ+',
  rivers: 'পায়রা, লোহালিয়া, আগুনমুখা, রাবনাবাদ, কাজলা, তেঁতুলিয়া',
  attractions: 'কুয়াকাটা সমুদ্র সৈকত, পায়রা বন্দর, ফাতরার চর, লেবুর চর, সীমা বৌদ্ধ বিহার, সোনার চর',
  specialty: 'সমুদ্রের ইলিশ, মহিষের দুধের দই, গলাচিপার সুস্বাদু তরমুজ, নারিকেল ও রাখাইন তাঁতবস্ত্র'
};
