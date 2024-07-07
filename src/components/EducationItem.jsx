import React from 'react'
import WorkItem from './WorkItem'

const EducationItem = ({id, period, schoolName, description, handleEdit, handleOpenDeleteModal}) => {
  return <WorkItem id={id} handleOpenDeleteModal={handleOpenDeleteModal} handleEdit={handleEdit} period={period} position={schoolName} description={description} />
}

export default EducationItem