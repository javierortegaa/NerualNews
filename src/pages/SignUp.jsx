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
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundColor py-20">
      <h2 className="text-3xl font-bold text-primaryPurple">Sign Up</h2>
      <form className="mt-6 w-full max-w-sm" onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block text-textColor" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            className="w-full p-3 bg-inputBackground border border-primaryPurple rounded focus:outline-none focus:ring-2 focus:ring-primaryPurple"
          />
        </div>
        <div className="mb-4">
          <label className="block text-textColor" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-3 bg-inputBackground border border-primaryPurple rounded focus:outline-none focus:ring-2 focus:ring-primaryPurple"
          />
        </div>
        <div className="mb-4">
          <label className="block text-textColor" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="w-full p-3 bg-inputBackground border border-primaryPurple rounded focus:outline-none focus:ring-2 focus:ring-primaryPurple"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-primaryPurple hover:bg-secondaryPurple text-white font-semibold rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-textColor">
        Already have an account?{" "}
        <Link to="/login" className="text-primaryPurple hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
