"use client"
import { db } from '@/utiles/db';
import { eq } from 'drizzle-orm'
import { MockInterview } from '@/utiles/schema';
import React, { useEffect, useState, use } from 'react'

function StartInterview({params}) {
    const { interviewId } = use(params);

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setmockInterviewQuestion] = useState();
    
    useEffect(()=>{
        GetInterviewDetails()
    }, [interviewId]);

  /*
  used to get interview details by mockId/interview Id
   */
  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview)
      .where(eq(MockInterview.mockId,interviewId))

    const jsonMockResp=JSON.parse(result[0].jsonMockResp)
    console.log(jsonMockResp)
    setmockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  }

  return (
    <div>StartInterview</div>
  )
}

export default StartInterview