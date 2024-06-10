import React from 'react'

export default function Login() {
  return (
    <div className="bg-background">
      <div className="flex flex-col items-center px-2 py-8 mx-auto min-h-screen lg:py-5">
        <div className="py-5">
          <img src="src/assets/header.svg" width={400} alt="" />
        </div>
        <div className="w-full rounded-lg justify-center shadow border md:mt-0 sm:max-w-lg xl:p-0 bg-tertitary border-neutral-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex gap-4 items-center">
              <div className="bg-secondary p-3 rounded-full">
                <img src="src/assets/icons/user.svg" width={32} alt="" />
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Jelentkezz be a fiókodba!
              </h1>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
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
                  className="border-gray-300 bg-secondary sm:text-sm rounded-lg block w-full p-2.5 bg-gray-70 placeholder-gray-400 text-white transition-all duration-150"
                />
              </div>
              <button
                type="submit"
                className="w-full text-black bg-primary-500 hover:shadow-md focus:ring-primary-300 text-md rounded-lg px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 hover:shadow transition duration-150 focus:ring-primary-800"
              >
                Bejelentkezés
              </button>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline text-text"
                >
                  Nem emlékszel a jelszóra?
                </a>
                <p className="text-sm font-medium text-text">
                  Még nincs fiókod?{" "}
                  <a
                    href="#"
                    className="text-sm font-bold hover:text-primary-500 transition-all duration-150 text-text"
                  >
                    Regisztrálj!
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
                <span>Bejelentkezés Google-el</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
