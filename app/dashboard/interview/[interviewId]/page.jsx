"use client"
import {db} from '@/utiles/db'
import {eq} from 'drizzle-orm'
import { MockInterview } from '@/utiles/schema'
import React, { useEffect, use } from 'react'
import { useState } from 'react'
import { Webcam } from 'lucide-react'
function Interview({params}) {
    const { interviewId } = use(params)  // unwrap karo

    const [interviewData, setInterviewData] = useState();
    const [webCamEnabled, setWebCamEnabled] = useState(false);
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
      <div>
        {webCamEnabled? <Webcam 
        onUserMedia={()=>setWebCamEnabled(true)}
        onUserMediaError={()=>setWebCamEnabled(false)}
        style={{
          height:300,
          width:300
        }}
        />
        :  
        <Webcam className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
        }
        </div>
    </div>
  )
}

export default Interview;