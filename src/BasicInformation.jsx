import React, { useState } from "react";
import FormInput from "./components/FormInput";
import SectionHeader from "./components/SectionHeader";
import AvatarInput from "./components/AvatarInput";
import PrimaryButton from "./components/PrimaryButton";
import PrimaryButtonOutline from "./components/PrimaryButtonOutline";
import ContactItem from "./components/ContactItem";
import SectionContainer from "./components/SectionContainer";
import SectionBody from "./components/SectionBody";

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
                <SectionBody>
                    <AvatarInput />
                    <div className="w-full lg:w-4/5">
                        <FormInput
                            className="mt-4"
                            type="text"
                            name="full_name"
                            placeholder="enter your full name"
                            label="Full Name"
                            autoFocus={true}
                            // value={chairmanName}
                            // onChange={setChairmanName}
                        />
                        <FormInput
                            className="mt-4"
                            type="text"
                            name="address"
                            placeholder="enter your address"
                            label="Address"
                            // value={chairmanName}
                            // onChange={setChairmanName}
                        />
                        <FormInput
                            className="mt-4"
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            label="Email"
                            // value={chairmanName}
                            // onChange={setChairmanName}
                        />
                        <FormInput
                            className="mt-4"
                            type="text"
                            name="phone"
                            placeholder="enter your mobile number"
                            label="Mobile Number"
                            // value={chairmanName}
                            // onChange={setChairmanName}
                        />
                    </div>
                </SectionBody>
            ) : (
                <SectionBody>
                    <AvatarInput showName={true} />
                    <div className="w-full lg:w-2/5 space-y-3 py-4">
                        <ContactItem
                            className="hidden lg:flex"
                            icon="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557"
                            text="Juan Angela Alma"
                        />
                        <ContactItem
                            icon="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                            text="Gresik, East Java, Indonesia"
                        />
                        <ContactItem
                            icon="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                            text="juanangelaalma@gmail.com"
                        />
                        <ContactItem
                            icon="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.5 16h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5"
                            text="+62 83111064486"
                        />
                    </div>
                </SectionBody>
            )}
            {editBasicInformation && (
                <div className="flex justify-end space-x-4 py-4">
                    <PrimaryButtonOutline
                        onClick={() => setEditBasicInformation(false)}
                    >
                        Cancel
                    </PrimaryButtonOutline>
                    <PrimaryButton>Save</PrimaryButton>
                </div>
            )}
        </SectionContainer>
    );
};
export default BasicInformation;
