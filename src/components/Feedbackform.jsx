import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import Ratingselect from './Ratingselect';

export default function Feedbackform({handelAdd}) {
const[text,setText]=useState('')
const[btndiabled,setBtndiabled] = useState(true)
const[message,setMessage]=useState('')
const[rating,setRating]=useState(10)

const handelTextchange=(e)=>{
  // console.log(e.target.value)
 
  if (text === null) {
    setBtndiabled(true)
    setMessage(null)
  }
  else if( text !== null && text.trim().length <9)
  {
    
    setBtndiabled(true)
    setMessage('Review Schould be 10 Chars Long')
  }
  else{
    setBtndiabled(false)
    setMessage(null)
  }
  setText(e.target.value)
}

const handelSubmit = (e) =>{
e.preventDefault()
if (text.trim().length > 10) {
  const newFeedback =  {
    text,
    rating
  }
  handelAdd(newFeedback)
  setText('')
}
}
  return (
    <Card reverse={false}>
      <form onSubmit={handelSubmit}>
      <h2>How would you rate our services</h2>
      <Ratingselect select={(rating)=> setRating(rating)}/>
      <div className="input-group">
        <input onChange={handelTextchange} type="text" value={text} placeholder='Write a Review' />
        <Button type='Submit' version='secondary' isDisabled={btndiabled}>Send</Button>
      </div>
      {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}


