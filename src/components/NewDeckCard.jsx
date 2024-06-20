import React from 'react';
import { Trash2 } from "lucide-react";

export default function NewDeckCard({ quant, onDelete, onChange }) {
    return (
        <div className="flex w-full rounded-xl border border-neutral-800 items-center">
            <div style={{ width: '60px' }}>
                <p className='text-gray-400 text-3xl text-center font-bold'>{quant}</p>
            </div>
            <div className='flex gap-3 flex-1'>
                <div className="my-5 flex-1">
                    <input type="text"
                        placeholder='Fogalom'
                        onChange={(e) => onChange("term", e.target.value)}
                        className="w-full p-4 border border-neutral-800 rounded-lg bg-secondary text-base placeholder-gray-400 text-white" />
                </div>
                <div className="my-5 flex-1">
                    <input type="text"
                        placeholder='Definíció'
                        onChange={(e) => onChange("definition", e.target.value)}
                        className="w-full p-4 border border-neutral-800 rounded-lg bg-secondary text-base placeholder-gray-400 text-white" />
                </div>
            </div>
            <div className="p-4">
                <Trash2 onClick={onDelete} className='text-neutral-700 cursor-pointer hover:text-primary-500 duration-150 transition-colors' />
            </div>
        </div>
    );
}
