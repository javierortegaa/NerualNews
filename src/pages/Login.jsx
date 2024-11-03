import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f1e1]">
      <div className="w-80 p-6 border-2 border-border-black shadow-lg bg-[#fbf7ed] text-border-black font-serif">
        <h2 className="text-center text-2xl font-bold mb-4 tracking-wider">
          Login to Neural News
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Username</label>
            <input
              type="text"
              className="w-full px-2 py-1 border border-border-black bg-[#e9e3d5] text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full px-2 py-1 border border-border-black bg-[#e9e3d5] text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full py-2 mt-4 bg-[#e9e3d5] border border-border-black text-border-black font-semibold hover:bg-[#d8d1bf] transition duration-200">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-bold hover:underline transition duration-300"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
