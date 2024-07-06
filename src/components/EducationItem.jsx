import React from 'react'
import WorkItem from './WorkItem'

const EducationItem = ({period, schoolName, handleEdit, handleDelete}) => {
  return <WorkItem handleDelete={handleDelete} handleEdit={handleEdit} period={period} position={schoolName} />
}

export default EducationItem