import React from 'react'

export default function CardPortfolio({srcPortfolio, 
    altportfolio, 
    titlePortfolio}
    
    ) {
  return (
    <main>
      <div className="">
        <img className='w-[320px]' src={srcPortfolio} alt={altportfolio} />
        <h3 className="text-center text-bluegeneraleinformation font-[800] p-8">
          {titlePortfolio}
        </h3>
      </div>
    </main>
  );
}
