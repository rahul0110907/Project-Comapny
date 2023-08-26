import React,{useState} from "react";
const Login = ({users,LoginPage}) => {

   
      const [mobile, setMobile] = useState("");
      const [password, setPassword] = useState("");
      const [errMobile, setErrMobile] = useState("");
      const [errPassword, setErrPassword] = useState("");


      const handleMobile = (e) => {
          setMobile(e.target.value);
          setErrMobile("");
       
        };
        const handlePassword = (e) => {
          setPassword(e.target.value);
          setErrPassword("");
          
        };

  
      const handlelogIn=(e)=>{
        e.preventDefault();
        if (!mobile) {
          setErrMobile("Enter your email");
        }
        if (!password) {
          setErrPassword("Enter your password");
        }
        

        const user=users.find(user=>user.mobile===mobile && user.password===password);
        if(user){
            LoginPage(user);
          
        }else{
            alert('User Not Found');
        }
       
      }

  return (
    <div className="w-full flex justify-center items-center">
    <div className="w-full bg-gray-100 pb-10">
   
        <form className="w-[350px] mx-auto flex flex-col items-center">
        <div className="w-full border border-zinc-200 p-6">
          <h2 className="  text-3xl font-medium mb-4 flex justify-center items-center">
            Sign In
          </h2>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Enter Mobile Number </p>
              <input onChange={handleMobile}
                type="number"
                className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                   focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
              />
              {errMobile && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errMobile}
                  </p>
                )}
    
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium"> Enter your Password</p>
              <input onChange={handlePassword}
                type="password"
                className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                   focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
              />
              {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errPassword}
                  </p>
                )}
            </div>
            <button
              onClick={handlelogIn}
              className="w-full font-normal text-sm bg-gradient-to-t from-yellow-400 to-yellow-200
 hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700
active:bg-gradient-to-bl  active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
            >
              Continue
            </button>

           
          </div>

        </div>
    
      
      </form>
      
     
    </div>
  </div>
    )
};
export default Login