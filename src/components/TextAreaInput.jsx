import React from "react";

const TextAreaInput = ({ placeholder, label, value, onChange }) => {
    return (
        <div className="w-full">
            <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
                {label}
            </label>
            <textarea
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextAreaInput;
