import React from "react";

const DeleteConfirmModal = ({ isOpen, closeModal, message, handleConfirm }) => {
  return (
    <div
      style={{ zIndex: 1000 }}
      className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>
        {/* Add margin if you want to see some of the overlay behind the modal*/}
        <div className="modal-content py-4 text-left px-6">
          {/*Title*/}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">
              {message || "Are you sure?"}
            </p>
            <div
              onClick={closeModal}
              className="modal-close cursor-pointer z-50"
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>
          </div>
          {/*Body*/}
          <div className="flex justify-end pt-4">
            <div
              onClick={closeModal}
              className="px-4 cursor-pointer bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              Close
            </div>
            <button
              onClick={handleConfirm}
              className="modal-close px-4 bg-red-500 p-3 rounded-lg text-white hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;