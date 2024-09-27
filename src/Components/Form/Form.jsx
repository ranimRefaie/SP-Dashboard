import { useState, useRef } from "react";

export const Label = ({ labelName }) => {
  return (
    <label className="text-sm font-medium leading-6 text-customBlack">
      {labelName}
    </label>
  );
};

export const Input = ({ type, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="w-64 h-10 border border-customgray rounded outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd] px-4 placeholder:text-sm placeholder:text-customgray"
    />
  );
};

export const DropDown = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const options = ["Frontend", "Backend", "UI/UX"];

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-64 relative inline-block text-left">
      <div>
        <button
          type="button" 
          onClick={toggleDropdown}
          className=" inline-flex justify-between w-full rounded border border-customgray px-4 py-2 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd]"
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
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
  );
};

export const PhoneSelector = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue) && inputValue.length <= 9) {
      setValue(inputValue);
    }
  };

  return (
    <div className="w-64 h-10  border border-customgray rounded  flex items-center">
      <div className="w-full flex px-2 gap-2">
        <span className="border-r border-customgray pr-3">+983</span>
        <input
          placeholder="912345678"
          className="w-full focus:outline-none focus:ring focus:ring-transparent placeholder:text-sm placeholder:text-customgray"
          maxLength={9}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export const InputFile = ({ placeholder }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(placeholder);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="w-64 h-10 cursor-pointer">
      <div
        onClick={handleClick}
        className=" w-full h-full flex items-center border border-customgray rounded outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd] px-4 bg-transparent text-customgray text-sm text-left"
      >
        {fileName}
      </div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
};
