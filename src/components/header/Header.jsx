import React from "react";
import ashcursiveheader from "../images/ashcursiveheader.png";
import hamalcursiveheader from "../images/hamalcursiveheader.png";
import brgrdanceumb from "../images/brgrdanceumb.png";
import confetti from "../images/confetti.png";

const Header = () => {
  return (
    <section className="bg-my-image">
      <div className="header-main">
        <div className="flex justify-center items-center ">
          <div className="basis-60 ">
            <img className="ash-cursive-logo" src={ashcursiveheader} />
          </div>
          <div className="basis-60 hover:animate-wiggle active:animate-ease-out ">
            <img className="bride-groom-dance-umb-logo" src={brgrdanceumb} />
          </div>
          <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed"></div>
          <div className="basis-60">
            <img className="hamal-cursive-logo " src={hamalcursiveheader} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
