import React from 'react'
import ashcursiveheader from '../images/compressed/ashcursiveheader.png'
import hamalcursiveheader from '../images/compressed/hamalcursiveheader.png'
import brgrdanceumb from '../images/compressed/brgrdanceumb.png'

const Header = () => {
  return (
    <section className="bg-my-image">
      <div className="header-main">
        <div className="flex items-center justify-center ">
          <div className="basis-60 ">
            <img className="ash-cursive-logo" src={ashcursiveheader} />
          </div>

          <div className="basis-60 hover:animate-wiggle active:animate-ease-out ">
            <img className="bride-groom-dance-umb-logo" src={brgrdanceumb} />
          </div>

          <div className="bg-fixed bg-center bg-no-repeat bg-cover bg-hero"></div>
          <div className="basis-60">
            <img className="hamal-cursive-logo " src={hamalcursiveheader} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
