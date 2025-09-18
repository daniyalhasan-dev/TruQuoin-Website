import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <h1 className='text-center text-white font-bold lg:text-3xl md:text-3xl text-2xl pt-20 pb-5'>Contact Us</h1>
        <h1 className='text-center text-white font-bold lg:text-4xl md:text-3xl text-2xl'>We’re Here for You </h1>
        <p className='text-center text-[#8E8E8E] pt-3 pb-20'>Whether you have questions, need support, or want to learn more about <span className='text-white font-semibold'>TrūQoin</span>, we’re just a <br className='hidden sm:block' /> message away. Reach out to us anytime!</p>
      </div>

      <div className="relative w-full min-h-screen flex items-center justify-center">
      <div className="relative z-20 bg-black/70 p-10 rounded-xl w-full max-w-3xl">
        <h2 className="text-white text-3xl font-bold text-center">
          Send Us a Message
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Have a question or need assistance? Fill out the form below, and we’ll
          get back to you as soon as possible.
        </p>

        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>


    <div className="md:flex flex-row w-[70vw] mx-auto text-center mt-25 mb-10">
          <div
            style={{
              background:
                "linear-gradient(0deg,rgba(26, 26, 26, 1) 0%, rgba(0, 0, 0, 1) 100%)",
            }}
            className="sm:px-30 py-10 rounded-2xl mx-2 mb-10"
          >
            <img src="vector1.svg" alt="" className="mx-auto" />
            <h1 className="text-2xl text-white font-semibold py-5">
              Address 1:
            </h1>
            <p className="text-white">
              TrūQoin Headquarters 123 Blockchain Drive, Tech City, USA
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg,rgba(26, 26, 26, 1) 0%, rgba(0, 0, 0, 1) 100%)",
            }}
            className="sm:px-30 py-10 rounded-2xl mx-2 mb-10"
          >
            <img src="vector1.svg" alt="" className="mx-auto" />
            <h1 className="text-2xl text-white font-semibold py-5">
              Address 1:
            </h1>
            <p className="text-white">
              TrūQoin Headquarters 123 Blockchain Drive, Tech City, USA
            </p>
          </div>
        </div>
    
    
    
    <div class="relative #0a0a0a] text-white py-16">
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
  )
}

export default Contact