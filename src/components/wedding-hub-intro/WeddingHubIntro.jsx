import React from 'react'
import { useNavigate } from 'react-router-dom'

const WeddingHubIntro = () => {
  const navigate = useNavigate()
  function launchHub() {
    navigate('/whub')
  }
  return (
    <div className="h-auto text-center">
      <div className="container px-5 py-10 mx-auto mt-20">
        <div className="box-border flex flex-col items-center justify-center px-20 py-10 rounded-lg bg-weddingmaroon ">
          <h1 className="flex justify-center pb-5 text-4xl font-medium text-weddinggold">
            You've Reached
          </h1>
          <h1 className="flex justify-center pb-5 text-6xl font-medium font-date text-weddinggold">
            The Hub
          </h1>
          <p className="pt-5 pb-2 mt-5 mb-2 text-base text-weddingwhite">
            We call it "The Hub" – your one-stop for all things wedding-related!
            Here, you'll find everything you need to know about our big day and
            stay updated on all the exciting details. Consider "The Hub" your
            central station for staying informed and connected, as we journey
            toward our wedding day together.
          </p>
          <p className="pt-5 pb-1 mt-2 mb-1 text-base text-center text-weddingwhite">
            At "The Hub" you can send us a cash gift, RSVP, read our story, meet
            the bridal party, get travel help, view our pics and so much more!
          </p>
          <p className="pt-2 pb-2 mt-2 mb-2 text-base text-center text-weddingwhite">
            Get ready to launch...
          </p>
          <button
            onClick={launchHub}
            type="button"
            className="relative inline-flex items-center justify-start px-5 py-3 mt-6 overflow-hidden font-bold rounded-full cursor-pointer animate-bounce animate-infinite animate-delay-100 animate-fill-both group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 opacity-100 bg-weddinggold group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out text-weddingwhite group-hover:text-gray-900">
              Launch Hub
            </span>
            <span className="absolute inset-0 border-2 rounded-full border-weddinggold"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WeddingHubIntro
