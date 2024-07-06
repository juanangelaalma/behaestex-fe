import React, { useState } from "react";
import SectionHeader from "./components/SectionHeader";
import SectionContainer from "./components/SectionContainer";
import BasicInformationDetails from "./components/BasicInformationDetails";
import BasicInformationForm from "./components/BasicInformationForm";

const BasicInformation = () => {
    const [editBasicInformation, setEditBasicInformation] = useState(false);

    return (
        <SectionContainer>
            <SectionHeader
                onAction={editBasicInformation}
                title="Basic Information"
                cta="EDIT"
                onCtaClick={() => setEditBasicInformation(true)}
            />
            {editBasicInformation ? (
                <BasicInformationForm handleCancel={() => setEditBasicInformation(false)} />
            ) : (
                <BasicInformationDetails />
            )}
        </SectionContainer>
    );
};
export default BasicInformation;
