import React from 'react'
import { useNavigate } from 'react-router-dom'
import state from '../../config/state'

function LogoutBtn() {
  const navigate = useNavigate()

  function logout() {
    state.logout()
    navigate('/')
  }
  return (
    <div>
      <div className="text-center">
        {' '}
        <button
          onClick={logout}
          type="submit"
          className="relative inline-flex items-center justify-start px-3 py-1 mt-6 overflow-hidden font-light uppercase rounded-full cursor-pointer group"
        >
          {' '}
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 opacity-100 bg-weddingpurple group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out text-weddingblack group-hover:text-weddingwhite">
            Logout
          </span>
          <span className="absolute inset-0 border-2 rounded-full border-weddingpurple"></span>
        </button>
      </div>
    </div>
  )
}

export default LogoutBtn
