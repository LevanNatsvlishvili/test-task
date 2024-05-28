import Sidebar from './components/Sidebar';

const AdminPanel = () => {
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
