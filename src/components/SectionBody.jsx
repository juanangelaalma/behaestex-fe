import React from "react";

const SectionBody = ({ children, className }) => {
    return <div className={`flex flex-row flex-wrap p-3 ${className}`}>{children}</div>;
};

export default SectionBody;
