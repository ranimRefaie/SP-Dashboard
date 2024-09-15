import React, { useState } from "react";
import Sidebar, { SidebarItem } from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { MdOutlineDashboard, MdOutlineAnalytics } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { PiUsersFourThin } from "react-icons/pi";
import img_card from "../assets/img-card.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "project01", status: "At Risk" },
  ]);

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `project0${projects.length + 2}`,
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
    <div className="flex bg-[#EFEFEF]">
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
        <Navbar />
        <div className="px-16 w-[95%] bg-white mx-auto mt-8">
          <h1 className="text-3xl font-extrabold py-6">Your Projects</h1>
          <button
            onClick={addProject}
            className="w-[22%] float-end bg-[#00A3FF] text-white rounded-[4px] h-[43px] text-center"
          >
            Add new project
          </button>
          <div className="w-full flex-wrap justify-start flex gap-4 pt-8">
            {projects.map((project) => (
              <div
                key={project.id}
                title="Double click for details"
                className="bg-[#95A4FC4D] cursor-pointer w-[30%] rounded-xl h-[220px]"
                onClick={() => handleMenuToggle(project)}
              >
                <img
                  src={img_card}
                  alt=""
                  className="w-[50%] h-[140px] mx-auto rounded-lg"
                />
                <div className="flex justify-between pt-2 items-center">
                  <div className="flex flex-col items-start">
                    <input
                      className="border-0 bg-transparent outline-none rounded-lg w-[87%] mx-4"
                      value={project.name}
                      readOnly
                    />
                    <div className="bg-[#FFB3B3] w-1/4 text-[#C65D5D] rounded-[10px] p-1 text-xs ml-3 text-center">
                      {project.status}
                    </div>
                  </div>
                  <div className="relative pr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="cursor-pointer"
                      id="basic-button"
                      aria-haspopup="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Menu_Kebab">
                        <path d="M14.5,12c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,-0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,-0 2.5,1.12 2.5,2.5Zm-1,-0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,-0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5Z"></path>
                        <path d="M14.5,4.563c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,-0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,-0 2.5,1.12 2.5,2.5Zm-1,-0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,-0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5Z"></path>
                        <path d="M14.5,19.437c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,0 2.5,1.12 2.5,2.5Zm-1,0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5Z"></path>
                      </g>
                    </svg>

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
