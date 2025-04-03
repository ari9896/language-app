import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HebrewVerb = ({ verb }) => {
  const [ hovered, setHovered ] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }
  
  return (
    <>
      <Link to={`/verb/${verb._id}`} >
        <div className='group bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg p-4 
          text-center outline outline-1 outline-gray-300 hover:outline-2 hover:outline-blue-500 transition-all'
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >

          <h2 className="text-xl font-semibold text-gray-800">
            {hovered  ? verb.hebrewInfinitive[1] : verb.hebrewInfinitive[0]}
          </h2>    

          <div>{verb.meaning}</div>
          <p></p>
        </div>
      </Link>
    </>    
  )
}

export default HebrewVerb