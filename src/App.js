import React from 'react'
import BasicInformation from './BasicInformation'
import Summary from './Summary'
import WorkExperience from './WorkExperience'

const App = () => {
  return (
    <div className='p-4'>
      <BasicInformation />
      <Summary />
      <WorkExperience />
    </div>
  )
}

export default App