"use client"
import React, { useEffect } from 'react'

function Interview({params}) {

    useEffect(()=>{
        console.log(params)
    },[])

  return (
    <div>Interview</div>
  )
}

export default Interview;