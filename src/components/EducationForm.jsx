import React from "react";
import SelectEducationAttainment from "./SelectSchool";
import FormInput from "./FormInput";
import SelectPeriod from "./SelectPeriod";
import TextAreaInput from "./TextAreaInput";
import FormAction from "./FormAction";

const EducationForm = ({ handleCancel }) => {
    return (
        <>
            <div className="w-full space-y-4">
                <SelectEducationAttainment />
                <FormInput
                    className="mt-4 w-full"
                    type="text"
                    name="school"
                    placeholder="enter your school/university"
                    label="School/University"
                    // value={chairmanName}
                    // onChange={setChairmanName}
                />
                <SelectPeriod label="From" />
                <SelectPeriod label="To" />
                <TextAreaInput
                    label="Descriptions (optional)"
                    placeholder="Insert text here"
                />
            </div>
            <FormAction handleCancel={handleCancel} />
        </>
    );
};

export default EducationForm;
