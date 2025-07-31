import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <img
        className="absolute w-full h-11/12   z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg"
        alt="bg-image"
      />
      <div className="absolute left-2/5 bottom-1/3 w-1/5 h-1/2 z-10 flex flex-col align-middle text-white p-5 bg-black/60 backdrop-blur-xs rounded-lg">
        <form action="submit" className="w-11/12">
          <p className=" font-bold font-sans text-2xl">Sign In</p>
          <input
            type=""
            name="email"
            id="email"
            placeholder="Email"
            className="p-3 w-full my-2 border-2 border-gray-500/30 rounded-md text-white"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-3  w-full my-2 border-2 border-gray-500/30 rounded-md  text-white"
          />
          <button
            className="bg-red-600 text-white hover:bg-red-700 w-full
                        px-6 py-3 rounded-2xl font-semibold transition-colors duration-300 inline-block cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
