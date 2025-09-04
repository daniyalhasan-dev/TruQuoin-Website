import React from "react";

const About = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="mt-8 flex justify-center text-3xl pb-5 font-semibold">About Us</h1>
          <p className="text-center">
            TrūQoin is a groundbreaking cryptocurrency designed to make  <br />
            financial freedom accessible to everyone. Built on the TRON  <br />
            blockchain, we’ve created a unique system where your activities <br />
            within the TrūIQ Global ecosystem translate directly into rewards.
          </p>
        </div>
        <div className="w-[80vw] mx-auto">
          <img src="/about.png" alt="" />
        </div>
        <div className="flex-row md:flex justify-between w-[90vw] mx-auto bg-[#343434] px-20 py-10 rounded-2xl mb-30">
          <div>
            <h1 className="text-center text-4xl font-bold pb-5 text-white">Our Vision</h1>
            <p className="text-white text-center pb-15">
              By connecting systems, processes and people through positive <br />
              activities, TruQoin is anxiously engaged in creating tools to give <br />
              everyone an opportunity for success and a better life.
            </p>
          </div>
          <div>
            <h1 className="text-center text-4xl font-bold pb-5 text-white">Our Mission</h1>
            <p className="text-white text-center">
              To simplify and normalize the acquisition and use of <br/>
              cryptocurrency and digital assets around the world.</p>
          </div>
        </div>
        <div className="md:flex flex-row justify-between w-[90vw] mx-auto ">
          <div className="pb-10">
            <h1 className="text-3xl font-bold">Why Choose <span className="text-[#EE5A02]">TrūQoin?</span></h1>
            <ul className="list-disc list-inside marker:text-[#EE5A02]">
              <li>Acquire cryptocurrency without any hardware of software costs.</li>
              <li>Mine cryptocurrency through yours and other’s activities.</li>
              <li>Build a digital-assets business – without any boarders.</li>
              <li>Achieve success and rewards, for developing a like-minded team.</li>
              <li>Earn fiat currency (USD) for help to build the TruQoin/TruIQ ecosystem.</li>
              <li>Use TruQoin to buy products and services in the real world.</li>
            </ul>
          </div>
          <div>
          <div className="bg-[#1A1A1A] px-6 py-8 rounded-4xl mb-10">
            <h1 className="text-3xl font-bold pb-5 text-white">Earn by Engaging:</h1>
            <p className="pb-5 text-white">
              TrūQoin™ is the first cryptocurrency to integrate Proof-of-Transaction <br />
              & Activity™ mining technologies into a cryptocurrency, empowering <br />
              miners to acquire tokens without the costs typically associated with <br />
              traditional cryptocurrency mining.
            </p>
            <img src="about2.png" alt="" />
          </div>
          <div className="bg-[#1A1A1A] px-6 py-8 rounded-4xl mb-10">
            <h1 className="text-3xl font-bold pb-5 text-white">Earn by Engaging:</h1>
            <p className="pb-5 text-white">
              TrūQoin™ is the first cryptocurrency to integrate Proof-of-Transaction <br />
              & Activity™ mining technologies into a cryptocurrency, empowering <br />
              miners to acquire tokens without the costs typically associated with <br />
              traditional cryptocurrency mining.
            </p>
            <img src="about2.png" alt="" />
          </div>
          <div className="bg-[#1A1A1A] px-6 py-8 rounded-4xl mb-10">
            <h1 className="text-3xl font-bold pb-5 text-white">Earn by Engaging:</h1>
            <p className="pb-5 text-white">
              TrūQoin™ is the first cryptocurrency to integrate Proof-of-Transaction <br />
              & Activity™ mining technologies into a cryptocurrency, empowering <br />
              miners to acquire tokens without the costs typically associated with <br />
              traditional cryptocurrency mining.
            </p>
            <img src="about2.png" alt="" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
