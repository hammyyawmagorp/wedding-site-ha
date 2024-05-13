import React from 'react'
import weddingtimeline from '../images/weddingtimeline.png'

const Itinerary = () => {
  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-center p-2 sm:px-12">
        <div className="h-screen ">
          <img
            src={weddingtimeline}
            alt="wedding itinerary"
            className="object-scale-down max-h-full m-auto rounded-md "
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Itinerary
