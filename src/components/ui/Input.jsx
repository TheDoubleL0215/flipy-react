import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    return (
        <input
            type={props.type}
            name={props.name}
            id={props.id}
            ref={ref}
            className="border-neutral-700 border bg-tertitary sm:text-sm rounded-lg block w-full p-2.5 bg-gray-70 placeholder-gray-400 text-white transition-all duration-150"
            placeholder={props.placeholder}
        />
    );
});

export default Input;
