import React from 'react'
import Agent  from '@/components/Agent'
const page = () => {
  return (
    <div>
      <h3 className='mb-3'>Interview Generation</h3>
      <Agent 
        userName='BinaryShade'
        userId='123'
        interviewId='123'
        feedbackId='123'
        type='generate'
        questions={[]}
      />
    </div>
  )
}

export default page
