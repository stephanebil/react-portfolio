import React from 'react'

export default function CardServices({ srcIcone, titleServices, descriptionServices }) {
  return (
    <main className="flex">
      <div className="">
        <img src={srcIcone} alt="Icone" />
      </div>
      <div className="">
        <h2 className="text-bluegeneraleinformation">{titleServices}</h2>
        <p>{descriptionServices}</p>
      </div>
    </main>
  );
}
