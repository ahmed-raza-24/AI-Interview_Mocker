import React from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const freePlan = [
  "3 Mock Interviews per month",
  "5 Questions per interview",
  "Basic AI feedback",
  "Interview history",
  "No credit card required",
]

const proPlan = [
  "Unlimited Mock Interviews",
  "10 Questions per interview",
  "Detailed AI feedback & rating",
  "Full interview history & progress",
  "Priority support",
  "Early access to new features",
]

const UpgradePage = () => {
  return (
    <div className='p-10 max-w-5xl mx-auto'>
      <h2 className='font-bold text-3xl text-violet-800 text-center'>Upgrade Your Plan</h2>
      <p className='text-gray-500 text-center mt-2 mb-12'>
        Choose the plan that fits your interview prep goals
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

        {/* Free Plan */}
        <div className='border rounded-2xl p-8 flex flex-col gap-5 shadow-sm'>
          <div>
            <h2 className='text-xl font-bold text-gray-700'>Free</h2>
            <h2 className='text-4xl font-black mt-2'>₹0 <span className='text-base font-medium text-gray-400'>/month</span></h2>
            <p className='text-gray-400 text-sm mt-1'>Perfect to get started</p>
          </div>

          <hr/>

          <ul className='flex flex-col gap-3'>
            {freePlan.map((feature, index) => (
              <li key={index} className='flex items-center gap-3 text-sm text-gray-600'>
                <Check className='h-4 w-4 text-green-500 shrink-0'/>
                {feature}
              </li>
            ))}
          </ul>

          <Button variant="outline" className='mt-auto cursor-pointer' disabled>
            Current Plan
          </Button>
        </div>

        {/* Pro Plan */}
        <div className='border-2 border-violet-600 rounded-2xl p-8 flex flex-col gap-5 shadow-lg relative'>
          {/* Badge */}
          <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
            <span className='bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full'>
              MOST POPULAR
            </span>
          </div>

          <div>
            <h2 className='text-xl font-bold text-violet-700'>Pro</h2>
            <h2 className='text-4xl font-black mt-2'>₹299 <span className='text-base font-medium text-gray-400'>/month</span></h2>
            <p className='text-gray-400 text-sm mt-1'>For serious job seekers</p>
          </div>

          <hr/>

          <ul className='flex flex-col gap-3'>
            {proPlan.map((feature, index) => (
              <li key={index} className='flex items-center gap-3 text-sm text-gray-600'>
                <Check className='h-4 w-4 text-violet-500 shrink-0'/>
                {feature}
              </li>
            ))}
          </ul>

          <Button className='mt-auto cursor-pointer bg-violet-600 hover:bg-violet-700'>
            Upgrade Now
          </Button>
        </div>

      </div>
    </div>
  )
}

export default UpgradePage