import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import WorkItem from "./components/WorkItem";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import WorkExperienceForm from "./components/WorkExperienceForm";
import getPeriod from "./utils/getPeriod";

const WorkExperience = ({ workExperiences }) => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleEdit = () => {
        // set selected
        setOpenForm(true);
    };

    const handleDelete = () => {
        // set selected
        setDeleteModalOpen(true);
    };

    const getPosition = (experience) => {
        return `${experience.title} at ${experience.company}`
    }

    return (
        <SectionContainer>
            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                closeModal={() => setDeleteModalOpen(false)}
                handleConfirm={handleDelete}
            />
            <SectionHeader
                onAction={openForm}
                title="Work Experience"
                cta="ADD"
                onCtaClick={() => setOpenForm(true)}
            />
            <SectionBody className="space-y-6">
                {openForm ? (
                    <WorkExperienceForm
                        handleCancel={() => setOpenForm(false)}
                    />
                ) : (
                    <>
                        {workExperiences.map((experience) => (
                            <WorkItem
                                period={getPeriod(experience)}
                                position={getPosition(experience)}
                                description={experience.description}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default WorkExperience;
