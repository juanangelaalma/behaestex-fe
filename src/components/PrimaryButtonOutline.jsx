import React from "react";

const PrimaryButtonOutline = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
        >
            {children}
        </button>
    );
};

export default PrimaryButtonOutline;
