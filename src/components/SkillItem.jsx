import React from "react";

const SkillItem = ({ level, name }) => {
    return (
        <div className="space-y-2">
            <span className="bg-gray-300 px-4 py-1 font-normal text-sm rounded-xl">
                {level}
            </span>
            <p className="font-semibold">{name}</p>
        </div>
    );
};

export default SkillItem;
