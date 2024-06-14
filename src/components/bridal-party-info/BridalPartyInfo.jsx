import React from "react";
import bestmanpic from "../images/compressed/bestman-stock.jpeg";
import bridesmaidpic from "../images/compressed/bridesmaid-stock.jpeg";
import dadstock from "../images/compressed/dad-stock.jpeg";
import momstock from "../images/compressed/mom-stock.jpeg";
import sisstock from "../images/compressed/sis-stock.jpeg";
import WhubBtn from "../btns/WhubBtn";
import LogoutBtn from "../btns/LogoutBtn";

const BridalPartyInfo = () => {
  return (
    <div className="h-auto pt-10 mt-10 text-center">
      <div className="mt-5 mb-2 text-center">
        <div className="inline-flex space-x-4">
          <WhubBtn />
          <LogoutBtn />
        </div>
        <div className="container w-full min-h-screen p-6 px-10 pt-5 mx-auto mt-10 bg-weddinggold/25 font-display">
          <h1 className="mt-5 mb-4 pb-4 text-4xl uppercase font-bold font-display text-center text-transparent   bg-gradient-to-r from-[#bfb48f]  to-[#904e55] bg-clip-text ">
            Get To Know <br></br>The Bridal Party & The Families
          </h1>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bestmanpic}
                alt="bestman pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Best Man</h2>
                <h3 className="font-bold text-weddingmaroon">Zach</h3>
                <h3 className="font-medium ">The Former Roommate</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>{" "}
                  <span className="text-sm text-weddingmaroon">
                    Out of Hamal's 12 roommates, I am one of the three he
                    actually got along with. Hamal was there when I first met my
                    wife, and he was the best man at my wedding.
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    {" "}
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="text-sm font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      My last name means baby seal in Irish
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold ">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      I almost met Conan O' Brien
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      I'm related to former US President Truman
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bestmanpic}
                alt="bestman pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Groomsman</h2>
                <h3 className="font-bold text-weddingmaroon">Nehal</h3>
                <h3 className="font-medium ">The Little Brother</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>{" "}
                  <span className="text-sm text-weddingmaroon">
                    I'm Hamal's younger brother. Growing up we used to fight a
                    lot, but I always knew I was his favorite sibling. (Don't
                    tell our sister).
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>

                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem ipsum dolor, sit
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bestmanpic}
                alt="bestman pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Groomsman</h2>
                <h3 className="font-bold text-weddingmaroon">Brian</h3>
                <h3 className="font-medium ">The Lorem Ipsum</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>{" "}
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>

                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem ipsum dolor, sit
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bestmanpic}
                alt="bestman pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Groomsman</h2>
                <h3 className="font-bold text-weddingmaroon">Kevin</h3>
                <h3 className="font-medium ">The Canadian Best Friend</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Hamal and I met through a mutual friend during the
                    Zoom/pandemic days. We were told we were very similar. I
                    didn't realize just how much so.
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>

                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      I prefer to have chickens as pets
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      My nationality changes based on how tanned I am.
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      I think my wife is jealous of my relationship with Hamal.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bridesmaidpic}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Maid of Honor</h2>
                <h3 className="font-bold text-weddingmaroon ">Nathasha</h3>
                <h3 className="font-medium ">The Sister</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bridesmaidpic}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Bridesmaid</h2>
                <h3 className="font-bold text-weddingmaroon ">Anita</h3>
                <h3 className="font-medium ">The Lorem Ipsum</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bridesmaidpic}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Bridesmaid</h2>
                <h3 className="font-bold text-weddingmaroon ">Amandine</h3>
                <h3 className="font-medium ">The Lorem Ipsum</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={bridesmaidpic}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Bridesmaid</h2>
                <h3 className="font-bold text-weddingmaroon ">Kirsty</h3>
                <h3 className="font-medium ">The Cousin Aunt</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={sisstock}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Grooms Sister</h2>
                <h3 className="font-bold text-weddingmaroon ">Nawal</h3>
                <h3 className="font-medium ">The Sister</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={momstock}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Grooms Sister</h2>
                <h3 className="font-bold text-weddingmaroon ">Shabina</h3>
                <h3 className="font-medium ">The Mom</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={momstock}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Grooms Sister</h2>
                <h3 className="font-bold text-weddingmaroon ">Sulochini</h3>
                <h3 className="font-medium ">The Mom</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={dadstock}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Grooms Sister</h2>
                <h3 className="font-bold text-weddingmaroon ">Alphious</h3>
                <h3 className="font-medium ">The Dad</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full m-6 overflow-hidden transition-transform rounded-lg shadow-md bg-weddingblack sm:w-52 hover:scale-110">
              <img
                src={dadstock}
                alt="bridesmaid pic"
                className="object-cover h-full "
              ></img>
              <div className="p-3 text-center transition-all duration-500 hover:rounded-t-lg text-weddingblack font-display bg-weddingwhite hover:bg-weddinggold hover:text-weddingmaroon">
                <h2 className="font-bold">Grooms Sister</h2>
                <h3 className="font-bold text-weddingmaroon ">Yohan</h3>
                <h3 className="font-medium ">The Dad</h3>
                <p>-</p>
                <p>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "{" "}
                  </span>
                  <span className="text-sm text-weddingmaroon">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque, magni nihil numquam cupiditate quis sint optio enim.
                    Quaerat aliquid explicabo possimus inventore, et aliquam
                    odio suscipit iste asperiores sed ut?
                  </span>
                  <span className="font-extrabold text-1xl text-weddingpurple">
                    "
                  </span>
                </p>
                <p className="pt-2 pb-2 text-sm">Three Fun Facts About Me:</p>
                <div className="text-left">
                  <p>
                    <span className="font-extrabold">1:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">2:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                  <p>
                    <span className="font-extrabold">3:</span>{" "}
                    <span className="text-sm font-light text-weddingpurple">
                      Lorem Lorem Lorem Lorem
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridalPartyInfo;
