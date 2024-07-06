import React from "react";
import Link from "../../components/Link";
import Image from "../../components/Image";

const Card3Small = ({ className = "h-full", post}) => {
  const { title, guid, thumbnail } = post;

  return (
    <div className={`nc-Card3Small relative flex flex-col items-start ${className} rounded-xl shadow-md bg-white dark:bg-neutral-900`}>
      <Link href={`/article/p/${guid.split('/').pop()}` ?? "#"} className="absolute inset-0" title={title}></Link>
      <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
        <Image
          alt="featured"
          sizes="100px"
          className="object-cover w-full h-full"
          src={thumbnail}
          fill
          title={title}
        />
      </div>
      <div className="p-4 space-y-2 flex-1">
        <h2 className="nc-card-title block text-sm sm:text-base font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100">
          <Link href={`/article/p/${guid.split('/').pop()}` ?? "#"} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Card3Small;
