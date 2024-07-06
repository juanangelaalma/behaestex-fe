import React, { useState } from "react";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import DestroyButton from "./DestroyButton";
import FormAction from "./FormAction";

const SkillForm = ({ handleDelete, handleCancel }) => {
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState("");

    return (
        <>
            <div className="w-full flex flex-row items-center">
                <div className="flex flex-col w-full lg:flex-row">
                    <FormInput
                        onChange={(value) => setSkill(value)}
                        value={skill}
                        placeholder="Input skill"
                        className="w-full -ml-3"
                    />
                    <SelectInput
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="-ml-3"
                    >
                        <option value="novice">Novice</option>
                        <option value="basic">Basic</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advance">Advance</option>
                        <option value="expert">Expert</option>
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
