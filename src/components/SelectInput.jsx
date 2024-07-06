import React from "react";

function SelectInput({
    className,
    label,
    autoFocus,
    type,
    name,
    placeholder,
    value,
    onChange,
    children,
}) {
    return (
        <div className={`relative ${className}`}>
            <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
                {label}
            </label>
            {/* <input
        autoFocus={autoFocus}
        className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-md focus:border-indigo-500"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      /> */}
            <select
                name="cars"
                id="cars"
                className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-md focus:border-indigo-500"
            >
                {children}
            </select>
        </div>
    );
}

export default SelectInput;
