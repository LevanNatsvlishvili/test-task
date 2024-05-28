import { Customization, CustomizationActive } from '@/assets/icons/Customization';
import Dashboard from '@/assets/icons/Dashboard';
import Gallery from '@/assets/icons/Gallery';
import { LogoText, Logo } from '@/assets/icons/Logo';
import { Profile, ProfileActive } from '@/assets/icons/Profile';
import Settings from '@/assets/icons/Settings';
import { Store, StoreActive } from '@/assets/icons/Store';
import clsx from 'clsx';
import { useState } from 'react';
import InlineSVG from 'react-inlinesvg';
import Sidebar from './components/Sidebar';

interface CurrentTab {
  icon: string;
  title: string;
  children?: string[];
}

const NavTabs = [
  {
    icon: Dashboard,
    title: 'Dashboard',
  },
  {
    icon: Customization,
    iconActive: CustomizationActive,
    title: 'App Customization',
    children: ['App Builder', 'App Customizer', 'A/B Testing'],
  },
  {
    icon: Store,
    iconActive: StoreActive,
    title: 'Store Management',
    children: ['Content Management', 'Product Management', 'Product Referral', 'Shops Management'],
  },
  {
    icon: Profile,
    iconActive: ProfileActive,
    title: 'User Management',
    children: ['Employee Management', 'Customer Management', 'Partner Referral'],
  },
  {
    icon: Gallery,
    title: 'Gallery Management',
  },
  {
    icon: Settings,
    title: 'Settings',
  },
];

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<CurrentTab | null>(null);

  const handleTabClick = (tab: CurrentTab) => {
    setCurrentTab(tab);
    if (!isSidebarOpen) {
      setIsSidebarOpen((p) => !p);
      return;
    }
    if (isSidebarOpen && tab === currentTab) {
      setIsSidebarOpen((p) => !p);
      setCurrentTab(null);
    }
  };

  return (
    <div className="h-100vh">
      <Sidebar />
      <main className="">
        <div className="topbar"></div>
        <div className="content"></div>
      </main>
    </div>
  );
};

export default AdminPanel;
