import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import TextAreaInput from "./components/TextAreaInput";
import FormAction from "./components/FormAction";

const Summary = ({ summary }) => {
    const [edit, setEdit] = useState(false);
    const [content, setContent] = useState(summary)

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
                        <TextAreaInput placeholder="Insert text here" value={summary} onChange={(e) => setContent(e.target.value)} />
                        <FormAction handleCancel={() => setEdit(false)} />
                    </>
                ) : (
                    <p>
                        {summary}
                    </p>
                )}
            </SectionBody>
        </SectionContainer>
    );
};

export default Summary;
