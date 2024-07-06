import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import EducationItem from "./components/EducationItem";
import EducationForm from "./components/EducationForm";

const Education = () => {
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
                        <EducationItem
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            period="Jun 2020 - Jun 2024"
                            schoolName="Universitas Negeri Surabaya"
                        />
                    </>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default Education;
