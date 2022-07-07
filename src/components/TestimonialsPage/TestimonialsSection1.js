import React from 'react'
import LayoutTitle from '../layouts/LayoutTitle';
import CarouselTestimonials from './CarouselTestimonials';

export default function TestimonialsSection1() {
  return (
    <section>
      <LayoutTitle title2="Ce que les clients disent" title="Témoignages" />

      <div className="">
        <CarouselTestimonials/>
      </div>
    </section>
  );
}
