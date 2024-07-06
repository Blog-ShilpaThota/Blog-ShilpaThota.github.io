import ButtonPrimary from "../../components/Button/ButtonPrimary";
import React, { FC, ReactNode } from "react";
import Image from "../Image";

const SectionHero = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    // <div className={`nc-SectionHero relative ${className}`}>
      /* <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {!!btnText && <ButtonPrimary href="/">{btnText}</ButtonPrimary>}
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={rightImg} alt="" />
        </div>
      </div> 
       </div> */
<div className="container" style={{ position: 'relative', margin: '0 auto', width: '100%', color: 'white', maxHeight: 'clamp(450px, 50vh, 600px)', overflow: 'hidden', placeContent: 'center', placeItems: 'center', display: 'grid', gridTemplate: 'container', gridArea: 'container' }}>
  <div className="title" style={{ position: 'relative', zIndex: '1', fontFamily: 'Gordiatas, sans-serif', fontSize: 'clamp(1rem, 5vw, 3rem)', textAlign: 'center', padding: '0.5rem' }}>
    <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
      {heading}
    </h2>
    <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
      {subHeading}
    </span>
    {!!btnText && <ButtonPrimary href="/">{btnText}</ButtonPrimary>}
  </div>
  <img className="image" src={rightImg} width="1200" height="675" alt='Technology Everywhere' style={{ width: '100%', height: 'auto', aspectRatio: '16 / 9', objectFit: 'cover', position: 'relative', zIndex: '-1' }} />
</div>

  );
};

export default SectionHero;
