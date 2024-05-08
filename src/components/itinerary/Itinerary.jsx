import React from 'react'
import weddingtimeline from '../images/weddingtimeline.png'

const Itinerary = () => {
  return (
    <div className="flex items-center justify-center h-screen p-2 sm:px-12">
      <img
        src={weddingtimeline}
        alt="wedding itinerary"
        className="object-scale-down max-h-full m-auto rounded-md "
      ></img>
    </div>
  )
}

export default Itinerary
