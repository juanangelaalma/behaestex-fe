import React from "react";
import SelectMonths from "./SelectMonths";
import SelectYears from "./SelectYears";

const SelectPeriod = ({ label, period, handleChangePeriod }) => {
    const handleChangeMonth = (value) => {
        handleChangePeriod({
            ...period,
            month: value,
        });
    };

    const handleChangeYear = (value) => {
        handleChangePeriod({
            ...period,
            year: value,
        });
    };

    return (
        <div className="relative">
            <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
                {label}
            </label>
            <div className="w-1/2 flex">
                <SelectMonths onChange={handleChangeMonth} value={period.month} />
                <SelectYears onChange={handleChangeYear} value={period.year} />
            </div>
        </div>
    );
};

export default SelectPeriod;
