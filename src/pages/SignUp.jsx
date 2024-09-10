import logo from "../assets/Group 1000002151.svg";
import bg_logo from "../assets/Group 8754.svg";

const SignUp = () => {
  return (
    <div className="flex w-10/12 mx-auto gap-9 mt-10">
      <div className="w-3/4 flex flex-col gap-5">
        <img src={logo} alt="" className="w-36 mb-4" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              First Name
            </label>
            <input
              type="text"
              className="h-10  border border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col  gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Last Name
            </label>
            <input
              type="text"
              className="h-10 border border-slate-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Father Name
            </label>
            <input
              type="text"
              className="h-10  border border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col  gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Phone Number
            </label>
            <input
              type="number"
              className="h-10 border border-slate-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Email
            </label>
            <input
              type="email"
              className="h-10  border border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col  gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Image
            </label>
            <input
              class="block w-full  text-lg text-gray-400 border border-slate-300 rounded cursor-pointer "
              id="large_size"
              type="file"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col  gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              CV
            </label>
            <input
              class="block w-full  text-lg text-gray-400 border border-slate-300 rounded cursor-pointer "
              id="large_size"
              type="file"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Specialty
            </label>
            <input
              type="text"
              className="h-10 border border-slate-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              User Name
            </label>
            <input
              type="text"
              className="h-10  border border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-6 text-customBlack">
              Password
            </label>
            <input
              type="password"
              className="h-10 border border-slate-300 rounded"
            />
          </div>
        </div>
        <a
          href=""
          className="w-1/2 mx-auto mt-4 bg-customBlue text-slate-50 py-3 text-center rounded text-base font-medium leading-6"
        >
          Sign up
        </a>
      </div>
      <div className="w-1/2 h-full">
        <img src={bg_logo} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default SignUp;
