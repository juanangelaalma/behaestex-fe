import React from "react";

const DestroyButton = ({ onClick, width, height }) => {
    return (
        <button onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${width ? width : '1.3em'}`}
                height={`${height ? height : '1.3em'}`}
                viewBox="0 0 24 24"
            >
                <path
                    fill="#9ca3af"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                />
            </svg>
        </button>
    );
};

export default DestroyButton;
