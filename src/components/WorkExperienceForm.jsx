import React from "react";
import FormInput from "./FormInput";
import SelectPeriod from "./SelectPeriod";
import TextAreaInput from "./TextAreaInput";
import FormAction from "./FormAction";

const WorkExperienceForm = ({ handleCancel }) => {
    return (
        <div className="w-full space-y-4">
            <FormInput
                className="mt-4 w-full"
                type="text"
                name="job_title"
                placeholder="enter your job title"
                label="Job Title"
                autoFocus={true}
                // value={chairmanName}
                // onChange={setChairmanName}
            />
            <FormInput
                className="mt-4 w-full"
                type="text"
                name="company"
                placeholder="enter your company name"
                label="Company"
                // value={chairmanName}
                // onChange={setChairmanName}
            />
            <SelectPeriod label="From" />
            <SelectPeriod label="To" />
            <TextAreaInput
                label="Accomplishments or descriptions (optional)"
                placeholder="Insert text here"
            />
            <FormAction handleCancel={handleCancel} />
        </div>
    );
};

export default WorkExperienceForm;
