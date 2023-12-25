import React, { useEffect } from "react";
import bannerImage from "../assets/java4.png";
import bannerBackground from "../assets/Banner_wallpaper.svg";
import Typed from "typed.js";
function Banner() {
  const el=React.useRef(null);
  React.useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: [' BackEnd Java developer',' FontEnd developer',' Web developer'],
      startDelay:100,
      typeSpeed: 50,
      backSpeed:50,
      backDelay:100,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  
  
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          height:500
        }}
        className="main-container flex w-full  items-center "
      >
        <div className=" w-full flex items-center justify-center text-white">
          <div className="w-2/3">
            {/* text */}
            <h3 className="text-3xl font-semibold">Hi,I am</h3>
            <h1 className="mt-3 text-5xl font-bold">VijayKumar Mali</h1>
            <h2 className="mt-3 text-2xl">I am  <span className="font-bold underline" ref={el}></span></h2>
            <p className="mt-3 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              ipsam dicta illo corrupti odit quae adipisci necessitatibus, porro
              tempore velit?
            </p>
            <div className="icon-container space-x-5 flex  ">
       <div className=" cursor-pointer border hover:bg-orange-500 px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands text-4xl  fa-facebook"></i>
              </div>
              <div className=" cursor-pointer border hover:bg-orange-500 px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands  text-4xl fa-instagram"></i>
              </div>
              <div className=" cursor-pointer border hover:bg-orange-500 px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands text-4xl  fa-linkedin"></i>
              </div>
              <div className=" cursor-pointer border hover:bg-orange-500 px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700">
                <i class="fa-brands  text-4xl fa-github"></i>
              </div>
            </div>

            <br />
            <a
              href="/contact"
              className="bg-orange-600 text-white px-4 py-2 shadow rounded-full"
            >
              Contact Me
            </a>

          </div>
        </div>

        <div className="m-2 w-full flex justify-center ">
          {/* image */}
          {/* <img
            src={bannerImage}
            className="rounded-full bg-orange-500 shadow-lg w-fit"
            alt=""
          /> */}

        </div>
      </div>
    </>
  );
}

export default Banner;
