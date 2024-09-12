import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import  { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
export const Label = ({ labelName }) => {
  return (
    <label className="text-sm font-medium leading-6 text-customBlack">
      {labelName}
    </label>
  );
};

export const Input = ({ type }) => {
  return (
    <input
      type={type}
      className="w-full h-10 border border-slate-300 rounded outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd] px-4"
    />
  );
};

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Specialty");

  const options = ["Frontend", "Backend", "UI/UX"];

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
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue) && inputValue.length <= 9) {
      setValue(inputValue);
    }
  };



  return (
    <div className="w-64 h-10  border border-slate-300 rounded  flex items-center">
      <div className="w-full flex px-2 gap-2">
<span>+983</span>
        <input
          placeholder=""
          className="w-full focus:outline-none focus:ring focus:ring-transparent placeholder:text-slate-400"
          maxLength={9}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export const InputFile = () => {
  return (
    <input
      className="flex w-64 h-10 rounded border border-slate-300  border-input bg-white text-sm   file:bg-customgray file:border-2 file:border-customgray file:text-sm file:font-medium file:h-full outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] cursor-pointer"
      type="file"
    />
  );
};

export const StepperForm = () => {
  const stepperRef = useRef(null);

    return (
 <div className="w-3/5 flex flex-col justify-between">
       <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
      <StepperPanel header="">
          <div className="flex">
              <div className=" surface-border border-round surface-ground flex-auto flex justify-center items-center"><Step_1/></div>
          </div>
          <div className="flex  justify-end items-end">
              <Button label="Next" icon={<FaLongArrowAltRight />} iconPos="right" onClick={() => stepperRef.current.nextCallback()} id="next-btn" />
          </div>
      </StepperPanel>
      <StepperPanel header="">
          <div className="flex flex-col h-12rem">
              <div className=" surface-border border-round surface-ground flex-auto flex justify-center items-center font-medium"><Step_2/></div>
          </div>
          <div className="flex  justify-between gap-5">
              <Button label="Back"  icon={<FaLongArrowAltLeft />} onClick={() => stepperRef.current.prevCallback()} />
              <Button label="Next" icon={<FaLongArrowAltRight />} iconPos="right" onClick={() => stepperRef.current.nextCallback()} id="next-btn"/>
          </div>
      </StepperPanel>
      <StepperPanel header="">
          <div className="flex flex-column h-12rem">
              <div className=" surface-border border-round surface-ground flex-auto flex justify-center items-center font-medium"><Step_3/></div>
          </div>
          <div className="flex pt-4 justify-start">
              <Button label="Back" icon={<FaLongArrowAltLeft />} onClick={() => stepperRef.current.prevCallback()} />
          </div>
      </StepperPanel>
  </Stepper>
 </div>
    )
}
         

export const Step_1 = () => {
  return (
    <div className="flex gap-6 flex-col">
      <div className="flex flex-col gap-3">
        <Label labelName=" First Name" />
        <Input type="text" />
      </div>

      <div className="flex flex-col  gap-3 ">
        <Label labelName="Last Name" />
        <Input type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <Label labelName=" Father Name" />
        <Input type="text" />
      </div>
     
    </div>
  );
};

export const Step_2 = () => {
  return (
    <div className="flex gap-6 flex-col h-full">
       <div className="flex flex-col  gap-3">
        <Label labelName="Phone Number" />
        <PhoneSelector />
      </div>
      <div className="flex flex-col gap-3">
        <Label labelName="Email" />

        <div class="relative">
          <input
            type="text"
            id="hs-leading-icon"
            name="hs-leading-icon"
            className="w-64 h-10  border border-slate-300  outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] pl-10 rounded text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none"
          />
          <div class="absolute inset-y-0 start-0 flex items-center  text-slate-500 text-base  pointer-events-none z-20 ps-4">
            <MdOutlineMailOutline />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Label labelName=" User Name" />
        <Input type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <Label labelName="Password" />
        <Input type="password" />
      </div>
    </div>
  );
};

export const Step_3 = () => {
  return (
    <div className="flex gap-6 flex-col">
      <div className="flex flex-col gap-3">
        <Label labelName="Specialty" />
        <DropDown />
      </div>
      <div className="flex flex-col  gap-3">
        <Label labelName="Image" />
        <InputFile />
      </div>

      <div className="flex flex-col  gap-3">
        <Label labelName="CV" />
        <InputFile />
      </div>

      <Link
      style={{background:'rgb(38, 173, 140)'}}
        to=""
        className="w-64 mx-auto mt-10  text-slate-50 py-3 text-center rounded text-base font-medium leading-6"
      >
        Sign up
      </Link>
    </div>
  );
};
