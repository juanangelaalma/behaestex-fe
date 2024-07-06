import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import TextAreaInput from "./components/TextAreaInput";
import FormAction from "./components/FormAction";

const Summary = () => {
    const [edit, setEdit] = useState(false);
    const [summary, setSummary] = useState('')

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
                        <TextAreaInput placeholder="Insert text here" value={summary} onChange={(e) => setSummary(e.target.value)} />
                        <FormAction handleCancel={() => setEdit(false)} />
                    </>
                ) : (
                    <p>
                        I am a highly skilled web developer with over 2 years of
                        coding experience. Renowned for my unwavering dedication
                        and exceptional ability to meet tight deadlines, I
                        consistently deliver outstanding results. I thrive in
                        demanding environments and possess a track record of
                        effective leadership and proficient project management
                        skills.
                    </p>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default Summary;
