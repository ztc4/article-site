"use client"
import {motion} from "framer-motion"
import React from "react";

function loadingTing(num){return <motion.div
style={{
  borderRadius: '50%',
  width: 6,
  height: 6,
  backgroundColor: '#333',
}}
initial={{
    opacity:0.3,
    y:12
}}
animate={{
  scale: [1, 1.5, 1],
  opacity:1
}}
transition={{
  duration: 1,
  repeat: Infinity,
  delay:num
}}
/>}


function Button({data, handleClick}) {
    return ( 
        <button 
        name={data.name} 
        className={`submit-button hover:drop-shadow font-semibold`}
       onClick={handleClick} 
       disabled={data.disabled}
        >
            {data.disabled ? <div className="flex flex-row gap-2">
                <p>{data.text}</p>
                {loadingTing(0.2)}
                {loadingTing(0.3)}
                {loadingTing(0.4)}

            </div> : <p>{data.text}</p>}
            

            
        </button>
     );
}

export default Button;