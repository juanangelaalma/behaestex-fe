import React from "react";
import SelectMonths from "./SelectMonths";
import SelectYears from "./SelectYears";

const SelectPeriod = ({ label }) => {
    return (
        <div className="relative">
            <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
                {label}
            </label>
            <div className="w-1/2 flex">
                <SelectMonths />
                <SelectYears />
            </div>
        </div>
    );
};

export default SelectPeriod;
