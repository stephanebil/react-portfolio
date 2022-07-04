import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from "../Footer/Footer";
import { GrGooglePlus } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Layout({children}) {
  return (
    <div>
      <Navigation />
      <main className="">
        <div className="bloc-general-information w-[320px] md:w-[640px]">
          <img
            src="img/xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp"
            alt="type avec lunettes image principale"
          />
          <div className="bg-bluegeneraleinformation p-8">
            <h3 className="">Generale Information</h3>
            <div className="flex">
              <img src="img/téléchargement (4).webp" alt="icone crayon" />
              <p>Name: Justin Bieber</p>
            </div>
            <div className="flex">
              <img src="img/téléchargement (1).webp" alt="icon localisation" />
              <p>Location: London UK</p>
            </div>
            <div className="flex">
              <img src="img/téléchargement (5).webp" alt="icone mail" />
              <p>contactme@templatename.com</p>
            </div>
            <div className="flex">
              <img src="img/téléchargement (2).webp" alt="icone phone" />
              <p>+76 6524 567862 763</p>
            </div>
            <div className="flex">
              <img src="img/téléchargement (3).webp" alt="icone phone" />
              <p>mytemplatename.com</p>
            </div>
            <div className="icone-generale-information flex">
              <GrGooglePlus/><BsPinterest/><FaFacebookF/><BsTwitter/>
              </div>
          </div>
        </div>
        <div className="">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
