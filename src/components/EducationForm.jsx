import React, { useState } from "react";
import SelectEducationAttainment from "./SelectSchool";
import FormInput from "./FormInput";
import SelectPeriod from "./SelectPeriod";
import TextAreaInput from "./TextAreaInput";
import FormAction from "./FormAction";

const EducationForm = ({ handleCancel }) => {
    const [attainment, setAttainment] = useState('');
    const [school, setSchool] = useState('')
    const [description, setDescription] = useState('')
    const [fromPeriod, setFromPeriod] = useState({
        month: "",
        year: "",
    });
    const [toPeriod, setToPeriod] = useState({
        month: "",
        year: "",
    });
    return (
        <>
            <div className="w-full space-y-4">
                <SelectEducationAttainment value={attainment} onChange={(e) => setAttainment(e.target.value)} />
                <FormInput
                    className="mt-4 w-full"
                    type="text"
                    name="school"
                    placeholder="enter your school/university"
                    label="School/University"
                    value={school}
                    onChange={(value) => setSchool(value)}
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
                    label="Descriptions (optional)"
                    placeholder="Insert text here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <FormAction handleCancel={handleCancel} />
        </>
    );
};

export default EducationForm;
