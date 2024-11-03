import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../services/firebase_auth";

const SignUp = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.elements.namedItem("username").value;
    const email = form.elements.namedItem("email").value;
    const password = form.elements.namedItem("password").value;

    try {
      await signup(email, password, username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f1e1]">
      <div className="w-80 p-6 border-2 border-border-black shadow-lg bg-[#fbf7ed] text-border-black font-serif">
        <h2 className="text-center text-2xl font-bold mb-4 tracking-wider">
          Sign Up for Neural News
        </h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-semibold mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              className="w-full px-2 py-1 border border-border-black bg-[#e9e3d5] text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-2 py-1 border border-border-black bg-[#e9e3d5] text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-2 py-1 border border-border-black bg-[#e9e3d5] text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full py-2 mt-4 bg-[#e9e3d5] border border-border-black text-border-black font-semibold hover:bg-[#d8d1bf] transition duration-200">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold hover:underline transition duration-300"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
