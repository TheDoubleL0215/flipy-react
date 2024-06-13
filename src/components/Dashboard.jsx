import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'

export default function Dashboard() {

    const [error, setError] = useState("")
    const { currenctUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate("/login")

        } catch {
            setError('Nem sikerült kijelentkezni')
        }
    }

    return (
        <nav className="bg-tertitary">
            <div className="mx-5 px-2 sm:px-6 lg:px-1">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <div className="flex justify-center items-center gap-3 cursor-pointer">
                                <img width={50} src="/favicon.svg" />
                                <span className='font-bold text-white text-2xl select-none'>Flipy</span>
                            </div>
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center space-x-4">
                                <a href="#" className="rounded-md px-3 py-2 text-lg font-medium text-primary-500 hover:bg-neutral-700 hover:text-white" aria-current="page">Paklik</a>
                                <button className="text-black flex gap-2 justify-center items-center font-medium bg-primary-600 focus:ring-primary-300 text-md rounded-lg px-5 py-2.5 text-center hover:text-white hover:bg-primary-500 hover:shadow transition duration-150 focus:ring-primary-800'">
                                    <Plus />
                                    Új pakli létrehozása
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <p className="text-white cursor-pointer rounded-md px-3 py-2 text-lg font-medium hover:bg-neutral-700" onClick={handleLogout}>Kijelentkezés</p>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Profile</a>
                </div>
            </div>
        </nav>
    )
}
