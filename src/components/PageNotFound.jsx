import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 text-red-500 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.375 1.948 3.375h13.906c1.73 0 2.813-1.875 1.948-3.376L13.63 2.25A2.409 2.409 0 0012 2.25c-.824 0-1.61.588-2.162 1.512L2.697 16.126z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.25v-.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.75m-3 0h.008v.008H12v-.008z"
          />
        </svg>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          404
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300">
          Oops! Page Not Found
        </p>
        <p className="text-gray-400">
          We couldn't find the page you were looking for. It might have been
          removed, renamed, or doesn't exist.
        </p>
        <a
          href="/"
          className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 border-blue-500/30
                       px-6 py-3 rounded-full font-semibold transition-colors duration-300 inline-block"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
