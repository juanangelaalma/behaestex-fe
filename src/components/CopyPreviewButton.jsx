import React, { useState } from "react";
import PrimaryButtonOutline from "./PrimaryButtonOutline";
import { BASE_URL } from "../config/url";

const CopyPreviewButton = () => {
    const [copySuccess, setCopySuccess] = useState("");

    const handleCopyPreviewLink = () => {
        const textToCopy = `${BASE_URL}?preview=true`;
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setCopySuccess("Text copied to clipboard!");
            })
            .catch((err) => {
                setCopySuccess("Failed to copy text.");
            });
    };

    return (
        <div className="w-auto flex justify-center">
            <PrimaryButtonOutline onClick={handleCopyPreviewLink}>
                {copySuccess ? copySuccess : "Copy Preview Link"}
            </PrimaryButtonOutline>
        </div>
    );
};

export default CopyPreviewButton;
