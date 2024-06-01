import React, { useState, useEffect } from 'react'
import supabase from '../../config/supabaseClient'
import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'
import state from '../../config/state'
import { useNavigate } from 'react-router-dom'

const RSVP = () => {
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

  const [name, setName] = useState('')
  const [attending, setAttending] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState(undefined)
  const [formSuccess, setFormSuccess] = useState(undefined)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setName('')
    setAttending('')
    setNumber('')
    setMessage('')

    // if (name && attending && number) {
    //   console.log(name)
    //   console.log(attending)
    //   setFormSuccess('Thanks for confirming!')
    // }
    const { error } = await supabase
      .from('weddingrsvp')
      .insert([{ name, attending, number, message }])
    if (error) {
      e.preventDefault
      console.log(error)
      setFormError('Uh-oh! There is an Error. Let Hamal know!')
    } else {
      e.preventDefault
      console.log(name)
      setFormSuccess('Thanks for confirming!')
      return
    }
  }
  return (
    <div className="h-auto text-center Parent">
      <div className="container px-10 py-10 mx-auto mt-20 font-display">
        <div className="inline-flex space-x-4">
          <WhubBtn />
          <LogoutBtn />
        </div>
        <div className="box-border flex flex-col items-center justify-center px-20 py-10 mt-5 rounded-lg bg-weddingmaroon ">
          <h1 className="flex justify-center pb-5 text-4xl font-medium text-weddinggold">
            Please let us know if you're coming
          </h1>
          <h2 className="text-xl text-center text-weddingwhite ">
            Deadline: July 31, 2024
          </h2>
          <br></br>
          <div className="text-sm font-bold">*Required</div>
          <br />
          <div>
            <form id="rsvpform" action="" onSubmit={handleSubmit}>
              <div className="font-bold text-center input-box text-weddinggold">
                <label>
                  *Name on Invitation: <br></br>
                  <input
                    className="mt-2 text-center text-black rounded-md focus:text-green-700"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mt-4 font-bold text-center input-box text-weddinggold">
                <label>
                  *Are You Able To Attend: <br></br>{' '}
                  <p className="text-sm text-weddingwhite ">
                    Type Yes or No Only
                  </p>
                  <input
                    className="mt-2 text-center text-black rounded-md focus:text-green-700"
                    type="text"
                    placeholder="Yes or No"
                    name="attending"
                    value={attending}
                    onChange={(e) => setAttending(e.target.value)}
                    maxLength={3}
                    required
                  />
                </label>
              </div>

              <div className="mt-4 mb-4 font-bold text-center text-weddinggold">
                <label>
                  *Number of Guests on Invitation: <br></br>
                  <input
                    className="mt-2 text-center text-black rounded-md focus:text-green-700"
                    type="number"
                    placeholder="Guest Count"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mt-4 mb-4 font-bold text-center password-box text-weddinggold">
                <label>
                  Anything Else We Should Know? <br></br>
                  <textarea
                    className="p-2 mt-2 text-sm text-left text-black rounded-md focus:text-weddingmaroon "
                    placeholder=""
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    cols={25}
                  />
                </label>
              </div>
              <label className="text-weddingwhite ">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-start px-5 py-3 mt-6 overflow-hidden font-bold rounded-full cursor-pointer animate-bounce animate-infinite animate-delay-100 animate-fill-both group"
                >
                  {' '}
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 opacity-100 bg-weddinggold group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out text-weddingwhite group-hover:text-gray-900">
                    Send!
                  </span>
                  <span className="absolute inset-0 border-2 rounded-full border-weddinggold"></span>
                </button>
                {formError && (
                  <>
                    <p className="text-xl font-bold text-center text-weddingwhite">
                      {formError}
                    </p>
                  </>
                )}
                {formSuccess && (
                  <>
                    <p className="text-xl font-bold text-center text-weddingwhite">
                      {formSuccess}
                    </p>
                  </>
                )}
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
