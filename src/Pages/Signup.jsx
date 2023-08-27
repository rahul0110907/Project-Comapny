import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Signup = ({ JSONFileData}) => {
  const navigate =useNavigate();
 

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handleRegistration = (e) => {
    e.preventDefault();
    if (name && mobile && password) {
      const userData = { name, mobile, password };
    
       JSONFileData(userData);
     
      alert('Registration Successfully')
      setTimeout(()=>{
        navigate('/Login')
      },2000)

    
    
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className=" flex items-center justify-center text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Enter Your Name</p>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
               focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Enter Your Mobile Number</p>
                <input
                  onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  placeholder="Mobile Number"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
               focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
               focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
              </div>

              <button
                onClick={handleRegistration}
                className="w-full font-normal text-sm bg-gradient-to-t from-yellow-400 to-yellow-200
            hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700
         active:bg-gradient-to-bl  active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
              >
                Continue
              </button>

            
            </div>

            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
