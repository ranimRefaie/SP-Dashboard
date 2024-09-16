import Sidebar, { SidebarItem } from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { MdOutlineDashboard, MdOutlineAnalytics } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { PiUsersFourThin } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LiaProjectDiagramSolid } from "react-icons/lia";
const Dashboard = () => {
  return (
    <div className="flex ">
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
