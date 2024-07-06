import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import WorkItem from "./components/WorkItem";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import WorkExperienceForm from "./components/WorkExperienceForm";

const WorkExperience = () => {
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
                        <WorkItem
                            period="Aug 2023 - Dec 2023"
                            position="Web Developer(Internship) at PT Vidio Dot Com"
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium repudiandae porro provident ea officiis incidunt delectus? Eos, quia nostrum magnam nulla suscipit reprehenderit commodi sed quidem hic aspernatur voluptatum quasi!"
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default WorkExperience;
