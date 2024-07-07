import React from 'react'

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">{ children }</button>
  )
}

export default PrimaryButton