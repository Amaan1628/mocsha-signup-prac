function App() {
  return (
    //main screen
    <div className="h-screen flex ">
      {/* //purple div */}
      <div className="bg-gradient-to-b from-lightPurple to-darkPurple h-screen w-7/12 relative">

        <img src="../images/spiral.png" alt="spiral" 
        className="absolute pl-[1000px]" />
        <img src="../images/dots.png" alt="dots" 
        className="absolute" />
        <img src="../images/outerEllipse.png" alt="out ellipse" 
        className="absolute pt-[36px] h-[100%] " />
        <img src="../images/innerEllipse.png" alt="in ellipse" 
        className="absolute pt-[176px] " />
        <img src="../images/blurEllipse.png" alt="blur img" 
        className="absolute pl-[972px] pt-[760px]" />
        

        <div className=" pt-20 pl-20 h-[805px] w-[642px] rounded-xl bg-red-50">
          <h1 className="text-RobotoSerif">Embark on Your Learning Adventure with <span className="text-Syne">Mocsha</span></h1>
          
        </div>

      </div>

      {/* //white div */}
      <div className="flex flex-col w-5/12">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <h2 className=" font-semibold font-Roboto text-3xl text-textPurple ">
            Login to your account
          </h2>
          <div className="flex flex-col  items-start">
            <label className="pl-3 text-textColor text-[16px] font-medium font-Roboto">
              Email
            </label>
            <input
              className="bg-emailButton rounded-[12px] w-[482px] p-3 placeholder:text-textColor font-semibold font-Roboto"
              type="email"
              placeholder="xyz@gmail.com"
            />
          </div>
          <button className=" bg-OTPButton rounded-[12px] w-[482px] text-white p-3 font-semibold font-Roboto">
            Send OTP
          </button>
          <div className="flex justify-end w-[55%]">
            <h4 className="text-textColor  text-[14px] font-regular font-Roboto">
              Dont have an account?{" "}
              <span className="text-OTPButton text-[16px] font-Roboto font-medium">
                Sign Up
              </span>
            </h4>
          </div>

          <div className="flex justify-center  items-center space-x-2">

            <div className="h-[1px] bg-gray-300 w-[100px]"></div>
            <h1 className="text-textColor font-Roboto">Or</h1>
            <div className="h-[1px] bg-gray-300 w-[100px]"></div>
            
          </div>
          
          <button className="flex gap-4 justify-center border-2 border-borderColor w-[482px] rounded-[12px] p-3 text-textColor text-[16px] font-medium font-Roboto">
            <img src="../images/GoogleIcon.png" alt="google icon" />
            Continue with Google
          </button>
          <button className="flex gap-4 justify-center border-2 border-borderColor w-[482px] rounded-[12px] p-3 text-textColor text-[16px] font-medium font-Roboto">
            <img src="../images/GithubIcon.png" alt="github icon"/>
            Continue with Github
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
