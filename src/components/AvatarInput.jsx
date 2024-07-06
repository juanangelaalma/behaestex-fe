import React from "react";

const AvatarInput = ({showName}) => {
    return (
        <div className="w-full lg:w-1/5 flex lg:justify-start lg:max-w-[130px]">
            <div className="w-1/4 lg:w-full text-center mx-auto lg:mx-0 relative h-[100px]">
                <div className="w-[100px]">
                    <img
                        className="w-[100px] h-[100px] rounded-full absolute object-cover object-center"
                        src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                        alt=""
                        onError={(e) => {
                            e.target.onerror = null;
                            // e.target.src = defaultProfilePicture;
                        }}
                    />
                    <label
                        htmlFor="profilePictureInput"
                        className="w-[100px] h-[100px] group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
                    >
                        <img
                            className="hidden group-hover:block w-8"
                            src="https://www.svgrepo.com/show/33565/upload.svg"
                            alt=""
                        />
                    </label>
                    <input
                        // onChange={handlePhotoChange}
                        type="file"
                        className="hidden"
                        name="image"
                        id="profilePictureInput"
                    />
                </div>
            </div>
            {showName && (
                <div className="w-3/4 flex justify-start items-center lg:hidden">
                    <h5 className="font-normal text-lg ml-4">
                        Juan Angela Alma
                    </h5>
                </div>
            )}
        </div>
    );
};

export default AvatarInput;
