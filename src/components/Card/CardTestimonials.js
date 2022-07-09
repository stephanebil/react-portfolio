import React from 'react'

export default function CardTestimonials({
  titleTestimonials,
  descriptionTestimonials,
  srcTestimonials,
  nameTestimonials,
}) {
  return (
    <main>
      <div className="w-[350px] bg-white p-8 font-[600] text-graytitleh2 ">
        <h3 className="text-bluegeneraleinformation text-[20px] font-[700]">
          {titleTestimonials}
        </h3>
        <p className="mt-4 ">{descriptionTestimonials}</p>
        <img
          className="mt-8 rounded-full"
          src={srcTestimonials}
          alt="portrait du témoin"
        />
        <p className="mt-8 ">
          <span className="text-violetnav">{nameTestimonials}</span> Customer
        </p>
      </div>
    </main>
  );
}
