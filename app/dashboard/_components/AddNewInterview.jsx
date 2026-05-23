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

function AddNewInterview() {

    const [openDailog, setOpenDailog] = useState(false)

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
                        <DialogDescription>
                        </DialogDescription>
                        <div>
                            <h2>Add Details about position, Your skills and Years of experience</h2>
                            <div className='mt-7 my-3'>
                                <label>Job Role/Job Position</label>
                                <Input placeholder="Ex. Full Stack Developer" />
                            </div>
                            <div className=' my-3'>
                                <label>Job Description/ Tech Stack (In Short)</label>
                                <Textarea placeholder="Ex. React, Angular, NodeJs, MySql etc" />
                            </div>
                            <div className=' my-3'>
                                <label>Year of experience</label>
                                <Input placeholder="Ex.2" type="number" />
                            </div>
                        </div>
                        <div className='flex gap-5 justify-end'>
                            <Button variant="ghost" onClick={() => setOpenDailog(false)}>Cancel</Button>
                            <Button>Start Interview</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview;