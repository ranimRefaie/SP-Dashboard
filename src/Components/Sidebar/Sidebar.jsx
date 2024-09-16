import { FaHome, FaEnvelope, FaUsers, FaStar } from "react-icons/fa";
import { useContext, createContext, useState } from "react";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import min_logo from "../../assets/sm-logo.png";
import { Link } from "react-router-dom";
const SidebarContext = createContext();
import avatar from "../../assets/3d_avatar_26.png";
import { GoListUnordered } from "react-icons/go";
import { MdSettings } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen p-0 m-0  ${expanded ? "w-64" : "w-20"}`}>
      <nav className="h-full  flex flex-col justify-between  bg-white shadow-lg border-4 border-[#EFEFEF] shadow-[#EFEFEF] p-0 rounded-md">
        <div className="p-4 pb-2 mt-3">
          {/* <button
            onClick={() => setExpanded((curr) => !curr)}
            className="w-full flex justify-end p-1.5 rounded-lg  text-[#424242]  mx-auto"
          >
            {expanded ? (
              <GoListUnordered size={25} />
            ) : (
              <GoListUnordered size={25} />
            )}
          </button> */}
          <img
            onClick={() => setExpanded((curr) => !curr)}
            src={expanded ? logo : min_logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-40" : "w-20"
            }`}
            alt=""
          />
        </div>

        <div className="">
          <SidebarContext.Provider value={{ expanded }}>
            <ul className=" px-3  border-b border-[#EFEFEF]  mx-6">
              {children}
            </ul>
          </SidebarContext.Provider>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className=" px-3 border-b border-[#EFEFEF] mx-6">
              <SidebarItem
                text="Get help"
                icon={<IoMdHelpCircleOutline size={25} />}
              />
              <SidebarItem text="Setting" icon={<MdSettings size={25} />} />
            </ul>
          </SidebarContext.Provider>
        </div>

        <div className="">
          <div className=" rounded-[5px] w-[90%] p-4 mt-5  flex items-center gap-3  h-[40px]">
            <div className="w-[35px] h-[35px] rounded-full object-contain">
              <img
                src={avatar}
                alt=""
                className="w-[36px] h-[36px] rounded-full"
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
        relative flex items-center py-2 px-3 my-1 justify-center
        font-medium rounded-md cursor-pointer mx-6
        transition-colors group  mt-4 text-[#C65D5D] text-xl
       
    `}
          >
            <span>
              <BsBoxArrowInRight />
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
            ? "bg-[#EFEFEF] text-[#424242]"
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
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6 
          bg-[#EFEFEF]  text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}
