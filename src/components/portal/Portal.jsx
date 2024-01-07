import React from "react";

const Portal = () => {
  return (
    <div className="h-screen Parent">
      <div className="container mx-auto px-10 py-10 mt-20">
        <div className="box-border rounded-lg bg-weddingmaroon px-10 py-10 ">
          <h1 className=" flex justify-center pb-5 text-weddinggold text-4xl">
            Welcome to Our Wedding Hub!
          </h1>
          <h2 className="text-center text-xl text-weddingwhite ">
            We are delighted that you have decided to join us!
          </h2>
          <br></br>
          <h2 className="text-center text-xl text-weddingwhite">
            Are You A Wedding Guest?
          </h2>{" "}
          <button className="flex items-center pb-10">
            Wedding Guest Login!
          </button>
          <h2 className=" flex justify-center text-xl text-weddingwhite">
            Are You Bridal Party?
          </h2>{" "}
          <button className="container">Bridal Party Login</button>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Portal;
