import React, { useEffect, useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import PrimaryButtonOutline from "./components/PrimaryButtonOutline";
import PrimaryButton from "./components/PrimaryButton";
import TextAreaInput from "./components/TextAreaInput";
import SkillItem from "./components/SkillItem";
import FormInput from "./components/FormInput";
import SelectInput from "./components/SelectInput";
import DestroyButton from "./components/DestroyButton";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import SkillInput from "./components/SkillInput";

const Skills = () => {
    const [edit, setEdit] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleDelete = () => {
      setSelectedSkill('hello')
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
                    <div className="w-full flex flex-row items-center">
                        <SkillInput handleDelete={handleDelete} />
                    </div>
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
            {edit && (
                <div className="flex justify-end space-x-4 py-4">
                    <PrimaryButtonOutline onClick={() => setEdit(false)}>
                        Cancel
                    </PrimaryButtonOutline>
                    <PrimaryButton>Save</PrimaryButton>
                </div>
            )}
        </SectionContainer>
    );
};

export default Skills;
