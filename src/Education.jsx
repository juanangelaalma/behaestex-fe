import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import EducationItem from "./components/EducationItem";
import EducationForm from "./components/EducationForm";
import getPeriod from "./utils/getPeriod";
import { API_URL } from "./config/api";
import axios from "axios";
import { toast } from "react-toastify";

const Education = ({ educations, getCv }) => {
    const [openForm, setOpenForm] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleEdit = (id) => {
        handleSelectEducation(id)
        setOpenForm(true);
    };

    const handleSelectEducation = (id) => {
        const education = educations.filter((edu) => edu.id === id);
        setSelectedEducation(education[0]);
    };

    const handleDeleteEducation = async () => {
        try {
            const res = await axios.delete(`${API_URL}/cv/educations/${selectedEducation.id}`)
            setDeleteModalOpen(false)
            getCv()
            toast(res.data.message)
        } catch (error) {}
    }

    const handleOpenDeleteModal = (id) => {
        handleSelectEducation(id);
        setDeleteModalOpen(true);
    };

    const handleSuccessSaveEducation = () => {
        setOpenForm(false);
        setSelectedEducation(null)
        getCv();
    };

    const handleCancelEdit = () => {
        setSelectedEducation(null)
        setOpenForm(false)
    }

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
                    <EducationForm
                        handleSuccessSaveEducation={handleSuccessSaveEducation}
                        handleCancel={handleCancelEdit}
                        selectedEducation={selectedEducation}
                    />
                ) : (
                    <>
                        {educations.map((education) => (
                            <EducationItem
                                key={education.id}
                                id={education.id}
                                handleEdit={handleEdit}
                                handleOpenDeleteModal={handleOpenDeleteModal}
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
