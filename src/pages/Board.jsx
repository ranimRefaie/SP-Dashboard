import Sidebar, { SidebarItem } from "../Components/Sidebar/Sidebar";
import { Navbar, SubNavbar } from "../Components/Navbar/Navbar";
import { useSidebar } from "../Context/Context";

import { MdOutlineDashboard, MdOutlineAnalytics } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { PiUsersFourThin } from "react-icons/pi";
import avatar from "../assets/3d_avatar_26.png";
import { CardBoard } from "../Components/CardBoard/CardBoard";

const Board = () => {
  const { expanded } = useSidebar();
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <SubNavbar/>
        <div className={`flex flex-col mt-28  ${expanded ? "ml-64" : "ml-20"}`}>
      <CardBoard/>
        </div>
      </div>
    </div>

  );
};

export default Board;


{/* <div className="flex">
<Sidebar>
  <SidebarItem
    icon={<MdOutlineDashboard size={20} />}
    text="Dashboard"
    link="/SP-Dashboard/dashboard"
  />
  <SidebarItem icon={<MdOutlineAnalytics size={20} />} text="Analytics" />
  <SidebarItem
    icon={<VscGithubProject size={20} />}
    text="Projects"
    active
    link="/SP-Dashboard/dashboard/projects"
  />
  <SidebarItem icon={<PiUsersFourThin size={20} />} text="Stand Up" />
  <SidebarItem
    icon={<FaMoneyBillWave size={20} />}
    text="Financial dues"
  />
</Sidebar>
<div className="w-full">
  <div class="h-20  flex w-full justify-between items-center">
    <div class="flex flex-col w-[76%]">
      <div class="MuiStack-root css-1tvvh0p">
        <span
          class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-17ab91p"
          role="progressbar"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span
            class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm"
            style={{ transform: " translateX(-90%)" }}
          ></span>
        </span>
      </div>
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-1 pl-4 pt-1">
          <div class="flex gap-1 text-sm">
            <a class="text-[#818181] text-sm" href="#/">
              Project Name
            </a>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="bg-[#FFB3B3] text-[#C65D5D] text-[8px] py-1 px-6 rounded-[10px]">
            1 day left
          </div>
          <div class="text-[#00CD29] bg-[#D9EAE6] text-[8px] py-1 px-4 rounded-[10px]">
            10 %
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-3 pr-4  w-[23%]">
      <div className="bg-[#F3F3F3] rounded-[5px] w-[75%] p-4 flex items-center gap-3  h-[40px]">
        <div className="w-[35px] h-[35px] rounded-full object-contain">
          <img
            src={avatar}
            alt=""
            className="w-[36px] h-[36px] rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center text-xs">
          <h3 className="font-bold text-sm">osama habka</h3>
          <span className="font-semibold text-[10px] text-[#B3B3B3]">
            Admin
          </span>
        </div>
      </div>
      <div class="select flex-center relative">
        <div class="bg-[#F3F3F3] rounded-[5px] items-center h-[40px] p-4 flex gap-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            font-size="25"
            class="text-[#8E8E8E]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            font-size="14"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-between items-center w-[100%]  bg-white border-t-[1px] mt-2 p-1 pt-2"><div class="relative"><button class="cursor-pointer rounded-xl text-gray-500 text-sm p-2" id="basic-button" aria-haspopup="true">Primary Links  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="m7 10 5 5 5-5z"></path></svg></button></div><div class="flex  gap-2 w-[33%]"><div class="relative"><button class="cursor-pointer rounded-xl text-gray-500 text-sm p-2" id="basic-button" aria-haspopup="true">#Tags <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="m7 10 5 5 5-5z"></path></svg></button></div><div class="relative w-[70%] "><input type="search" placeholder="Search task , name ,message" class="placeholder:text-[#A4A4A4] pl-10 w-full h-[32px] border rounded-[4px] text-xs font-normal  border-[#E6E6E6]" /><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="absolute top-[10%] left-1 text-[#A4A4A4]" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></div></div></div>
  <CardBoard />
</div>
</div> */}