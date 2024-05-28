import Dashboard from '@/assets/icons/Dashboard';
import Gallery from '@/assets/icons/Gallery';
import Logo from '@/assets/icons/Logo';
import Profile from '@/assets/icons/Profile';
import Settings from '@/assets/icons/Settings';
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

const AdminPanel = () => {
  return (
    <div className="min-h-100vh">
      <div className="sidebar min-h-100vh w-72 border border-r-1 border-sidebarBorder">
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
      <main className="">
        <div className="topbar"></div>
        <div className="content"></div>
      </main>
    </div>
  );
};

export default AdminPanel;
