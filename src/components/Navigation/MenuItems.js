import React from 'react';
// 1a je crée MenuItems.js et attention je fais un rfac au lieu de rfc, pour suivre parfaitement l'exemple.

import NavItem from "./NavItem";

// 7 Rajouter showMenu voir en dessous et retourner dans Navigation 8
// 9 Rajouter active en dessous
export const MenuItems = ({showMenu, active}) => {
  return (
    // 1b Je fais un copier collé du menu ul qui est dans Navigation Mais je pense à importer NavItem
    // 10 ajouter active et hidden dans la className de ul, voir ci dessous Le bouton menu est actif
    // 11 ajouter dans les premiers guillemets voir en dessous pour que le menu disparaisse en lg, on peut jouer biensûr sur l'esthétique. Mais ici on va le garder comme ça.
    <ul
      className={
        active ? "flex-col flex absolute z-20 inset-0 lg:hidden mt-3" : "hidden"
      }
    >
      {/* 5 Je crée mon bouton close ici */}
      <div>
        {/* 13 on rajoute le onClick dans close afin que le bouton soit actif et voilà! le bouton menu sera caché par le close */}
        <span onClick={showMenu} className=" text-xl font-black  text-gray-100 hover:text-violetnav bg-bluegeneraleinformation flex  px-[50%] cursor-pointer">
          close
        </span>
      </div>

      {/* <NavItem titleItem="Home" linkItem="/" /> */}
      <NavItem titleItem="About" linkItem="/about" />
      <NavItem titleItem="Skills" linkItem="/skills" />
      <NavItem titleItem="Services" linkItem="/services" />
      <NavItem titleItem="Portfolio" linkItem="/portfolio" />
      <NavItem titleItem="Testimonials" linkItem="/testimonials" />
      <NavItem titleItem="Contact" linkItem="/contact" />
    </ul>
  );
};
