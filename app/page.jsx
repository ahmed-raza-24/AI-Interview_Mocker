'use client'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BrainCircuit, Mic, BarChart3, ArrowRight, Check } from 'lucide-react'

const features = [
  {
    icon: <BrainCircuit className='h-6 w-6 text-violet-600' />,
    title: "AI-Generated Questions",
    desc: "Role-specific questions tailored to your job position, tech stack, and experience level."
  },
  {
    icon: <Mic className='h-6 w-6 text-violet-600' />,
    title: "Voice Answer Recording",
    desc: "Answer naturally using your microphone — just like a real interview environment."
  },
  {
    icon: <BarChart3 className='h-6 w-6 text-violet-600' />,
    title: "Instant AI Feedback",
    desc: "Get detailed ratings and improvement tips for every answer immediately after the session."
  },
]

const stats = [
  { num: "10K+", label: "Users" },
  { num: "500+", label: "Questions" },
  { num: "95%", label: "Success Rate" },
]

const steps = [
  "Enter your job role & tech stack",
  "Answer 5 AI-generated questions",
  "Get instant feedback & rating",
]

export default function LandingPage() {

  const { isSignedIn } = useAuth()
  const router = useRouter()

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/dashboard')
    } else {
      router.push('/sign-in')
    }
  }

  return (
    <div className='min-h-screen bg-white'>

      {/* Navbar */}
      <nav className='flex items-center justify-between px-10 py-5 border-b'>
        <div className='flex items-center gap-2'>
          <span className='text-2xl'>🎤</span>
          <span className='font-bold text-lg text-gray-800'>InterviewAI</span>
        </div>
        <div className='flex items-center gap-4'>
          <Link href='/dashboard'>
            <Button variant='ghost' className='font-semibold cursor-pointer'>Dashboard</Button>
          </Link>
          <Button
            className='bg-violet-600 hover:bg-violet-700 cursor-pointer'
            onClick={handleGetStarted}
          >
            Get Started Free
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className='text-center px-6 py-24 max-w-4xl mx-auto'>
        <div className='inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 mb-8'>
          <span className='w-2 h-2 bg-violet-600 rounded-full animate-pulse' />
          <span className='text-xs font-bold text-violet-600 uppercase tracking-widest'>AI Powered Mock Interviews</span>
        </div>

        <h1 className='text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6'>
          Ace Your Next Interview <br />
          <span className='text-violet-600'>with AI</span>
        </h1>

        <p className='text-gray-500 text-lg font-medium max-w-xl mx-auto mb-10 leading-relaxed'>
          Practice real interview questions, get instant AI feedback, and track your progress — all in one place.
        </p>

        <div className='flex items-center justify-center gap-4 flex-wrap'>
          <Link href='/dashboard'>
            <Button className='bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-base font-bold cursor-pointer rounded-xl'>
              Start Practicing Free <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
          <Link href='/dashboard/howitworks'>
            <Button variant='outline' className='px-8 py-6 text-base font-bold cursor-pointer rounded-xl'>
              How it Works
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className='bg-violet-50 py-12'>
        <div className='max-w-3xl mx-auto grid grid-cols-3 gap-8 text-center'>
          {stats.map((stat, i) => (
            <div key={i}>
              <h2 className='text-4xl font-black text-violet-600'>{stat.num}</h2>
              <p className='text-gray-500 font-semibold mt-1'>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className='py-20 px-6 max-w-5xl mx-auto'>
        <h2 className='text-3xl font-black text-center text-gray-900 mb-3'>Everything You Need to Prepare</h2>
        <p className='text-center text-gray-400 font-medium mb-14'>Powerful features to help you land your dream job</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((f, i) => (
            <div key={i} className='border rounded-2xl p-7 hover:shadow-md hover:border-violet-300 transition-all'>
              <div className='w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-5'>
                {f.icon}
              </div>
              <h3 className='font-bold text-gray-800 text-lg mb-2'>{f.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — simple */}
      <section className='bg-gray-50 py-20 px-6'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-black text-gray-900 mb-3'>Get Started in 3 Steps</h2>
          <p className='text-gray-400 font-medium mb-12'>Simple, fast, and effective</p>

          <div className='flex flex-col gap-5'>
            {steps.map((step, i) => (
              <div key={i} className='flex items-center gap-5 bg-white border rounded-xl px-6 py-4 text-left shadow-sm'>
                <div className='w-9 h-9 rounded-full bg-violet-600 text-white font-black flex items-center justify-center shrink-0'>
                  {i + 1}
                </div>
                <span className='font-semibold text-gray-700'>{step}</span>
                <Check className='ml-auto h-5 w-5 text-violet-400 shrink-0' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-24 px-6 text-center'>
        <div className='max-w-2xl mx-auto border-2 border-violet-100 rounded-3xl p-14 bg-violet-50'>
          <h2 className='text-3xl font-black text-violet-800 mb-3'>Ready to ace your interview?</h2>
          <p className='text-gray-500 font-medium mb-8'>Join thousands of candidates who improved with AI-powered practice</p>
          <Link href='/dashboard'>
            <Button className='bg-violet-600 hover:bg-violet-700 text-white px-10 py-6 text-base font-bold cursor-pointer rounded-xl'>
              Start Free Today <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t py-8 text-center text-gray-400 text-sm font-medium'>
        © 2026 InterviewAI — Built with Next.js & Gemini AI
      </footer>

    </div>
  )
}