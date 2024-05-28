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

interface CurrentTab {
  icon: string;
  title: string;
  children?: string[];
}

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
      <div
        className={clsx(
          'h-full border-r border-r-1 border-sidebarBorder flex overflow-hidden transition-all duration-300 ease-in-out',
          isSidebarOpen ? `max-w-284` : `max-w-72`
        )}
      >
        <div className="h-full w-72 border-r border-r-1 border-sidebarBorder">
          <div className="h-80 center">
            <InlineSVG src={Logo} />
          </div>
          <div className=" border-t border-sidebarBorder py-24 space-y-24">
            {NavTabs.map((link, index) => (
              <div className="group px-24" onClick={() => handleTabClick(link)} key={index}>
                <InlineSVG className={link.iconActive ? 'group-hover:hidden block' : ''} src={link.icon} />
                {link.iconActive && <InlineSVG className="hidden group-hover:block" src={link?.iconActive} />}
              </div>
            ))}
          </div>
        </div>

        <div className="h-full min-w-284">
          <div className="h-80 p-24 ">
            <InlineSVG src={LogoText} />
          </div>

          <div className="border-t border-sidebarBorder p-24 ">
            <p className="font-600 text-14 leading-20 text-black mb-32">{currentTab?.title}</p>
            <div className="space-y-16">
              {currentTab?.children?.map((childTab, index) => (
                <p
                  className="cursor-poiinter hover:text-blue text-gray text-14 font-600 leading-20 tracking-[0.2px]"
                  key={index}
                >
                  {childTab}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <main className="">
        <div className="topbar"></div>
        <div className="content"></div>
      </main>
    </div>
  );
};

export default AdminPanel;

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
