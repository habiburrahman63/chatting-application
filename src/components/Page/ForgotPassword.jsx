import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";

const ForgotPassword = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleForgot = () => {
    if (!email) {
      setEmailErr("Email is requird!");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("You have entered an invalid email address!");
      }
    }
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then((user) => {
          // Password reset email sent!
          // ..
          console.log("ok coll", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <div className="w-[800px] bg-white py-[100px] rounded-[8px]">
        <p className="text-[24px] font-bold w-[400px] m-auto mb-[20px]">
          Forgot Password
        </p>
        <div className="w-[400px] bg-[#fff] m-auto border-[2px]">
          <input
            onChange={handleEmail}
            type="email"
            placeholder="Email Address"
            className="outline-0 border-none py-[10px] px-[6px] w-full rounded-[8px]"
          />
        </div>
        <p className="pt-[5px] text-[16px] text-red-600 font-semibold w-[400px]  m-auto">
          {emailErr}
        </p>
        <div className="w-[400px] m-auto mt-[30px]">
          <button
            onClick={handleForgot}
            className=" bg-primary py-[10px] cursor-pointer  px-[20px] text-white rounded-[8px] text-[16px] font-semibold font-secendry mr-[20px] "
          >
            Reset Password
          </button>
          <Link to="/login">
            <button className=" cursor-pointer bg-primary py-[10px]  px-[20px] text-white rounded-[8px] text-[16px] font-semibold font-secendry  ">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
