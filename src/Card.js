import React from 'react'

function Card({id,name,src, link}) {
    
  
  return (
    <div key={id} className='Card'>
      
      <img src={src}/>
      <h2>{name}</h2>
      <p>{link}</p> 
    </div>
  )
}

export default Card