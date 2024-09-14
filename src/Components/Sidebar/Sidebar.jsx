import { FaHome, FaEnvelope, FaUsers, FaStar } from 'react-icons/fa';
import { useContext, createContext, useState } from "react"
import { BsBoxArrowInLeft, BsBoxArrowInRight } from 'react-icons/bs';
import logo from '../../assets/logo.svg'
const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className={`h-screen ${expanded ? "w-56 ml-3" : "w-20"}`}>
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

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
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
    </li>
  )
}
