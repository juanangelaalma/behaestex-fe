import React, { useState } from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import SectionBody from "./components/SectionBody";
import PrimaryButtonOutline from "./components/PrimaryButtonOutline";
import PrimaryButton from "./components/PrimaryButton";
import TextAreaInput from "./components/TextAreaInput";

const Summary = () => {
    const [edit, setEdit] = useState(false);
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
                    <TextAreaInput placeholder='Insert text here' />
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

export default Summary;
