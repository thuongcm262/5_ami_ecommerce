import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button
        className="text-sm font-semibold
    hover:text-gray-900 text-gray-700 
    hover:cursor-pointer hoverEffect
    "
      >
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
