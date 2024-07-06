import React from "react";
import SelectInput from "./SelectInput";

const SelectEducationAttainment = ({value, onChange}) => {
    return (
        <div>
            <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
                    Education Attainment
                </label>
                <div className="w-full flex">
                    <SelectInput className='w-full' onChange={onChange} value={value}>
                        <option value="0">Less than high school</option>
                        <option value="1">High school</option>
                        <option value="2">Graduated from high school</option>
                        <option value="3">Vocational course</option>
                        <option value="4">Completed vocational course</option>
                        <option value="5">Associate's studies</option>
                        <option value="6">Completed associate's degree</option>
                        <option value="7">Bachelor's studies</option>
                        <option value="8">Bachelor's degree graduate</option>
                        <option value="9">Graduate studies (Masters)</option>
                        <option value="10">Master's degree graduate</option>
                        <option value="11">
                            Post-graduate studies (Doctorate)
                        </option>
                        <option value="12">Doctoral degree graduate</option>
                    </SelectInput>
                </div>
            </div>
        </div>
    );
};

export default SelectEducationAttainment;
