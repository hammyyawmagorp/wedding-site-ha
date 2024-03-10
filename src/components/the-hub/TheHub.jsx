import React from 'react'
// import HubCards from '../cards/HubCards'
import giftenvelope from '../images/giftenvelope.jpg'
import rsvpimage from '../images/rsvpimage.jpg'
import bparty from '../images/bparty.jpg'
import lovestory from '../images/lovestory.jpg'
import weddingdj from '../images/weddingdj.jpg'
import plane from '../images/plane.jpg'
import ourpic from '../images/ourpic.jpeg'
import itinerary from '../images/itinerary.jpg'
import Clock from '../clock/Clock'

const TheHub = () => {
  return (
    <div className="container px-10 pt-10 mx-auto mt-20 ">
      <h1 className="mb-4 text-center text-transparent text-7xl font-date  bg-gradient-to-r from-[#904e55] to-[#bfb48f] bg-clip-text">
        The Hub
      </h1>
      <div className="w-full min-h-screen p-6 bg-weddinggold/25">
        <h2 className="mt-5 mb-3 text-3xl font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text">
          Let The Countdown Begin
        </h2>

        <h2 className="mt-5 mb-3 text-4xl font-date font-bold text-center text-transparent bg-gradient-to-r from-[#564e58] to-[#904e55] bg-clip-text ">
          ~ Sunday, 8 <span className="text-lg align-text-top">th</span>{' '}
          <span className="pr-2 text-2xl">of</span>
          <span> September</span> ~<br></br>
          <div className="pt-2 mt-2 text-3xl text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text">
            09 <span className="text-2xl align-text-center">•</span> 08{' '}
            <span className="text-2xl align-text-center">•</span> 24
          </div>
        </h2>
        <br></br>
        <Clock />

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={giftenvelope}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
            >
              Give us <br></br>a Gift
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={rsvpimage}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
            >
              RSVP<br></br>
              <span className="font-extrabold underline">
                *Deadline: July 1, 2024*
              </span>
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={bparty}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite"
            >
              Meet the <br></br>Bridal Party
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={weddingdj}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
            >
              Recommend a <br></br>Song
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={plane}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite"
            >
              Travel <br></br> Help
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={lovestory}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
            >
              Our Story <br></br> -Jab we met-
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={ourpic}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
            >
              Engagement <br></br>Photos
            </button>
          </div>
          <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
            <img
              src={itinerary}
              alt="gift card"
              className="object-cover h-full "
            ></img>
            <button
              href="#"
              className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
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
