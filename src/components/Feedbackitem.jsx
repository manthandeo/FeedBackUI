import React from 'react';
import {FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import Card from './shared/Card';

export default function Feedbackitem({item, handelDelete}) {
const [rating, setRating] = useState(7)
const [text, setText] = useState("ManthanDeo")

// const handelClick = () =>{
//     setText("Kya bolti public")
//     setRating(20)
// }

  return (
      <Card >
          <div className="num-display">{item.rating}</div>
          <button onClick={()=>handelDelete(item.id)} className='close'>
            <FaTimes color='white'/>
          </button>
          <div className="text-display">{item.text}</div>
          {/* <button onClick={handelClick}>CLick</button> */}
      </Card>
  )
}

  
