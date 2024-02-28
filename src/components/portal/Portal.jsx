import React, { useState } from "react";
import WeddingHub from "../wedding hub/WeddingHub";

const Portal = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function doSomething(e) {
    if (formData.username === "" || formData.password === "") {
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
      alert("Incorrect username/password combo");
      e.preventDefault();
    }
  }

  return (
    <div className="h-auto Parent text-center">
      <div className="container mx-auto px-10 py-10 mt-20">
        <div className="flex flex-col items-center justify-center box-border rounded-lg bg-weddingmaroon px-20 py-10 ">
          <h1 className=" flex justify-center pb-5 text-weddinggold text-4xl font-medium">
            Welcome!
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
                  className="mt-6 cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                  {" "}
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-weddinggold opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-weddingwhite transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                    Lets Party!
                  </span>
                  <span class="absolute inset-0 border-2 border-weddinggold rounded-full"></span>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
