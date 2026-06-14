"use client"
import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'

const faqs = [
  {
    question: "How does AI Interview Mocker work?",
    answer: "Simply add your job position, tech stack, and years of experience. Our AI will generate role-specific interview questions. Answer them via voice, and get instant feedback with ratings."
  },
  {
    question: "How many questions will I get per interview?",
    answer: "Each mock interview session contains 5 AI-generated questions tailored to your job role and experience level."
  },
  {
    question: "Is my video recorded during the interview?",
    answer: "No. We never record or store your video. Camera access is only used to simulate a real interview environment. You can disable it anytime."
  },
  {
    question: "How is my answer evaluated?",
    answer: "After you record your answer, our AI analyzes it against the ideal answer and gives you a rating out of 10 along with specific feedback on areas of improvement."
  },
  {
    question: "Can I retake an interview?",
    answer: "Yes! You can retake any interview as many times as you want. Each attempt is saved separately so you can track your improvement."
  },
  {
    question: "What tech stacks are supported?",
    answer: "Any tech stack! Just type your skills in the job description field — React, Node.js, Python, Java, SQL, or anything else. The AI adapts accordingly."
  },
  {
    question: "Is this platform free to use?",
    answer: "Yes, the basic plan is completely free. You can create unlimited mock interviews and get AI feedback at no cost."
  },
]

const QuestionsPage = () => {
  return (
    <div className='p-10 max-w-4xl mx-auto'>
      <h2 className='font-bold text-3xl text-violet-800'>Frequently Asked Questions</h2>
      <p className='text-gray-500 mt-2 mb-8'>Everything you need to know about AI Interview Mocker</p>

      <div className='flex flex-col gap-4'>
        {faqs.map((faq, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className='p-4 bg-secondary rounded-lg flex justify-between items-center w-full text-left gap-7 font-semibold hover:bg-violet-50 transition-colors'>
              {faq.question}
              <ChevronsUpDown className='h-5 w-5 shrink-0 text-violet-600' />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='p-4 border border-t-0 rounded-b-lg text-gray-600 text-sm leading-relaxed'>
                {faq.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

export default QuestionsPage;