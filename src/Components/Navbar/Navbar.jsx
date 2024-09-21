import { useState } from "react";
import avatar from "../../assets/3d_avatar_26.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useSidebar } from "../../Context/Context";
import { FaAlignLeft } from "react-icons/fa";

const Navbar = () => {
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
              <div className="absolute flex  items-center right-0 z-10 mt-2 w-60 rounded-md shadow-lg bg-white  border border-[#EFEFEF] px-2">
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

export default Navbar;
