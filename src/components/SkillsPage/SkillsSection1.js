import React from 'react'
import CardSkills from '../Card/CardSkills';
import LayoutTitle from '../layouts/LayoutTitle';

export default function SkillsSection1() {
  return (
    <section>
      <LayoutTitle title2="Ce que je fais bien" title="Mes compétences" />
      <div className="p-8 text-graytitleh2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          veniam doloribus consequatur itaque aliquam, autem dolorum! Inventore
          distinctio mollitia iure eos facere. Ducimus neque facere commodi
          delectus sed doloremque officia assumenda, nesciunt sequi quisquam
          ullam expedita similique iusto aliquid dolorum corporis quaerat
          accusantium porro obcaecati. Excepturi tempora illum cum enim!
        </p>
      </div>
      <div className="md:flex space-x-20 p-8 ">
        <div className="w-full">
          <CardSkills
            pourcentWidth="w-[70%]"
            titleBarProgress="HTML5"
            percentvalue="70%"
            colorBar="bg-gradient-to-r from-cyan-500 to-violet-500"
          />
          <CardSkills
            pourcentWidth="w-[100%]"
            titleBarProgress="React"
            percentvalue="100%"
            colorBar="bg-gradient-to-r from-green-500 to-yellow-200"
          />
        </div>
        <div className="w-full">
          <CardSkills
            pourcentWidth="w-[60%]"
            titleBarProgress="CSS"
            percentvalue="60%"
            colorBar="bg-gradient-to-r from-red-500 to-purple-500"
          />
          <CardSkills
            pourcentWidth="w-[90%]"
            titleBarProgress="WordPress"
            percentvalue="90%"
            colorBar="bg-gradient-to-r from-green-500 to-blue-500"
          />
        </div>
        <div className="w-full">
          <CardSkills
            pourcentWidth="w-[75%]"
            titleBarProgress="JavaScript"
            percentvalue="75%"
            colorBar="bg-gradient-to-r from-cyan-500 to-purple-500"
          />
          <CardSkills
            pourcentWidth="w-[100%]"
            titleBarProgress="HTML5"
            percentvalue="100%"
            colorBar="bg-gradient-to-r from-red-500 to-orange-300"
          />
        </div>
      </div>
    </section>
  );
}
