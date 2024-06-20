import React from 'react'

export default function DashboardCard(props) {
    return (
        <a href="#" className="group min-w-56 max-sm:w-96 p-6 bg-secondary border border-neutral-800 hover:bg-tertitary transition-all duration-150 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-500 dark:text-white">{props.name}</h5>
            <div className="flex justify-between">
                <p className="font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                <div className="flex gap-1">
                    <p className='text-white text-lg'>{props.quant}db</p>
                    <img src="src/assets/icons/card-quant.svg" className='w-5' alt="" />
                </div>
            </div>
        </a>

    )
}
