import React from 'react'
import giftenvelope from '../images/giftenvelope.jpg'

const GiftsCards = () => {
  return (
    <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
      <img
        src={giftenvelope}
        alt="gift card"
        className="object-cover h-full "
      ></img>
      <button
        onClick={launchGifts}
        type="button"
        className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingmaroon hover:text-weddingwhite "
      >
        Give us <br></br>a Gift
      </button>
    </div>
  )
}

export default GiftsCards
