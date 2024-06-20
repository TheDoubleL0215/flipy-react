import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function NavBar() {
    const [error, setError] = useState("");
    const [userDropdown, setUserDropdown] = useState(false);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const location = useLocation();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            navigate("/login");
        } catch {
            setError('Nem sikerült kijelentkezni');
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setUserDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <nav className="sticky top-0 bg-secondary border-b-neutral-800 border-b z-50">
            <div className="mx-3 px-2">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                    <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <div className="flex justify-center items-center gap-3 cursor-pointer">
                                <img width={50} src="/favicon.svg" alt="Flipy logo" />
                                <span className='font-bold text-white text-2xl select-none'>Flipy</span>
                            </div>
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex justify-center items-center space-x-4">
                                <Link to="/" className="rounded-md px-3 py-2 text-lg font-medium text-text hover:bg-neutral-700 hover:text-primary-500" aria-current="page">
                                    Paklik
                                </Link>
                                {
                                    location.pathname === "/"
                                        ?
                                        <Link to="/newdeck">
                                            <button className="text-black flex gap-2 justify-center items-center font-medium bg-primary-500 focus:ring-primary-400 text-md rounded-lg px-5 py-2.5 text-center hover:text-white hover:bg-primary-500 hover:shadow transition duration-150 focus:ring-primary-800'">
                                                <Plus />
                                                Új pakli létrehozása
                                            </button>
                                        </Link>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <img
                            src={currentUser.photoURL ? currentUser.photoURL : "src/assets/icons/circle-user-round.svg"}
                            className='w-11 rounded-full cursor-pointer'
                            onClick={() => setUserDropdown(!userDropdown)}
                            alt=""
                        />
                        {userDropdown && (
                            <div id="dropdown" className="absolute right-0 mt-4 z-10 rounded-lg shadow w-44">
                                <ul className="py-2 text-sm text-gray-700 bg-secondary rounded-lg dark:text-gray-200 " aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-tertitary hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={handleLogout} className="block px-4 py-2 hover:bg-tertitary dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
