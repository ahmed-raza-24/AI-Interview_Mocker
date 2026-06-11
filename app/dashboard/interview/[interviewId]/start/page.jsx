"use client"
import { db } from '@/utiles/db';
import { eq } from 'drizzle-orm'
import { MockInterview } from '@/utiles/schema';
import React, { useEffect, useState, use } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import dynamic from 'next/dynamic'
import { Button } from '@base-ui/react';
// import RecordAnswerSection from './_components/RecordAnswerSection';

function StartInterview({ params }) {
  const { interviewId } = use(params);

  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setmockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
    console.log(typeof mockInterviewQuestion)
    console.log(mockInterviewQuestion)
  }, [interviewId]);

  /*
  used to get interview details by mockId/interview Id
   */
  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId))

    const jsonMockResp = JSON.parse(result[0].jsonMockResp)
    console.log(jsonMockResp)
    setmockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  }

  const RecordAnswerSection = dynamic(
    () => import('./_components/RecordAnswerSection'),
    { ssr: false }
  )

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/*Questions */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className='flex justify-end gap-6 '>
        {activeQuestionIndex>0&&
        <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)} className='bg-violet-800 text-white p-2 rounded-md border border-none cursor-pointer'>Previous Question</Button>}
        {activeQuestionIndex!=mockInterviewQuestion?.length-1&&
        <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)} className='bg-violet-800 text-white p-2 rounded-md border border-none cursor-pointer'>Next Question</Button>}
        {activeQuestionIndex==mockInterviewQuestion?.length-1&&
        <Button className='bg-violet-800 text-white p-2 rounded-md border border-none cursor-pointer'>End Interview</Button>}
      </div>
    </div>
  )
}

export default StartInterview;