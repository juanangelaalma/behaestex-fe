import React from "react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import DestroyButton from "./DestroyButton";
import FormAction from "./FormAction";

const SkillForm = ({ handleDelete, handleCancel }) => {
    return (
        <>
            <div className="w-full flex flex-row items-center">
                <div className="flex flex-col w-full lg:flex-row">
                    <FormInput
                        placeholder="Input skill"
                        className="w-full -ml-3"
                    />
                    <SelectInput className="-ml-3">
                        <option>Novice</option>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Advance</option>
                        <option>Expert</option>
                    </SelectInput>
                </div>
                <div className="w-2/12 lg:w-1/12 flex justify-end">
                    <DestroyButton
                        width="1.5em"
                        height="1.5em"
                        onClick={handleDelete}
                    />
                </div>
            </div>
            <FormAction handleCancel={handleCancel} />
        </>
    );
};

export default SkillForm;
