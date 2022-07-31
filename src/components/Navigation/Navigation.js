import React, {useState} from 'react';
// 3a j'importe le useState

// 2b (navbar responsive)j'importe le menuItems
import { MenuItems } from "./MenuItems";
import NavItem from "./NavItem";

export default function Navigation() {
    // 3b je crée une constante en indiquant useState de cette manière
    const [active,setActive] = useState(false)
    const showMenu = () => {
      setActive(!active)
    }
  return (
    <div className="navbar flex lg:flex justify-between content-center lg:items-center px-4 py-2.5 ">
      
      <div className="flex justify-between">
        <a href="/about" className=" ">
          <span className="text-xl lg:text-4xl font-black text-bluegeneraleinformation ">
            S.Bilella<span className="text-violetnav">.</span>CV
          </span>
        </a>
      </div>
        
      <nav> 
        {/* 4 Je crée mon burger ou menu et je lui rajoute onClick comme propriété */}
        {/* 12 Je modifie mon bouton menu dans la className de la div */}
        <div className='absolute right-1 z-10 lg:hidden'>
          <span className="burger-bar text-xl font-black  text-red-500 hover:text-violetnav cursor-pointer" onClick={showMenu}>
            menu
          </span>
        </div>
      

        
        <ul className=" hidden lg:flex lg:space-x-[1px] lg:static  lg:items-center w-full  bg-white md:w-full ">
          {/* <NavItem titleItem="Home" linkItem="/" /> */}
          <NavItem titleItem="About" linkItem="/about" />
          <NavItem titleItem="Skills" linkItem="/skills" />
          <NavItem titleItem="Services" linkItem="/services" />
          <NavItem titleItem="Portfolio" linkItem="/portfolio" />
          <NavItem titleItem="Testimonials" linkItem="/testimonials" />
          <NavItem titleItem="Contact" linkItem="/contact" />
        </ul>
        
        {/* 2a Je pose ici MenuItems et voir 2b en haut */}
        {/* 6 Dans MenuItems je rajoute showMenu voir en dessous et aller dans MenuItems 7  */}
        {/* 8 mettre active voir en dessous et retourner au MenuItems 9 */}
        <MenuItems showMenu={showMenu} active={active} /> 
      </nav> 
    </div>

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
