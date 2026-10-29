import React from 'react';
import {
  Stethoscope,
  Building2,
  Bus,
  Train,
  Ship,
  Palmtree,
  GraduationCap,
  ShoppingBag,
  Flame,
  ShieldAlert,
  Truck,
  Zap,
  Droplets,
  FlameKindling,
  Fuel,
  Wheat,
  Fish,
  Landmark,
  Home,
  Building,
  Briefcase,
  MessageSquareWarning,
  Newspaper,
  Info,
  PhoneCall,
  CalendarDays,
  CloudSun,
  MapPin,
  Image,
  Settings,
  HelpCircle,
  LucideProps
} from 'lucide-react';

interface IconRendererProps extends LucideProps {
  name: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Stethoscope':
      return <Stethoscope {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'Bus':
      return <Bus {...props} />;
    case 'Train':
      return <Train {...props} />;
    case 'Ship':
      return <Ship {...props} />;
    case 'Palmtree':
      return <Palmtree {...props} />;
    case 'GraduationCap':
      return <GraduationCap {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'Flame':
      return <Flame {...props} />;
    case 'ShieldAlert':
      return <ShieldAlert {...props} />;
    case 'Truck':
      return <Truck {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'Droplets':
      return <Droplets {...props} />;
    case 'FlameKindling':
      return <FlameKindling {...props} />;
    case 'Fuel':
      return <Fuel {...props} />;
    case 'Wheat':
      return <Wheat {...props} />;
    case 'Fish':
      return <Fish {...props} />;
    case 'Landmark':
      return <Landmark {...props} />;
    case 'Home':
      return <Home {...props} />;
    case 'Building':
      return <Building {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'MessageSquareWarning':
      return <MessageSquareWarning {...props} />;
    case 'Newspaper':
      return <Newspaper {...props} />;
    case 'Info':
      return <Info {...props} />;
    case 'PhoneCall':
      return <PhoneCall {...props} />;
    case 'CalendarDays':
      return <CalendarDays {...props} />;
    case 'CloudSun':
      return <CloudSun {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'Image':
      return <Image {...props} />;
    case 'Settings':
      return <Settings {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
