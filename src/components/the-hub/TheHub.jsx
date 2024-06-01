import React, { useEffect } from 'react'
import giftenvelope from '../images/compressed/giftenvelope.jpg'
import rsvpimage from '../images/compressed/rsvpimage.jpeg'
import bparty from '../images/compressed/bparty.jpg'
import lovestory from '../images/compressed/lovestory.jpg'
import weddingdj from '../images/compressed/weddingdj.jpg'
import plane from '../images/compressed/plane.jpg'
import ourpic from '../images/compressed/ourpic.jpeg'
import itinerary from '../images/compressed/itinerary.jpg'
import Clock from '../clock/Clock'
import BridalPartyInfo from '../bridal-party-info/BridalPartyInfo'
import LogoutBtn from '../btns/LogoutBtn'
import { useNavigate } from 'react-router-dom'
import state from '../../config/state'

const TheHub = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (state.currentUser === null) {
      navigate('/')
    }
  })

  const isVisible =
    state.currentUser === import.meta.env.VITE_MAIN_USER ||
    state.currentUser === import.meta.env.VITE_SECOND_USER

  function launchGifts() {
    navigate('/gifts')
  }
  function launchItinerary() {
    navigate('/itinerary')
  }
  function launchBridalPartyInfo() {
    navigate('/bridalparty')
  }
  function launchRSVP() {
    navigate('/rsvp')
  }
  function launchSongs() {
    navigate('/songs')
  }
  function logout() {
    state.logout()
    navigate('/')
  }
  return (
    <div>
      <div className="flex justify-center pb-2 mt-20 pt-15">
        <LogoutBtn />
      </div>

      <h1 className="mb-2 mt-10 pt-10 text-center text-transparent text-7xl font-date  bg-gradient-to-r from-[#904e55] to-[#bfb48f] bg-clip-text">
        Our Wedding Hub
      </h1>

      <div className="container px-10 pt-6 mx-auto mt-15">
        <div className="w-full min-h-screen p-6 bg-weddinggold/25">
          <h2 className="mt-5 mb-3 text-3xl font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text">
            Let The Countdown Begin
          </h2>
          <br></br>
          <Clock />
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                onClick={launchGifts}
                src={giftenvelope}
                alt="gift card"
                className="object-cover h-full "
              ></img>
              <button
                onClick={launchGifts}
                type="button"
                className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite"
              >
                Give us <br></br>a Gift
              </button>
            </div>
            {isVisible && (
              <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
                <img
                  onClick={launchRSVP}
                  src={rsvpimage}
                  alt="gift card"
                  className="object-cover h-full "
                ></img>
                <button
                  onClick={launchRSVP}
                  type="button"
                  className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
                >
                  RSVP<br></br>
                  <span className="font-extrabold underline">
                    *Deadline: July 31*
                  </span>
                </button>
              </div>
            )}
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                onClick={launchBridalPartyInfo}
                src={bparty}
                alt="gift card"
                className="object-cover h-full "
              ></img>
              <button
                onClick={launchBridalPartyInfo}
                className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite"
              >
                Meet the Bridal Party & The Families
              </button>
            </div>
            {isVisible && (
              <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
                <img
                  onClick={launchSongs}
                  src={weddingdj}
                  alt="gift card"
                  className="object-cover h-full "
                ></img>
                <button
                  onClick={launchSongs}
                  href="#"
                  className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
                >
                  Recommend a <br></br>Song
                </button>
              </div>
            )}
            {isVisible && (
              <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
                <img
                  src={plane}
                  alt="gift card"
                  className="object-cover h-full "
                ></img>
                <button
                  href="#"
                  className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite"
                >
                  Travel <br></br> Help
                </button>
              </div>
            )}
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={lovestory}
                alt="gift card"
                className="object-cover h-full "
              ></img>
              <button
                href="#"
                className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
              >
                Our <br /> Story
              </button>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={ourpic}
                alt="gift card"
                className="object-cover h-full "
              ></img>
              <button
                href="#"
                className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
              >
                Engagement <br></br>Photos
              </button>
            </div>
            {isVisible && (
              <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
                <img
                  onClick={launchItinerary}
                  src={itinerary}
                  alt="gift card"
                  className="object-cover h-full "
                ></img>
                <button
                  onClick={launchItinerary}
                  type="button"
                  className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
                >
                  Wedding Day <br></br> Itinerary
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheHub
