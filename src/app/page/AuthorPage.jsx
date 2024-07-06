import React from "react";
import SocialsList from "../../components/SocialsList/SocialsList";
import NcImage from "../../components/NcImage/NcImage";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import VerifyIcon from "../../components/VerifyIcon";
import Image from "../../components/Image";

const PageAuthor = () => {
  return (
    <div className={`nc-PageAuthor `}>
      {/* HEADER */}
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            alt=""
            containerClassName="absolute inset-0"
            sizes="(max-width: 1280px) 100vw, 1536px"
            src="https://www.zdnet.com/a/img/resize/0a6b0be2f543ddbf313fc83a706b807b77c3c202/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=900&width=1200"
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="container -mt-10 lg:-mt-16">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
            <div className="w-32 lg:w-40 flex-shrink-0 mt-12 sm:mt-0">
              <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0 shadow-2xl z-0">
                <Image
                  alt="Avatar"
                  src="/shilpa.jpg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/*  */}
            <div className="pt-5 md:pt-1 lg:ml-6 xl:ml-12 flex-grow">
              <div className="max-w-screen-sm space-y-3.5 ">
                <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span>Shilpa Thota</span>
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </h2>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                    I'm a Technology Entusiast with 13 years of experience of IT industry experience. I have showcased my skills in both front end and back end with seamless experience in cloud Technologies. Kubernetes is one of my favourites. I like blogging and doing research on topic. I constantly ask Why this tool and not other tool which is the base of all my articles.
                </span>
                <a
                  href="##"
                  className="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"
                >
                  <GlobeAltIcon className="flex-shrink-0 w-4 h-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 truncate">
                    https://shilpathota.com
                  </span>
                </a>
                <SocialsList itemClass="block w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageAuthor;
