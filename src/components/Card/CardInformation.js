import React from "react";
import { GrGooglePlus } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import CardItem from "./CardItem";

export default function CardInformation() {
  return (
    <div className="bloc-general-information  md:w-[640px]">
      <img
        src="img/xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp"
        alt="type avec lunettes image principale"
      />
      <div className="bg-bluegeneraleinformation p-8 grid justify-center">
        <h3 className="text-center text-whiteportfolio text-[30px] mb-8">
          Generale Information
        </h3>
        <CardItem
          titlecarditem="Name:"
          titlecarditem2="Justin Bieber"
          src="img/téléchargement (4).webp"
        />
        <CardItem
          titlecarditem="Location:"
          titlecarditem2="London UK"
          src="img/téléchargement (1).webp"
        />
        <CardItem
          titlecarditem="contactme@templatename.com"
          src="img/téléchargement (5).webp"
        />
        <CardItem
          titlecarditem="+76 6524 567862 763"
          src="img/téléchargement (2).webp"
        />
        <CardItem
          titlecarditem="mytemplatename.com"
          src="img/téléchargement (3).webp"
        />
     
        <div className="icone-generale-information flex justify-center space-x-[50px] mt-6 text-graytitleh2">
          <GrGooglePlus />
          <BsPinterest />
          <FaFacebookF />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
}
