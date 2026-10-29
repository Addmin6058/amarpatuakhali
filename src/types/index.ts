export type Upazila =
  | 'সকল এলাকা'
  | 'পটুয়াখালী সদর'
  | 'গলাচিপা'
  | 'কলাপাড়া (কুয়াকাটা)'
  | 'বাউফল'
  | 'মির্জাগঞ্জ'
  | 'দশমিনা'
  | 'দুমকি'
  | 'রাঙ্গাবালী';

export interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  motto?: string;
  badge: string;
  image: string;
  actionText: string;
  targetCategory: string;
  tagColor?: string;
  active?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName?: string;
  icon?: string;
  color?: string;
  gradient?: string;
  badge?: string;
  description: string;
  group?: string;
  phone?: string;
  address?: string;
  details?: string;
  isCustom?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  degree: string;
  chamber: string;
  upazila: Upazila;
  phone: string;
  visitingHours: string;
  fee: string;
  availableDays: string;
  designation?: string;
  bmdcReg?: string;
  experience?: string;
  chamberAddress?: string;
  serialPhone?: string;
  followUpFee?: string;
  reportTime?: string;
  services?: string[];
  bio?: string;
  avatar?: string;
  roomNo?: string;
}

export interface Hospital {
  id: string;
  name: string;
  type: 'সরকারি হাসপাতাল' | 'বেসরকারি ক্লিনিক' | 'ডায়াগনস্টিক সেন্টার';
  address: string;
  upazila: Upazila;
  phone: string;
  emergency: string;
  ambulance: string;
  beds: string;
}

export interface BusSchedule {
  id: string;
  operator: string;
  route: string;
  busType: 'এসি' | 'নন-এসি' | 'স্লিপার কোচ';
  departureTime: string;
  fare: string;
  counterPhone: string;
  boardingPoint: string;
}

export interface LaunchSchedule {
  id: string;
  name: string;
  route: string;
  departureTime: string;
  arrivalTime: string;
  deckFare: string;
  singleCabinFare: string;
  doubleCabinFare: string;
  vipCabinFare: string;
  counterPhone: string;
  ghat: string;
}

export interface TouristPlace {
  id: string;
  name: string;
  location: string;
  upazila: Upazila;
  description: string;
  highlight: string;
  bestTimeToVisit: string;
  howToGo: string;
  image: string;
  rating: number;
}

export interface EmergencyContact {
  id: string;
  title: string;
  category: 'জাতীয় জরুরি সেবা' | 'পুলিশ' | 'ফায়ার সার্ভিস' | 'হাসপাতাল' | 'উপকূলীয় দুর্যোগ' | 'প্রশাসন';
  number: string;
  alternateNumber?: string;
  available: string;
  description: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  category: 'জরুরি বিজ্ঞপ্তি' | 'সরকারি বিজ্ঞপ্তি' | 'ইউনিয়ন সংবাদ' | 'সেবা আপডেট' | 'আবহাওয়া' | 'অন্যান্য';
  unread: boolean;
  link?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  createdAt: string;
  status: 'নতুন' | 'প্রক্রিয়াধীন' | 'সমাধানকৃত';
}

export interface RegisteredUser {
  id: string;
  name: string;
  mobile: string;
  area: string;
  upazila: Upazila;
  joinedDate: string;
  status: 'সক্রিয়' | 'নিষ্ক্রিয়';
  avatar?: string;
  postsCount: number;
  commentsCount: number;
}

export interface CitizenComplaint {
  id: string;
  trackingNo: string;
  title: string;
  category: string;
  area: string;
  date: string;
  status: 'প্রাপ্ত' | 'তদন্তাধীন' | 'নিষ্পন্ন';
  applicant: string;
}
