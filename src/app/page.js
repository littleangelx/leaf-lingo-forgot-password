"use client";

import Image from "next/image";
import { supabase } from "@/supabase";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      return;
    }

    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });

    if (data) {
      alert("Password changed successfully");
    } else {
      alert("Sorry, something went wrong");
    }
  };

  return (
    <div className="w-full h-screen px-10 md:px-30 lg:flex lg:items-center xl:justify-center">
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-[20rem] mx-auto h-full flex flex-col justify-center">
          <img
            src="logo.png"
            alt="Leaf Lingo logo"
            className="w-24 md:w-32 xl:w-40 mx-auto"
          />
          <h1 className="mt-4 text-2xl font-bold mx-auto">Create Password</h1>
          <div className="text-xs">
            <p>Please enter a new password.</p>
            <ul className="list-disc ml-6">
              <li>Enter 8-16 characters.</li>
              <li>Do not include common words or names.</li>
              <li>
                Combine uppercase letters, lower case letters, numbers and
                symbols.
              </li>
            </ul>
          </div>
          <form
            className="flex flex-col items-start mt-4 gap-5 w-full"
            onSubmit={handleSubmit}
          >
            <div className="w-full space-y-2">
              <p className="text-xs">Create New Password</p>
              <input
                placeholder="Create New Password"
                className="w-full h-12 rounded-md border-2 border-[#FFEB94] bg-[#00000008] px-3"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full space-y-2">
              <p className="text-xs">Confirm New Password</p>
              <input
                placeholder="Confirm New Password"
                className="w-full h-12 rounded-md border-2 border-[#FFEB94] bg-[#00000008] px-3"
                name="password2"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input
              value="Confirm"
              className="w-full h-14 rounded-md  bg-[#FFEB94] text-[#0A64A5] font-bold"
              name="submitButton"
              type="submit"
            />
          </form>
        </div>
      </div>
      <div
        className="hidden lg:flex flex-col w-1/2 h-screen bg-cover justify-center items-center"
        style={{ backgroundImage: "url('background.gif')" }}
      >
        <h2 className="text-2xl font-bold text-center">
          Don't worry,
          <br /> we'll help you.
        </h2>
        <div className="w-56 h-56 rounded-full bg-white flex flex-col items-center justify-center mt-16">
          <img src="logo.png" className="w-24" />
        </div>
      </div>
    </div>
  );
}
