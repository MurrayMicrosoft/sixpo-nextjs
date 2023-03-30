import React, { useState } from "react";
import logo from "../public/sixpo-logo.png";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillInstagram,
  AiFillFacebook,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav
      className="flex justify-between items-center border-b-[#ff5b5b] border-b-2 h-[13vh] 
    lg:h-[17vh] xl:h-[17vh] bg-black text-white"
    >
      <h1 className="h-[13vh] w-[25%] md:w-[20%] flex lg:hidden z-10">
        <Link href="/">
          <Image
            className="w-[100%] m-2 justify-center items-center "
            src={logo}
            alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
          />
        </Link>
      </h1>

      <ul
        className=" hidden h-[100%]
            lg:flex lg:justify-center lg:items-center lg:text-2xl font-bold  w-[100%] pt-2  
            "
      >
        <li className="mx-[1rem]">
          <Link href="/about" legacyBehavior>
            <a
              className="
               
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              About
            </a>
          </Link>
        </li>
        <li className="mx-[1rem]">
          {/* Dropdown */}
          <button
            className="inline-flex hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            onClick={handleDropdown}
          >
            Events{" "}
            {!dropdown ? (
              <AiFillCaretDown size={20} />
            ) : (
              <AiFillCaretUp size={20} />
            )}{" "}
          </button>
          <ul
            className={
              !dropdown
                ? "hidden"
                : "absolute z-10 origin-top pt-2 py-3 bg-[#ff5b5b]  rounded px-2 transition-all duration-2000"
            }
          >
            <Link href="/events" legacyBehavior>
              <a
                className=" p-2 hover:underline hover:transition-all hover:duration-500
               
                "
              >
                Details
              </a>
            </Link>
            <li>
              <Link href="/schedule" legacyBehavior>
                <a
                  className=" p-2 hover:underline hover:transition-all hover:duration-500
               "
                >
                  Schedule
                </a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="lg:w-[11%] mx-[2rem] ">
          <Link href="/home">
            <Image
              className="w-[100%] justify-center items-center"
              src={logo}
              alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
            />
          </Link>
        </li>
        <li className="mx-[1rem]">
          <Link href="/blog" legacyBehavior>
            <a
              className="
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Blog
            </a>
          </Link>
        </li>
        <li className="mx-[1rem]">
          <Link href="/resources" legacyBehavior>
            <a
              className="
                
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Resources
            </a>
          </Link>
        </li>
      </ul>

      {/* mobile navigation */}
      <div
        onClick={handleNav}
        className="block lg:hidden mx-4 mb-2 z-20 ease-in-out duration-500"
      >
        {!nav ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
      </div>
      <div
        className={
          !nav
            ? "absolute left-[-100%] h-[100%] "
            : "z-10 absolute left-0 top-0 h-[100%] bg-black w-[60%] text-white  ease-in-out  duration-500"
        }
      >
        <h1 className="h-[13vh] w-[100%%] flex  lg:hidden border-b-[#ff5b5b] border-b-2">
          <Link href="/">
            <Image
              className="w-[40%] md:w-[35%] m-2 justify-center items-center "
              src={logo}
              alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
            />
          </Link>
        </h1>
        <ul className="flex flex-col items-start uppercase w-[100%] pt-2 md:text-2xl lg:hidden ">
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/home">Home</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/about">About Us</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/events">Events</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/schedule">Schedule</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/blog">Our Blog</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
        <ul className="flex mx-2 text-white text-2xl md:text-4xl pt-2">
          <Link href="https://www.instagram.com/yvrsixpo/" target="_blank">
            <li className="mx-4">
              <AiFillInstagram />
            </li>
          </Link>
          <Link href="https://www.facebook.com/yvrsixpo/" target="_blank">
            <li className="mx-4">
              <AiFillFacebook />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
