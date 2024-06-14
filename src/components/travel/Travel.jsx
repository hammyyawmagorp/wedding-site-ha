import React from "react";
import WhubBtn from "../btns/WhubBtn";
import LogoutBtn from "../btns/LogoutBtn";

const Travel = () => {
  return (
    <div className="p-3 mt-10 text-center">
      <div className="inline-flex pb-5 space-x-4 mt-5 ">
        <WhubBtn />
        <LogoutBtn />
      </div>

      <div className="mt-5 pt-5">
        <h1 className="mt-5 mb-4 pb-4 text-4xl uppercase font-bold font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text ">
          Travel Info
        </h1>
        <div className="pr-5 pl-5 pb-5 font-display text-weddingpurple font-semibold">
          <p>
            Below is a list of recommended hotels and airports. There is also a
            custom map with important locations and airports highlighted. We
            hope these will help you plan your trip out!{" "}
          </p>
        </div>
        <div className="p-3 rounded-md">
          <div className="p-3">
            {/* Travel */}
            <iframe
              src="https://snazzymaps.com/embed/614613"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        </div>
        <h2 className="text-2xl font-bold font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text ">
          New York/New Jersey Area Airports:
        </h2>
        <div className="pr-5 pl-5 pt-5 pb-2 ">
          <h3 className="font-display text-weddingpurple font-bold uppercase underline">
            John F. Kennedy International Airport:
          </h3>{" "}
          <h3 className="text-weddingmaroon uppercase">Queens, New York</h3>{" "}
        </div>
        <div className="pb-5">
          <p className=" text-weddingblack">
            Distance From New York City CBD/Midtown:
          </p>{" "}
          <p className="pb-2 text-weddingmaroon">16 Miles | 26 KM</p>
          <p className=" text-weddingblack">
            Distance From Ceremony & Reception Hall:
          </p>{" "}
          <p className="text-weddingmaroon">36 Miles | 58 KM</p>
        </div>
        <div className="pr-5 pb-2 pl-5 pt-5 ">
          <h3 className="font-display text-weddingpurple font-bold uppercase underline">
            Newark Liberty International Airport:
          </h3>{" "}
          <h3 className="text-weddingmaroon uppercase">Newark, New Jersey</h3>{" "}
        </div>
        <div className="pb-5">
          <p className=" text-weddingblack">
            Distance From New York City CBD/Midtown:
          </p>{" "}
          <p className="pb-2 text-weddingmaroon"> 15 Miles | 24 KM</p>
          <p className=" text-weddingblack">
            Distance From Ceremony & Reception Hall:
          </p>{" "}
          <p className="text-weddingmaroon"> 24 Miles | 39 KM</p>
        </div>
        <div className="pr-5 pb-2 pl-5 pt-5  ">
          <h3 className="font-display text-weddingpurple font-bold uppercase underline">
            LaGuardia Airport:
          </h3>{" "}
          <h3 className="text-weddingmaroon uppercase">Queens, New York</h3>{" "}
        </div>
        <div className="pb-5">
          <p className=" text-weddingblack">
            Distance From New York City CBD/Midtown:
          </p>{" "}
          <p className="pb-2 text-weddingmaroon"> 10 Miles | 16 KM</p>
          <p className=" text-weddingblack">
            Distance From Ceremony & Reception Hall:
          </p>{" "}
          <p className="text-weddingmaroon"> 26 Miles | 42 KM</p>
        </div>
        <h2 className="text-2xl font-bold font-display text-center text-transparent pt-5 mt-5 bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text ">
          Hotels We Recommend:
        </h2>
        <div className="pr-5 pl-5 pt-5 pb-2 ">
          <h3 className="font-display text-weddingpurple font-bold uppercase underline">
            New Jersey Hotels:
          </h3>{" "}
          <h3 className="text-weddingmaroon uppercase pt-3">
            Comfort Suites Mahwah
          </h3>{" "}
          <h3 className="text-weddingmaroon">
            220 State Route 17 South, <br></br>Mahwah, NJ 07430
          </h3>{" "}
          <p className=" text-weddingblack font-bold">
            *Discounted Rate Available (Contact Hamal)
          </p>{" "}
        </div>
        <div className="pb-5">
          <p className=" text-weddingblack">
            Distance From New York City CBD/Midtown:
          </p>{" "}
          <p className="pb-2 text-weddingmaroon">30 Miles | 48 KM</p>
          <p className=" text-weddingblack">
            Distance From Ceremony & Reception Hall:
          </p>{" "}
          <p className="text-weddingmaroon">13 Miles | 21 KM</p>
          <p className="text-4xl">-</p>
          <h3 className="text-weddingmaroon uppercase pt-3">
            Hyatt Place Fair Lawn/Paramus
          </h3>{" "}
          <h3 className="text-weddingmaroon">
            41-01 Broadway 208 North, <br></br>Fair Lawn, NJ 07410
          </h3>{" "}
        </div>
        <div className="pb-5">
          <p className=" text-weddingblack">
            Distance From New York City CBD/Midtown:
          </p>{" "}
          <p className="pb-2 text-weddingmaroon">18 Miles | 29 KM</p>
          <p className=" text-weddingblack">
            Distance From Ceremony & Reception Hall:
          </p>{" "}
          <p className="text-weddingmaroon">7 Miles | 11 KM</p>
          <p className="text-4xl">-</p>
          <h3 className="text-weddingmaroon uppercase pt-3">
            FAIRFIELD INN at NEWARK AIRPORT
          </h3>{" "}
          <h3 className="text-weddingmaroon">
            618-50 US Highway 1 & Route 9 South, <br></br>Newark, NJ 07114
          </h3>{" "}
          <p className=" text-weddingblack font-bold">
            *Discounted Rate Available (Contact Hamal)
          </p>{" "}
        </div>
        <div className="pb-5">
          <p className=" text-weddingblack">
            Distance From New York City CBD/Midtown:
          </p>{" "}
          <p className="pb-2 text-weddingmaroon">15 Miles | 24 KM</p>
          <p className=" text-weddingblack">
            Distance From Ceremony & Reception Hall:
          </p>{" "}
          <p className="text-weddingmaroon">23 Miles | 37 KM</p>
        </div>
        <p className="text-4xl">-</p>
        <div className="pr-5 pl-5 pt-5 pb-2 ">
          <h3 className="font-display text-weddingpurple font-bold uppercase underline">
            New York Hotels:
          </h3>{" "}
          <h3 className="text-weddingmaroon uppercase pt-3">
            HAMPTON INN at LAGUARDIA AIRPORT
          </h3>{" "}
          <h3 className="text-weddingmaroon">
            102-40 Ditmars Boulevard, <br></br>East Elmhurst, NY 11369
          </h3>{" "}
          <p className=" text-weddingblack font-bold">
            *Discounted Rate Available (Contact Hamal)
          </p>{" "}
        </div>{" "}
        <div className="pb-5 mb-10">
          <p className=" text-weddingblack">
            Distance From New York City CBD/Midtown:
          </p>{" "}
          <p className="pb-2 text-weddingmaroon"> 11 Miles | 18 KM</p>
          <p className=" text-weddingblack">
            Distance From Ceremony & Reception Hall:
          </p>{" "}
          <p className="text-weddingmaroon"> 27 Miles | 43 KM</p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
