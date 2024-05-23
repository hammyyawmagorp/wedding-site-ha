import React from 'react'
import giftenvelope from '../images/giftenvelope.jpg'
import rsvpimage from '../images/rsvpimage.jpg'
import bparty from '../images/bparty.jpg'
import lovestory from '../images/lovestory.jpg'
import weddingdj from '../images/weddingdj.jpg'
import plane from '../images/plane.jpg'
import ourpic from '../images/ourpic.jpeg'
import itinerary from '../images/itinerary.jpg'
import Clock from '../clock/Clock'
import BridalPartyInfo from '../bridal-party-info/BridalPartyInfo'
import { useNavigate } from 'react-router-dom'

const TheHub = () => {
  const navigate = useNavigate()
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
  return (
    <div className="container px-10 pt-10 mx-auto mt-20 ">
      <h1 className="mb-4 text-center text-transparent text-7xl font-date  bg-gradient-to-r from-[#904e55] to-[#bfb48f] bg-clip-text">
        Our Wedding Hub
      </h1>
      <div className="w-full min-h-screen p-6 bg-weddinggold/25">
        <h2 className="mt-5 mb-3 text-3xl font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text">
          Let The Countdown Begin
        </h2>
        <br></br>
        <Clock />
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
            <img
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
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
            <img
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
                *Deadline: July 14*
              </span>
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
            <img
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
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
            <img
              src={weddingdj}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
            >
              Recommend a <br></br>Song
            </button>
          </div>
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
              Our Story <br></br> -Jab we met-
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
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
            <img
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
        </div>
      </div>
    </div>
  )
}

export default TheHub
