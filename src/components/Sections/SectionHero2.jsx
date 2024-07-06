import React from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Image from "../../components/Image";

const SectionHero2 = () => {
  return (
    <div className="SectionHero2 relative bg-black" style={{ height: '500px', maxHeight: '500px', overflow: 'hidden' }}>
      <div className="flex w-full mb-10 md:w-1/2 xl:w-3/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:mb-0">
        <div className="hidden md:block absolute z-[1] top-0 left-0 bottom-0 w-44 from-black bg-gradient-to-r"></div>
        <Image
          fill
          className="object-cover h-full"
          src={"images/Designer1.png"}
          sizes="1260px"
          alt="hero"
        />
      </div>
      <div className="container relative z-10 text-neutral-100 h-full">
        <div className="max-w-3xl h-full flex flex-col justify-center">
          <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl mt-3 md:!leading-[110%] ">
            The hidden knowledge in Technology
          </h1>
          <p className="mt-7 text-base lg:text-xl text-neutral-300">
            In an age where technology shapes every facet of our existence, the intricate dance between man and machine reveals an unseen world of knowledge. Join us as we explore the secrets of technology, delving into the innovations that drive progress and the hidden wisdom that powers our digital future. Let this be your gateway to understanding the profound impact of technology on our lives and the limitless possibilities it offers.
          </p>
          <div className="flex space-x-4 mt-11">
            <ButtonPrimary href="/posts">Read more</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
