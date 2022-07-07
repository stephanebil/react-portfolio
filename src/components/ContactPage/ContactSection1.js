import React from 'react'
import CardContact from '../Card/CardContact';
import LayoutTitle from "../layouts/LayoutTitle"

export default function ContactSection1() {
  return (
    <section>
      <LayoutTitle title2="" title="Contactez moi" />

      <div className="text-graytitleh2 p-8 md:w-[900px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea
          mollitia ut modi minus. Repellendus iste reiciendis earum autem, illo
          eos est reprehenderit sed officia modi. Pariatur quaerat sit illum,
          consequatur nisi enim velit autem officia fuga alias adipisci ab
          tempore debitis cupiditate quidem deserunt rerum esse amet
          perferendis? Reprehenderit.
        </p>
      </div>
      <div className="p-8">
        <CardContact />
      </div>
    </section>
  );
}
