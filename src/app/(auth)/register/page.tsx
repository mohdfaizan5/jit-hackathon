import React from "react";
import SignUpForm from "./signupForm";

const page = () => {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen gap-10">
      <h1 className="text-4xl font-bold text-center mb-5">Registration</h1>
      <SignUpForm />
    </div>
  );
};

export default page;
