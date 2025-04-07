import React from 'react'

function FAQ({data,onToggle,isActive}) {

    const{question,answer} = data;

  return (
    <li>
    <div className='accordion-grid'>
        <p>{question}</p>
        <button className={isActive ? "active-btn" : ""} onClick={onToggle}>{isActive ? 'Close' : 'Show'}</button>
    </div>
    <p>{isActive && answer}</p>
</li>
  )
}

export default FAQ
