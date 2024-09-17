import { useContext, createContext, useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import min_logo from "../../assets/sm-logo.png";
import { Link } from "react-router-dom";
const SidebarContext = createContext();
import avatar from "../../assets/3d_avatar_26.png";
import { MdSettings } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { useSidebar } from "../../Contaxt/Contaxt";

export default function Sidebar({ children }) {
  const { expanded, setExpanded } = useSidebar();

  return (
    <aside className={`h-full ${expanded ? "w-64" : "w-20"}`}>
      <nav
        className={`h-full flex flex-col justify-between bg-white shadow-sm border-r border-[#EFEFEF] shadow-[#424242] pb-5  ${
          expanded ? "" : "items-center"
        } `}
      >
        <div className="relative p-6 pb-2">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="absolute top-5  -right-11 rounded-lg  text-[#424242]  mx-auto"
          >
            {expanded ? <FaAlignLeft size={25} /> : <FaAlignLeft size={25} />}
          </button>
          <img
            src={expanded ? logo : min_logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-40" : "w-20"
            }`}
            alt=""
          />
        </div>

        <div className="    mx-6">
          <SidebarContext.Provider value={{ expanded }}>
            <ul className=" ">{children}</ul>
          </SidebarContext.Provider>

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
    </aside>
  );
}

export function SidebarItem({ icon, text, active, link }) {
  const { expanded } = useSidebar();

  return (
    <Link
      to={link}
      className={`relative flex items-center py-2 px-3 my-1 justify-center font-medium rounded-md cursor-pointer transition-colors group mt-4 text-blue-950 ${
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
