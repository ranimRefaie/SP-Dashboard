import { useSidebar } from "../Context/Context";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { Accordion, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";

import { ProgressBar } from 'primereact/progressbar';
        

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
                  <div className="flex gap-2 items-center">
                    <span className="flex gap-1 items-center text-xl">
                      <FaRegHourglassHalf size={20} />
                      Progress
                    </span>
                    <div className="w-full h-[3px] bg-customBlue"></div>
                  </div>
                }
                className=" text-customBlack"
              >
                <CardService />
              </AccordionTab>

              <AccordionTab
                header={
                  <div className="flex gap-2 items-center">
                    <span className="flex gap-1 items-center text-xl">
                      <FaTasks size={20} />
                      ToDo
                    </span>
                    <div className="w-full h-[3px] bg-customBlue"></div>
                  </div>
                }
                className=" text-customBlack"
              >
                <CardService />
              </AccordionTab>

              <AccordionTab
                header={
                  <div className="flex gap-2 items-center">
                    <span className="flex gap-1 items-center text-xl">
                      <AiOutlineCheckCircle size={20} />
                      Completed
                    </span>
                    <div className="w-full h-[3px] bg-customBlue"></div>
                  </div>
                }
                className=" text-customBlack"
              >
                <CardService />
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardService = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "project 1", status: "At Risk" },
  ]);

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `project ${projects.length + 1}`,
      status: "At Risk",
    };
    setProjects([...projects, newProject]);
  };

  const [showMenu, setShowMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMenuToggle = (project) => {
    setSelectedProject(project);
    setShowMenu(!showMenu);
  };

  const handleDeleteProject = () => {
    if (selectedProject) {
      setProjects(projects.filter((p) => p.id !== selectedProject.id));
      setShowMenu(false);
    }
  };

  const handleGoToBoard = () => {
    if (selectedProject) {
      console.log(`Going to board for project: ${selectedProject.name}`);
      setShowMenu(false);
    }
  };
  return (
    <div>
      <div className={`flex-wrap  flex gap-4 pt-8 ml-10`}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#ffffff] cursor-pointer w-64 shadow-lg rounded-xl mt-4 pb-3"
          >
            <div className="flex flex-col p-3 gap-3">
              <div className="flex justify-between">
                <li className="ml-3">Title</li>
                <div className="relative">
                  <span onClick={() => handleMenuToggle(project)}>
                    <AiOutlineMore />
                  </span>

                  {showMenu &&
                    selectedProject &&
                    selectedProject.id === project.id && (
                      <div className="absolute -right-24 top-4 bg-white rounded-md shadow-md z-10 ri">
                        <ul className="p-2">
                          <li
                            onClick={handleDeleteProject}
                            className="hover:bg-[#ff5c5c] hover:text-white cursor-pointer p-2"
                          >
                            Delete
                          </li>
                          <Link
                            to="/SP-Dashboard/dashboard/projects/board"
                            onClick={handleGoToBoard}
                            className="hover:bg-[#84be82] hover:text-white cursor-pointer p-2"
                          >
                            Go Board
                          </Link>
                        </ul>
                      </div>
                    )}
                </div>
              </div>
              <div className="flex  items-center ml-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  fugit, asperiores facere delectus repellat esse.
                </p>

                <ProgressBar value={50}></ProgressBar>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={addProject}
          className="w-64 h-[220px] flex justify-center items-center bg-[#ffffff]  shadow-lg rounded-xl cursor-pointer mt-4"
        >
          <VscAdd size={70} />
        </button>
      </div>
    </div>
  );
};
