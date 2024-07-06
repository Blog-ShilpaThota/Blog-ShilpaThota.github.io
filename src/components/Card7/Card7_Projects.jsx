import React, { FC } from "react";
import PostCardSaveAction from "../PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "../../data/types";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "../Link";
import Image from "../Image";

// export interface Card7Props {
//   className?: string;
//   post: PostDataType;
//   hoverClass?: string;
//   ratio?: string;
// }

const Card7Projects = ({
  className = "h-full",
  ratio = "aspect-w-6 aspect-h-7 sm:aspect-h-8",
  post,
  hoverClass = "",
}) => {
  const {
    title,
    subtitle,
    href,
    featuredImage,
  } = post;
  
  return (
    <div
      className={`nc-Card7 relative flex flex-col group rounded-3xl border-4 border-black/50 overflow-hidden z-0 ${hoverClass} ${className}`}
      style={{ height: '300px' }}  
    >
        <Image
          fill
          alt=""
          sizes="(max-width: 600px) 480px,800px"
          className="object-cover w-full h-full rounded-3xl "
          src={featuredImage}
          style={{objectFit:'cover'}}
        />
        <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>

      <div className="absolute bottom-3 inset-x-3 p-4 bg-black/70 dark:bg-neutral-900/70 items-center justify-center flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow" style={{height:'100px'}}>
  <div className="flex flex-col items-center space-y-2.5 mb-3">
    <h2 className="block text-lg font-bold text-neutral-300 dark:text-neutral-100 text-center">
        {title}
    </h2>
    <h4 className="block text-sm font-semibold text-neutral-300 dark:text-neutral-50">
        {subtitle}
    </h4>
  </div>
</div>
    </div>
  );
};

export default Card7Projects;
