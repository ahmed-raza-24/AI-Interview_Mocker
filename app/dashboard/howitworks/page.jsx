import React from 'react'
import { UserPlus, BrainCircuit, Mic, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: <UserPlus className='h-8 w-8 text-violet-600'/>,
    step: "Step 1",
    title: "Create Your Interview",
    desc: "Enter your job position, tech stack, and years of experience. Our AI will generate a customized set of interview questions just for you."
  },
  {
    icon: <BrainCircuit className='h-8 w-8 text-violet-600'/>,
    step: "Step 2",
    title: "AI Generates Questions",
    desc: "Based on your profile, Gemini AI creates 5 role-specific interview questions that match real-world interview patterns."
  },
  {
    icon: <Mic className='h-8 w-8 text-violet-600'/>,
    step: "Step 3",
    title: "Record Your Answers",
    desc: "Answer each question using your microphone — just like a real interview. Enable your webcam for a more realistic experience."
  },
  {
    icon: <BarChart3 className='h-8 w-8 text-violet-600'/>,
    step: "Step 4",
    title: "Get AI Feedback",
    desc: "After the interview, receive detailed feedback with ratings and improvement tips for each answer. Track your progress over time."
  },
]

const HowItWorksPage = () => {
  return (
    <div className='p-10 max-w-4xl mx-auto'>
      <h2 className='font-bold text-3xl text-violet-800 text-center'>How It Works</h2>
      <p className='text-gray-500 text-center mt-2 mb-16'>
        Land your dream job in 4 simple steps
      </p>

      {/* Steps */}
      <div className='relative'>

        {/* Vertical line */}
        <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-violet-100 hidden md:block'/>

        <div className='flex flex-col gap-12'>
          {steps.map((item, index) => (
            <div key={index} className='flex gap-8 items-start relative'>

              {/* Icon circle */}
              <div className='z-10 shrink-0 w-16 h-16 rounded-full bg-violet-50 border-2 border-violet-200 flex items-center justify-center shadow-sm'>
                {item.icon}
              </div>

              {/* Content card */}
              <div className='border rounded-2xl p-6 flex-1 shadow-sm hover:shadow-md hover:border-violet-300 transition-all'>
                <span className='text-xs font-bold text-violet-400 uppercase tracking-widest'>
                  {item.step}
                </span>
                <h3 className='font-bold text-lg text-gray-800 mt-1 mb-2'>{item.title}</h3>
                <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className='mt-16 text-center border-2 border-violet-100 rounded-2xl p-10 bg-violet-50'>
        <h2 className='font-bold text-2xl text-violet-800 mb-2'>Ready to ace your next interview?</h2>
        <p className='text-gray-500 mb-6'>Join thousands of candidates who improved their interview skills with AI</p>
        <a href='/dashboard' className='bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded-xl transition-colors'>
          Start Practicing Free →
        </a>
      </div>
    </div>
  )
}

export default HowItWorksPage