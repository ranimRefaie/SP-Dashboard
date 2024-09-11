import React, { useState } from 'react';

export const Form = () => {
  return (
    <div>Form</div>
  )
}
export const Input = () => {
    return (
      <div>Form</div>
    )
  }

  export const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Specialty');
  
    const options = ['Frontend', 'Backend', 'UI/UX'];
  
    const toggleDropdown = (event) => {
      event.preventDefault(); // منع السلوك الافتراضي
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
            type="button" // تأكد من أن النوع هو "button"
            onClick={toggleDropdown}
            className=" inline-flex justify-between w-full rounded border border-slate-300  px-4 py-2 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd]"
          >
            {selectedOption}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
  
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
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