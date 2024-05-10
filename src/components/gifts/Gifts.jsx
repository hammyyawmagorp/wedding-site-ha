import React from 'react'
import cashapp from '../images/cashapp.png'
import zelle from '../images/zelle.png'
import venmo from '../images/venmo.png'
import checkbook from '../images/checkbook.png'

const Gifts = () => {
  return (
    <div className="container w-full min-h-screen p-6 px-10 pt-10 mx-auto mt-20 bg-weddinggold/25 font-display">
      <h1 className="mt-5 mb-4 pb-4 text-4xl uppercase font-bold font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text ">
        What gifts would we like?
      </h1>
      <p className="text-xl font-semibold text-center">
        We're thrilled to celebrate our wedding with you! <br></br>
      </p>
      <p className="pt-4 pb-1 mb-1 text-xl font-semibold text-center">
        Instead of a traditional gift, we would appreciate your contributions
        towards our future together. <br></br>You can send money through
        CashApp, Venmo, or Zelle. You can also mail us a check or hand us cash
        in person. All details are provided below.
      </p>{' '}
      <p className="pt-4 pb-5 mb-5 text-xl font-semibold text-center">
        We kindly ask that you{' '}
        <span className="italic font-bold underline">DO NOT</span> get us boxed
        gifts. Your understanding is truly appreciated. Thank you for being part
        of our journey! Your love and support mean everything to us. <br></br>
        With love, <br></br>
        <span className="mt-2">
          <span className="text-3xl font-date">
            Ayesha <span className="pl-2 pr-2">&</span> Hamal
          </span>
        </span>
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-[#00D632] sm:w-52 hover:scale-110">
          <img
            src={cashapp}
            alt="gift card"
            className="object-cover h-full "
          ></img>
          <div className="p-5 text-center uppercase transition-all duration-500 border-solid hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-[#00D632] ">
            <span className="text-sm font-bold">*Recommended</span>
            <br />
            <span className="underline">Cashapp:</span> <br></br>
            <span className="text-xl font-bold lowercase text-weddingmaroon">
              $liwindow
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-[#671CCA] sm:w-52 hover:scale-110">
          <img
            src={zelle}
            alt="gift card"
            className="object-cover h-full "
          ></img>
          <div
            href="#"
            className="p-5 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingblack hover:text-weddingwhite"
          >
            <span className="text-sm font-bold">*Recommended</span>
            <br />
            <span className="underline">Zelle:</span> <br></br>
            <span className="text-xl font-bold lowercase text-weddingmaroon">
              516-348-3414
            </span>
          </div>
        </div>
        {/* <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-008CFF sm:w-52 hover:scale-110">
          <img
            src={venmo}
            alt="gift card"
            className="object-cover h-full "
          ></img>
          <div
            href="#"
            className="p-5 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingblack hover:text-weddingwhite"
          >
            <br></br>
            <span className="underline">Venmo:</span> <br />
            <span className="text-xl font-bold lowercase text-weddingmaroon">
              @HamSam95
            </span>
          </div>
        </div> */}

        <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
          <img
            src={checkbook}
            alt="gift card"
            className="object-cover h-full "
          ></img>
          <div
            href="#"
            className="p-5 text-center uppercase transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingblack hover:text-weddingwhite "
          >
            <span className="text-sm font-bold">Check</span>
            <br></br>
            <span className="">Payable to:</span> <br />
            <span className="text-xl font-bold text-weddingmaroon">
              Hamal Samuel 35 Meeting LN, <br />
              Hicksville, NY
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gifts
