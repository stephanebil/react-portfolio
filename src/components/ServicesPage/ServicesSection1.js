import React from 'react'
import CardServices from '../Card/CardServices';
import LayoutTitle from '../layouts/LayoutTitle';

export default function ServicesSection1() {
  return (
    <section>
      <LayoutTitle title2="Ce que je vous offre" title="Mes services" />

      <div className="p-8 mt-20 md:flex md:space-x-8">
        <CardServices
          srcIcone="img/téléchargement (6).webp"
          titleServices="Développement de site Web"
          descriptionServices="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptates cumque esse exercitationem necessitatibus enim impedit ab nihil optio nemo"
        />
        <CardServices
          srcIcone="img/téléchargement (7).webp"
          titleServices="Développement de site Web"
          descriptionServices="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptates cumque esse exercitationem necessitatibus enim impedit ab nihil optio nemo"
        />
        <CardServices
          srcIcone="img/téléchargement (8).webp"
          titleServices="Développement de site Web"
          descriptionServices="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptates cumque esse exercitationem necessitatibus enim impedit ab nihil optio nemo"
        />
      </div>

      <div className="p-8 mt-16">
        <a href="/contact">
        <button className="bg-violetnav text-whiteportfolio py-4 px-16">
          Contactez-moi
        </button></a>
      </div>
    </section>
  );
}
