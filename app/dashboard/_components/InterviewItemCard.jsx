import React from 'react'

const InterviewItemCard = ({interview}) => {
  


    return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-violet-800'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At:{interview.createdAt}</h2>
    </div>
  )
}

export default InterviewItemCard;