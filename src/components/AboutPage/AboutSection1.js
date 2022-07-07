import React from 'react'
import CardAbout from '../Card/CardAbout'
import LayoutTitle from '../layouts/LayoutTitle'


export default function AboutSection1() {
  return (
    <section>
      <LayoutTitle title2="Développeur full stack" title="Stéphane Bilella" />

      <div className="p-8">
        <h3 className="text-bluegeneraleinformation text-[30px] mb-10 font-[600]">
          Descritption
        </h3>
        <p className="text-graytitleh2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quod
          explicabo possimus minus? Fuga ex qui distinctio doloremque accusamus
          fugit, excepturi quae eligendi porro architecto? Accusantium, vitae,
          quas deleniti, eveniet delectus possioriosam maxime numquam ullam
          quisquam? Dolorum est eum quae repellat, dolor ex voluptatum
          reprehenderit consequatur sapiente voluptas ab, sequi, iure veniam.
          Placeat cum id officia sequi nulla qui laboriosam tempore non animi.
          Quidem, molestias.
        </p>
      </div>

      <div className=" grid items-center md:flex justify-around ">
        <CardAbout percentage={75} titlecardabout="intuition" />
        <CardAbout percentage={83} titlecardabout="creativity" />
        <CardAbout percentage={25} titlecardabout="pure luck" />
        <CardAbout percentage={95} titlecardabout="awesomeness" />
      </div>
    </section>
  );
}
