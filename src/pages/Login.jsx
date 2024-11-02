import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold text-primaryPurple">Login</h2>
      <form className="mt-6 w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-textColor" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-3 bg-gray-800 border border-primaryPurple rounded focus:outline-none focus:ring-2 focus:ring-primaryPurple"
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
            className="w-full p-3 bg-gray-800 border border-primaryPurple rounded focus:outline-none focus:ring-2 focus:ring-primaryPurple"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-primaryPurple hover:bg-secondaryPurple text-white font-semibold rounded-lg transition duration-300"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-gray-400">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primaryPurple hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
