import logo from "../assets/logo.svg";
import bg_logo from "../assets/big-logo.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import syria from '../assets/R.png'
import { DropDown } from "../Components/Form/Form";

const SignUp = () => {
  return (
    <div className="sign-up  w-10/12 flex flex-col mx-auto gap-9 mt-10">
      <img src={logo} alt="" className="w-36 mb-4 z-10" />
<form className="w-4/5 flex flex-col gap-5 z-10 mx-auto p-10 bg-white shadow-xl rounded shadow-inherit">
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              First Name
            </label>
            <input
              type="text"
              className="w-64 h-10 border border-slate-300 rounded outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd] px-4"
            />
          </div>

          <div className="flex flex-col  gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Last Name
            </label>
            <input
              type="text"
              className="w-64 h-10 border border-slate-300 rounded outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd] px-4"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Father Name
            </label>
            <input
              type="text"
              className="w-64 h-10  border border-slate-300 rounded outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd] px-4"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col  gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Phone Number
            </label>


           
            <div class="relative  max-w-xs text-gray-500">
                <div class="absolute inset-y-0 left-3 my-auto h-6 flex items-center  pr-2">
                    <select class="text-sm outline-none rounded-lg h-full">
                        <option >syr</option>
                
                    </select>
                </div>
                <input  placeholder="+963" class="w-64 pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border border-slate-300 ring-1 ring-[transparent] focus:ring-[#93c5fd]  rounded"/>
            </div>


          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Email
            </label>
            <div class="relative">
              <input type="text" id="hs-leading-icon" name="hs-leading-icon" className="w-64 h-10  border border-slate-300  outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] pl-10 rounded text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none" />
              <div class="absolute inset-y-0 start-0 flex items-center  text-slate-500 text-base  pointer-events-none z-20 ps-4">
                <MdOutlineMailOutline />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Specialty
            </label>
          <DropDown/>
          </div>
        </div>
        <div class="max-w-sm space-y-3">
          <div>

          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              User Name
            </label>
            <input
              type="text"
              className="w-64 h-10  border border-slate-300 rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] px-4"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Password
            </label>
            <input
              type="password"
              className="w-64 h-10 border border-slate-300 rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] px-4"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col  gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Image
            </label>
            <input
              className="flex w-64 h-10 rounded border border-slate-300  border-input bg-white text-sm text-gray-400  file:bg-customBlue file:text-slate-50 file:border-2 file:border-customBlue file:text-sm file:font-medium file:h-full outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd]"
              type="file"
              id="picture"
            />
          </div>

          <div className="flex flex-col  gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              CV
            </label>
            <input
              className="flex w-64 h-10 rounded border border-slate-300  border-input bg-white text-sm text-gray-400  file:bg-customBlue file:text-slate-50 file:border-2 file:border-customBlue file:text-sm file:font-medium file:h-full outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd]"
              type="file"
              id="picture"
            />
          </div>

        </div>

        <a
          href=""
          className="w-64 mx-auto mt-10 bg-customBlue text-slate-50 py-3 text-center rounded text-base font-medium leading-6"
        >
          Sign up
        </a>

      </form>

    </div>
  );
};

export default SignUp;
