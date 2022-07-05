import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from "../Footer/Footer";

import CardInformation from '../Card/CardInformation';

export default function Layout({children}) {
  return (
    <div>
      <Navigation />
      <main className="md:flex">
        <CardInformation />
        <div className=" bg-graylighttitlecard">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
