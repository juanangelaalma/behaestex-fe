import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import SelectPeriod from "./SelectPeriod";
import TextAreaInput from "./TextAreaInput";
import FormAction from "./FormAction";
import axios from "axios";
import { API_URL } from "../config/api";
import extractPeriod from "../utils/extractPeriod";

const WorkExperienceForm = ({
    handleCancel,
    handleSuccessSaveExperience,
    selectedExperience,
}) => {
    const { month: fromMonth, year: fromYear } = selectedExperience?.from
        ? extractPeriod(selectedExperience.from)
        : "";
    const { month: toMonth, year: toYear } = selectedExperience?.to
        ? extractPeriod(selectedExperience.to)
        : "";

    const [title, setTitle] = useState(selectedExperience?.title);
    const [company, setCompany] = useState(selectedExperience?.company);
    const [from, setFrom] = useState({
        month: fromMonth,
        year: fromYear,
    });
    const [to, setTo] = useState({
        month: toMonth,
        year: toYear,
    });
    const [description, setDescription] = useState(
        selectedExperience?.description
    );
    const initialError = {
        title: [],
        company: [],
        from: [],
        to: [],
        description: [],
    };
    const [errors, setErrors] = useState(initialError);

    const handleCreateExperience = async () => {
        try {
            const res = await axios.post(`${API_URL}/cv/work-experiences`, {
                title,
                company,
                from: `${from.month}-${from.year}`,
                to: `${to.month}-${to.year}`,
                description,
            });
            if (res.status === 201) {
                handleSuccessSaveExperience();
            }
        } catch (error) {
            if (error.code === "ERR_BAD_REQUEST") {
                setErrors({ ...errors, ...error.response.data.errors });
            }
        }
    };

    const handleUpdateExperience = async () => {
        try {
            const res = await axios.put(
                `${API_URL}/cv/work-experiences/${selectedExperience.id}`,
                {
                    title,
                    company,
                    from: `${from.month}-${from.year}`,
                    to: `${to.month}-${to.year}`,
                    description,
                }
            );
            if (res.status === 201) {
                handleSuccessSaveExperience();
            }
        } catch (error) {
            if (error.code === "ERR_BAD_REQUEST") {
                setErrors({ ...errors, ...error.response.data.errors });
            }
        }
    };

    const handleSave = async () => {
        if(selectedExperience) {
            await handleUpdateExperience()
        } else {
            await handleCreateExperience()
        }
    }

    return (
        <div className="w-full space-y-4">
            <FormInput
                className="mt-4 w-full"
                type="text"
                name="job_title"
                placeholder="enter your job title"
                label="Job Title"
                autoFocus={true}
                value={title}
                onChange={(value) => setTitle(value)}
                error={errors.title}
            />
            <FormInput
                className="mt-4 w-full"
                type="text"
                name="company"
                placeholder="enter your company name"
                label="Company"
                value={company}
                onChange={(value) => setCompany(value)}
                error={errors.company}
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
                label="Accomplishments or descriptions (optional)"
                placeholder="Insert text here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={errors.description}
            />
            <FormAction
                handleCancel={handleCancel}
                handleSave={handleSave}
            />
        </div>
    );
};

export default WorkExperienceForm;
