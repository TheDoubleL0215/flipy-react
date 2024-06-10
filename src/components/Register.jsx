import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== rePasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError("Failed to create an account" + e);
    }

    setLoading(false);
  }

  return (
    <div className="wh-full">
      <div className="flex flex-col items-center px-2 py-8 mx-auto min-h-screen lg:py-5">
        <div className="py-5">
          <img src="src/assets/header.svg" width={400} alt="" />
        </div>
        <div className="w-full rounded-lg justify-center shadow border md:mt-0 sm:max-w-lg xl:p-0 bg-tertitary border-neutral-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex gap-4 items-center">
              <div className="bg-secondary p-3 rounded-full">
                <img src="src/assets/icons/user-plus.svg" width={32} alt="" />
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Regisztrálj egy új fiókot!
              </h1>
            </div>
            {error && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{error}</span>
              </div>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Email cím
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-gray-300 bg-secondary sm:text-sm rounded-lg block w-full p-2.5 bg-gray-70 placeholder-gray-400 text-white transition-all duration-150"
                  placeholder="név@email.com"
                  ref={emailRef}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Jelszó
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  ref={passwordRef}
                  className="border-gray-300 bg-secondary sm:text-sm rounded-lg block w-full p-2.5 bg-gray-70 placeholder-gray-400 text-white transition-all duration-150"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Jelszó megerősítése
                </label>
                <input
                  type="password"
                  name="password"
                  id="rePassword"
                  placeholder="••••••••"
                  ref={rePasswordRef}
                  className="border-gray-300 bg-secondary sm:text-sm rounded-lg block w-full p-2.5 bg-gray-70 placeholder-gray-400 text-white transition-all duration-150"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full text-black bg-primary-500 hover:shadow-md focus:ring-primary-300 text-md rounded-lg px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 hover:shadow transition duration-150 focus:ring-primary-800"
              >
                Regisztrálás
              </button>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text">
                  Van már fiókod?{" "}
                  <a
                    href="#"
                    className="text-sm font-bold hover:text-primary-500 transition-all duration-150 text-text"
                  >
                    Jelentkezz be!
                  </a>
                </p>
              </div>
              <button className="px-4 py-2 border justify-center w-full flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Regisztrálás Google-el</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
