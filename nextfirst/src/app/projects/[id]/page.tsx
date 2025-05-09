"use client"
import React from 'react'
import { useParams } from 'next/navigation'
function Project() {
    const { id } = useParams()

  return (
    <div>
          <h1>I'm project, { id }</h1>
    </div>
  )
}

export default Project
