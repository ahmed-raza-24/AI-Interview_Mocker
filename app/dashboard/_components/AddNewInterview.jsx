"use client"
import React from 'react'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@base-ui/react'
import { chatSession } from '@/utiles/GeminiAIModel'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utiles/db'
import { MockInterview } from '@/utiles/schema'

function AddNewInterview() {

    const [openDailog, setOpenDailog] = useState(false)
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse]=useState([]);

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        console.log(jobPosition, jobDesc, jobExperience);

        const InputPrompt = "Job position: " + jobPosition + ", Job Description: " + jobDesc + ", Years of Experience: " + jobExperience + ", Depends on Job Position, Job Description & Years of Experience give us " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUN + " interview question along with Answer in JSON format, Give us question and answer field on JSON"

        const result = await chatSession.sendMessage(InputPrompt);
        const MockJsonResp = result.response.text();
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);

        const resp=await db.insert(MockInterview)

        setLoading(false)
    }

    return (
        <div>
            <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
                onClick={() => setOpenDailog(true)}
            >
                <h2 className='font-bold text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDailog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Tell us more about your job interviewing</DialogTitle>
                        <form onSubmit={onSubmit}>
                            <DialogDescription>
                            </DialogDescription>
                            <div>
                                <h2>Add Details about position, Your skills and Years of experience</h2>
                                <div className='mt-7 my-3'>
                                    <label>Job Role/Job Position</label>
                                    <Input placeholder="Ex. Full Stack Developer" required
                                        onChange={(event) => setJobPosition(event.target.value)}
                                    />
                                </div>
                                <div className=' my-3'>
                                    <label>Job Description/ Tech Stack (In Short)</label>
                                    <Textarea placeholder="Ex. React, Angular, NodeJs, MySql etc" required
                                        onChange={(event) => setJobDesc(event.target.value)}
                                    />
                                </div>
                                <div className=' my-3'>
                                    <label>Year of experience</label>
                                    <Input placeholder="Ex.2" type="number" max="50" required
                                        onChange={(event) => setJobExperience(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-5 justify-end'>
                                <Button type='button' variant="ghost" onClick={() => setOpenDailog(false)}>Cancel</Button>
                                <Button type='submit' disabled={loading}>
                                    {loading ?
                                        <>
                                            <LoaderCircle className='animate-spin' />'Generating from AI'
                                        </> : 'Start Interview'
                                    }

                                </Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview;