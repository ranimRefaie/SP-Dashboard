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
                header="project 1"
                className="text-3xl text-customBlack"
              >
                <div className="flex flex-col gap-4 ml-14">
                  <div className="">
                    <div className="flex items-center gap-1 text-2xl">
                      <span>
                        <FaRegHourglassHalf size={20} />
                      </span>
                      <h3>Progress</h3>
                    </div>
                    {/* <ul>
                      <li className="">lorem</li>
                    </ul> */}
                  </div>
                  <div className="flex items-center gap-1 text-2xl">
                    <span>
                      <FaTasks size={20} />
                    </span>

                    <h3>To Do</h3>
                  </div>

                  <div className="flex items-center gap-1 text-2xl">
                    <span>
                      <AiOutlineCheckCircle size={20} />
                    </span>

                    <h3>Completed</h3>
                  </div>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
