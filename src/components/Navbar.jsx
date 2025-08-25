import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(93deg,rgba(74, 74, 74, 1) 0%, rgba(32, 32, 32, 1) 100%)",
        }}
        className="w-[90vw] max-w-[1444px] flex justify-between items-center px-16 py-4 mx-auto rounded-lg mt-[40px]"
      >
        {/* Logo */}
        <div className="pt-1">
          <img src="/logo.png" alt="logo" className="w-30 h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-[40px] text-white pt-2">
          <li>Earn</li>
          <li>Trade</li>
          <li>Spend</li>
          <li>About</li>
          <li>Doc</li>
          <li>Contact</li>
        </ul>


        <button
          className="hidden lg:block px-5 py-2 rounded-lg text-white hover:text-black duration-300"
          style={{
            background:
              "linear-gradient(100deg,rgba(255, 138, 0, 1) 0%, rgba(200, 108, 1, 1) 100%)",
          }}
        >
          Launch WebApp
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>


      {isOpen && (
        <div style={{background:
              "linear-gradient(100deg,rgba(255, 138, 0, 1) 0%, rgba(200, 108, 1, 1) 100%)"}} className="lg:hidden bg-black px-6 pb-4 space-y-4">
          <a href="#home" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-400">
            About
          </a>
          <a href="#services" className="block hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contact
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
