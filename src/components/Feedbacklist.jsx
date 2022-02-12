import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import Feedbackitem from './Feedbackitem'

function Feedbacklist({feedback, handelDelete}) {
if (!feedback || feedback.length == 0) {
    return (<p>No FeedBack Yet</p>)
}


return (
  <div className='feedback-list'>
    <AnimatePresence>
  {feedback.map((item)=>(
    <motion.div 
    key={item.id}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
     {/* <div>{item.rating}</div> */}
    <Feedbackitem key={item.id} item={item} handelDelete={handelDelete}/>
    </motion.div>
))}
</AnimatePresence>
</div>
);


//   return (
//   <div className='feedback-list'>
//   {feedback.map((item)=>(
//     //   <div>{item.rating}</div>
//     <Feedbackitem key={item.id} item={item} handelDelete={handelDelete}/>
// ))}

// </div>
// );
  
}

export default Feedbacklist;
