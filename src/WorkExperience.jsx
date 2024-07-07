import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import WorkItem from "./components/WorkItem";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import WorkExperienceForm from "./components/WorkExperienceForm";
import getPeriod from "./utils/getPeriod";
import axios from "axios";
import { API_URL } from "./config/api";

const WorkExperience = ({ workExperiences, getCv }) => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleEdit = (id) => {
        handleSelectExperience(id);
        setOpenForm(true);
    };

    const getPosition = (experience) => {
        return `${experience.title} at ${experience.company}`
    }

    const handleSuccessSaveExperience = () => {
        setOpenForm(false)
        setSelectedExperience(null)
        getCv()
    }

    const handleDeleteExperience = async () => {
        try {
            await axios.delete(`${API_URL}/cv/work-experiences/${selectedExperience.id}`)
            setDeleteModalOpen(false)
            getCv()
        } catch (error) {}
    }

    const handleSelectExperience = (id) => {
        const experience = workExperiences.filter(work => work.id === id)
        setSelectedExperience(experience[0])
    }

    const handleOpenDeleteModal = (id) => {
        handleSelectExperience(id);
        setDeleteModalOpen(true);
    }

    const handleCancelDelete = () => {
        setSelectedExperience(null)
        setDeleteModalOpen(false)
    }

    const handleCancelEdit = () => {
        setSelectedExperience(null)
        setOpenForm(false)
    }

    return (
        <SectionContainer>
            <DeleteConfirmModal
                isOpen={deleteModalOpen}
                closeModal={handleCancelDelete}
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
                    <WorkExperienceForm
                        handleCancel={handleCancelEdit}
                        handleSuccessSaveExperience={handleSuccessSaveExperience}
                        selectedExperience={selectedExperience}
                    />
                ) : (
                    <>
                        {workExperiences.map((experience) => (
                            <WorkItem
                                key={experience.id}
                                id={experience.id}
                                setSelectedExperience={setSelectedExperience}
                                period={getPeriod(experience)}
                                position={getPosition(experience)}
                                description={experience.description}
                                handleEdit={handleEdit}
                                handleOpenDeleteModal={handleOpenDeleteModal}
                            />
                        ))}
                    </>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default WorkExperience;
