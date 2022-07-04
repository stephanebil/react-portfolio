import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from "../Footer/Footer";

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
          <div className="bg-bluegeneraleinformation">
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
          </div>
        </div>
        <div className="">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
