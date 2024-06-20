import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react';
import Input from '../components/ui/Input';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  function translateErrorCode(errorCode) {
    if (errorCode == "auth/invalid-credential") {
      return "Helytelen felhasználónév, vagy jelszó!"
    }
  }


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch (e) {
      setError(e.code)
      console.log(e.code)
      setError(translateErrorCode(e.code));
    }

    setLoading(false);
  }

  async function handleGoogleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await googleLogin()
      navigate("/")
    } catch (e) {
      setError("Failed to sign in" + e);
    }

    setLoading(false);
  }

  return (
    <div className="bg-background">
      <div className="flex flex-col items-center px-2 py-8 mx-auto min-h-screen lg:py-5">
        <div className="py-5">
          <img src="src/assets/header.svg" width={400} alt="" />
        </div>
        <div className="w-full rounded-lg justify-center shadow border md:mt-0 sm:max-w-lg xl:p-0 bg-secondary border-stone-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex gap-4 items-center">
              <div className="bg-tertitary border border-neutral-700 p-3 rounded-full">
                <img src="src/assets/icons/user.svg" width={32} alt="" />
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Jelentkezz be a fiókodba!
              </h1>
            </div>
            {error && (
              <div className="p-4 flex gap-3 items-center text-sm text-red-400 border-red-400 border-2 rounded-lg" role="alert">
                <TriangleAlert color="rgb(248 113 113)" />
                <span className="font-medium">{error}</span>
              </div>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Email cím
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  placeholder="név@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Jelszó
                </label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full text-primary-950 hover:text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-300 text-md font-bold rounded-lg px-5 py-2.5 text-center transition duration-150"
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
                <div className="flex gap-1">
                  <p className="text-sm font-medium text-text">Még nincs fiókod?</p>
                  <Link to="/signup" className="text-sm font-bold hover:text-primary-500 transition-all duration-150 text-text">Regisztrálj!</Link>
                </div>

              </div>
              <button
                className="px-4 py-2.5 border justify-center w-full flex gap-2 border-neutral-700 rounded-lg text-slate-200 hover:border-primary-600 hover:shadow transition duration-150"
                onClick={handleGoogleLogin}
              >
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
