"use client";

import Image from "next/image";
import { supabase } from "@/supabase";
import { useState } from "react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(email);

    try {
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("user_id")
        .eq("email", email);

      console.log(userData[0]["user_id"]);

      if (userData) {
        const { data, error } = await supabase
          .from("delete_requests")
          .insert({ user_id: userData[0]["user_id"] })
          .select("*");

        if (data) {
          alert("Your deletion request has been received");
        } else {
          alert("Error", error.message);
        }
      }
    } catch (error) {
      alert("Error", error.message);
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
          <h1 className="mt-4 text-2xl font-bold mx-auto">
            Enter your email address
          </h1>

          <form
            className="flex flex-col items-start mt-4 gap-5 w-full"
            onSubmit={handleSubmit}
          >
            <input
              placeholder=""
              className="w-full h-12 rounded-md border-2 border-[#FFEB94] bg-[#00000008] px-3"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              value="Confirm Delete"
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
