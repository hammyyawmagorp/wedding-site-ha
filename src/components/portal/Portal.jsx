import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Portal = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  function loginLaunch(e) {
    if (formData.username === '' || formData.password === '') {
      e.preventDefault()
    } else if (
      formData.username === 'hamasha2024' &&
      formData.password === 'oz2us'
    ) {
      navigate('/whubintro')
    } else if (
      formData.username === 'bp24' &&
      formData.password === 'bp24admin'
    ) {
      alert('Welcome bridal party person!')
    } else {
      alert('Incorrect username/password combo')
      e.preventDefault()
    }
  }

  return (
    <div className="h-auto text-center Parent">
      <div className="container px-10 py-10 mx-auto mt-20 font-display">
        <div className="box-border flex flex-col items-center justify-center px-20 py-10 rounded-lg bg-weddingmaroon ">
          <h1 className="flex justify-center pb-5 text-4xl font-medium text-weddinggold">
            Welcome!
          </h1>
          <h2 className="text-xl text-center text-weddingwhite ">
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
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal
