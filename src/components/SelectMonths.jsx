import React from "react";
import SelectInput from "./SelectInput";

const SelectMonths = ({ onChange, value }) => {
    return (
        <SelectInput onChange={(e) => onChange(e.target.value)} value={value}>
            <option>Select month</option>
            <option value="01">Jan</option>
            <option value="02">Feb</option>
            <option value="03">Mar</option>
            <option value="04">Apr</option>
            <option value="05">May</option>
            <option value="06">Jun</option>
            <option value="07">Jul</option>
            <option value="08">Aug</option>
            <option value="09">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
        </SelectInput>
    );
};

export default SelectMonths;
