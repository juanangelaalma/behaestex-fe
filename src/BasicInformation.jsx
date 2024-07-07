import React, { useState } from "react";
import SectionHeader from "./components/SectionHeader";
import SectionContainer from "./components/SectionContainer";
import BasicInformationDetails from "./components/BasicInformationDetails";
import BasicInformationForm from "./components/BasicInformationForm";
import axios from "axios";
import { API_URL } from "./config/api";

const BasicInformation = ({ avatar, name, address, email, phone, getCv }) => {
    const [editBasicInformation, setEditBasicInformation] = useState(false);

    const handleSuccessUpdateBasicInformation = () => {
        setEditBasicInformation(false);
        getCv();
    };

    return (
        <SectionContainer>
            <SectionHeader
                onAction={editBasicInformation}
                title="Basic Information"
                cta="EDIT"
                onCtaClick={() => setEditBasicInformation(true)}
            />
            {editBasicInformation ? (
                <BasicInformationForm
                    handleSuccessUpdateBasicInformation={
                        handleSuccessUpdateBasicInformation
                    }
                    avatar={avatar}
                    name={name}
                    address={address}
                    email={email}
                    phone={phone}
                    handleCancel={() => setEditBasicInformation(false)}
                />
            ) : (
                <BasicInformationDetails
                    avatar={avatar}
                    name={name}
                    address={address}
                    email={email}
                    phone={phone}
                />
            )}
        </SectionContainer>
    );
};
export default BasicInformation;
