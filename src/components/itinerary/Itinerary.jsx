import React, { useState, useEffect } from 'react'
import weddingtimeline from '../images/compressed/weddingtimeline.png'
import { useNavigate } from 'react-router-dom'
import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'
import state from '../../config/state'

const Itinerary = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (
      state.currentUser === null ||
      state.currentUser === import.meta.env.VITE_NOACCESS_USER
    ) {
      navigate('/')
    } else if (state.currentUser === import.meta.env.VITE_MAIN_USER) {
      return
    } else if (state.currentUser === import.meta.env.VITE_SECOND_USER) {
      return
    }
  })
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
