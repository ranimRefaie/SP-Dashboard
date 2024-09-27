import Sidebar, { SidebarItem } from "../Components/Sidebar/Sidebar";
import {Navbar} from "../Components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className=" flex  bg-[#f8f9fa]">
      <Sidebar />
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
