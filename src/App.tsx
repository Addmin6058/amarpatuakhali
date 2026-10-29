import React, { useState, useEffect } from 'react';
import {
  TabType,
  BottomNav
} from './components/BottomNav';
import { Header } from './components/Header';
import { BannerCarousel } from './components/BannerCarousel';
import { CategoryGrid } from './components/CategoryGrid';
import { ContactView } from './components/ContactView';
import { NotificationView } from './components/NotificationView';
import { ProfileView } from './components/ProfileView';
import { DrawerMenu } from './components/DrawerMenu';
import { CategoryDetailModal } from './components/CategoryDetailModal';
import { LoginModal } from './components/LoginModal';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLoginModal } from './components/AdminLoginModal';
import { SplashScreen } from './components/SplashScreen';
import { QuickDialModal } from './components/QuickDialModal';
import { DistrictMapModal } from './components/DistrictMapModal';
import { SettingsModal } from './components/SettingsModal';
import { Footer } from './components/Footer';
import {
  INITIAL_NOTIFICATIONS,
  INITIAL_USERS,
  INITIAL_COMPLAINTS,
  DOCTORS,
  HOSPITALS,
  BUS_SCHEDULES,
  LAUNCH_SCHEDULES,
  TOURIST_PLACES,
  EMERGENCY_CONTACTS,
  INITIAL_BANNERS,
  CATEGORIES,
  Upazila
} from './data/patuakhaliData';
import {
  NotificationItem,
  RegisteredUser,
  CitizenComplaint,
  Doctor,
  Hospital,
  BusSchedule,
  LaunchSchedule,
  TouristPlace,
  EmergencyContact,
  BannerSlide,
  CategoryItem
} from './types';
import { Smartphone, Monitor, Shield, Sparkles, RefreshCw } from 'lucide-react';

function getStoredItem<T>(key: string, defaultValue: T): T {
  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error reading from localStorage', e);
  }
  return defaultValue;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isQuickDialOpen, setIsQuickDialOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeCategoryModal, setActiveCategoryModal] = useState<string | null>(null);

  const [selectedUpazila, setSelectedUpazila] = useState<Upazila>('সকল এলাকা');
  const [searchQuery, setSearchQuery] = useState('');

  // Device frame mode for desktop testing
  const [viewMode, setViewMode] = useState<'mobile-frame' | 'responsive'>('mobile-frame');

  // Application Data States with LocalStorage Persistence
  const [notifications, setNotifications] = useState<NotificationItem[]>(() =>
    getStoredItem('amar_patuakhali_notifications', INITIAL_NOTIFICATIONS)
  );
  const [users, setUsers] = useState<RegisteredUser[]>(() =>
    getStoredItem('amar_patuakhali_users', INITIAL_USERS)
  );
  const [complaints, setComplaints] = useState<CitizenComplaint[]>(() =>
    getStoredItem('amar_patuakhali_complaints', INITIAL_COMPLAINTS)
  );
  const [doctors, setDoctors] = useState<Doctor[]>(() =>
    getStoredItem('amar_patuakhali_doctors', DOCTORS)
  );
  const [hospitals, setHospitals] = useState<Hospital[]>(() =>
    getStoredItem('amar_patuakhali_hospitals', HOSPITALS)
  );
  const [busSchedules, setBusSchedules] = useState<BusSchedule[]>(() =>
    getStoredItem('amar_patuakhali_bus', BUS_SCHEDULES)
  );
  const [launchSchedules, setLaunchSchedules] = useState<LaunchSchedule[]>(() =>
    getStoredItem('amar_patuakhali_launch', LAUNCH_SCHEDULES)
  );
  const [touristPlaces, setTouristPlaces] = useState<TouristPlace[]>(() => {
    const stored = getStoredItem<TouristPlace[]>('amar_patuakhali_tourist', TOURIST_PLACES);
    const hasOldOrMissingImages =
      !Array.isArray(stored) ||
      stored.length < TOURIST_PLACES.length ||
      stored.some((p) => !p.image || p.image.includes('/public/assets/aistudio'));
    if (hasOldOrMissingImages) {
      try {
        localStorage.setItem('amar_patuakhali_tourist', JSON.stringify(TOURIST_PLACES));
      } catch {}
      return TOURIST_PLACES;
    }
    return stored;
  });
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>(() =>
    getStoredItem('amar_patuakhali_emergency', EMERGENCY_CONTACTS)
  );
  const [banners, setBanners] = useState<BannerSlide[]>(() => {
    const stored = getStoredItem<BannerSlide[]>('amar_patuakhali_banners', INITIAL_BANNERS);
    const hasNew5Banners = Array.isArray(stored) && stored.some((b) => b.id === 'dc-office' || b.id === 'jhautala-view');
    if (!hasNew5Banners) {
      try {
        localStorage.setItem('amar_patuakhali_banners', JSON.stringify(INITIAL_BANNERS));
      } catch {}
      return INITIAL_BANNERS;
    }
    return stored;
  });

  const [categories, setCategories] = useState<CategoryItem[]>(() => {
    const stored = getStoredItem<CategoryItem[]>('amar_patuakhali_categories', CATEGORIES);
    if (!Array.isArray(stored) || stored.length === 0) {
      return CATEGORIES;
    }
    return stored;
  });

  const [currentUser, setCurrentUser] = useState({
    name: 'Kabbo Hasan',
    isLoggedIn: true
  });

  // LocalStorage Sync Effects
  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_notifications', JSON.stringify(notifications));
    } catch {}
  }, [notifications]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_users', JSON.stringify(users));
    } catch {}
  }, [users]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_complaints', JSON.stringify(complaints));
    } catch {}
  }, [complaints]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_doctors', JSON.stringify(doctors));
    } catch {}
  }, [doctors]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_hospitals', JSON.stringify(hospitals));
    } catch {}
  }, [hospitals]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_bus', JSON.stringify(busSchedules));
    } catch {}
  }, [busSchedules]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_launch', JSON.stringify(launchSchedules));
    } catch {}
  }, [launchSchedules]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_tourist', JSON.stringify(touristPlaces));
    } catch {}
  }, [touristPlaces]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_emergency', JSON.stringify(emergencyContacts));
    } catch {}
  }, [emergencyContacts]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_banners', JSON.stringify(banners));
    } catch {}
  }, [banners]);

  useEffect(() => {
    try {
      localStorage.setItem('amar_patuakhali_categories', JSON.stringify(categories));
    } catch {}
  }, [categories]);

  const unreadNotifCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const handleSelectNotice = (notice: NotificationItem) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notice.id ? { ...n, unread: false } : n))
    );
  };

  // CRUD for Notices
  const handleAddNotice = (newNotice: NotificationItem) => {
    setNotifications((prev) => [newNotice, ...prev]);
  };
  const handleUpdateNotice = (updatedNotice: NotificationItem) => {
    setNotifications((prev) => prev.map((n) => (n.id === updatedNotice.id ? updatedNotice : n)));
  };
  const handleDeleteNotice = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // CRUD for Users
  const handleAddUser = (newUser: RegisteredUser) => {
    setUsers((prev) => [newUser, ...prev]);
  };
  const handleUpdateUser = (updatedUser: RegisteredUser) => {
    setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
  };
  const handleDeleteUser = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // CRUD for Doctors
  const handleAddDoctor = (doc: Doctor) => {
    setDoctors((prev) => [doc, ...prev]);
  };
  const handleUpdateDoctor = (updatedDoc: Doctor) => {
    setDoctors((prev) => prev.map((d) => (d.id === updatedDoc.id ? updatedDoc : d)));
  };
  const handleDeleteDoctor = (id: string) => {
    setDoctors((prev) => prev.filter((d) => d.id !== id));
  };

  // CRUD for Hospitals
  const handleAddHospital = (hosp: Hospital) => {
    setHospitals((prev) => [hosp, ...prev]);
  };
  const handleUpdateHospital = (updatedHosp: Hospital) => {
    setHospitals((prev) => prev.map((h) => (h.id === updatedHosp.id ? updatedHosp : h)));
  };
  const handleDeleteHospital = (id: string) => {
    setHospitals((prev) => prev.filter((h) => h.id !== id));
  };

  // CRUD for Buses
  const handleAddBus = (bus: BusSchedule) => {
    setBusSchedules((prev) => [bus, ...prev]);
  };
  const handleUpdateBus = (updatedBus: BusSchedule) => {
    setBusSchedules((prev) => prev.map((b) => (b.id === updatedBus.id ? updatedBus : b)));
  };
  const handleDeleteBus = (id: string) => {
    setBusSchedules((prev) => prev.filter((b) => b.id !== id));
  };

  // CRUD for Launches
  const handleAddLaunch = (launch: LaunchSchedule) => {
    setLaunchSchedules((prev) => [launch, ...prev]);
  };
  const handleUpdateLaunch = (updatedLaunch: LaunchSchedule) => {
    setLaunchSchedules((prev) => prev.map((l) => (l.id === updatedLaunch.id ? updatedLaunch : l)));
  };
  const handleDeleteLaunch = (id: string) => {
    setLaunchSchedules((prev) => prev.filter((l) => l.id !== id));
  };

  // CRUD for Tourist Places
  const handleAddPlace = (place: TouristPlace) => {
    setTouristPlaces((prev) => [place, ...prev]);
  };
  const handleUpdatePlace = (updatedPlace: TouristPlace) => {
    setTouristPlaces((prev) => prev.map((p) => (p.id === updatedPlace.id ? updatedPlace : p)));
  };
  const handleDeletePlace = (id: string) => {
    setTouristPlaces((prev) => prev.filter((p) => p.id !== id));
  };

  // CRUD for Complaints
  const handleUpdateComplaintStatus = (id: string, status: 'প্রাপ্ত' | 'তদন্তাধীন' | 'নিষ্পন্ন') => {
    setComplaints((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
  };
  const handleDeleteComplaint = (id: string) => {
    setComplaints((prev) => prev.filter((c) => c.id !== id));
  };

  // CRUD for Banners
  const handleAddBanner = (banner: BannerSlide) => {
    setBanners((prev) => [banner, ...prev]);
  };
  const handleUpdateBanner = (updatedBanner: BannerSlide) => {
    setBanners((prev) => prev.map((b) => (b.id === updatedBanner.id ? updatedBanner : b)));
  };
  const handleDeleteBanner = (id: string) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
  };

  // CRUD for Categories
  const handleAddCategory = (cat: CategoryItem) => {
    setCategories((prev) => [...prev, cat]);
  };
  const handleUpdateCategory = (updatedCat: CategoryItem) => {
    setCategories((prev) => prev.map((c) => (c.id === updatedCat.id ? updatedCat : c)));
  };
  const handleDeleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  // Reset to Defaults
  const handleResetToDefaults = () => {
    localStorage.removeItem('amar_patuakhali_notifications');
    localStorage.removeItem('amar_patuakhali_users');
    localStorage.removeItem('amar_patuakhali_complaints');
    localStorage.removeItem('amar_patuakhali_doctors');
    localStorage.removeItem('amar_patuakhali_hospitals');
    localStorage.removeItem('amar_patuakhali_bus');
    localStorage.removeItem('amar_patuakhali_launch');
    localStorage.removeItem('amar_patuakhali_tourist');
    localStorage.removeItem('amar_patuakhali_emergency');
    localStorage.removeItem('amar_patuakhali_banners');
    localStorage.removeItem('amar_patuakhali_categories');

    setNotifications(INITIAL_NOTIFICATIONS);
    setUsers(INITIAL_USERS);
    setComplaints(INITIAL_COMPLAINTS);
    setDoctors(DOCTORS);
    setHospitals(HOSPITALS);
    setBusSchedules(BUS_SCHEDULES);
    setLaunchSchedules(LAUNCH_SCHEDULES);
    setTouristPlaces(TOURIST_PLACES);
    setEmergencyContacts(EMERGENCY_CONTACTS);
    setBanners(INITIAL_BANNERS);
    setCategories(CATEGORIES);
  };

  const handleLoginSuccess = (name: string) => {
    setCurrentUser({
      name: name,
      isLoggedIn: true
    });
  };

  const handleLogout = () => {
    setCurrentUser({
      name: 'অতিথি ব্যবহারকারী',
      isLoggedIn: false
    });
  };

  const handleRequestAdmin = () => {
    if (isAdminAuthenticated) {
      setIsAdminView(true);
    } else {
      setIsAdminLoginModalOpen(true);
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setIsAdminView(true);
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setIsAdminView(false);
  };

  // If splash is showing, render splash screen
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // If Admin View is active and authenticated, render full-featured Admin Dashboard
  if (isAdminView && isAdminAuthenticated) {
    return (
      <AdminDashboard
        onSwitchToSite={() => setIsAdminView(false)}
        onAdminLogout={handleAdminLogout}
        users={users}
        notifications={notifications}
        complaints={complaints}
        doctors={doctors}
        hospitals={hospitals}
        busSchedules={busSchedules}
        launchSchedules={launchSchedules}
        touristPlaces={touristPlaces}
        emergencyContacts={emergencyContacts}
        banners={banners}
        onAddNotice={handleAddNotice}
        onUpdateNotice={handleUpdateNotice}
        onDeleteNotice={handleDeleteNotice}
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        onDeleteUser={handleDeleteUser}
        onAddDoctor={handleAddDoctor}
        onUpdateDoctor={handleUpdateDoctor}
        onDeleteDoctor={handleDeleteDoctor}
        onAddHospital={handleAddHospital}
        onUpdateHospital={handleUpdateHospital}
        onDeleteHospital={handleDeleteHospital}
        onAddBus={handleAddBus}
        onUpdateBus={handleUpdateBus}
        onDeleteBus={handleDeleteBus}
        onAddLaunch={handleAddLaunch}
        onUpdateLaunch={handleUpdateLaunch}
        onDeleteLaunch={handleDeleteLaunch}
        onAddPlace={handleAddPlace}
        onUpdatePlace={handleUpdatePlace}
        onDeletePlace={handleDeletePlace}
        onUpdateComplaintStatus={handleUpdateComplaintStatus}
        onDeleteComplaint={handleDeleteComplaint}
        onAddBanner={handleAddBanner}
        onUpdateBanner={handleUpdateBanner}
        onDeleteBanner={handleDeleteBanner}
        categories={categories}
        onAddCategory={handleAddCategory}
        onUpdateCategory={handleUpdateCategory}
        onDeleteCategory={handleDeleteCategory}
        onResetToDefaults={handleResetToDefaults}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
      {/* Global Website Header */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(true)}
        unreadCount={unreadNotifCount}
        onOpenNotifications={() => setCurrentTab('notifications')}
        onOpenAdmin={handleRequestAdmin}
        onOpenQuickDial={() => setIsQuickDialOpen(true)}
        onOpenMap={() => setIsMapModalOpen(true)}
        selectedUpazila={selectedUpazila}
        onSelectUpazila={setSelectedUpazila}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentTab={currentTab}
        onChangeTab={setCurrentTab}
        onOpenCategory={(catId) => {
          if (catId === 'settings') {
            setIsSettingsOpen(true);
          } else if (catId === 'map') {
            setIsMapModalOpen(true);
          } else if (catId === 'emergency') {
            setIsQuickDialOpen(true);
          } else {
            setActiveCategoryModal(catId);
          }
        }}
      />

      {/* Main Website Content Body */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-5 flex flex-col">
        {currentTab === 'home' && (
          <div className="animate-in fade-in duration-150">
            {/* Hero Banner Carousel with Real Photos & Live Slides */}
            <BannerCarousel
              onOpenCategory={(catId) => setActiveCategoryModal(catId)}
              banners={banners}
              isAdminAuthenticated={isAdminAuthenticated}
              onOpenAdmin={handleRequestAdmin}
            />

            {/* Category Grid */}
            <CategoryGrid
              categories={categories}
              onSelectCategory={(catId) => {
                if (catId === 'settings') {
                  setIsSettingsOpen(true);
                } else if (catId === 'map') {
                  setIsMapModalOpen(true);
                } else if (catId === 'emergency') {
                  setIsQuickDialOpen(true);
                } else {
                  setActiveCategoryModal(catId);
                }
              }}
              searchFilter={searchQuery}
              onOpenAddCategory={handleRequestAdmin}
              isAdminAuthenticated={isAdminAuthenticated}
            />
          </div>
        )}

        {currentTab === 'contact' && (
          <ContactView
            onOpenComplaintModal={() => setActiveCategoryModal('complaint')}
          />
        )}

        {currentTab === 'notifications' && (
          <NotificationView
            notifications={notifications}
            onMarkAllAsRead={handleMarkAllNotificationsAsRead}
            onSelectNotice={handleSelectNotice}
          />
        )}

        {currentTab === 'profile' && (
          <ProfileView
            onLogout={handleLogout}
            onOpenNotifications={() => setCurrentTab('notifications')}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        )}
      </main>

      {/* Comprehensive Website Footer */}
      <Footer
        onOpenCategory={(catId) => setActiveCategoryModal(catId)}
        onSelectUpazila={(upz) => setSelectedUpazila(upz)}
        onOpenMap={() => setIsMapModalOpen(true)}
        onOpenQuickDial={() => setIsQuickDialOpen(true)}
        onOpenAdmin={handleRequestAdmin}
      />

      {/* Bottom Navigation (visible on mobile only) */}
      <BottomNav
        currentTab={currentTab}
        onChangeTab={setCurrentTab}
        unreadCount={unreadNotifCount}
      />

      {/* Category Details Modal */}
      <CategoryDetailModal
        categoryId={activeCategoryModal}
        onClose={() => setActiveCategoryModal(null)}
        selectedUpazila={selectedUpazila}
        onOpenQuickDial={() => setIsQuickDialOpen(true)}
        isAdminAuthenticated={isAdminAuthenticated}
        onOpenAdmin={handleRequestAdmin}
        categories={categories}
        doctors={doctors}
        hospitals={hospitals}
        busSchedules={busSchedules}
        launchSchedules={launchSchedules}
        touristPlaces={touristPlaces}
        emergencyContacts={emergencyContacts}
      />

      {/* Sliding Left Drawer Menu */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectTab={setCurrentTab}
        onOpenAdmin={handleRequestAdmin}
        onOpenCategory={(catId) => {
          if (catId === 'map') {
            setIsMapModalOpen(true);
          } else if (catId === 'emergency') {
            setIsQuickDialOpen(true);
          } else {
            setActiveCategoryModal(catId);
          }
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
        userName={currentUser.name}
        isLoggedIn={currentUser.isLoggedIn}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
        onShowSplash={() => setShowSplash(true)}
      />

      {/* Login & Register Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Admin Login Modal with Password Protection (246058) */}
      <AdminLoginModal
        isOpen={isAdminLoginModalOpen}
        onClose={() => setIsAdminLoginModalOpen(false)}
        onSuccess={handleAdminLoginSuccess}
      />

      {/* Quick Emergency Dial Modal */}
      <QuickDialModal
        isOpen={isQuickDialOpen}
        onClose={() => setIsQuickDialOpen(false)}
      />

      {/* District Map & Upazilas Modal */}
      <DistrictMapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        onSelectUpazila={(upz) => setSelectedUpazila(upz)}
      />

      {/* App Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onOpenAdmin={handleRequestAdmin}
      />
    </div>
  );
}
