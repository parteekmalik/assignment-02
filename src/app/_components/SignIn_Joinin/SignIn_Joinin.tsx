import React, { useState } from "react";

function SignIn_Joinin({
  primaryColor,
  secandryColor,
}: {
  primaryColor: string;
  secandryColor: string;
}) {
  const [isSignin, setisSignin] = useState(true);
  return (
    <div className={"grow p-2 lg:ml-5 lg:p-5  " + primaryColor}>
      <div className="flex gap-5 py-5 text-[1.25rem] font-semibold">
        <button
          className={`${isSignin ? "text-mainPurple underline underline-offset-8" : "text-mainBorder"}`}
          onClick={() => setisSignin(true)}
        >
          <span>Sign In</span>
        </button>
        <button
          className={`${!isSignin ? "text-mainPurple underline underline-offset-8" : "text-mainBorder"}`}
          onClick={() => setisSignin(false)}
        >
          <span>Join In</span>
        </button>
      </div>
      <div className="flex w-full flex-col">
        <div className="relative flex w-full flex-col gap-4   font-medium lg:w-[25rem]">
          <div className="flex w-full items-center justify-center rounded-lg border border-mainPurple p-2 hover:cursor-pointer">
            <img src="/Google.svg" className="absolute left-0 pl-[2.5rem]" />
            <span>Continue with Google</span>
          </div>
          <div className="flex w-full items-center justify-center rounded-lg border border-mainPurple p-2 hover:cursor-pointer">
            <img
              src="/5296499_fb_facebook_facebook logo_icon 1.svg"
              className="absolute left-0 pl-[2.5rem]"
            />
            <span>Continue with Facebook</span>
          </div>
          <div className="relative order-first flex w-full items-center justify-center lg:order-last">
            <div className="absolute h-[2px] w-full bg-mainBorder "></div>
            <span className={`z-10 p-2 ${primaryColor} `}>Or connect with</span>
          </div>
        </div>
        <form
          className="order-first flex flex-col gap-5 lg:order-last"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className={"p-2 outline-mainPurple" + secandryColor}
            type="email"
            placeholder="Email"
          />
          <PasswordInput secandryColor={secandryColor} />
          {isSignin ? (
            <div className="flex w-full justify-between text-[0.875rem]">
              <div className="flex gap-2">
                <input className="" type="checkbox" />
                <span>Remember me</span>
              </div>
              <div>
                <span>Forgot Password</span>
              </div>
            </div>
          ) : (
            <div className="flex w-full flex-col justify-center gap-2 text-[0.5625rem]">
              <div className="flex w-full justify-between">
                <div className="flex gap-2">
                  <div className="h-[0.5rem] w-[2.5rem] rounded-md bg-white"></div>
                  <div className="h-[0.5rem] w-[2.5rem] rounded-md bg-white"></div>
                  <div className="h-[0.5rem] w-[2.5rem] rounded-md bg-white"></div>
                </div>
                <div className="text-[0.7rem]">Passwaord Strength</div>
              </div>
              <span>
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
              </span>
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-lg border-2 border-black p-2 font-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn_Joinin;

export function PasswordInput({ secandryColor }: { secandryColor: string }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center">
      <input
        className={"w-full p-2 outline-mainPurple" + secandryColor}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-2"
      >
        {showPassword ? "🙈" : "👁️"}
      </button>
    </div>
  );
}
