import React from 'react'
import CardTestimonials from '../Card/CardTestimonials';

export default function CarouselTestimonials() {
  return (
    <section className=' grid justify-center space-y-8 md:space-y-0 md:flex p-4 md:space-x-4'>
      <CardTestimonials
        titleTestimonials="Rapide et Efficace"
        descriptionTestimonials="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga repudiandae recusandae inventore dicta qui, tempore labore placeat a natus iusto consequuntur commodi iste molestiae."
        srcTestimonials="img/téléchargement (18).webp"
        nameTestimonials="T800"
      />
      <CardTestimonials
        titleTestimonials="Fort de proposition"
        descriptionTestimonials="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga repudiandae recusandae inventore dicta qui, tempore labore placeat a natus iusto consequuntur commodi iste molestiae."
        srcTestimonials="img/téléchargement (19).webp"
        nameTestimonials="R2D2"
      />
      <CardTestimonials
        titleTestimonials="Agréable et professionnel"
        descriptionTestimonials="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga repudiandae recusandae inventore dicta qui, tempore labore placeat a natus iusto consequuntur commodi iste molestiae."
        srcTestimonials="img/téléchargement (20).webp"
        nameTestimonials="C3PO"
      />
    </section>
  );
}
