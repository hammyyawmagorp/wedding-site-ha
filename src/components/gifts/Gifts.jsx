import React from 'react'
import Clock from '../clock/Clock'
import GiftsCards from '../gifts/GiftsCards'
import giftenvelope from '../images/giftenvelope.jpg'
import cashapp from '../images/cashapp.png'
import zelle from '../images/zelle.png'
import venmo from '../images/venmo.png'
import paypal from '../images/paypal.png'

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
        CashApp, Venmo, PayPal, or Zelle. You can also mail us a check or hand
        us cash in person. All details are provided below.
      </p>{' '}
      <p className="pt-4 pb-5 mb-5 text-xl font-semibold text-center">
        Please note that we kindly ask you not to get us boxed gifts. Your
        understanding is truly appreciated. Thank you for being part of our
        journey! Your love and support mean everything to us. <br></br>With
        love, <br></br>
        <div className="mt-2">
          <span className="text-3xl font-date">
            Ayesha <span className="pl-2 pr-2">&</span> Hamal
          </span>
        </div>
      </p>
      <p className="pb-5 mb-5 font-semibold text-center text-l">
        Hamein bahut khushi hai ke aap hamari shaadi me shamil honge! <br></br>
        Agar aap hame koi tohfa dena chahte hain to aap hame pese daan kar sakte
        hain take ham aage jaakar isse apni shaadi shuda zindagi ko shuru karne
        me istemal kar sakein. Aap hame CashApp, Venmo, PayPal ya Zelle kar
        sakte hain. Is ke saath saath aap hamein Check bhej sakte hain ya cash
        bhi de sakte hain. Ham bahut khush hain ke aap hamare is naye safar ko
        shuru karne mein hamare saath honge. Ham aap ke pyaar ko kabhi nahi
        bhulenge! <br></br>
        Pyaar ke saath, Ayesha aur Hamal
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-[#00D632] sm:w-52 hover:scale-110">
          <img
            src={cashapp}
            alt="gift card"
            className="object-cover h-full "
          ></img>
          <div className="p-5 text-center uppercase transition-all duration-500 border-solid hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddingblack hover:text-weddingwhite">
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
            className="p-5 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingblack hover:text-weddingwhite"
          >
            <span className="text-sm font-bold">*Recommended</span>
            <br />
            <span className="underline">Zelle:</span> <br></br>
            <span className="text-xl font-bold lowercase text-weddingmaroon">
              516-348-3414
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingwhite sm:w-52 hover:scale-110">
          <img
            src={venmo}
            alt="gift card"
            className="object-cover h-full "
          ></img>
          <div
            href="#"
            className="p-3 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingblack hover:text-weddingwhite"
          >
            <span className="text-sm font-bold">*Recommended</span>
            <br></br>
            <span className="underline">Venmo:</span> <br />
            <span className="text-xl font-bold lowercase text-weddingmaroon">
              @HamSam95
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-[#00457C] sm:w-52 hover:scale-110">
          <img
            src={paypal}
            alt="gift card"
            className="object-cover h-full "
          ></img>
          <div
            href="#"
            className="p-5 text-center uppercase transition-all duration-500 text-weddingblack font-display bg-weddingwhite hover:bg-weddingblack hover:text-weddingwhite "
          >
            <span className="text-sm font-bold">*May Charge a fee</span>
            <br></br>
            <span className="underline">PayPal:</span> <br />
            <span className="text-xl font-bold lowercase text-weddingmaroon">
              @HamSam95
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gifts
