import React from "react";

const WeddingHub = () => {
  return (
    <div className="h-auto text-center">
      <div className="container mx-auto px-5 py-10 mt-20">
        <div className="flex flex-col items-center justify-center box-border rounded-lg bg-weddingmaroon px-20 py-10 ">
          <h1 className=" flex justify-center pb-5 text-weddinggold text-4xl font-medium">
            You've Reached
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
          <p className="text-center text-base text-weddingwhite pt-5 mt-2 pb-1 mb-1">
            At "The Hub" you can send us a cash gift, RSVP, read our story, meet
            the bridal party, get travel help, view our pics and so much more!
          </p>
          <p className="text-center text-base text-weddingwhite pt-2 mt-2 pb-5 mb-5">
            Select a button below and lets get this party started!
          </p>
          <button
            type="submit"
            className="animate-bounce animate-infinite animate-delay-100 animate-fill-both mt-6 cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Launch Hub
            </span>
            <span className="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
          </button>
          <button className="text-left">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default WeddingHub;
