import {v4 as uuidv4} from 'uuid'
import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import Feedbackdata from './data/Feedbackdata'
import Feedbackstats from './components/Feedbackstats'
import Feedbackform from './components/Feedbackform'

export default function App() {
const [feedback,setFeedback]=useState(Feedbackdata)
const deleteFeedback =(id)=> {
    if (window.confirm('Are you sure')) {
    setFeedback(feedback.filter((item)=>item.id !== id))      
    }
}

const addFeedback = (newFeedback)=>{
    newFeedback.id=uuidv4()
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback])
}

    return (
        <>
        <Header  />
        <div className="container">
            <Feedbackform handelAdd={addFeedback}/>
            <Feedbackstats feedback={feedback}/>
            <Feedbacklist feedback={feedback} handelDelete={deleteFeedback}/>
        </div>
        </>
    )
}
