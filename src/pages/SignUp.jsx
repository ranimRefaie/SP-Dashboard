import logo from "../assets/logo.svg";
import bg_logo from "../assets/big-logo.svg";

import {
  StepperForm,
} from "../Components/Form/Form";

const SignUp = () => {
  return (
    <div className=" w-11/12 flex flex-col mx-auto gap-9 mt-10">
      <img src={logo} alt="" className="w-36 mb-4 z-10" />
      <div className="w-8/12 h-80 flex mx-auto gap-7">
        <StepperForm />

        <div className="w-1/2 h-full">
          <img src={bg_logo} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
