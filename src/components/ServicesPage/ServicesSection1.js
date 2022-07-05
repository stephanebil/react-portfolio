import React from 'react'
import CardServices from '../Card/CardServices';
import LayoutTitle from '../layouts/LayoutTitle';

export default function ServicesSection1() {
  return (
    <section>
      <LayoutTitle title2="Ce que je vous offre" title="Mes services" />

      <div className="">
        <CardServices/>
      </div>
    </section>
  );
}
