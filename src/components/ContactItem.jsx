import React from 'react'

const ContactItem = ({ icon, text, className }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
        <path fill="#9ca3af" d={icon} />
      </svg>
      <span>{text}</span>
    </div>
  );
};

export default ContactItem