import React from "react";
import SectionBody from "./SectionBody";
import FormInput from "./FormInput";
import AvatarInput from "./AvatarInput";
import FormAction from "./FormAction";

const BasicInformationForm = ({ handleCancel }) => {
    return (
        <>
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
            <FormAction handleCancel={handleCancel} />
        </>
    );
};

export default BasicInformationForm;
