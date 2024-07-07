import React from "react";
import PrimaryButtonOutline from "./PrimaryButtonOutline";
import { usePreview } from "../contexts/PreviewContext";

const SectionHeader = ({ title, cta, onCtaClick, onAction }) => {
    const { isPreview } = usePreview()

    return (
        <div className={`flex flex-row bg-gray-200 rounded-sm px-3 py-2 justify-between items-center ${onAction ? 'bg-blue-700' : ''}`}>
            <h4 className={`leading-none text-lg font-semibold ${onAction ? 'text-white' : ''}`}>{title}</h4>
            {!isPreview && (!onAction) ? <PrimaryButtonOutline onClick={onCtaClick}>{cta}</PrimaryButtonOutline> : ''}
        </div>
    );
};

export default SectionHeader;
