import { Customization, CustomizationActive } from '@/assets/icons/Customization';
import Dashboard from '@/assets/icons/Dashboard';
import Gallery from '@/assets/icons/Gallery';
import { Info } from '@/assets/icons/Info';
import { LogoText, Logo } from '@/assets/icons/Logo';
import { Profile, ProfileActive } from '@/assets/icons/Profile';
import { Search } from '@/assets/icons/Search';
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
    <div className="h-100vh flex bg-white">
      <div
        className={clsx(
          'w-fill h-full border-r border-r-1 border-sidebarBorder flex overflow-hidden transition-all duration-300 ease-in-out',
          isSidebarOpen ? `max-w-286` : `max-w-72`
        )}
      >
        <div className="h-full w-72 border-r border-r-1 border-sidebarBorder relative">
          <div className="h-80 center border-b border-sidebarBorder ">
            <InlineSVG src={Logo} />
          </div>
          <div className="py-24 space-y-24">
            {NavTabs.map((link, index) => (
              <div className="group px-24" onClick={() => handleTabClick(link)} key={index}>
                <InlineSVG className={link.iconActive ? 'group-hover:hidden block' : ''} src={link.icon} />
                {link.iconActive && <InlineSVG className="hidden group-hover:block" src={link?.iconActive} />}
              </div>
            ))}
          </div>

          <div className="absolute left-0 bottom-0 w-full">
            <div className="w-full p-24 mb-24">
              <InlineSVG src={Info} />
            </div>

            <div className="w-full p-24 ">
              <p className="text-14 leading-20 tracking-[0.2px] font-600 text-[#C7C8CA]">1.01</p>
            </div>
          </div>
        </div>

        <div className="h-full min-w-212 relative bg-sidebarOpen">
          <div className="h-80 p-24 border-b border-sidebarBorder">
            <InlineSVG src={LogoText} />
          </div>

          <div className="p-24 ">
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

          <div className="absolute left-0 bottom-0 w-full">
            <div className="w-full p-24 mb-24">
              <p className="text-14 leading-20 tracking-[0.2px] font-600 text-rukh">Help Started</p>
            </div>

            <div className="w-full p-24 border-t border-sidebarBorder ">
              <p className="text-14 leading-20 tracking-[0.2px] font-600 text-rukh">Version . 1.00.0.2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80 w-full flex items-center border-b border-sidebarBorder px-24">
        <div className="w-fit flex flex-grow items-center">
          <InlineSVG src={Search} />
          <input
            className="w-full ml-16 placeholder-rukh text-rukh text-14 leading-18 tracking-[0.2px]"
            placeholder="Search for the desired information"
          />
        </div>
        <div className="ml-auto text-right flex items-center">
          <div>
            <p className="text-[#130F26] text-14 font-500 leading-21">Alex Kognitiv</p>
            <p className="text-[#878EA2] text-14 font-500 leading-21">Alexkognitiv@gmail.com</p>
          </div>
          <img className="ml-8 " src="/images/home/profile-picture.png" />
        </div>
      </div>
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
