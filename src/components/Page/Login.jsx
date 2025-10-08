import React from "react";
import login from "../../assets/login.jpg";
import google from "../../assets/google.png";

const Login = () => {
  return (
    <div className="flex items-center">
      <div className="flex justify-end w-[50%] mr-[142px]">
        <div>
          <div>
            <h1 className="text-[34px] font-bold font-primary text-primary">
              Login to your account!
            </h1>
            <div className="w-[220px] flex items-center gap-[9px] py-[21px] px-[29px] rounded-[8px] inset-shadow-2xs border-[1px] border-[#03014C]/50 mt-[30px]">
              <img src={google} alt="google" className="w-[19px]" />
              <p className="text-[14px] font-semibold text-[#03014C] font-primary">
                Login with Google
              </p>
            </div>
            <div>
              <div className="w-[366px] mt-[40px] border-b-[1px] border-[#11175D]/50">
                <p className="tracking-[2px] text-[#03014C]">Email Address</p>
                <input
                  type="email"
                  placeholder="Email Addres"
                  className="w-full py-[20px]  pr-[66px] border-none outline-none "
                />
              </div>
              <div className="w-[366px] mt-[40px] border-b-[1px] border-[#11175D]/50">
                <p className="tracking-[2px] text-[#03014C]">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full py-[20px]  pr-[66px] border-none outline-none "
                />
              </div>
            </div>
            <div>
              <button className="z-[111] relative bg-primary py-[26px]  px-[123px] text-white rounded-[8px] text-[20px] font-semibold font-secendry mt-[51px] mb-[35px]">
                <span>Login to Continue</span>
                <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-[#5B36F5]/25 h-[28px] w-[71px] blur-[10px] z-[-1]"></span>
              </button>
              <p className="text-[14px] font-primary text-[#03014C] font-semibold w-[368px] text-center">
                Don’t have an account ?{" "}
                <span className="text-[#EA6C00] font-bold">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-fit">
        <img
          src={login}
          className="h-screen w-full object-cover object-end"
          alt="sign"
        />
      </div>
    </div>
  );
};

export default Login;
