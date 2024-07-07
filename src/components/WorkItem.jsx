import React from "react";
import DestroyButton from "./DestroyButton";
import EditButton from "./EditButton";

const WorkItem = ({
    period,
    position,
    description,
    handleEdit,
    handleDelete,
}) => {
    return (
        <div className="w-full flex flex-col space-y-2 lg:flex-row relative">
            <div className="text-gray-500 font-semibold lg:w-3/12 pt-2">
                <h5>{period}</h5>
            </div>
            <div className="lg:w-9/12">
                <h6 className="font-semibold">{position}</h6>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="absolute top-0 right-0 space-x-1">
                <DestroyButton onClick={handleDelete} />
                <EditButton onClick={handleEdit} />
            </div>
        </div>
    );
};

export default WorkItem;
