import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import EducationItem from "./components/EducationItem";
import EducationForm from "./components/EducationForm";
import getPeriod from "./utils/getPeriod";

const Education = ({ educations }) => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleEdit = () => {
        // set selected
        setOpenForm(true);
    };

    const handleDelete = () => {
        // set selected
        setDeleteModalOpen(true);
    };

    return (
        <SectionContainer>
            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                closeModal={() => setDeleteModalOpen(false)}
                handleConfirm={handleDelete}
            />
            <SectionHeader
                onAction={openForm}
                title="Education"
                cta="ADD"
                onCtaClick={() => setOpenForm(true)}
            />
            <SectionBody className="space-y-6">
                {openForm ? (
                    <EducationForm handleCancel={() => setOpenForm(false)} />
                ) : (
                    <>
                        {educations.map((education) => (
                            <EducationItem
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                                period={getPeriod(education)}
                                schoolName={education.school}
                                description={education.description}
                            />
                        ))}
                    </>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default Education;
