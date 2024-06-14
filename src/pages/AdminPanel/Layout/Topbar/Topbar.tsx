import { Layout } from 'antd';
import InlineSVG from 'react-inlinesvg';
import { Search } from '@/assets/icons/Search';
const { Header } = Layout;

const Topbar = () => {
  return (
    <Layout className="bg-transparent">
      <Header className="h-80 border-b bg-white border-sidebarBorder p-0">
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
      </Header>
    </Layout>
  );
};

export default Topbar;
