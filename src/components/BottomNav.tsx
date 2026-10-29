import React from 'react';
import { Home, Phone, Bell, User } from 'lucide-react';

export type TabType = 'home' | 'contact' | 'notifications' | 'profile';

interface BottomNavProps {
  currentTab: TabType;
  onChangeTab: (tab: TabType) => void;
  unreadCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onChangeTab,
  unreadCount
}) => {
  const tabs = [
    { id: 'home' as TabType, label: 'হোম', icon: Home },
    { id: 'contact' as TabType, label: 'যোগাযোগ', icon: Phone },
    { id: 'notifications' as TabType, label: 'নোটিফিকেশন', icon: Bell, badge: unreadCount },
    { id: 'profile' as TabType, label: 'প্রোফাইল', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] safe-area-pb md:hidden">
      <div className="max-w-md mx-auto flex items-center justify-around py-1.5 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 relative transition-all group ${
                isActive ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <div className="relative">
                <div
                  className={`p-1 rounded-full transition-transform duration-200 ${
                    isActive ? 'scale-110 text-emerald-700' : 'group-hover:scale-105'
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>

                {tab.badge && tab.badge > 0 ? (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {tab.badge}
                  </span>
                ) : null}
              </div>

              <span
                className={`text-[11px] font-medium tracking-tight mt-0.5 transition-colors ${
                  isActive ? 'font-bold text-emerald-700' : 'text-slate-500'
                }`}
              >
                {tab.label}
              </span>

              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
