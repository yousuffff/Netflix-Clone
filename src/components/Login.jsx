import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/ValidateData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [message, setMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,

      name.current?.value
    );
    setMessage(message);
    // console.log(email, password, name);
    if (message) return;
    if (!isSignedIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up:", user);
          setMessage("User signed up successfully!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + " " + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + " " + errorCode);
        });
    }
  };

  const toggleSignedIn = () => {
    setIsSignedIn(!isSignedIn);
    setMessage("");
    email.current.value = "";
    password.current.value = "";
    name.current.value = "";
    email.current.focus();
  };
  return (
    <div>
      <Header />
      <img
        className="absolute w-full h-full   z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_medium.jpg"
        alt="bg-image"
      />
      <div className="absolute left-2/5 bottom-1/3 w-1/5 h-1/2 z-10 flex flex-col align-middle text-white p-5 bg-black/60 backdrop-blur-xs rounded-lg">
        <form onSubmit={(e) => e.preventDefault()} className="w-11/12">
          <p className=" font-bold font-sans text-2xl">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </p>
          {!isSignedIn ? (
            <input
              ref={name}
              type="text"
              name="fullname"
              id="name"
              placeholder="Fullname"
              className="p-3 w-full my-2 border-[1px] border-gray-500 rounded-md text-white"
            />
          ) : null}
          <input
            ref={email}
            type=""
            name="email"
            id="email"
            placeholder="Email"
            className="p-3 w-full my-2 border-[1px] border-gray-500 rounded-md text-white"
          />
          <input
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-3  w-full my-2 border-[1px] border-gray-500 rounded-md  text-white"
          />
          <p className="text-red-500 font-bold">{message}</p>
          <button
            onClick={handleButtonClick}
            className="bg-red-600 text-white hover:bg-red-700 w-full
                        px-6 py-3 rounded-2xl font-semibold transition-colors duration-300 inline-block cursor-pointer"
            type=""
          >
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>

          {isSignedIn ? (
            <p className="text-gray-400 text-sm mt-4">
              <Link to="*"> Forget Password?</Link>
            </p>
          ) : null}
          <div className="flex items-baseline justify-baseline">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="mt-4"
            />
            <label htmlFor="remember-me" className="text-white ml-2">
              Remember Me
            </label>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            {isSignedIn ? "New to Netflix?" : "Already resgistered?"}
            <span
              className="text-white font-bold cursor-pointer"
              onClick={toggleSignedIn}
            >
              {" "}
              {isSignedIn ? "Sign Up now" : "Sign In now"}
            </span>
          </p>
        </form>
      </div>

      {/* <Footer / */}
    </div>
  );
};

export default Login;
