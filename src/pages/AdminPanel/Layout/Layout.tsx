import React, { useState } from 'react';
import { Layout } from 'antd';
import clsx from 'clsx';
import { Content } from 'antd/es/layout/layout';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export interface CurrentTab {
  icon: string;
  title: string;
  children?: string[];
}

interface SidebarProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  flip: () => void;
}

const LayoutWrapper = ({ isSidebarOpen, setIsSidebarOpen, flip, children }: SidebarProps) => {
  const [currentTab, setCurrentTab] = useState<CurrentTab | null>(null);

  const handleTabClick = (tab: CurrentTab) => {
    setCurrentTab(tab);

    if (!isSidebarOpen) {
      setIsSidebarOpen((p: boolean) => !p);
      flip();
      return;
    }
    if (isSidebarOpen && tab === currentTab) {
      setIsSidebarOpen((p: boolean) => !p);
      flip();
      setCurrentTab(null);
    }
  };

  return (
    <div className="flex">
      <Layout style={{ background: 'transparent' }} className="min-h-100vh !fixed z-50 w-full !bg-transparent top-0">
        {/* <div className={!isSidebarOpen ? 'w-72' : 'w-280'}></div> */}
        <Sidebar isSidebarOpen={isSidebarOpen} currentTab={currentTab} handleTabClick={handleTabClick} />
        <Topbar />
      </Layout>
      <div className={clsx('transition-all duration-300 ease-in-out', isSidebarOpen ? 'pl-280' : 'pl-72')}></div>
      <Content className="p-24 mt-80">{children}</Content>
    </div>
  );
};

export default LayoutWrapper;
