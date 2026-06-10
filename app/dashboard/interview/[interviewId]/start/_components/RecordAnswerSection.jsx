"use client"
import Webcam from 'react-webcam'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
import {useState} from 'react'
import { toast } from 'sonner'
import { chatSession } from '@/utiles/GeminiAIModel'
import { UserAnswer } from '@/utiles/schema'
import { useUser } from '@clerk/nextjs'

const RecordAnswerSection = (mockInterviewQuestion, activeQuestionIndex, interviewData) => {
  const [userAnswer, setUserAnswer] = useState('');
  const {user}=useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(()=>{
    results.map((result)=>(
      setUserAnswer(prevAns=>prevAns+result?.transcript)
    ))
  },[results])


  const SaveUserAnswer=async()=>{
    if(isRecording){
      setLoading(true);
      stopSpeechToText();
      if(userAnswer?.length<10){
        setLoading(false);
        toast('Error while saving your answer, Please record again')
        return
      }

      const feedbackPrompt = "Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
      ", User Answer:"+userAnswer+", Depends on question and user answer for given interview question"+
      " please give us rating for answer and feedback as area of improvement if any"+
      " in just 3 to 5 lines to improve it in JSON format with rating field and feedback field"

      const result = await chatSession.sendMessage(feedbackPrompt);

      const mockJsonResp=(result.response.text()).replace('```json','').replace('```','');
      console.log(mockJsonResp);
      const JsonFeedbackResp=JSON.parse(mockJsonResp);

      const resp=await db.insert(UserAnswer)
      .values({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns:userAnswer,
        feedback:JsonFeedbackResp?.feedback,
        rating:JsonFeedbackResp?.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-yyyy')
      })

      if(resp){
        toast('User Answer recorded successfully')
      }
      setUserAnswer('');
      setLoading(false);

    } else {
      startSpeechToText()
    }
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
        <Image alt='' src={'/webcam.png'} width={200} height={200}
          className='absolute' />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
          }}
        />
      </div>
      <Button variant="outline" className='my-10'
        disabled={isRecording}
        // disabled={loading}
        onClick={SaveUserAnswer}
        >
        {isRecording?
        <h2 className='text-red-600 flex gap-2'>
          <Mic/>Stop Recording
        </h2>
        :
        'Record Answer'}</Button>
      <Button onClick={()=>console.log(userAnswer)}>Show User Answer</Button>
    </div>
  )
}

export default RecordAnswerSection;