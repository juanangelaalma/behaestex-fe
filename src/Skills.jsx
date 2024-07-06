import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import SkillItem from "./components/SkillItem";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import SkillForm from "./components/SkillForm";

const Skills = () => {
    const [edit, setEdit] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleDelete = () => {
        setSelectedSkill("hello");
    };

    return (
        <SectionContainer>
            <DeleteConfirmModal
                isOpen={selectedSkill}
                closeModal={() => setSelectedSkill(null)}
                handleConfirm={handleDelete}
            />
            <SectionHeader
                onAction={edit}
                title="Skills"
                cta="EDIT"
                onCtaClick={() => setEdit(true)}
            />
            <SectionBody>
                {edit ? (
                    <SkillForm handleDelete={handleDelete} handleCancel={() => setEdit(false)} />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-3 gap-y-4 py-4">
                        <SkillItem level="Basic" name="MYSQL Database" />
                        <SkillItem level="Basic" name="MYSQL Database" />
                        <SkillItem level="Basic" name="MYSQL Database" />
                        <SkillItem level="Basic" name="MYSQL Database" />
                        <SkillItem level="Basic" name="MYSQL Database" />
                        <SkillItem level="Basic" name="MYSQL Database" />
                        <SkillItem level="Basic" name="MYSQL Database" />
                    </div>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default Skills;
