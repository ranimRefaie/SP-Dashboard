import { useState } from "react";
import avatar from "../../assets/3d_avatar_26.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useSidebar } from "../../Context/Context";
import { FaAlignLeft } from "react-icons/fa";

export const Navbar = () => {
  const { expanded, setExpanded } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed right-0 h-10 border-b border-[#EFEFEF] bg-white ${
        expanded ? "left-64" : "left-20"
      }`}
    >
      <div className=" flex w-[90%] h-full justify-between items-center  text-[#424242] mx-auto">
        <button
          onClick={() => setExpanded((x) => !x)}
          className=" rounded-lg  text-[#424242]"
        >
          <FaAlignLeft size={20} />
        </button>
        <div className="flex gap-3 items-center text-[#424242]">
          <div className="w-[35px] h-[35px] rounded-full object-contain">
            <img
              src={avatar}
              alt=""
              className="w-[35px] h-[35px] rounded-full"
            />
          </div>
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={toggleDropdown}
                className="w-[30px] h-[30px] rounded-full flex justify-center items-center"
              >
                <IoIosArrowDown size={20} />
              </button>
            </div>

            {isOpen && (
              <div className="absolute flex  items-center right-0 z-20 mt-2 w-60 rounded-md shadow-lg bg-white  border border-[#EFEFEF] px-2">
                <div className="w-[45px] h-[45px] rounded-full object-contain">
                  <img
                    src={avatar}
                    alt=""
                    className="w-[45px] h-[45px] rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center text-xs p-4">
                  <h3 className="font-bold text-sm text-[#424242]">
                    Osama Habka
                  </h3>
                  <span className="font-semibold text-[10px] text-[#B3B3B3]">
                    Admin
                  </span>
                </div>

                <BsBoxArrowInRight size={20} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SubNavbar = () => {
  const { expanded } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Primary Kay");

  const options = [];

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={` flex flex-col mt-10 h-10  ${
        expanded ? "ml-64" : "ml-20"
      }  border-b border-[#EFEFEF] bg-white`}
    >
      <div className=" flex w-[90%] h-full justify-between items-center  text-[#424242] mx-auto">
        <div className="w-[50%] relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex items-center"
            >
              {selectedOption}
              <IoIosArrowDown />
            </button>
          </div>

          {isOpen && (
            <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-customBlue hover:text-white w-full text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex w-[50%] gap-4 justify-end">
          <select id="" className="bg-transparent cursor-pointer">
            <option value="1">Tags</option>
          </select>
          <input
            type="search"
            placeholder="Search task , name ,message"
            className="placeholder:text-[#A4A4A4] w-[50%] h-[32px] border rounded-[4px] text-xs font-normal  border-[#E6E6E6] pl-5"
          />
        </div>
      </div>
    </div>
  );
};
