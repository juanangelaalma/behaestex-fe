import React, { useState } from "react";
import SectionBody from "./SectionBody";
import FormInput from "./FormInput";
import AvatarInput from "./AvatarInput";
import FormAction from "./FormAction";
import axios from "axios";
import { API_URL } from "../config/api";

const BasicInformationForm = ({
    avatar,
    name,
    address,
    email,
    phone,
    handleCancel,
    handleSuccessUpdateBasicInformation,
}) => {
    const [inputName, setInputName] = useState(name);
    const [inputAddress, setInputAddress] = useState(address);
    const [inputPhone, setInputPhone] = useState(phone);
    const [inputEmail, setInputEmail] = useState(email);
    const [inputAvatar, setInputAvatar] = useState("");
    const [errors, setErrors] = useState({
        name: [],
        email: [],
        address: [],
        phone: [],
    });

    const createFormData = () => {
        const formData = new FormData();
        formData.append("name", inputName);
        formData.append("address", inputAddress);
        formData.append("phone", inputPhone);
        formData.append("email", inputEmail);
        if (inputAvatar) formData.append("avatar", inputAvatar);
        return formData;
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const newBasicInformation = createFormData();

        try {
            const res = await axios.request({
                url: `${API_URL}/cv/basic-information`,
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: newBasicInformation,
            });
            if (res.status === 200) {
                handleSuccessUpdateBasicInformation();
            }
        } catch (error) {
            if (error.code === "ERR_BAD_REQUEST") {
                setErrors({ ...errors, ...error.response.data.errors })
            }
        }
    };

    return (
        <>
            <SectionBody>
                <AvatarInput
                    imageUrl={avatar}
                    disable={false}
                    avatar={inputAvatar}
                    setAvatar={setInputAvatar}
                />
                <div className="w-full lg:w-4/5">
                    <FormInput
                        className="mt-4"
                        type="text"
                        name="full_name"
                        placeholder="enter your full name"
                        label="Full Name"
                        autoFocus={true}
                        value={inputName}
                        onChange={(value) => setInputName(value)}
                        error={errors.name}
                        />
                    <FormInput
                        className="mt-4"
                        type="text"
                        name="address"
                        placeholder="enter your address"
                        label="Address"
                        value={inputAddress}
                        onChange={(value) => setInputAddress(value)}
                        error={errors.address}
                        />
                    <FormInput
                        className="mt-4"
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        label="Email"
                        value={inputEmail}
                        onChange={(value) => setInputEmail(value)}
                        error={errors.email}
                        />
                    <FormInput
                        className="mt-4"
                        type="text"
                        name="phone"
                        placeholder="enter your mobile number"
                        label="Mobile Number"
                        value={inputPhone}
                        onChange={(value) => setInputPhone(value)}
                        error={errors.phone}
                    />
                </div>
            </SectionBody>
            <FormAction handleCancel={handleCancel} handleSave={handleSave} />
        </>
    );
};

export default BasicInformationForm;
