"use client"
import {db} from '@/utiles/db'
import {eq} from 'drizzle-orm'
import { MockInterview } from '@/utiles/schema'
import React, { useEffect, use } from 'react'
import { useState } from 'react'
import { Webcam, WebcamIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
        mirrored={true}
        style={{
          height:300,
          width:300
        }}
        />
        :
        <> 
        <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
        <Button onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
        </> 
        }
        </div>

        <div className='flex flex-col my-5 gap-5'>
          <h2 className='text-lg'><strong>Job Role/Job Position:</strong>{interviewData?.jobPosition}</h2>
          <h2 className='text-lg'><strong>Job Description/Tech Stack:</strong>{interviewData?.jobDesc}</h2>
          <h2 className='text-lg'><strong>Job Experience:</strong>{interviewData?.jobExperience}</h2>
        </div>
    </div>
  )
}

export default Interview;