import { useContext, createContext, useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import min_logo from "../../assets/sm-logo.png";
import { Link } from "react-router-dom";
const SidebarContext = createContext();
import { MdSettings } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

import { useSidebar } from "../../Context/Context";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TbBusinessplan } from "react-icons/tb";

export default function Sidebar({ children }) {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const { expanded, setExpanded } = useSidebar();
  const Item_Sidebar = [
    {
      id: 1,
      path: "/SP-Dashboard/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard size={20} />,
    },
    {
      id: 2,
      path: "",
      name: "Analytics",
      icon: <TbBrandGoogleAnalytics size={20} />,
    },
    {
      id: 3,
      path: "/SP-Dashboard/dashboard/projects",
      name: "Projects",
      icon: <LiaProjectDiagramSolid size={20} />,
    },
    {
      id: 4,
      path: "",
      name: "Stand Up",
      icon: <MdOutlineDashboard size={20} />,
    },
    {
      id: 5,
      path: "",
      name: "Financial dues",
      icon: <TbBusinessplan size={20} />,
    },
  ];

  return (
    <div
      className={`h-screen fixed inset-y-0 left-0 bg-[#ffffff] ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <nav
        className={`h-full flex flex-col justify-between bg-white shadow-sm border-r border-[#EFEFEF] shadow-[#424242] pb-5  ${
          expanded ? "" : "items-center"
        } `}
      >
        <div className="relative p-6 pb-2">
          <img
            src={expanded ? logo : min_logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-40" : "w-20"
            }`}
            alt=""
          />
        </div>

        <div className="mx-6">
          <ul className=" ">
            {Item_Sidebar.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`relative flex items-center py-2 px-3 my-1 justify-center font-medium rounded-md cursor-pointer transition-colors group mt-4 text-[#424242]   ${
                  activeLink === index
                    ? "bg-sky-400 text-[#ffffff]"
                    : "hover:bg-[#EFEFEF] hover:text-[#424242]"
                }
                `}
                onClick={() => handleLinkClick(index)}
              >
                <span>{link.icon}</span>
                <span
                  className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "hidden"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </ul>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="  border-t border-[#EFEFEF]">
              <SidebarItem
                text="Get help"
                icon={<IoMdHelpCircleOutline size={25} />}
              />
              <SidebarItem text="Setting" icon={<MdSettings size={25} />} />
            </ul>
          </SidebarContext.Provider>
        </div>

        <div className="border-t border-[#EFEFEF] mx-6 ">
          <Link
            to="/SP-Dashboard"
            className={`
        relative flex items-center py-2  my-1 justify-center
        font-medium rounded-md cursor-pointer mx-6
        transition-colors group  mt-4 text-[#C65D5D] 
       
    `}
          >
            <span>
              <BsBoxArrowInRight size={25} />
            </span>
            <span
              className={`overflow-hidden  transition-all ${
                expanded ? "w-52 ml-3" : "hidden"
              }`}
            >
              Sing Out
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export function SidebarItem({ icon, text, active, link }) {
  const { expanded } = useSidebar();

  return (
    <Link
      to={link}
      className={`relative flex items-center py-2 px-3 my-1 justify-center font-medium rounded-md cursor-pointer transition-colors group mt-4 text-[#424242] ${
        active
          ? "bg-sky-400 text-[#ffffff]"
          : "hover:bg-[#EFEFEF] hover:text-[#424242]"
      }`}
    >
      <span>{icon}</span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "hidden"
        }`}
      >
        {text}
      </span>
    </Link>
  );
}
