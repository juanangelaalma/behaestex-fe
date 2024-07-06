import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import WorkItem from "./components/WorkItem";
import PrimaryButtonOutline from "./components/PrimaryButtonOutline";
import PrimaryButton from "./components/PrimaryButton";
import FormInput from "./components/FormInput";
import TextAreaInput from "./components/TextAreaInput";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import SelectPeriod from "./components/SelectPeriod";

const WorkExperience = () => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleEdit = () => {
        // set selected
        setOpenForm(true);
    };

    const handleDeleteExperience = () => {
        // set selected
        setDeleteModalOpen(true);
    };

    return (
        <SectionContainer>
            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                closeModal={() => setDeleteModalOpen(false)}
                handleConfirm={handleDeleteExperience}
            />
            <SectionHeader
                onAction={openForm}
                title="Work Experience"
                cta="ADD"
                onCtaClick={() => setOpenForm(true)}
            />
            <SectionBody className="space-y-6">
                {openForm ? (
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
                    </div>
                ) : (
                    <>
                        <WorkItem
                            period="Aug 2023 - Dec 2023"
                            position="Web Developer(Internship) at PT Vidio Dot Com"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium repudiandae porro provident ea officiis incidunt delectus? Eos, quia nostrum magnam nulla suscipit reprehenderit commodi sed quidem hic aspernatur voluptatum quasi!"
                            handleEdit={handleEdit}
                            handleDelete={handleDeleteExperience}
                        />
                    </>
                )}
            </SectionBody>
            {openForm && (
                <div className="flex justify-end space-x-4 py-4">
                    <PrimaryButtonOutline onClick={() => setOpenForm(false)}>
                        Cancel
                    </PrimaryButtonOutline>
                    <PrimaryButton>Save</PrimaryButton>
                </div>
            )}
        </SectionContainer>
    );
};

export default WorkExperience;
