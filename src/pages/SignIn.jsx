import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import bg_logo from "../assets/big-logo.svg";
import {  Label } from "../Components/Form/Form";
const SignIn = () => {
  return (
    <div className="flex w-10/12 mx-auto justify-between mt-10">
      <div className="w-3/4 flex flex-col gap-8 ">
        <img src={logo} alt="" className="w-36 mb-7" />
        <p className="text-2xl font-bold leading-9 text-customBlack">
        Sign In To Your Dashboard
        </p>
        <div className="flex flex-col w-1/2 gap-3 mt-5">
          <Label labelName="Email" />
          <input
            type="email"
            placeholder='special@example.com'
            className="h-10 px-4  border border-customgray rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] placeholder:text-sm placeholder:text-customgray"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-3">
          <Label labelName="Password" />
          <input
            type="password"
            className="h-10 px-4 border border-customgray rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd]"
          />
        </div>
       
        <Link
          to="/SP-Dashboard/dashboard"
          className="w-1/2 bg-customBlue text-slate-50 py-3 text-center rounded text-base font-medium"
        >
          Sign in
        </Link>
       
        <div className="flex w-1/2 justify-center gap-2">
          <p>Don't have account?</p>
          <Link
          to="/SP-Dashboard/sign-up"
          className=" underline text-customBlue"
        >
          Create One
        </Link>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img src={bg_logo} alt="" className="w-ful mt-5" />
      </div>
    </div>
  );
};

export default SignIn;
