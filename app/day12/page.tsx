import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

import RegisterInput from "./RegisterInput";

export default function Day12() {
  return (
    <div className="h-[100vh] flex">
      <div className="h-[100vh] w-[50%] flex justify-center items-center p-4">
        <div className="flex flex-col">
          <h1 className="text-slate-400 text-[10px] font-bold">
            START FOR FREE
          </h1>
          <h1 className="text-3xl font-black">Create new account</h1>
          <form>
            <div className="flex flex-col gap-2 max-w-[310px] my-4">
              <div className="flex gap-2">
                <div className="relative">
                  <RegisterInput
                    inputName="firstname"
                    inputPlaceholder="First name"
                  />
                  <FontAwesomeIcon
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    icon={faAddressCard}
                    width={10}
                  />
                </div>

                <div className="relative">
                  <RegisterInput
                    inputName="lastname"
                    inputPlaceholder="Last name"
                  />
                  <FontAwesomeIcon
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    icon={faAddressCard}
                    width={10}
                  />
                </div>
              </div>
              <div className="relative">
                <RegisterInput inputName="email" inputPlaceholder="Email" />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  icon={faEnvelope}
                  width={10}
                />
              </div>

              <div className="relative">
                <RegisterInput
                  inputName="password"
                  inputPlaceholder="Password"
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  icon={faEye}
                  width={10}
                />
              </div>

              <p className="text-[10px] text-slate-400 font-bold">
                Already have an account?
                <span className="text-blue-500 font-bold">
                  {" "}
                  <a href="#">Sign in</a>
                </span>
              </p>
              <Button className="bg-blue-500 w-[100%] shadow-lg text-[12px] mt-4">
                Create account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
