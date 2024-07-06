import React from "react";

function SelectInput({
    className,
    label,
    onChange,
    children,
    value
}) {
    return (
        <div className={`relative ${className}`}>
            <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
                {label}
            </label>
            <select
                onChange={onChange}
                name="cars"
                value={value}
                id="cars"
                className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-md focus:border-indigo-500"
            >
                {children}
            </select>
        </div>
    );
}

export default SelectInput;
