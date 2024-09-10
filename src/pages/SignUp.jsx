import logo from "../assets/logo.svg";
import bg_logo from "../assets/big-logo.svg";

const SignUp = () => {
  return (
    <div className="flex w-10/12 mx-auto gap-9 mt-10">
      <form className="w-3/4  flex flex-col gap-5">
        <img src={logo} alt="" className="w-36 mb-4" />

        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              First Name
            </label>
            <input
              type="text"
              className="w-64 h-10  border border-slate-300 rounded outline-none ring-2 ring-[transparent] focus:ring-[#93c5fd] px-4"
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
            <input
              type="number"
              className="w-64 h-10 border border-slate-300 rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] px-4"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Email
            </label>
            <input
              type="email"
              className="w-64 h-10  border border-slate-300 rounded outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd] px-4"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Specialty
            </label>
            <input
              type="text"
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
              className="flex w-64 h-10 rounded border border-slate-300  border-input bg-white text-sm text-gray-400  file:bg-slate-200 file:text-slate-500 file:text-sm file:font-medium file:h-full outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd]"
              type="file"
              id="picture"
            />
          </div>

          <div className="flex flex-col  gap-3">
            <label className="text-sm font-medium leading-6 text-customBlack">
              CV
            </label>
            <input
              className="flexw-64 h-10 rounded border border-slate-300  border-input bg-white text-sm text-gray-400  file:bg-slate-200 file:text-slate-500 file:text-sm file:font-medium file:h-full outline-none ring-1 ring-[transparent] focus:ring-[#93c5fd]"
              type="file"
              id="picture"
            />
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
        <a
          href=""
          className="w-64 mx-auto mt-10 bg-customBlue text-slate-50 py-3 text-center rounded text-base font-medium leading-6"
        >
          Sign up
        </a>
      </form>
      <div className="w-1/2 h-full">
        <img src={bg_logo} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default SignUp;
