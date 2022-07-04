import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from "../Footer/Footer";

export default function Layout({children}) {
  return (
    <div>
      <Navigation />
      <main className="">
        <div className="bloc-general-information">
          <img
            src="img/xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp"
            alt="type avec lunettes image principale"
          />
          <div className="">
            <h3 className="">Generale Information</h3>
            <div className="flex">
              <img src="img/téléchargement (4).webp" alt="icone crayon" />
              <p>Name: Justin Bieber</p>
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
