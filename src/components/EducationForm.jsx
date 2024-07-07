import React, { useState } from "react";
import SelectEducationAttainment from "./SelectSchool";
import FormInput from "./FormInput";
import SelectPeriod from "./SelectPeriod";
import TextAreaInput from "./TextAreaInput";
import FormAction from "./FormAction";
import axios from "axios";
import { API_URL } from "../config/api";
import extractPeriod from "../utils/extractPeriod";

const EducationForm = ({
    handleCancel,
    handleSuccessSaveEducation,
    selectedEducation,
}) => {
    const { month: fromMonth, year: fromYear } = selectedEducation?.from
        ? extractPeriod(selectedEducation.from)
        : "";
    const { month: toMonth, year: toYear } = selectedEducation?.to
        ? extractPeriod(selectedEducation.to)
        : "";

    const [attainment, setAttainment] = useState(selectedEducation?.attainment);
    const [school, setSchool] = useState(selectedEducation?.school);
    const [description, setDescription] = useState(
        selectedEducation?.description
    );
    const [from, setFrom] = useState({
        month: fromMonth,
        year: fromYear,
    });
    const [to, setTo] = useState({
        month: toMonth,
        year: toYear,
    });
    const initialError = {
        attainment: [],
        school: [],
        from: [],
        to: [],
        description: [],
    };
    const [errors, setErrors] = useState(initialError);

    const handleCreateEducation = async () => {
        try {
            const res = await axios.post(`${API_URL}/cv/educations`, {
                attainment,
                school,
                from: `${from.month}-${from.year}`,
                to: `${to.month}-${to.year}`,
                description,
            });
            if (res.status === 201) {
                handleSuccessSaveEducation();
            }
        } catch (error) {
            if (error.code === "ERR_BAD_REQUEST") {
                setErrors({ ...errors, ...error.response.data.errors });
            }
        }
    };

    const handleUpdateEducation = async () => {
        try {
            const res = await axios.put(
                `${API_URL}/cv/educations/${selectedEducation.id}`,
                {
                    attainment,
                    school,
                    from: `${from.month}-${from.year}`,
                    to: `${to.month}-${to.year}`,
                    description,
                }
            );
            if (res.status === 201) {
                handleSuccessSaveEducation();
            }
        } catch (error) {
            if (error.code === "ERR_BAD_REQUEST") {
                setErrors({ ...errors, ...error.response.data.errors });
            }
        }
    };

    const handleSave = async () => {
        if (selectedEducation) {
            await handleUpdateEducation();
        } else {
            await handleCreateEducation();
        }
    };

    return (
        <>
            <div className="w-full space-y-4">
                <SelectEducationAttainment
                    value={attainment}
                    onChange={(e) => setAttainment(e.target.value)}
                    error={errors.attainment}
                />
                <FormInput
                    className="mt-4 w-full"
                    type="text"
                    name="school"
                    placeholder="enter your school/university"
                    label="School/University"
                    value={school}
                    onChange={(value) => setSchool(value)}
                    error={errors.school}
                />
                <SelectPeriod
                    period={from}
                    handleChangePeriod={(value) => setFrom(value)}
                    label="From"
                    error={errors.from}
                />
                <SelectPeriod
                    period={to}
                    handleChangePeriod={(value) => setTo(value)}
                    label="To"
                    error={errors.to}
                />
                <TextAreaInput
                    label="Descriptions (optional)"
                    placeholder="Insert text here"
                    value={description}
                    error={errors.description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <FormAction handleCancel={handleCancel} handleSave={handleSave} />
        </>
    );
};

export default EducationForm;
