import Sidebar from "../Components/Sidebar/Sidebar";
import {Navbar} from "../Components/Navbar/Navbar";
import img_card from "../assets/638a92cf349604581a35fe75_263a75529a1752b75d64f9f21fd07c92-3-2.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import { useSidebar } from "../Context/Context";
import avatar from "../assets/3d_avatar_26.png";

const Projects = () => {
  const { expanded, setExpanded } = useSidebar();
  const navigat = useNavigate();
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
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className={`flex flex-col mt-20  ${expanded ? "ml-64" : "ml-20"}`}>
          <div className="ml-10">
            <h1 className="text-3xl font-extrabold py-6">Your Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className={`flex-wrap  flex gap-4 pt-8 ml-10`}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#ffffff] cursor-pointer w-80 shadow-lg rounded-xl mt-4 pb-3"
                onDoubleClick={() => {
                  navigat(`/SP-Dashboard/dashboard/projects ${project.id}`);
                }}
              >
                <img
                  src={img_card}
                  alt=""
                  className="w-[90%] h-[140px] mx-auto mt-3 rounded-lg"
                />
                <div className="flex justify-between pt-2 items-center">
                  <div className="flex  items-center ml-3">
                    <img
                      src={avatar}
                      alt=""
                      className="w-[35px] h-[35px] rounded-full"
                    />
                    <div className="">
                      <input
                        className="border-0 bg-transparent outline-none rounded-lg w-[87%] mx-4"
                        value={project.name}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="relative pr-2">
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
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addProject}
              className="w-80 h-[220px] flex justify-center items-center bg-[#ffffff]  shadow-lg rounded-xl cursor-pointer mt-4"
            >
              <VscAdd size={70} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="bg-[#FFB3B3] w-1/4 text-[#C65D5D] rounded-[10px] p-1 text-xs ml-3 text-center">
                    {project.status}
                  </div> */
}
