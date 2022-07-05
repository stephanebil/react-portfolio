import React from 'react'

export default function CardItem({titlecarditem,src,titlecarditem2}) {
  return (
    <div className="flex items-center py-3 space-x-6">
      <img src={src} alt="icone" />
      <p className="text-graytitleh2">
        {titlecarditem}{" "}
        <span className="text-graylighttitlecard">{titlecarditem2}</span>
      </p>
    </div>
  );
}
