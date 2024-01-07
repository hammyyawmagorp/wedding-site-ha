import React from "react";
import ashcursiveheader from "../images/ashcursiveheader.png";
import hamalcursiveheader from "../images/hamalcursiveheader.png";
import brgrdanceumb from "../images/brgrdanceumb.png";

const Header = () => {
  return (
    <div className="header-main ">
      <div className="flex Parent justify-center items-center">
        <div className="basis-60  ">
          <img className="ash-cursive-logo" src={ashcursiveheader} />
        </div>
        <div className="basis-60">
          <img className="bride-groom-dance-umb-logo" src={brgrdanceumb} />
        </div>
        <div className="basis-60">
          <img className="hamal-cursive-logo " src={hamalcursiveheader} />
        </div>
      </div>
    </div>
  );
};

export default Header;
