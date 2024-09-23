import { useSidebar } from "../Context/Context";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { Accordion, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const ProjectDet = () => {
  const { expanded } = useSidebar();
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className={`flex flex-col mt-20  ${expanded ? "ml-64" : "ml-20"}`}>
          <div className="w-[80%] mx-auto">
            <Accordion activeIndex={0}>
              <AccordionTab
                header={
                  <div className="flex gap-1">
                    <FaRegHourglassHalf size={25} /> Progress
                  </div>
                }
                className="text-3xl text-customBlack"
              ></AccordionTab>

              <AccordionTab
                header={
                  <div className="flex gap-1" id="todo">
                    <FaTasks size={25} /> To Do
                  </div>
                }
                className="text-3xl text-customBlack"
              ></AccordionTab>

              <AccordionTab
                header={
                  <div className="flex gap-1" id="complate">
                    <AiOutlineCheckCircle size={25} /> Completed
                  </div>
                }
                className="text-3xl text-customBlack"
              ></AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
