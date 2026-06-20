"use client"
import Webcam from 'react-webcam'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text'
import { Mic } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utiles/GeminiAIModel'
import { UserAnswer } from '@/utiles/schema'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utiles/db'
import moment from 'moment'

const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const {
    interimResult,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
    speechRecognitionProperties: {
      lang: 'en-US',
      interimResults: true,
    }
  });

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log('Permission granted')
      })
      .catch((err) => {
        console.log('Permission denied:', err)
      })
  }, [])

  useEffect(() => {
    if (interimResult) {
      setUserAnswer(interimResult)
    }
  }, [interimResult])

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    } else if (!isRecording && userAnswer.length > 0 && userAnswer.length <= 10) {
      toast('Answer too short, Please record again');
    }
  }, [isRecording])

  const StartStopRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  }

  const UpdateUserAnswer = async () => {
    setLoading(true);
    try {
      const feedbackPrompt = "Question:" + mockInterviewQuestion[activeQuestionIndex]?.question +
        ", User Answer:" + userAnswer +
        ", Please give rating and feedback in JSON format with rating field and feedback field"

      const result = await chatSession.sendMessage(feedbackPrompt);
      const mockJsonResp = result.response.text().replace('```json', '').replace('```', '');
      const JsonFeedbackResp = JSON.parse(mockJsonResp);

      await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy')
      })

      toast('Answer recorded successfully!');
      setUserAnswer('');
    } catch (err) {
      console.log('Error:', err)
      toast('Error saving answer, try again');
    }
    setLoading(false);
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
        <Image alt='' src={'/webcam.png'} width={200} height={200} className='absolute' />
        <Webcam
          mirrored={true}
          onUserMediaError={(err) => console.log('Webcam error:', err)}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
          }}
        />
      </div>
      <Button
        variant="outline"
        className='my-10 cursor-pointer'
        disabled={loading}
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <span className='text-red-600 flex gap-2'>
            <Mic /> Stop Recording
          </span>
        ) : 'Record Answer'}
      </Button>
    </div>
  )
}

export default RecordAnswerSection;