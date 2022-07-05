import React from 'react'

export default function CardServices({ srcIcone, titleServices, descriptionServices }) {
  return (
    <main className="flex space-x-8">
      <div className="">
        <img className="min-w-[40px]" src={srcIcone} alt="Icone" />
      </div>
      <div className="">
        <h2 className="text-bluegeneraleinformation text-[30px] font-[800]">
          {titleServices}
        </h2>
        <p>{descriptionServices}</p>
      </div>
    </main>
  );
}
