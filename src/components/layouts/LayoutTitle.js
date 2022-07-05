import React from 'react'

export default function LayoutTitle({
    title,
    title2
}) {
  return (
    <div className="p-8">
      <h2 className="text-graytitleh2 text-[30px]">{title2}</h2>
      <h1 className="text-bluegeneraleinformation text-[72px] font-extrabold">
        {title}
      </h1>
    </div>
  );
}
