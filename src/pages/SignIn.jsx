import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import bg_logo from "../assets/big-logo.svg";
import { Label } from "../Components/Form/Form";
const SignIn = () => {
  return (
    <div className="flex w-10/12 mx-auto justify-between mt-10">
      <div className="w-3/4 flex flex-col gap-8">
        <img src={logo} alt="" className="w-36" />
        <p className="text-2xl font-bold leading-9 text-customBlack">
          sign in to your dashboard
        </p>
        <div className="flex flex-col w-1/2 gap-3 mt-5">
          <Label labelName="Email" />
          <input
            type="email"
            className="h-10 px-4  border border-slate-300 rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd]"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-3">
          <Label labelName="Password" />
          <input
            type="password"
            className="h-10 px-4 border border-slate-300 rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd]"
          />
        </div>
        <Link
          to="/SP-Dashboard/overview"
          className="w-1/2 bg-customBlue text-slate-50 py-3 text-center rounded text-base font-medium leading-6"
        >
          Sign in
        </Link>
        <Link
          to="/SP-Dashboard/sign-up"
          className="w-1/2 underline text-center text-customBlue rounded text-base font-medium leading-6"
        >
          Sign up
        </Link>
      </div>
      <div className="w-1/2 h-full">
        <img src={bg_logo} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default SignIn;
