import React from "react";
import sign from "../../assets/sign.png";

const SignUp = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex justify-end w-[50%] mr-[70px]">
          <div>
            <div>
              <h1 className="text-[34px] font-bold font-secendry text-primary">
                Get started with easily register
              </h1>
              <p className="text-[20px] font-normal text-black/50 font-secendry mt-[13px]">
                Free register and you can enjoy it
              </p>
              <div>
                <div className="w-[366px] mt-[40px] relative">
                  <input
                    type="email"
                    placeholder="Email Addres"
                    className="w-full py-[20px] pl-[52px] pr-[66px] border-[2px] border-[#11175D] rounded-[8px]"
                  />
                  <p className="absolute top-[-13px] left-[45px] px-[10px] bg-white tracking-[2px]">
                    Email Address
                  </p>
                </div>
                <div className="w-[366px] mt-[40px] relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full py-[20px] pl-[52px] pr-[66px] border-[2px] border-[#11175D] rounded-[8px]"
                  />
                  <p className="absolute top-[-13px] left-[45px] px-[10px] bg-white tracking-[2px]">
                    Full Name
                  </p>
                </div>
                <div className="w-[366px] mt-[40px] relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full py-[20px] pl-[52px] pr-[66px] border-[2px] border-[#11175D] rounded-[8px]"
                  />
                  <p className="absolute top-[-13px] left-[45px] px-[10px] bg-white tracking-[2px]">
                    Password
                  </p>
                </div>
              </div>
              <div>
                <button className="z-[111] relative bg-primary py-[20px]  px-[150px] text-white rounded-[88px] text-[20px] font-semibold font-secendry mt-[51px] mb-[35px]">
                  <span> Sign up</span>
                  <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 h-[28px] w-[71px] blur-[10px] z-[-1]"></span>
                </button>
                <p className="text-[14px] font-primary text-[#03014C] font-semibold w-[368px] text-center">
                  Already have an account ?{" "}
                  <span className="text-[#EA6C00] font-bold">Sign In</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-fit">
          <img
            src={sign}
            className="h-screen w-full object-cover object-end"
            alt="sign"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
