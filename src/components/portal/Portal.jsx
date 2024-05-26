import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseClient'
import state from '../../config/state'

const Portal = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const [formError, setFormError] = useState(null)
  // const uname = useRef('')
  // const pword = useRef('')

  const navigate = useNavigate()

  async function loginLaunch(e) {
    e.preventDefault()
    const { data, error } = await supabase
      .from('login')
      .select('*')
      .eq('username', formData.username)
      .eq('password', formData.password)

    if (data.length === 0) {
      setFormError('Incorrect Username/Password. Please Try Again.')
      return
    } else {
      state.setCurrentUser(data[0].username)
      navigate('/whub')
    }
  }

  return (
    <div className="h-auto text-center Parent">
      <div className="container px-10 py-10 mx-auto mt-20 font-display">
        <div className="box-border flex flex-col items-center justify-center px-20 py-10 rounded-lg bg-weddingmaroon ">
          <h1 className="flex justify-center pb-3 text-4xl font-medium uppercase text-weddinggold">
            Welcome
          </h1>
          <p className="pt-2 pb-2 mt-2 mb-2 text-normal text-weddingwhite">
            Our Wedding Hub is your one-stop for all things wedding related.
            Here, you'll find everything you need to know about our big day and
            stay updated on all the exciting details. Consider "Our Wedding Hub"
            your central station for staying informed and connected, as we
            journey toward our wedding day together.
          </p>
          <h2 className="text-center text-normal text-weddingwhite ">
            We are delighted that you have decided to join us!
          </h2>
          <h2 className="mt-5">Please login</h2>
          <p className="mt-2">*All Fields Required</p>
          <div>
            <form action="" onSubmit={loginLaunch}>
              <div className="mt-4 text-center input-box text-weddinggold">
                <label>
                  Username: <br></br>
                  <input
                    className="mt-2 text-center text-black rounded-md"
                    type="text"
                    placeholder="Username"
                    required
                    value={formData.username}
                    onChange={(e) => {
                      setFormData({
                        username: e.target.value,
                        password: formData.password,
                      })
                    }}
                  />
                </label>
              </div>
              <div className="mt-4 mb-4 text-center password-box text-weddinggold">
                <label>
                  Password: <br></br>
                  <input
                    className="mt-2 text-center text-black rounded-md"
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({
                        username: formData.username,
                        password: e.target.value,
                      })
                    }}
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
                    Lets Party!
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
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal
