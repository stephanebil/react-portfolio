import React from 'react';
import CardPortfolio from '../Card/CardPortfolio';
import LayoutTitle from "../layouts/LayoutTitle";

export default function PortfolioSection1() {
  return (
    <section>
      <LayoutTitle title2="" title="Mon portfolio" />

      <div className="p-8">
        <ul className="flex space-x-16 font-[700]">
          <li className="text-bluegeneraleinformation">Tous</li>
          <li className="text-graytitleh2">React</li>
          <li className="text-graytitleh2">Php / Laravel</li>
        </ul>
      </div>

      <div className="mt-20 p-8 md:flex md:space-x-28">
        <CardPortfolio
          srcPortfolio="img/mouche1.jpg"
          altportfolio="image projet1 mouche"
          titlePortfolio="Projet 1"
        />
        <CardPortfolio
          srcPortfolio="img/mouche1.jpg"
          altportfolio="image projet1 mouche"
          titlePortfolio="Projet 1"
        />
      </div>
    </section>
  );
}
