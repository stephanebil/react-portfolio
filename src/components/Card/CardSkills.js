import React from 'react'


export default function CardSkills({
  pourcentWidth,
  titleBarProgress,
  percentvalue,
  colorBar,
}) {
  return (
    <main>
      <div className="flex justify-between mb-1">
        <div className="mb-1 text-base text-bluegeneraleinformation font-medium ">
          {titleBarProgress}
        </div>
        <span className="text-sm font-medium text-bluegeneraleinformation ">
          {percentvalue}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div
          className={`${colorBar} h-2.5 rounded-full  ${pourcentWidth}`}
          //   style={{width: "45%"}}
        ></div>
      </div>
    </main>
  );
}
