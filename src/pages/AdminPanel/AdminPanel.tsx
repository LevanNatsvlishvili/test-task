import Dashboard from '@/assets/icons/Dashboard';
import Gallery from '@/assets/icons/Gallery';
import Logo from '@/assets/icons/Logo';
import Profile from '@/assets/icons/Profile';
import Settings from '@/assets/icons/Settings';
import clsx from 'clsx';
import { useState } from 'react';
import InlineSVG from 'react-inlinesvg';

const NavLinks = [
  {
    icon: Dashboard,
  },
  {
    icon: Gallery,
  },
  {
    icon: Profile,
  },
  {
    icon: Settings,
  },
];

const sidebarClosedWidth = 72;
const sidebarOpenWidth = 284;

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="h-100vh">
      <div
        className={clsx(
          'h-full border-r border-r-1 border-sidebarBorder flex overflow-hidden transition-all duration-300 ease-in-out',
          isSidebarOpen ? `max-w-${sidebarOpenWidth}` : `max-w-${sidebarClosedWidth}`
        )}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className={`h-full w-${sidebarClosedWidth} border-r border-r-1 border-sidebarBorder`}>
          <div className="h-80 center">
            <InlineSVG src={Logo} />
          </div>
          <div className=" border-t border-sidebarBorder p-24 space-y-24">
            {NavLinks.map((link, index) => (
              <div key={index}>
                <InlineSVG src={link.icon} />
              </div>
            ))}
          </div>
        </div>

        <div className="h-full w-fill ">123</div>
      </div>
      <main className="">
        <div className="topbar"></div>
        <div className="content"></div>
      </main>
    </div>
  );
};

export default AdminPanel;
