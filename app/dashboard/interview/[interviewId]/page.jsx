"use client"
import {db} from '@/utiles/db'
import {eq} from 'drizzle-orm'
import { MockInterview } from '@/utiles/schema'
import React, { useEffect, use } from 'react'
import { useState } from 'react'
function Interview({params}) {
    const { interviewId } = use(params)  // unwrap karo

    const [interviewData, setInterviewData] = useState()
    useEffect(()=>{
        console.log(interviewId)
        GetInterviewDetails();
    },[])

    /*
    used to get interview details by mockId/interview Id
     */
    const GetInterviewDetails=async()=>{
      const result=await db.select().from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId))

      console.log(result);
      setInterviewData(result[0]);
    }

  return (
    <div className='my-10 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>
    </div>
  )
}

export default Interview;