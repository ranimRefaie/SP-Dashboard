import { FaHome, FaEnvelope, FaUsers, FaStar } from 'react-icons/fa';
import { useContext, createContext, useState } from "react"
import { BsBoxArrowInLeft, BsBoxArrowInRight } from 'react-icons/bs';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
const SidebarContext = createContext()






export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className={`h-screen  ${expanded ? "w-56 ml-3" : "w-20"}`}>
      <nav className="h-full  flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
        <img src={logo} className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="" />
       

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg  hover:bg-[#EFEFEF] mx-auto"
          >
            {expanded ? <BsBoxArrowInLeft size={25}/> : <BsBoxArrowInRight size={25}/>}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 mt-10">{children}</ul>
        </SidebarContext.Provider>

      
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert,link }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <Link
    to={link}
      className={`
        relative flex items-center py-2 px-3 my-1 justify-center
        font-medium rounded-md cursor-pointer
        transition-colors group 
        ${
          active
            ? "bg-[#EFEFEF]"
            : "hover:bg-[#EFEFEF] "
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
  
  )
}



/*
function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (

<div className={` ${
        open ? "w-72" : "w-20 "
      }  h-screen  z-30 bg-white duration-300 rounded-xl border-r shadow-sm`}>
<div
      className=
      'w-full h-full p-5 pt-10'
    >
    
      <div className="flex gap-x-4 items-center relative">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
               <span  className=' absolute cursor-pointer -right-5 -top-8'  onClick={() => setOpen(!open)}>{!open ? <MdOutlineKeyboardDoubleArrowRight size={25}/> : < MdOutlineKeyboardDoubleArrowLeft size={25}/>}</span>

      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src='' />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
</div>
  )
}

export default Sidebar*/