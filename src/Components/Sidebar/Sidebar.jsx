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

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen ${expanded ? "w-64" : "w-20"}`}>
      <nav
        className={`h-full flex flex-col justify-between bg-white shadow-sm border-r border-[#EFEFEF] shadow-[#424242] pb-5  ${
          expanded ? "" : "items-center"
        }`}
      >
        <div className="relative p-6 pb-2">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="absolute  -right-11 rounded-lg  text-[#424242]  mx-auto"
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

        <div className=" px-3   mx-6">
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
          <div className=" rounded-[5px] w-[90%] p-4 mt-5  flex items-center gap-3  h-[40px]">
            <div className="w-[35px] h-[35px] rounded-full object-contain">
              <img
                src={avatar}
                alt=""
                className="w-[40px] h-[37px] rounded-full"
              />
            </div>
            <div
              className={`${
                expanded ? "flex  flex-col  justify-center text-xs" : "hidden"
              }`}
            >
              <h3 className="font-bold text-xs text-[#424242]">osama habka</h3>
              <span className="font-semibold text-[10px] text-[#B3B3B3]">
                Admin
              </span>
            </div>
          </div>
          <Link
            to=""
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

export function SidebarItem({ icon, text, active, alert, link }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link
      to={link}
      className={`
        relative flex items-center py-2 px-3 my-1 justify-center
        font-medium rounded-md cursor-pointer
        transition-colors group  mt-4 text-[#424242]
        ${
          active
            ? "bg-[#424242] text-[#fff]"
            : "hover:bg-[#EFEFEF] hover:text-[#424242]"
        }

    `}
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
