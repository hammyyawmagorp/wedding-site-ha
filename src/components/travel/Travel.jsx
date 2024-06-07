import React from 'react'
import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'

const Travel = () => {
  return (
    <div className="pt-10 mt-10 text-center">
      <div className="inline-flex pb-5 space-x-4 mp-5 ">
        <WhubBtn />
        <LogoutBtn />
      </div>
      <div className="border-4 rounded-md border-weddingmaroon">
        {/* Travel */}
        <iframe
          src="https://snazzymaps.com/embed/614613"
          width="100%"
          height="650px"
        ></iframe>
      </div>
    </div>
  )
}

export default Travel
