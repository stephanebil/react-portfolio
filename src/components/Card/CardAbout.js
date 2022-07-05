import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CardAbout({ percentage, titlecardabout }) {
  return (
    <main>
      <div className='p-8 mt-14' style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div className="text-lg text-center mt-10 text-bluegeneraleinformation font-bold uppercase ">
        <p>{titlecardabout}</p>
      </div>
    </main>
  );
}
