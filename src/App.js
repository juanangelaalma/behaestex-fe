import React, { useEffect, useState } from 'react'
import BasicInformation from './BasicInformation'
import Summary from './Summary'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'
import axios from 'axios'
import { API_URL } from './config/api'

const App = () => {
  const [cv, setCv] = useState({
    avatar: '',
    name: '',
    address: '',
    email: '',
    summary: '',
    work_experiences: [],
    educations: [],
    skills: [],
  })

  const getCv = async () => {
    try {
      const res = await axios.get(`${API_URL}/cv`)
      setCv(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCv()
  }, [])

  return (
    <div className='p-4 space-y-6'>
      <BasicInformation getCv={getCv} avatar={cv.avatar} name={cv.name} address={cv.address} email={cv.email} phone={cv.phone}  />
      <Summary getCv={getCv} summary={cv.summary} />
      <WorkExperience getCv={getCv} workExperiences={cv.work_experiences} />
      <Education educations={cv.educations} />
      <Skills skills={cv.skills} />
    </div>
  )
}

export default App