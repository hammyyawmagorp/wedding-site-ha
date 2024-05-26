import React from 'react'
import weddingtimeline from '../images/weddingtimeline.png'
// import { useNavigate } from 'react-router-dom'
import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'

const Itinerary = () => {
  return (
    <div className="h-auto pt-10 mt-10 text-center">
      <div className="mt-10 mb-2 text-center">
        <div className="inline-flex space-x-4">
          <WhubBtn />
          <LogoutBtn />
        </div>

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
      </div>
    </div>
  )
}

export default Itinerary
