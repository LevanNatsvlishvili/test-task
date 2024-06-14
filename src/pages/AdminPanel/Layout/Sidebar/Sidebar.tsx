import { Layout } from 'antd';
import InlineSVG from 'react-inlinesvg';
import { Customization, CustomizationActive } from '@/assets/icons/Customization';
import Dashboard from '@/assets/icons/Dashboard';
import Gallery from '@/assets/icons/Gallery';
import { Info } from '@/assets/icons/Info';
import { LogoText, Logo } from '@/assets/icons/Logo';
import { Profile, ProfileActive } from '@/assets/icons/Profile';
import Settings from '@/assets/icons/Settings';
import { Store, StoreActive } from '@/assets/icons/Store';
import clsx from 'clsx';
const { Sider } = Layout;
import { CurrentTab } from '../Layout';

interface SidebarProps {
  currentTab: CurrentTab | null;
  handleTabClick: (tab: CurrentTab) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({ currentTab, isSidebarOpen, handleTabClick }: SidebarProps) => {
  return (
    <Sider
      style={{ background: 'white', maxWidth: '280px', width: '100%' }}
      collapsedWidth={280}
      width={72}
      className="bg-white h-100vh"
      trigger={null}
      collapsible
      collapsed={isSidebarOpen}
    >
      <nav
        className={clsx(
          'w-fill h-full border-r border-r-1 border-sidebarBorder flex overflow-hidden transition-all duration-300 ease-in-out'
        )}
      >
        <div className="h-full w-72 border-r border-r-1 border-sidebarBorder relative">
          <div className="h-80 center border-b border-sidebarBorder ">
            <InlineSVG src={Logo} />
          </div>
          <div className="py-24 space-y-24">
            {NavTabs.map((link, index) => (
              <div className="group px-24" onClick={() => handleTabClick(link)} key={index}>
                {currentTab !== link && (
                  <InlineSVG className={link.iconActive ? 'group-hover:hidden block' : ''} src={link.icon} />
                )}
                {link.iconActive && (
                  <InlineSVG
                    className={clsx(currentTab !== link && 'hidden group-hover:block')}
                    src={link?.iconActive}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="absolute left-0 bottom-0 w-full">
            <div className="w-full py-10 4xl:py-24 px-24 4xl:mb-24">
              <InlineSVG src={Info} />
            </div>

            <div className="w-full py-14 px-24 4xl:py-24">
              <p className="text-14 leading-20 tracking-[0.2px] font-600 text-[#C7C8CA]">1.01</p>
            </div>
          </div>
        </div>

        <div className="h-full min-w-212 relative bg-sidebarOpen">
          <div className="h-80 p-24 border-b border-sidebarBorder">
            <InlineSVG src={LogoText} />
          </div>

          <div className="p-24 ">
            <p className="font-600 text-14 leading-20 text-lightBlack mb-32">{currentTab?.title}</p>
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
            <div className="w-full py-10 4xl:py-24 px-24 4xl:mb-24">
              <p className="text-14 leading-20 tracking-[0.2px] font-600 text-rukh">Help Started</p>
            </div>

            <div className="w-full py-14 px-24 4xl:py-24 border-t border-sidebarBorder ">
              <p className="text-14 leading-20 tracking-[0.2px] font-600 text-rukh">Version . 1.00.0.2</p>
            </div>
          </div>
        </div>
      </nav>
    </Sider>
  );
};

export default Sidebar;

const NavTabs = [
  {
    icon: Dashboard,
    iconActive: Dashboard,
    title: 'Dashboard',
  },
  {
    icon: Customization,
    iconActive: CustomizationActive,
    title: 'Sidebar Customization',
    children: ['Sidebar Builder', 'Sidebar Customizer', 'A/B Testing'],
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
    iconActive: Gallery,
    title: 'Gallery Management',
  },
  {
    icon: Settings,
    iconActive: Settings,
    title: 'Settings',
  },
];
