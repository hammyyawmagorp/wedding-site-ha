import { React, useEffect } from 'react'

import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'
import state from '../../config/state'
import { useNavigate } from 'react-router-dom'

const ZoomInfo = () => {
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
        <div className="container w-full p-6 px-10 pt-5 mx-auto mt-10 bg-weddinggold/25 font-display">
          <h1 className="mt-10 mb-4 pb-4 text-4xl uppercase font-normal font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text ">
            Join Us On Zoom!
          </h1>
          <h2 className="pb-4 mt-5 mb-4 text-2xl font-normal text-center text-transparent font-display text-weddingpurple ">
            Below are the zoom details along with some reminders.
          </h2>
          <div className="pb-4 pl-10 pr-10 mt-5 mb-4 font-bold text-left text-transparent text-l font-display text-weddingblack">
            <ol>
              <li className="pb-3">
                1. Please make sure you have your name correctly set. Users with
                names such as 'iPhone', 'iPad', '123456', etc, will not be
                admitted into the meeting.{' '}
              </li>
              <li className="pb-3">2. Please keep your microphone muted. </li>
              <li className="pb-3">
                3. If you have any questions during the meeting, please send a
                message in the Zoom chat.{' '}
              </li>
              <li className="pb-3">
                4. If you are having trouble joining the meeting please send an
                sms to: +1 516-939-8025. If you are international and can only
                use Whatsapp, please message Hamal's Number.{' '}
              </li>
            </ol>
          </div>
          <h3 className="pb-1 mt-5 mb-1 text-2xl font-normal text-center text-transparent font-display text-weddingpurple ">
            Zoom ID:
          </h3>
          <p className="pt-0 pb-2 text-xl font-bold text-center">
            852 1355 1168
          </p>
          <h3 className="pb-1 mt-5 mb-1 text-2xl font-normal text-center text-transparent font-display text-weddingpurple ">
            Password:
          </h3>
          <p className="pt-0 pb-4 text-xl font-bold text-center">hamandash</p>
        </div>
      </div>
    </div>
  )
}

export default ZoomInfo
