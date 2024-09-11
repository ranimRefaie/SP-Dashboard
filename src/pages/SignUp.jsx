import logo from "../assets/logo.svg";
import bg_logo from "../assets/big-logo.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import syria from "../assets/R.png";
import {
  DropDown,
  Input,
  InputFile,
  Label,
  PhoneSelector,
} from "../Components/Form/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up  w-10/12 flex flex-col mx-auto gap-9 mt-10">
      <img src={logo} alt="" className="w-36 mb-4 z-10" />
      <div className="flex">
        <form className="w-4/5 flex flex-col gap-5 z-10 mx-auto p-10 bg-white shadow-xl rounded shadow-inherit">
          <div className="flex gap-6">
            <div className="flex flex-col gap-3">
              <Label labelName=" First Name" />
              <Input type="text" />
            </div>

            <div className="flex flex-col  gap-3">
              <Label labelName="Last Name" />
              <Input type="text" />
            </div>

            <div className="flex flex-col gap-3">
              <Label labelName=" Father Name" />
              <Input type="text" />
            </div>
          </div>

          <div className="flex gap-6">
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
              <Label labelName="Specialty" />
              <DropDown />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-3">
              <Label labelName=" User Name" />
              <Input type="text" />
            </div>

            <div className="flex flex-col gap-3">
              <Label labelName="Password" />
              <Input type="password" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col  gap-3">
              <Label labelName="Image" />
              <InputFile />
            </div>

            <div className="flex flex-col  gap-3">
              <Label labelName="CV" />
              <InputFile />
            </div>
          </div>

          <Link
            to=""
            className="w-64 mx-auto mt-10 bg-customBlue text-slate-50 py-3 text-center rounded text-base font-medium leading-6"
          >
            Sign up
          </Link>
        </form>

        <div className="w-1/2">
          <img src={bg_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
