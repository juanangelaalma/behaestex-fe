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
import EducationItem from "./components/EducationItem";
import SelectEducationAttainment from "./components/SelectSchool";

const Education = () => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleEdit = () => {
        // set selected
        setOpenForm(true);
    };

    const handleDeleteEducation = () => {
        // set selected
        setDeleteModalOpen(true);
    };

    return (
        <SectionContainer>
            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                closeModal={() => setDeleteModalOpen(false)}
                handleConfirm={handleDeleteEducation}
            />
            <SectionHeader
                onAction={openForm}
                title="Education"
                cta="ADD"
                onCtaClick={() => setOpenForm(true)}
            />
            <SectionBody className="space-y-6">
                {openForm ? (
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
                ) : (
                    <>
                        <EducationItem
                            handleEdit={handleEdit}
                            handleDelete={handleDeleteEducation}
                            period="Jun 2020 - Jun 2024"
                            schoolName="Universitas Negeri Surabaya"
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

export default Education;
