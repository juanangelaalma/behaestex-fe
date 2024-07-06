import React from 'react'
import BasicInformation from './BasicInformation'
import Summary from './Summary'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'

const App = () => {
  return (
    <div className='p-4 space-y-6'>
      <BasicInformation />
      <Summary />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  )
}

export default App