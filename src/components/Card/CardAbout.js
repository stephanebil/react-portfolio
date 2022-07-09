import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CardAbout({ percentage, titlecardabout }) {
  return (
    <main>
      <div className=" w-[200px] mt-20">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            // Customize the root svg element
            root: {
              
              margin: "1px",
            },
            // Customize the path, i.e. the "completed progress"
            path: {
              
              // épaisseur du cercle intérieur
              strokeWidth: "1px",
              // Path color
              stroke: `#100f3a`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0.25turn)",
              transformOrigin: "center center ",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              
              // épaisseur du cercle extérieur
              strokeWidth: "25px",
              // Trail color
              stroke: "#d6d6d6",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.25turn)",
              transformOrigin: " center center",
            },
            // Customize the text
            text: {
              // Text color
              fill: "#100f3a",
              // Text size
              fontSize: "16px",
              fontWeight: "700",
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7",
            },
          }}
        />
      </div>
      <div className="text-lg text-center mt-10 text-bluegeneraleinformation font-bold uppercase ">
        <p>{titlecardabout}</p>
      </div>
    </main>
  );
}
