import React from "react";
import PrimaryButtonOutline from "./PrimaryButtonOutline";
import PrimaryButton from "./PrimaryButton";

const FormAction = ({ handleCancel, handleSave }) => {
    return (
        <div className="flex w-full justify-end space-x-4 py-4">
            <PrimaryButtonOutline onClick={handleCancel}>
                Cancel
            </PrimaryButtonOutline>
            <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
        </div>
    );
};

export default FormAction;
