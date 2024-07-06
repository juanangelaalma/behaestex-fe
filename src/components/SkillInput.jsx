import React from "react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import DestroyButton from "./DestroyButton";

const SkillInput = ({ handleDelete }) => {
    return (
        <>
            <div className="flex flex-col w-full lg:flex-row">
                <FormInput placeholder="Input skill" className="w-full -ml-3" />
                <SelectInput className="-ml-3">
                    <option>Novice</option>
                    <option>Basic</option>
                    <option>Intermediate</option>
                    <option>Advance</option>
                    <option>Expert</option>
                </SelectInput>
            </div>
            <div className="w-1/5 flex justify-center">
                <DestroyButton
                    width="1.5em"
                    height="1.5em"
                    onClick={handleDelete}
                />
            </div>
        </>
    );
};

export default SkillInput;
