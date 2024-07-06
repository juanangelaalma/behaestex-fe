import React from "react";

const TextAreaInput = ({ placeholder }) => {
    return (
        <textarea
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder={placeholder}
        ></textarea>
    );
};

export default TextAreaInput;
