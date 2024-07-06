import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import SelectPeriod from "./SelectPeriod";
import TextAreaInput from "./TextAreaInput";
import FormAction from "./FormAction";

const WorkExperienceForm = ({ handleCancel }) => {
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [fromPeriod, setFromPeriod] = useState({
        month: "",
        year: "",
    });
    const [toPeriod, setToPeriod] = useState({
        month: "",
        year: "",
    });
    const [description, setDescription] = useState("");

    return (
        <div className="w-full space-y-4">
            <FormInput
                className="mt-4 w-full"
                type="text"
                name="job_title"
                placeholder="enter your job title"
                label="Job Title"
                autoFocus={true}
                value={jobTitle}
                onChange={(value) => setJobTitle(value)}
            />
            <FormInput
                className="mt-4 w-full"
                type="text"
                name="company"
                placeholder="enter your company name"
                label="Company"
                value={company}
                onChange={(value) => setCompany(value)}
            />
            <SelectPeriod
                period={fromPeriod}
                handleChangePeriod={(value) => setFromPeriod(value)}
                label="From"
            />
            <SelectPeriod
                period={toPeriod}
                handleChangePeriod={(value) => setToPeriod(value)}
                label="To"
            />
            <TextAreaInput
                label="Accomplishments or descriptions (optional)"
                placeholder="Insert text here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <FormAction handleCancel={handleCancel} />
        </div>
    );
};

export default WorkExperienceForm;
