import { React, useEffect } from 'react'
import cashapp from '../images/compressed/cashapp.png'
import zelle from '../images/compressed/zelle.png'
import venmo from '../images/compressed/venmo.png'
import ccard from '../images/compressed/ccard.png'
import westernunion from '../images/compressed/westernunion.png'
import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'
import state from '../../config/state'
import { useNavigate } from 'react-router-dom'

const Gifts = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (state.currentUser === null) {
      navigate('/')
    }
  })
  return (
    <div className="h-auto pt-10 mt-10 text-center">
      <div className="mt-10 mb-2 text-center">
        <div className="inline-flex space-x-4">
          <WhubBtn />
          <LogoutBtn />
        </div>
        <div className="container w-full min-h-screen p-6 px-10 pt-5 mx-auto mt-10 bg-weddinggold/25 font-display">
          <h1 className="mt-5 mb-4 pb-4 text-4xl uppercase font-normal font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text ">
            What gifts would we like?
          </h1>
          <p className="pt-5 mt-2 text-xl font-normal text-center">
            We're thrilled to celebrate our wedding with you! <br></br>
          </p>
          <p className="pt-4 pb-1 mb-1 text-xl font-normal text-center">
            Instead of a traditional gift, we would greatly appreciate your
            contributions towards our future together. <br></br>
            Your presence, whether in person or on Zoom, is a gift to us.
            However, if you would like to give a gift, here are some details.
            You can send money through CashApp, Venmo, or Zelle. We also accept
            Credit/Debit card payments. For our international friends,
            Credit/Debit card and Western Union are available options as well.
            You can also hand us a check or cash in person.<br></br>More details
            and direct links are provided below.
          </p>{' '}
          <div className="pt-4 pb-5 mb-5 text-xl font-normal text-center">
            We kindly ask that you{' '}
            <span className="italic font-extrabold ">do not</span> get us boxed
            gifts. Your understanding is truly appreciated. Thank you for being
            part of our journey! Your love and support mean everything to us.{' '}
            <br></br>
            <span className="pt-5">With love,</span>
            <p className="pt-5 text-3xl font-date">
              Ayesha <span className="pl-2 pr-2">&</span> Hamal
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-52 hover:scale-110">
              <img
                src={ccard}
                alt="credit and debit card gift"
                className="object-cover h-full "
              ></img>
              <div
                href="#"
                className="p-5 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite"
              >
                <span className="font-bold text-l">U.S & International</span>
                <br />
                <span className="text-xl font-bold text-weddingmaroon">
                  <p className="pt-2 pb-0 text-xs">Click Button:</p>
                  <button
                    className="relative inline-flex items-center justify-start px-3 py-2 mt-3 overflow-hidden font-bold border-2 rounded-full cursor-pointer group hover:bg-weddingblack hover:text-weddingwhite bg-weddinggold border-weddingmaroon-2"
                    type="button"
                  >
                    <a
                      href="https://www.zola.com/registry/hamalandayesha"
                      target="_blank"
                    >
                      Credit/Debit
                    </a>
                  </button>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-52 hover:scale-110">
              <img
                src={venmo}
                alt="credit and debit card gift"
                className="object-cover h-full "
              ></img>
              <div
                href="#"
                className="p-5 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite"
              >
                <span className="font-bold text-l">U.S Only</span>
                <br />
                <span className="text-xl font-bold text-weddingmaroon">
                  <p className="pt-2 pb-0 text-xs">Click Button:</p>
                  <button
                    className="relative inline-flex items-center justify-start px-3 py-2 mt-3 overflow-hidden font-bold border-2 rounded-full cursor-pointer group hover:bg-weddingblack hover:text-weddingwhite bg-weddinggold border-weddingmaroon-2"
                    type="button"
                  >
                    <a
                      href="https://venmo.com/?txn=pay&audience=public&recipients=@hamsam95&note=Wedding%20Gift"
                      target="_blank"
                    >
                      Venmo
                    </a>
                  </button>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-52 hover:scale-110">
              <img
                src={cashapp}
                alt="credit and debit card gift"
                className="object-cover h-full "
              ></img>
              <div
                href="#"
                className="p-5 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite"
              >
                <span className="font-bold text-l">U.S & U.K Only</span>
                <br />
                <span className="text-xl font-bold text-weddingmaroon">
                  <p className="pt-2 pb-0 text-xs ">Click Button:</p>
                  <button
                    className="relative inline-flex items-center justify-start px-3 py-2 mt-3 overflow-hidden font-bold border-2 rounded-full cursor-pointer group hover:bg-weddingblack hover:text-weddingwhite bg-weddinggold border-weddingmaroon-2"
                    type="button"
                  >
                    <a href="https://cash.app/$liwindow/" target="_blank">
                      Cash App
                    </a>
                  </button>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-52 hover:scale-110">
              <img
                src={zelle}
                alt="credit and debit card gift"
                className="object-cover h-full "
              ></img>
              <div
                href="#"
                className="p-5 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingwhite"
              >
                <span className="font-bold text-l">U.S Only</span>
                <br />
                <span className="text-xl font-bold text-weddingmaroon">
                  <p className="pt-2 pb-0 text-xs ">For Zelle Info:</p>
                  <br></br>
                  <div className="mb-3">Text Hamal</div>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-52 hover:scale-110">
              <img
                src={westernunion}
                alt="credit and debit card gift"
                className="object-cover h-full "
              ></img>
              <div
                href="#"
                className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingwhite"
              >
                <span className="font-bold text-l">International Only</span>
                <br />
                <span className="text-xl font-bold text-weddingmaroon">
                  <p className="text-xs ">For Western Union Info:</p>
                  <br></br>
                  <div className="mb-1">Text Hamal or Ayesha</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gifts
