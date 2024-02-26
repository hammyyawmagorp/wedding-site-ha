import React, { useState } from "react";

const Portal = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function doSomething(e) {
    if (formData.username === "" || formData.password === "") {
      alert("Boooo! You stink! Loser! Type something!");
      e.preventDefault();
    } else if (
      formData.username === "hamasha2024" &&
      formData.password === "oz2us"
    ) {
      alert("Success! Welcome guest!");
    } else if (
      formData.username === "bp24" &&
      formData.password === "bp24admin"
    ) {
      alert("Welcome bridal party person!");
    } else {
      alert("Incorrect username/password combo, ya doofus.");
      e.preventDefault();
    }
  }

  return (
    <div className="h-screen Parent text-center">
      <div className="container mx-auto px-10 py-10 mt-20">
        <div className="flex flex-col items-center justify-center box-border rounded-lg bg-weddingmaroon px-10 py-10 ">
          <h1 className=" flex justify-center pb-5 text-weddinggold text-4xl font-medium">
            Welcome to Our Wedding Hub!
          </h1>
          <h2 className="text-center text-xl text-weddingwhite ">
            We are delighted that you have decided to join us!
          </h2>
          <h2 className="mt-5">Please login</h2>
          <p className="mt-2">*All Fields Required</p>
          <div>
            <form action="" onSubmit={doSomething}>
              <div className="input-box mt-4 text-center text-weddinggold">
                <label>
                  Username: <br></br>
                  <input
                    className="mt-2 rounded-md text-center text-black"
                    type="text"
                    placeholder="Username"
                    required
                    value={formData.username}
                    onChange={(e) => {
                      setFormData({
                        username: e.target.value,
                        password: formData.password,
                      });
                    }}
                  />
                </label>
              </div>
              <div className="password-box mt-4 text-center text-weddinggold">
                <label>
                  Password: <br></br>
                  <input
                    className="mt-2 rounded-md text-center text-black"
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({
                        username: formData.username,
                        password: e.target.value,
                      });
                    }}
                  />
                </label>
              </div>
              <label className="text-weddingwhite ">
                <button
                  type="submit"
                  className="text-center mt-6 bg-transparent font-semibold border-2 border-weddingblack hover:text-weddinggold py-1 px-3 hover:border-weddinggold rounded ease-in-out duration-500"
                >
                  Lets Party!
                </button>
              </label>
            </form>
          </div>
          {/* <h1 className=" flex justify-center pb-5 text-weddinggold text-4xl">
            Welcome to Our Wedding Hub!
          </h1>
          <h2 className="text-center text-xl text-weddingwhite ">
            We are delighted that you have decided to join us! Please select
            from one of the options below.
          </h2>
          <br></br>
          <h2 className="text-center text-xl text-weddingwhite pb-5">
            Are You A Wedding Guest?
          </h2>{" "}
          <button className="bg-transparent hover:bg-weddinggold-500 text-weddinggold-700 font-semibold hover:text-weddinggold py-2 px-4 border border-weddinggold-500 hover:border-transparent rounded mb-10">
            Wedding Guest Login
          </button>
          <h2 className=" flex justify-center text-xl text-weddingwhite pb-5">
            Are You Bridal Party?
          </h2>{" "}
          <button className="bg-transparent hover:bg-weddinggold-500 text-weddinggold-700 font-semibold hover:text-weddinggold py-2 px-4 border border-weddinggold-500 hover:border-transparent rounded mb-10">
            Bridal Party Login
          </button>
          <br></br> */}
        </div>
      </div>
    </div>
  );
};

export default Portal;
