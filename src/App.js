import React, { useEffect, useState } from 'react'
import BasicInformation from './BasicInformation'
import Summary from './Summary'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'
import axios from 'axios'
import { API_URL } from './config/api'
import CopyPreviewButton from './components/CopyPreviewButton'
import { usePreview } from './contexts/PreviewContext'

const App = () => {
  const { isPreview } = usePreview()
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
      { !isPreview && <CopyPreviewButton /> }
      <BasicInformation getCv={getCv} avatar={cv.avatar} name={cv.name} address={cv.address} email={cv.email} phone={cv.phone} />
      <Summary getCv={getCv} summary={cv.summary} />
      <WorkExperience getCv={getCv} workExperiences={cv.work_experiences} />
      <Education getCv={getCv} educations={cv.educations} />
      <Skills getCv={getCv} skills={cv.skills} />
    </div>
  )
}

export default App