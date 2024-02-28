import React from "react";

const WeddingHub = () => {
  return (
    <div className="h-auto text-center">
      <div className="container mx-auto px-5 py-10 mt-20">
        <div className="flex flex-col items-center justify-center box-border rounded-lg bg-weddingmaroon px-20 py-10 ">
          <h1 className=" flex justify-center pb-5 text-weddinggold text-4xl font-medium">
            You've Joined
          </h1>
          <h1 className=" flex justify-center pb-5 text-weddinggold text-6xl font-medium">
            The Wedding Hub
          </h1>

          <p className=" text-base text-weddingwhite pt-5 mt-5 pb-2 mb-2 ">
            We call it "The Hub" – your one-stop for all things wedding-related!
            Here, you'll find everything you need to know about our big day and
            stay updated on all the exciting details. Consider "The Hub" your
            central station for staying informed and connected, as we journey
            toward our wedding day together.
          </p>

          <p className="text-center text-base text-weddingwhite pt-5 mt-2 pb-5 mb-5">
            At "The Hub" you can send us a cash gift, RSVP, read our story, meet
            the bridal party, get travel help, view our pics and so much more!
            <p className="text-center text-base text-weddingwhite pt-2 mt-2 pb-5 mb-5">
              🎉 Select a button below and lets get this party started! 🎉
            </p>
          </p>
          <div className="grid grid-cols-2 gap-8 p-0 m-0 ">
            <div>
              {/* <h2 className="pb-2 text-weddinggold">Get Us A Gift:</h2> */}
              {/* <button className="h-50 w-50 m-2 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Gifts
              </button> */}
              <div className="size-16 cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Gifts
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-3.5  text-weddinggold">
                RSVP By{" "}
                <span className="underline underline-offset-2 font-bold">
                  {" "}
                  June 30th:
                </span>
              </h2> */}
              {/* <button className="h-50 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                RSVP
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  RSVP
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-2 text-weddinggold">Song Suggestions?</h2> */}
              {/* <button className="h-50 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Song
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Suggest a Song
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-2 text-weddinggold">Travel Help/Info:</h2>{" "} */}
              {/* <button className="h-50 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Travel Help
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Travel Help
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-2 text-weddinggold">Meet The Bridal Party:</h2>{" "} */}
              {/* <button className="h-50 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Bridal Party
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Bridal Party
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-2 text-weddinggold">Wedding Itinerary:</h2>{" "} */}
              {/* <button className=" h-50 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Wedding Itinerary
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Wedding Schedule
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-2 text-weddinggold">How'd We Meet?</h2>{" "} */}
              {/* <button className="h-50 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Our Story
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Our Story
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-2 text-weddinggold">Engagmenet Pics:</h2>{" "} */}
              {/* <button className="h-10 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Engagement Pics
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Our Pics
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
            <div>
              {/* <h2 className="pb-2 text-weddinggold">FAQs</h2>{" "} */}
              {/* <button className="h-50 w-50 text-center text-weddingwhite bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500">
                Questions?
              </button> */}
              <div className=" cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
                {" "}
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-center text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Questions?
                </span>
                <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingHub;
