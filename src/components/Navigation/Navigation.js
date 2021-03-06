// import React from 'react';

import NavItem from "./NavItem";

export default function Navigation() {
  
  
  return (
    
    <nav className="navbar md:flex justify-between md:items-center px-4 py-2.5 ">
      <div className=" ">
        <a href="/about" className=" ">
          <span className=" text-4xl font-black text-bluegeneraleinformation ">
            S.Bilella<span className="text-violetnav">.</span>CV
          </span>
        </a>
      </div>
    
      <div className="navbar__burger md:hidden absolute z-30 -mt-[40px] right-8 ">
        
          <span className="burger-bar text-4xl font-black  text-bluegeneraleinformation hover:text-violetnav ">menu</span>
        
      </div>

      <div className=" ">
        <ul className=" absolute md:static md:flex md:items-center w-full  bg-white md:w-full ">
          {/* <NavItem titleItem="Home" linkItem="/" /> */}
          <NavItem titleItem="About" linkItem="/about" />
          <NavItem titleItem="Skills" linkItem="/skills" />
          <NavItem titleItem="Services" linkItem="/services" />
          <NavItem titleItem="Portfolio" linkItem="/portfolio" />
          <NavItem titleItem="Testimonials" linkItem="/testimonials" />
          <NavItem titleItem="Contact" linkItem="/contact" />
        </ul>
      </div>
    </nav>

    // <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
    //   <div className=" flex flex-wrap justify-between items-center mx-auto">
    //     <a href="/about" className="flex items-center">
    //       <span className="self-center text-4xl font-black text-bluegeneraleinformation ">
    //         Smith<span className="text-violetnav">.</span>CV
    //       </span>
    //     </a>

    //     <button
    //       data-collapse-toggle="mobile-menu"
    //       type="button"
    //       className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
    //       aria-controls="mobile-menu"
    //       aria-expanded="false"
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg
    //         className="w-6 h-6"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clipRule="evenodd"
    //         ></path>
    //       </svg>
    //       <svg
    //         className="hidden w-6 h-6"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //           clipRule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
    //       <ul className="flex flex-col mt-4 md:flex-row md:space-x-1 md:mt-0 md:text-sm ">
    //         {/* <NavItem titleItem="Home" linkItem="/" /> */}
    //         <NavItem titleItem="About" linkItem="/about" />
    //         <NavItem titleItem="Skills" linkItem="/skills" />
    //         <NavItem titleItem="Services" linkItem="/services" />
    //         <NavItem titleItem="Portfolio" linkItem="/portfolio" />
    //         <NavItem titleItem="Testimonials" linkItem="/testimonials" />
    //         <NavItem titleItem="Contact" linkItem="/contact" />
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
