import logo from "../assets/logo.svg";
import bg_logo from "../assets/big-logo.svg";

import {
  DropDown,
  Input,
  Label,
  PhoneSelector,
  InputFile
} from "../Components/Form/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex w-10/12 mx-auto justify-between mt-10">

      <div className="w-3/4 flex flex-col gap-8 ">
        <img src={logo} alt="" className="w-36 mb-7" />

        <form className="flex w-3/4 flex-col gap-6">
          <h2 className="text-2xl font-bold" style={{color:'#424242'}}>Create Account</h2>
          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <Label labelName=" Full Name" />
              <Input type="text" placeholder='Enter English name' />
            </div>

            <div className="flex flex-col  gap-3 ">
              <Label labelName="Full Name (In Arabic)" />
              <Input type="text" placeholder='Enter Arabic name' />
            </div>
          </div>

           <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <Label labelName="Email" />
              <Input type="email" placeholder='special@example.com' />
            </div>

            <div className="flex flex-col  gap-3 ">
              <Label labelName="Phone Number" />
              <PhoneSelector/>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <Label labelName=" Password" />
              <Input type="password" />
            </div>

            <div className="flex flex-col  gap-3 ">
              <Label labelName="Specialty" />
             <DropDown/>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <Label labelName="Image" />
              <InputFile placeholder='Upload your Image'/>
            </div>

            <div className="flex flex-col  gap-3 ">
              <Label labelName="CV" />
              <InputFile placeholder='Upload your CV'/>
            </div>
          </div>


     <div className="w-full flex flex-col gap-5">
     <Link
          to="/SP-Dashboard/overview"
          className="w-3/5 mx-auto bg-customBlue text-slate-50 py-3 text-center rounded text-base font-medium leading-6"
        >
          Sign up
        </Link>
       
        <div className="flex  justify-center gap-2">
          <p>Already have an account?</p>
          <Link
          to="/SP-Dashboard"
          className=" underline text-customBlue"
        >
          Sign in
        </Link>
        </div>
     </div>
        </form>

      </div>
      <div className="w-1/2 h-full">
        <img src={bg_logo} alt="" className="w-full mt-5" />
      </div>
    </div>
  );
};

export default SignUp;
