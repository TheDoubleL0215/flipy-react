import React from 'react';
import NavBar from './NavBar';

export default function Dashboard() {
    return (
        <>
            <NavBar />

            <div className="m-5">
                <a href="#" class="block max-w-sm p-6 border rounded-lg shadow bg-secondary border-neutral-800 hover:bg-tertitary">
                    <h5 class="mb-2 text-2xl font-bold dark:text-white">Pakli1</h5>
                    <p class="font-normal dark:text-gray-400">Some description</p>
                </a>
            </div>

        </>

    )
}
