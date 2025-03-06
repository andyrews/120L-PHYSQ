import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="flex flex-col w-full max-w-4xl flex items-center p-30 gap-5">

        <div className="w-30 h-30 bg-gray-400 rounded-full"></div>
        <div className="text-center content-center">
          <h2 className="text-3xl font-bold">RAYMOND CRUZ</h2>
          <p className="text-gray-400 underline text-lg">rayray@gmaill.com</p>
        </div>
        <div className="flex">
            <Link className="bg-yellow-500 text-black text-lg font-bold px-5 py-2 rounded-lg" to="/LogIn">
              Log-out
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Account;