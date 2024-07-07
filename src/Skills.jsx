import React, { useEffect, useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import SkillItem from "./components/SkillItem";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import SkillForm from "./components/SkillForm";
import FormAction from "./components/FormAction";
import axios from "axios";
import { API_URL } from "./config/api";
import { toast } from "react-toastify";

const Skills = ({ skills, getCv }) => {
    const [edit, setEdit] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [currentSkills, setCurrentSkills] = useState(skills);

    useEffect(() => {
        setCurrentSkills(skills);
    }, [skills]);

    const handleDelete = (id) => {
        setSelectedSkill(id);
    };

    const handleAddSkill = () => {
        setCurrentSkills([
            ...currentSkills,
            {
                id: currentSkills.length > 0 ? (currentSkills[currentSkills.length - 1].id + 1) : 0,
                skill: "",
                level: "",
            },
        ]);
    };

    const handleConfirmDelete = () => {
        const filteredSkills = currentSkills.filter(
            (skill) => skill.id !== selectedSkill
        );
        setCurrentSkills(filteredSkills);
        setSelectedSkill(null);
    };

    const handleCancelEdit = () => {
        setEdit(false);
        setSelectedSkill(null);
        setCurrentSkills(skills)
    };

    const handleCancelDestroy = () => {
        setSelectedSkill(null);
    };

    const handleUpdateSkills = async () => {
        console.log(currentSkills)
        try {
            const res = await axios.put(`${API_URL}/cv/skills`, {
                skills: currentSkills
            });
            if (res.status === 201) {
                setEdit(false)
                getCv();
                toast(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    const setSkillById = (id, value) => {
        setCurrentSkills((prevSkills) => 
            prevSkills.map(currentSkill => 
                currentSkill.id === id ? { ...currentSkill, skill: value } : currentSkill
            )
        )
    }

    const setLevelById = (id, value) => {
        setCurrentSkills((prevSkills) => 
            prevSkills.map(currentSkill => 
                currentSkill.id === id ? { ...currentSkill, level: value } : currentSkill
            )
        )
    }

    return (
        <SectionContainer>
            <DeleteConfirmModal
                isOpen={selectedSkill}
                closeModal={handleCancelDestroy}
                handleConfirm={handleConfirmDelete}
            />
            <SectionHeader
                onAction={edit}
                title="Skills"
                cta="EDIT"
                onCtaClick={() => setEdit(true)}
            />
            <SectionBody>
                {edit ? (
                    <>
                        {currentSkills.map((skill) => (
                            <SkillForm
                                key={skill.id}
                                currentSkill={skill}
                                handleDelete={handleDelete}
                                onSkillChange={setSkillById}
                                onLevelChange={setLevelById}
                            />
                        ))}
                        <button
                            onClick={handleAddSkill}
                            className="my-2 text-blue-500 font-semibold"
                        >
                            + Add skill
                        </button>
                        <FormAction handleSave={handleUpdateSkills} handleCancel={handleCancelEdit} />
                    </>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-3 gap-y-4 py-4">
                        {currentSkills.map((skill) => (
                            <SkillItem key={skill.key} level={skill.level} name={skill.skill} />
                        ))}
                    </div>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default Skills;
