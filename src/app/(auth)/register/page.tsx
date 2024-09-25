import React from "react";
import SignUpForm from "./signupForm";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen gap-10">
      <h1 className="text-4xl font-bold text-center mb-5">Registration</h1>
      <section className="flex md:flex-row flex-col items-start gap-10 min-h-[80vh] justify-center">
        <div>
          <Image
            src={"/imgs/home-from-work.svg"}
            alt="company logo"
            width={350}
            height={350}
          />
          <Link className="text-sm mt-5 text-primary/80 mx-auto" href="/login">
            Already have an account?
          </Link>
        </div>
        <SignUpForm />
      </section>
    </div>
  );
};

export default page;
