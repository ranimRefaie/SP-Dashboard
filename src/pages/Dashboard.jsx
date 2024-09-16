import Sidebar, { SidebarItem } from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LiaProjectDiagramSolid } from "react-icons/lia";
const Dashboard = () => {
  return (
    <div className="flex gap-2 bg-[#f8f9fa]">
      <Sidebar>
        <SidebarItem
          icon={<MdOutlineDashboard size={20} />}
          text="Dashboard"
          active
          link="/SP-Dashboard/dashboard"
        />
        <SidebarItem
          icon={<TbBrandGoogleAnalytics size={20} />}
          text="Analytics"
        />
        <SidebarItem
          icon={<LiaProjectDiagramSolid size={20} />}
          text="Projects"
          link="/SP-Dashboard/dashboard/projects"
        />
        <SidebarItem icon={<MdOutlineDashboard size={20} />} text="Stand Up" />
        <SidebarItem
          icon={<MdOutlineDashboard size={20} />}
          text="Financial dues"
        />
      </Sidebar>
      <Navbar />
    </div>
  );
};

export default Dashboard;
