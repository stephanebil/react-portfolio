import React from "react";
import { GrGooglePlus } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import CardItem from "./CardItem";

export default function CardInformation() {
  return (
    <div className="bloc-general-information  md:w-[640px]">
      <img src="img/stephanebilella.jpg" alt="type avec lunettes" />
      <div className="bg-bluegeneraleinformation p-8 grid justify-center">
        <h3 className="text-center text-whiteportfolio text-[26px] font-[600] mb-8">
          Generale Information
        </h3>
        <CardItem
          titlecarditem="Name:"
          titlecarditem2="Stéphane Bilella"
          src="img/téléchargement (4).webp"
        />
        <CardItem
          titlecarditem="Location:"
          titlecarditem2="Oissel (76)"
          src="img/téléchargement (1).webp"
        />
        <CardItem
          titlecarditem="stephanebilella@yahoo.fr"
          src="img/téléchargement (5).webp"
        />
        <CardItem
          titlecarditem="06 48 34 75 56"
          src="img/téléchargement (2).webp"
        />
        <CardItem
          titlecarditem="mytemplatename.com"
          src="img/téléchargement (3).webp"
        />

        <div className="icone-generale-information flex justify-center space-x-[50px] mt-6 text-graytitleh2 ">
          <a
            className="hover:text-whiteportfolio"
            href="https://www.google.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <GrGooglePlus />
          </a>
          <a
            className="hover:text-whiteportfolio"
            href="https://www.pinterest.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <BsPinterest />
          </a>
          <a
            className="hover:text-whiteportfolio"
            href="https://fr-fr.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            className="hover:text-whiteportfolio"
            href="https://twitter.com/?lang=fr"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
