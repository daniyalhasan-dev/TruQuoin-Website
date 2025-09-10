import React from "react";
import Navbar from "./Navbar";

export const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-2 items-center  mt-4 text-5xl font-medium">
        <h1 className="text-white">Welcome to our </h1>
        <h1 className="text-white">Ecosystem!</h1>
      </div>
      <div className="text-center mt-10">
        <p className="text-[#8E8E8E] pb-5">
          TrūQoin™ – A Decentralized Autonomous Organization{" "}
        </p>
      </div>
      <div className="w-[80vw] mx-auto">
        <img src="/banner.png" alt="Banner" className="" />
      </div>
      <div className="flex flex-row justify-center gap-3 mt-10">
        <img src="/userprofiles.png" alt="Profiles" />
        <h1 className="font-bold pt-1 text-white">20k Verified Users</h1>
      </div>
      <div className="text-center">
        <p className="text-[#8E8E8E]">
          Rewarding activities – that build sustainable growth.
        </p>
        <button className="mt-7 border border-amber-700 px-18 py-2 rounded-lg hover:border-black duration-300 hover:text-amber-700 text-white">
          Get Started
        </button>
      </div>
      <div className="flex justify-center flex-col items-center mt-30">
        <h1 className="text-3xl font-bold text-white">Our Mission</h1>
        <p className="pt-4 text-[#8E8E8E]">
          To simplify and normalize the acquisition and use of
        </p>
        <p className="text-[#8E8E8E]">cryptocurrency and digital assets.</p>
      </div>
      <div className="w-full max-w-[1076px] mx-auto pt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          <img
            src="/iPhone 1.png"
            alt="iPhone 1"
            className="w-auto h-auto mx-auto"
          />
          <img
            src="/iPhone 2.png"
            alt="iPhone 2"
            className="w-auto h-auto mx-auto"
          />
          <img
            src="/iPhone 3.png"
            alt="iPhone 3"
            className="w-auto h-auto mx-auto"
          />
        </div>
      </div>

      <div className="text-center text-[#8E8E8E] pt-20">
        One location – One App for all your digital assets
      </div>

      <div>
        <h1 className="pt-30 text-center text-white font-bold lg:text-4xl md:text-3xl text-2xl">One Location for all your cryptocurrency<br class="hidden sm:block"/> and personal needs.</h1>
        <p className="text-center text-[#8E8E8E] pt-3">
        To simplify the process of acquiring, holding, swapping and shopping, TruQoin offers a <br className="hidden sm:block"/> universal portal to accommodate these needs.
        </p>
      </div>
      <div className="w-[80vw]  mx-auto mt-20">
        <img src="home.png" alt="laptop" className="w-auto h-auto" />
      </div>

      
      <div class="relative text-white py-16">
          <div class="relative z-10 text-center">
            <h2 class="text-3xl font-bold">Follow us</h2>
            <p class="text-gray-400 mt-2">Be Part of our TruQoin Community</p>

            <div class="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                class="flex items-center justify-between bg-black/70 px-5 py-3 rounded-xl shadow-lg hover:bg-[#EE5A02]/20 transition"
              >
                <span class="flex items-center gap-2">
                  <img src="insta.png" alt="Instagram" class="w-5 h-5" />{" "}
                  Instagram
                </span>
                <span class="text-[#EE5A02] ml-3">10.3k</span>
              </a>

              <a
                href="#"
                class="flex items-center justify-between bg-black/70 px-5 py-3 rounded-xl shadow-lg hover:bg-[#EE5A02]/20 transition"
              >
                <span class="flex items-center gap-2">
                  <img src="insta.png" alt="Facebook" class="w-5 h-5" />{" "}
                  Facebook
                </span>
                <span class="text-[#EE5A02] ml-3">15.2k</span>
              </a>

              <a
                href="#"
                class="flex items-center justify-between bg-black/70 px-5 py-3 rounded-xl shadow-lg hover:bg-[#EE5A02]/20 transition"
              >
                <span class="flex items-center gap-2">
                  <img src="insta.png" alt="Discord" class="w-5 h-5" /> Discord
                </span>
                <span class="text-[#EE5A02] ml-3">8.1k</span>
              </a>

              <a
                href="#"
                class="flex items-center justify-between bg-black/70 px-5 py-3 rounded-xl shadow-lg hover:bg-[#EE5A02]/20 transition"
              >
                <span class="flex items-center gap-2">
                  <img src="insta.png" alt="Telegram" class="w-5 h-5" />{" "}
                  Telegram
                </span>
                <span class="text-[#EE5A02] ml-3">16.2k</span>
              </a>

              <a
                href="#"
                class="flex items-center justify-between bg-black/70 px-5 py-3 rounded-xl shadow-lg hover:bg-[#EE5A02]/20 transition"
              >
                <span class="flex items-center gap-2">
                  <img src="insta.png" alt="X" class="w-5 h-5" /> X
                </span>
                <span class="text-[#EE5A02] ml-3">11.3k</span>
              </a>
            </div>
          </div>
        </div>
      
    </>
  );
};
