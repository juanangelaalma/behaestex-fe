import React from 'react'
import BasicInformation from './BasicInformation'
import Summary from './Summary'
import WorkExperience from './WorkExperience'
import Education from './Education'

const App = () => {
  return (
    <div className='p-4'>
      <BasicInformation />
      <Summary />
      <WorkExperience />
      <Education />
    </div>
  )
}

export default App