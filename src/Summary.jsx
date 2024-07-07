import React, { useEffect, useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import TextAreaInput from "./components/TextAreaInput";
import FormAction from "./components/FormAction";
import axios from "axios";
import { API_URL } from "./config/api";

const Summary = ({ summary, getCv }) => {
    const [edit, setEdit] = useState(false);
    const [content, setContent] = useState("");

    const handleUpdateSummary = async () => {
        try {
            const res = await axios.put(`${API_URL}/cv/summary`, {
                summary: content,
            });
            if (res.status === 200) {
                setEdit(false);
                getCv();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setContent(summary);
    }, [summary]);

    return (
        <SectionContainer>
            <SectionHeader
                onAction={edit}
                title="Summary"
                cta="EDIT"
                onCtaClick={() => setEdit(true)}
            />
            <SectionBody>
                {edit ? (
                    <>
                        <TextAreaInput
                            placeholder="Insert text here"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <FormAction
                            handleCancel={() => setEdit(false)}
                            handleSave={handleUpdateSummary}
                        />
                    </>
                ) : (
                    <p>{summary}</p>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default Summary;
