import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const RealisticDoctorIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="docSkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffdbb5" />
        <stop offset="100%" stopColor="#f3c299" />
      </linearGradient>
      <linearGradient id="docHair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2c3e50" />
        <stop offset="100%" stopColor="#1a252f" />
      </linearGradient>
      <linearGradient id="docCoat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    {/* Hair back */}
    <path d="M20 28C18 20 23 11 32 11C41 11 46 20 44 28C44 35 41 40 41 40L23 40C23 40 20 35 20 28Z" fill="url(#docHair)" />
    {/* Body / Coat */}
    <path d="M16 60C16 50 20 44 27 42L37 42C44 44 48 50 48 60Z" fill="url(#docCoat)" />
    <path d="M28 42L32 49L36 42L32 44Z" fill="#38bdf8" />
    <path d="M20 60L26 44L32 54L38 44L44 60Z" fill="#f8fafc" />
    {/* Stethoscope */}
    <path d="M26 43C26 50 30 54 32 54C34 54 38 50 38 43" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="32" cy="55" r="2.5" fill="#94a3b8" />
    {/* Neck */}
    <rect x="29" y="36" width="6" height="8" rx="2" fill="url(#docSkin)" />
    {/* Face */}
    <ellipse cx="32" cy="27" rx="8.5" ry="9.5" fill="url(#docSkin)" />
    {/* Facial features */}
    <ellipse cx="29" cy="26" rx="1.1" ry="1.4" fill="#1e293b" />
    <ellipse cx="35" cy="26" rx="1.1" ry="1.4" fill="#1e293b" />
    <path d="M30.5 31C31 32 33 32 33.5 31" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />
    {/* Hair front/bangs */}
    <path d="M23 25C24 17 28 14 32 14C37 14 41 18 41 24C39 21 36 20 32 20C28 20 25 22 23 25Z" fill="url(#docHair)" />
    {/* Medical clipboard */}
    <rect x="36" y="44" width="13" height="17" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
    <rect x="39" y="42" width="7" height="3" rx="1" fill="#cbd5e1" />
    <line x1="39" y1="48" x2="46" y2="48" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="39" y1="52" x2="46" y2="52" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="39" y1="56" x2="43" y2="56" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const RealisticHospitalIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hospWall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="hospRoof" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    {/* Base shadow */}
    <ellipse cx="32" cy="59" rx="26" ry="3" fill="#cbd5e1" opacity="0.6" />
    {/* Main Building */}
    <rect x="18" y="16" width="28" height="42" rx="2" fill="url(#hospWall)" stroke="#94a3b8" strokeWidth="1" />
    {/* Side Wings */}
    <rect x="10" y="28" width="10" height="30" rx="1.5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
    <rect x="44" y="28" width="10" height="30" rx="1.5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
    {/* Top Header Sign */}
    <rect x="23" y="10" width="18" height="8" rx="2" fill="url(#hospRoof)" />
    {/* Red Cross */}
    <rect x="30" y="11.5" width="4" height="5" fill="#ef4444" rx="0.5" />
    <rect x="28.5" y="12.5" width="7" height="3" fill="#ef4444" rx="0.5" />
    {/* Windows */}
    <g fill="#38bdf8">
      <rect x="22" y="22" width="4" height="4" rx="0.8" />
      <rect x="30" y="22" width="4" height="4" rx="0.8" />
      <rect x="38" y="22" width="4" height="4" rx="0.8" />

      <rect x="22" y="30" width="4" height="4" rx="0.8" />
      <rect x="30" y="30" width="4" height="4" rx="0.8" />
      <rect x="38" y="30" width="4" height="4" rx="0.8" />

      <rect x="22" y="38" width="4" height="4" rx="0.8" />
      <rect x="30" y="38" width="4" height="4" rx="0.8" />
      <rect x="38" y="38" width="4" height="4" rx="0.8" />

      <rect x="13" y="34" width="4" height="4" rx="0.8" />
      <rect x="13" y="42" width="4" height="4" rx="0.8" />
      <rect x="47" y="34" width="4" height="4" rx="0.8" />
      <rect x="47" y="42" width="4" height="4" rx="0.8" />
    </g>
    {/* Glass Door Entrance */}
    <rect x="28" y="48" width="8" height="10" fill="#0284c7" rx="1" />
    <line x1="32" y1="48" x2="32" y2="58" stroke="#ffffff" strokeWidth="0.8" />
  </svg>
);

export const RealisticBusIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="busBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="busGlass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    {/* Wheels */}
    <rect x="15" y="48" width="7" height="9" rx="2" fill="#1e293b" />
    <rect x="42" y="48" width="7" height="9" rx="2" fill="#1e293b" />
    {/* Body */}
    <rect x="13" y="14" width="38" height="39" rx="7" fill="url(#busBody)" stroke="#065f46" strokeWidth="1.2" />
    {/* Windshield */}
    <rect x="16" y="20" width="32" height="16" rx="3" fill="url(#busGlass)" stroke="#0369a1" strokeWidth="1" />
    {/* Destination Board */}
    <rect x="22" y="16" width="20" height="3" rx="1" fill="#facc15" />
    {/* Grille */}
    <rect x="22" y="42" width="20" height="5" rx="1.5" fill="#0f172a" />
    <line x1="24" y1="44.5" x2="40" y2="44.5" stroke="#475569" strokeWidth="1" />
    {/* Headlights */}
    <circle cx="18" cy="42" r="2.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
    <circle cx="46" cy="42" r="2.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
    {/* Side Mirrors */}
    <rect x="9" y="24" width="3" height="6" rx="1" fill="#047857" />
    <rect x="52" y="24" width="3" height="6" rx="1" fill="#047857" />
  </svg>
);

export const RealisticTrainIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trainGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    {/* Railway Tracks */}
    <line x1="10" y1="57" x2="54" y2="57" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="16" y1="54" x2="20" y2="60" stroke="#94a3b8" strokeWidth="2" />
    <line x1="28" y1="54" x2="32" y2="60" stroke="#94a3b8" strokeWidth="2" />
    <line x1="40" y1="54" x2="44" y2="60" stroke="#94a3b8" strokeWidth="2" />
    {/* Bullet Train Locomotive */}
    <path d="M16 28C16 16 22 13 32 13C42 13 48 16 48 28L48 50C48 52 46 54 44 54L20 54C18 54 16 52 16 50Z" fill="url(#trainGrad)" stroke="#075985" strokeWidth="1.2" />
    {/* Windshield */}
    <path d="M19 26C19 20 22 18 32 18C42 18 45 20 45 26L45 32L19 32Z" fill="#0284c7" />
    {/* Stripe */}
    <rect x="16" y="37" width="32" height="4" fill="#ffffff" />
    {/* Headlights */}
    <circle cx="23" cy="46" r="3" fill="#fef08a" stroke="#eab308" strokeWidth="1" />
    <circle cx="41" cy="46" r="3" fill="#fef08a" stroke="#eab308" strokeWidth="1" />
  </svg>
);

export const RealisticLaunchIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hullGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="cabinGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    {/* Golden Sun */}
    <circle cx="48" cy="15" r="6" fill="#f59e0b" />
    {/* Rays */}
    <line x1="48" y1="6" x2="48" y2="8" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="55" y1="15" x2="57" y2="15" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
    {/* Top Deck */}
    <rect x="24" y="24" width="18" height="6" rx="1.5" fill="url(#cabinGrad)" stroke="#94a3b8" strokeWidth="0.8" />
    <circle cx="33" cy="27" r="1.5" fill="#38bdf8" />
    {/* Master Cabin */}
    <rect x="19" y="30" width="28" height="8" rx="1.5" fill="url(#cabinGrad)" stroke="#94a3b8" strokeWidth="0.8" />
    {/* Cabin Windows */}
    <g fill="#0284c7">
      <circle cx="24" cy="34" r="1.5" />
      <circle cx="29" cy="34" r="1.5" />
      <circle cx="34" cy="34" r="1.5" />
      <circle cx="39" cy="34" r="1.5" />
      <circle cx="44" cy="34" r="1.5" />
    </g>
    {/* Chimney / Funnel */}
    <rect x="36" y="20" width="4" height="5" fill="#ef4444" rx="0.5" />
    <rect x="36" y="20" width="4" height="1.5" fill="#1e293b" />
    {/* Boat Hull */}
    <path d="M12 40L16 48C18 51 24 51 32 51C40 51 46 51 52 47L56 40Z" fill="url(#hullGrad)" />
    <path d="M12 40L56 40L54 43L14 43Z" fill="#ef4444" />
    {/* Water Waves */}
    <path d="M8 52C13 50 16 54 21 52C26 50 29 54 34 52C39 50 42 54 47 52C52 50 55 54 60 52" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 56C17 55 20 57 25 56C30 55 33 57 38 56C43 55 46 57 51 56" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const RealisticTouristIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circular background */}
    <circle cx="32" cy="32" r="24" fill="#67e8f9" />
    {/* Golden Sun */}
    <circle cx="42" cy="22" r="6" fill="#facc15" />
    {/* Rolling Green Hills */}
    <path d="M12 44C16 36 28 34 38 42C44 38 50 37 54 44L54 52C50 55 42 56 32 56C22 56 16 54 12 52Z" fill="#22c55e" />
    <path d="M8 48C14 40 24 40 32 46C38 43 46 44 56 48L56 54C50 56 42 56 32 56C22 56 14 56 8 54Z" fill="#16a34a" />
    {/* River Flow */}
    <path d="M22 56C26 50 28 48 30 46C32 48 36 52 38 56" fill="#38bdf8" />
    {/* Palm Tree */}
    <path d="M22 44C23 38 25 34 29 32" stroke="#78350f" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M29 32C26 29 22 30 20 32" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M29 32C30 28 34 28 37 30" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M29 32C28 27 30 25 32 24" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const RealisticSchoolIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Roof Flag */}
    <line x1="32" y1="10" x2="32" y2="18" stroke="#64748b" strokeWidth="1.5" />
    <path d="M32 11L40 13.5L32 16Z" fill="#ef4444" />
    {/* Clock Tower Roof */}
    <polygon points="32,18 24,25 40,25" fill="#ea580c" />
    {/* Tower */}
    <rect x="25" y="25" width="14" height="10" fill="#fed7aa" stroke="#c2410c" strokeWidth="0.8" />
    <circle cx="32" cy="30" r="3.2" fill="#ffffff" stroke="#ea580c" strokeWidth="0.8" />
    <line x1="32" y1="30" x2="32" y2="28" stroke="#1e293b" strokeWidth="0.8" />
    <line x1="32" y1="30" x2="33.5" y2="30" stroke="#1e293b" strokeWidth="0.8" />
    {/* Main Building Body */}
    <rect x="14" y="35" width="36" height="20" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" rx="1.5" />
    {/* Main Entrance Door */}
    <rect x="28" y="44" width="8" height="11" fill="#78350f" rx="1" />
    {/* Windows */}
    <g fill="#38bdf8">
      <rect x="17" y="38" width="4" height="5" rx="0.5" />
      <rect x="23" y="38" width="4" height="5" rx="0.5" />
      <rect x="37" y="38" width="4" height="5" rx="0.5" />
      <rect x="43" y="38" width="4" height="5" rx="0.5" />
      <rect x="17" y="46" width="4" height="5" rx="0.5" />
      <rect x="43" y="46" width="4" height="5" rx="0.5" />
    </g>
  </svg>
);

export const RealisticMarketIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Yellow Shopping Bag */}
    <path d="M14 26L18 52C18 54 20 55 22 55L34 55C36 55 38 54 38 52L42 26Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.2" />
    <path d="M22 26C22 19 25 15 28 15C31 15 34 19 34 26" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" />
    {/* Red Heart on yellow bag */}
    <path d="M28 35C28 32 25 32 24 34C23 32 20 32 20 35C20 38 24 41 24 41C24 41 28 38 28 35Z" fill="#ef4444" />
    {/* Magenta/Pink Bag in front */}
    <path d="M30 32L34 53C34 55 36 56 38 56L48 56C50 56 52 55 52 53L56 32Z" fill="#ec4899" stroke="#be185d" strokeWidth="1.2" />
    <path d="M38 32C38 25 41 22 43 22C45 22 48 25 48 32" stroke="#9d174d" strokeWidth="2" strokeLinecap="round" />
    {/* Shopping cart icon on pink bag */}
    <g stroke="#ffffff" strokeWidth="1.2" fill="none">
      <path d="M38 41L41 41L43 47L48 47" />
      <circle cx="43" cy="49" r="1" fill="#ffffff" />
      <circle cx="47" cy="49" r="1" fill="#ffffff" />
    </g>
  </svg>
);

export const RealisticFireIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fire Ladder */}
    <rect x="22" y="16" width="26" height="4" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" rx="0.5" />
    <line x1="28" y1="16" x2="28" y2="20" stroke="#475569" strokeWidth="0.8" />
    <line x1="34" y1="16" x2="34" y2="20" stroke="#475569" strokeWidth="0.8" />
    <line x1="40" y1="16" x2="40" y2="20" stroke="#475569" strokeWidth="0.8" />
    {/* Blue Beacon Light */}
    <rect x="18" y="17" width="4" height="3" rx="1" fill="#38bdf8" />
    {/* Red Fire Truck Body */}
    <path d="M12 28C12 24 14 21 18 21L25 21L27 28L54 28C56 28 58 30 58 32L58 48C58 49 57 50 56 50L12 50Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" />
    {/* Cabin Windshield */}
    <polygon points="17,23 24,23 26,29 15,29" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
    {/* White Side Stripe */}
    <rect x="27" y="34" width="31" height="4" fill="#ffffff" />
    {/* Wheels */}
    <circle cx="21" cy="50" r="5.5" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
    <circle cx="21" cy="50" r="2.2" fill="#94a3b8" />
    <circle cx="47" cy="50" r="5.5" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
    <circle cx="47" cy="50" r="2.2" fill="#94a3b8" />
  </svg>
);

export const RealisticPoliceIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body Uniform */}
    <path d="M18 58C18 48 22 43 32 43C42 43 46 48 46 58Z" fill="#1e3a8a" stroke="#172554" strokeWidth="1" />
    <polygon points="32,43 30,52 32,54 34,52" fill="#eab308" />
    <polygon points="30,43 32,47 34,43" fill="#ffffff" />
    {/* Epaulets */}
    <rect x="18" y="44" width="5" height="2" fill="#eab308" rx="0.5" />
    <rect x="41" y="44" width="5" height="2" fill="#eab308" rx="0.5" />
    {/* Neck */}
    <rect x="29" y="37" width="6" height="7" fill="#ffdbb5" rx="1" />
    {/* Face */}
    <ellipse cx="32" cy="30" rx="7.5" ry="8.5" fill="#ffdbb5" />
    <ellipse cx="29" cy="30" rx="1" ry="1.2" fill="#1e293b" />
    <ellipse cx="35" cy="30" rx="1" ry="1.2" fill="#1e293b" />
    <path d="M30.5 34C31 35 33 35 33.5 34" stroke="#991b1b" strokeWidth="1" strokeLinecap="round" />
    {/* Police Cap */}
    <path d="M22 24C22 17 26 14 32 14C38 14 42 17 42 24Z" fill="#1e3a8a" />
    {/* Cap Visor */}
    <path d="M20 24C23 26 41 26 44 24L46 26C42 28 22 28 18 26Z" fill="#0f172a" />
    {/* Cap Golden Star Badge */}
    <circle cx="32" cy="20" r="2.8" fill="#eab308" />
  </svg>
);

export const RealisticCourierIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scooter Wheels */}
    <circle cx="18" cy="48" r="6" fill="#1e293b" />
    <circle cx="18" cy="48" r="2.5" fill="#cbd5e1" />
    <circle cx="46" cy="48" r="6" fill="#1e293b" />
    <circle cx="46" cy="48" r="2.5" fill="#cbd5e1" />
    {/* Scooter Body */}
    <path d="M18 48L24 42L36 42L46 48L40 40L24 40Z" fill="#0284c7" />
    {/* Handlebar */}
    <line x1="24" y1="40" x2="28" y2="28" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="26" y1="28" x2="31" y2="28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
    {/* Parcel Box on back */}
    <rect x="36" y="28" width="13" height="12" rx="1.5" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
    <line x1="42.5" y1="28" x2="42.5" y2="40" stroke="#b45309" strokeWidth="1" />
    {/* Rider Body & Blue Helmet */}
    <circle cx="32" cy="20" r="5.5" fill="#0284c7" />
    <path d="M33 21L37 21" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 26L34 38L38 38L34 26Z" fill="#0369a1" />
  </svg>
);

export const RealisticElectricityIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="meterGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1e40af" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="boltGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>
    </defs>
    {/* Blue Outer Disc */}
    <circle cx="32" cy="32" r="23" fill="url(#meterGrad)" stroke="#3b82f6" strokeWidth="2" />
    {/* Gauge ticks */}
    <circle cx="32" cy="32" r="18" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" fill="none" />
    {/* High-voltage Lightning Bolt */}
    <polygon points="34,14 22,34 31,34 27,50 43,28 34,28" fill="url(#boltGrad)" stroke="#ffffff" strokeWidth="1" />
  </svg>
);

export const RealisticWaterIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pipe and Tap */}
    <rect x="12" y="24" width="18" height="7" rx="1.5" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
    <path d="M30 24L38 24C41 24 43 26 43 29L43 36L35 36L35 29C35 28 34 27 33 27L30 27Z" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
    {/* Tap Handle on top */}
    <rect x="33" y="19" width="4" height="5" fill="#38bdf8" />
    <rect x="29" y="17" width="12" height="3" rx="1" fill="#0369a1" />
    {/* Water Droplet falling */}
    <path d="M39 42C39 42 35 46 35 49C35 52 37 54 39 54C41 54 43 52 43 49C43 46 39 42 39 42Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
  </svg>
);

export const RealisticGasIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Red LPG Cylinder Body */}
    <rect x="20" y="22" width="24" height="32" rx="7" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
    {/* Cylinder Base */}
    <ellipse cx="32" cy="54" rx="10" ry="2.5" fill="#991b1b" />
    {/* Top Collar / Ring */}
    <rect x="26" y="14" width="12" height="8" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
    <circle cx="32" cy="18" r="2.5" fill="#1e293b" />
    {/* Flame Emblem */}
    <path d="M32 30C32 30 26 36 26 40C26 43 28.5 46 32 46C35.5 46 38 43 38 40C38 36 32 30 32 30Z" fill="#fbbf24" />
    <path d="M32 35C32 35 29 38 29 41C29 43 30.5 45 32 45C33.5 45 35 43 35 41C35 38 32 35 32 35Z" fill="#f97316" />
  </svg>
);

export const RealisticFuelIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fuel Pump Body */}
    <rect x="18" y="18" width="22" height="38" rx="3" fill="#0284c7" stroke="#0369a1" strokeWidth="1.2" />
    {/* Display Screen */}
    <rect x="22" y="24" width="14" height="10" rx="1" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.8" />
    <line x1="24" y1="28" x2="33" y2="28" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="31" x2="30" y2="31" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
    {/* Pump Hose and Nozzle */}
    <path d="M40 28C44 28 48 30 48 36L48 44C48 47 46 48 44 48L44 40L42 38" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" fill="none" />
  </svg>
);

export const RealisticAgricultureIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Conical Straw Hat */}
    <polygon points="32,13 18,25 46,25" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
    <ellipse cx="32" cy="25" rx="14" ry="3" fill="#eab308" />
    {/* Farmer Face */}
    <circle cx="32" cy="30" r="6" fill="#ffdbb5" />
    <ellipse cx="30" cy="30" rx="0.8" ry="1" fill="#1e293b" />
    <ellipse cx="34" cy="30" rx="0.8" ry="1" fill="#1e293b" />
    <path d="M31 33C31.5 34 32.5 34 33 33" stroke="#b91c1c" strokeWidth="0.8" />
    {/* Farmer Shirt */}
    <path d="M22 55C22 42 26 36 32 36C38 36 42 42 42 55Z" fill="#059669" />
    {/* Golden Rice / Paddy Stalks */}
    <path d="M42 52C46 44 48 34 46 26" stroke="#ca8a04" strokeWidth="1.8" />
    <ellipse cx="44" cy="28" rx="2" ry="3.5" fill="#facc15" transform="rotate(25 44 28)" />
    <ellipse cx="48" cy="34" rx="2" ry="3.5" fill="#facc15" transform="rotate(-20 48 34)" />
    <ellipse cx="45" cy="40" rx="2" ry="3.5" fill="#facc15" transform="rotate(30 45 40)" />
  </svg>
);

export const RealisticFisheryIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fish Body */}
    <path d="M14 32C20 22 36 20 48 30C52 25 56 22 56 22L54 32L56 42C56 42 52 39 48 34C36 44 20 42 14 32Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
    {/* Fish Belly Highlight */}
    <path d="M18 34C24 40 36 41 46 33C40 37 28 37 18 34Z" fill="#e0f2fe" />
    {/* Eye */}
    <circle cx="21" cy="31" r="2.2" fill="#ffffff" />
    <circle cx="20.5" cy="31" r="1.1" fill="#0f172a" />
    {/* Fin */}
    <polygon points="32,32 37,36 34,39" fill="#0284c7" />
    {/* Bubbles */}
    <circle cx="10" cy="25" r="2" fill="#bae6fd" />
    <circle cx="8" cy="20" r="1.5" fill="#bae6fd" />
  </svg>
);

export const RealisticBankIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pediment (Triangle Roof) */}
    <polygon points="32,14 12,25 52,25" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
    <rect x="25" y="19" width="14" height="4" fill="#ffffff" rx="1" />
    <text x="32" y="22.5" fill="#0369a1" fontSize="3.5" fontWeight="bold" textAnchor="middle">BANK</text>
    {/* Base Architrave */}
    <rect x="14" y="25" width="36" height="3" fill="#38bdf8" />
    {/* 4 Pillars */}
    <rect x="17" y="28" width="4.5" height="18" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
    <rect x="25" y="28" width="4.5" height="18" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
    <rect x="34.5" y="28" width="4.5" height="18" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
    <rect x="42.5" y="28" width="4.5" height="18" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
    {/* Steps / Foundation */}
    <rect x="12" y="46" width="40" height="4" fill="#0284c7" rx="0.5" />
    <rect x="10" y="50" width="44" height="4" fill="#0369a1" rx="0.5" />
  </svg>
);

export const RealisticLandIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Green Lawn Land */}
    <ellipse cx="32" cy="52" rx="22" ry="6" fill="#86efac" />
    {/* Roof */}
    <polygon points="32,18 16,30 48,30" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
    {/* Chimney */}
    <rect x="38" y="18" width="4" height="6" fill="#78350f" />
    {/* House Walls */}
    <rect x="20" y="30" width="24" height="20" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
    {/* Door */}
    <rect x="29" y="38" width="6" height="12" fill="#78350f" rx="0.5" />
    <circle cx="33.5" cy="44" r="0.8" fill="#fbbf24" />
    {/* Window */}
    <rect x="23" y="34" width="4.5" height="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
    <rect x="36.5" y="34" width="4.5" height="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
    {/* Tree */}
    <rect x="46" y="42" width="2" height="8" fill="#78350f" />
    <circle cx="47" cy="38" r="5" fill="#16a34a" />
  </svg>
);

export const RealisticGovIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flag on dome */}
    <line x1="32" y1="10" x2="32" y2="18" stroke="#475569" strokeWidth="1.2" />
    <path d="M32 11L38 13.5L32 16Z" fill="#10b981" />
    {/* Dome */}
    <path d="M24 26C24 19 27 16 32 16C37 16 40 19 40 26Z" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
    {/* Capitol Base */}
    <rect x="14" y="26" width="36" height="6" fill="#38bdf8" rx="1" />
    <rect x="18" y="32" width="4" height="16" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
    <rect x="26" y="32" width="4" height="16" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
    <rect x="34" y="32" width="4" height="16" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
    <rect x="42" y="32" width="4" height="16" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
    {/* Plinth */}
    <rect x="12" y="48" width="40" height="6" fill="#0369a1" rx="1" />
  </svg>
);

export const RealisticJobIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Resume Sheet */}
    <rect x="18" y="14" width="28" height="38" rx="2" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
    {/* Job Blue Header */}
    <rect x="22" y="18" width="20" height="5" fill="#38bdf8" rx="1" />
    {/* Text Lines */}
    <line x1="22" y1="28" x2="38" y2="28" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="22" y1="33" x2="40" y2="33" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="22" y1="38" x2="34" y2="38" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
    {/* Magnifying Glass with 'JOB' badge */}
    <circle cx="36" cy="38" r="11" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
    <text x="36" y="41.5" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">JOB</text>
    <line x1="44" y1="46" x2="52" y2="54" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const RealisticComplaintIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Citizen Avatar */}
    <circle cx="24" cy="28" r="8" fill="#10b981" />
    <path d="M12 50C12 42 16 38 24 38C32 38 36 42 36 50Z" fill="#059669" />
    {/* Magenta Speech Bubble */}
    <path d="M30 18C30 13.5 35.5 10 42 10C48.5 10 54 13.5 54 18C54 22.5 48.5 26 42 26L38 29L39 25.5C33.5 24.5 30 21.5 30 18Z" fill="#ec4899" stroke="#db2777" strokeWidth="1" />
    {/* Text dots inside bubble */}
    <line x1="36" y1="17" x2="48" y2="17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="21" x2="46" y2="21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const RealisticNewsIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Folded Newspaper */}
    <rect x="14" y="16" width="36" height="34" rx="2" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
    {/* Headline Banner */}
    <rect x="18" y="20" width="28" height="6" fill="#1e293b" rx="0.5" />
    <text x="32" y="24.5" fill="#ffffff" fontSize="4.5" fontWeight="bold" textAnchor="middle">NEWS</text>
    {/* Photo block */}
    <rect x="18" y="29" width="12" height="10" fill="#38bdf8" rx="1" />
    {/* Columns */}
    <line x1="33" y1="30" x2="45" y2="30" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="33" y1="34" x2="45" y2="34" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="33" y1="38" x2="43" y2="38" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="43" x2="45" y2="43" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const RealisticInfoIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Blue Handbook / Binder */}
    <rect x="16" y="14" width="32" height="38" rx="3" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
    {/* Spine line */}
    <line x1="22" y1="14" x2="22" y2="52" stroke="#38bdf8" strokeWidth="2" />
    {/* White 'i' Circle */}
    <circle cx="34" cy="33" r="8" fill="#ffffff" />
    <text x="34" y="38" fill="#0284c7" fontSize="12" fontWeight="bold" textAnchor="middle" fontStyle="italic">i</text>
  </svg>
);

export const RealisticEmergencyIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Red Telephone Handset */}
    <path d="M18 42C18 30 30 18 42 18L46 22L41 27L37 25C33 27 31 29 29 33L31 37L26 42Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
    {/* 24/7 Red Badge */}
    <circle cx="44" cy="42" r="11" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
    <text x="44" y="45.5" fill="#ffffff" fontSize="6.5" fontWeight="black" textAnchor="middle">24/7</text>
  </svg>
);

export const RealisticEventIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar Header Binder Rings */}
    <rect x="22" y="12" width="3" height="6" rx="1" fill="#64748b" />
    <rect x="39" y="12" width="3" height="6" rx="1" fill="#64748b" />
    {/* Calendar Body */}
    <rect x="15" y="15" width="34" height="36" rx="4" fill="#ffffff" stroke="#e11d48" strokeWidth="1.5" />
    {/* Red Top Bar */}
    <rect x="15" y="15" width="34" height="10" rx="3" fill="#e11d48" />
    {/* Gold Celebration Star */}
    <polygon points="32,32 34,37 39,37 35,40 37,45 32,42 27,45 29,40 25,37 30,37" fill="#facc15" stroke="#ca8a04" strokeWidth="0.8" />
  </svg>
);

export const RealisticWeatherIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Golden Sun */}
    <circle cx="28" cy="24" r="9" fill="#f59e0b" />
    {/* White / Gray Rain Cloud in front */}
    <path d="M22 36C22 30 26 26 32 26C37 26 41 29 42 33C45 33 48 36 48 39C48 43 45 46 41 46L22 46C18 46 15 43 15 39C15 36 18 33 22 33Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
    {/* Rain Drops */}
    <line x1="24" y1="49" x2="21" y2="56" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="32" y1="49" x2="29" y2="56" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="40" y1="49" x2="37" y2="56" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const RealisticMapIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Folded Map Segments */}
    <polygon points="12,20 25,16 25,48 12,52" fill="#86efac" stroke="#22c55e" strokeWidth="1" />
    <polygon points="25,16 38,20 38,52 25,48" fill="#4ade80" stroke="#22c55e" strokeWidth="1" />
    <polygon points="38,20 52,16 52,48 38,52" fill="#86efac" stroke="#22c55e" strokeWidth="1" />
    {/* Map Lines */}
    <path d="M16 36Q25 32 38 36T48 32" stroke="#0284c7" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
    {/* Red Location Pin */}
    <circle cx="38" cy="26" r="6" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
    <circle cx="38" cy="26" r="2.2" fill="#ffffff" />
    <path d="M33 29L38 40L43 29Z" fill="#ef4444" />
  </svg>
);

export const RealisticGalleryIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Back Polaroid Frame */}
    <rect x="24" y="16" width="26" height="26" rx="2" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" transform="rotate(10 37 29)" />
    {/* Front Polaroid Frame */}
    <rect x="14" y="20" width="28" height="28" rx="2" fill="#ffffff" stroke="#64748b" strokeWidth="1" />
    <rect x="17" y="23" width="22" height="17" fill="#38bdf8" />
    {/* Sun and Mountain */}
    <circle cx="23" cy="27" r="2" fill="#facc15" />
    <polygon points="17,40 25,31 31,37 39,28 39,40" fill="#16a34a" />
  </svg>
);

export const RealisticSettingsIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Blue Metallic Cog Gear */}
    <path d="M28 12L36 12L37 17C38.5 17.5 40 18.5 41.5 19.5L46 17L51 22L48.5 26.5C49.5 28 50.5 29.5 51 31L56 32L56 40L51 41C50.5 42.5 49.5 44 48.5 45.5L51 50L46 55L41.5 52.5C40 53.5 38.5 54.5 37 55L36 60L28 60L27 55C25.5 54.5 24 53.5 22.5 52.5L18 55L13 50L15.5 45.5C14.5 44 13.5 42.5 13 41L8 40L8 32L13 31C13.5 29.5 14.5 28 15.5 26.5L13 22L18 17L22.5 19.5C24 18.5 25.5 17.5 27 17Z" fill="#0284c7" stroke="#0369a1" strokeWidth="1.2" />
    <circle cx="32" cy="36" r="9" fill="#ffffff" stroke="#0369a1" strokeWidth="1.2" />
  </svg>
);

// Unified Realistic Icon Dispatcher
export const RealisticCategoryIcon: React.FC<{ categoryId: string; className?: string }> = ({
  categoryId,
  className = 'w-12 h-12'
}) => {
  switch (categoryId) {
    case 'doctor':
      return <RealisticDoctorIcon className={className} />;
    case 'hospital':
      return <RealisticHospitalIcon className={className} />;
    case 'bus':
      return <RealisticBusIcon className={className} />;
    case 'train':
      return <RealisticTrainIcon className={className} />;
    case 'launch':
      return <RealisticLaunchIcon className={className} />;
    case 'tourist':
      return <RealisticTouristIcon className={className} />;
    case 'education':
      return <RealisticSchoolIcon className={className} />;
    case 'market':
      return <RealisticMarketIcon className={className} />;
    case 'fire':
      return <RealisticFireIcon className={className} />;
    case 'police':
      return <RealisticPoliceIcon className={className} />;
    case 'courier':
      return <RealisticCourierIcon className={className} />;
    case 'electricity':
      return <RealisticElectricityIcon className={className} />;
    case 'water':
      return <RealisticWaterIcon className={className} />;
    case 'gas':
      return <RealisticGasIcon className={className} />;
    case 'fuel':
      return <RealisticFuelIcon className={className} />;
    case 'agriculture':
      return <RealisticAgricultureIcon className={className} />;
    case 'fishery':
      return <RealisticFisheryIcon className={className} />;
    case 'bank':
      return <RealisticBankIcon className={className} />;
    case 'land':
      return <RealisticLandIcon className={className} />;
    case 'gov':
      return <RealisticGovIcon className={className} />;
    case 'job':
      return <RealisticJobIcon className={className} />;
    case 'complaint':
      return <RealisticComplaintIcon className={className} />;
    case 'news':
      return <RealisticNewsIcon className={className} />;
    case 'info':
      return <RealisticInfoIcon className={className} />;
    case 'emergency':
      return <RealisticEmergencyIcon className={className} />;
    case 'event':
      return <RealisticEventIcon className={className} />;
    case 'weather':
      return <RealisticWeatherIcon className={className} />;
    case 'map':
      return <RealisticMapIcon className={className} />;
    case 'gallery':
      return <RealisticGalleryIcon className={className} />;
    case 'settings':
      return <RealisticSettingsIcon className={className} />;
    default:
      return <RealisticInfoIcon className={className} />;
  }
};
