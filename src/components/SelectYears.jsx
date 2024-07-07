import React from "react";
import SelectInput from "./SelectInput";

const generateYears = (startYear) => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
        years.push(year);
    }
    return years;
};

const SelectYears = ({ onChange, value }) => {
    const years = generateYears(2001);
    return (
        <SelectInput onChange={(e) => onChange(e.target.value)} value={value}>
            <option>Select year</option>
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </SelectInput>
    );
};

export default SelectYears;
