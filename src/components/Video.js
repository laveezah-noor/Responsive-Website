import React from 'react'
import '../App.css'
import Vid from '../Video.mp4'

export default function Video() {
    return (
        <div>
            <video src={Vid} autoPlay loop muted/>
            <h1>Video</h1>
        </div>
    )
} 
