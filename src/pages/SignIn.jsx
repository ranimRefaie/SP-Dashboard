import { Link } from "react-router-dom";
import logo from "../assets/Group 1000002151.svg";
import bg_logo from "../assets/Group 8754.svg";
const SignIn = () => {
  return (
    <div className="flex w-4/5 mx-auto justify-between mt-10">
      <div className="w-3/4 flex flex-col gap-14">
        <img src={logo} alt="" className="w-36" />
        <p className="text-2xl font-bold leading-9 text-customBlack">
          sign in to your dashboard
        </p>
        <div className="flex flex-col w-1/2 gap-7">
          <label className="text-sm font-medium leading-6 text-customBlack">
            Email
          </label>
          <input
            type="email"
            className="h-10  border border-slate-300 rounded"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-7">
          <label className="text-sm font-medium leading-6 text-customBlack">
            Password
          </label>
          <input
            type="password"
            className="h-10 border border-slate-300 rounded"
          />
        </div>
        <Link
          to=""
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
