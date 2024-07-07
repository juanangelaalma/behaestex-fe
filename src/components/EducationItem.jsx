import React from 'react'
import WorkItem from './WorkItem'

const EducationItem = ({period, schoolName, description, handleEdit, handleDelete}) => {
  return <WorkItem handleDelete={handleDelete} handleEdit={handleEdit} period={period} position={schoolName} description={description} />
}

export default EducationItem