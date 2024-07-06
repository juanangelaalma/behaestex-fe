import React from "react";
import SelectInput from "./SelectInput";

const SelectEducationAttainment = () => {
    return (
        <div>
            <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-500 tracking-wide">
                    Education Attainment
                </label>
                <div className="w-full flex">
                    <SelectInput className='w-full'>
                        <option value="">Less than high school</option>
                        <option value="">High school</option>
                        <option value="">Graduated from high school</option>
                        <option value="">Vocational course</option>
                        <option value="">Completed vocational course</option>
                        <option value="">Associate's studies</option>
                        <option value="">Completed associate's degree</option>
                        <option value="">Bachelor's studies</option>
                        <option value="">Bachelor's degree graduate</option>
                        <option value="">Graduate studies (Masters)</option>
                        <option value="">Master's degree graduate</option>
                        <option value="">
                            Post-graduate studies (Doctorate)
                        </option>
                        <option value="">Doctoral degree graduate</option>
                    </SelectInput>
                </div>
            </div>
        </div>
    );
};

export default SelectEducationAttainment;
