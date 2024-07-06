import React from "react";

const WorkItem = ({ period, position, description, handleEdit, handleDelete }) => {
    return (
        <div className="w-full flex flex-col space-y-2 lg:flex-row relative">
            <div className="text-gray-500 font-semibold lg:w-3/12 pt-2">
                <h5>{period}</h5>
            </div>
            <div className="lg:w-9/12">
                <h6 className="font-semibold">{position}</h6>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="absolute top-0 right-0 space-x-1">
                <button onClick={handleDelete}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.3em"
                        height="1.3em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#9ca3af"
                            d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                        />
                    </svg>
                </button>
                <button onClick={handleEdit}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="none"
                            stroke="#0086FF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default WorkItem;
