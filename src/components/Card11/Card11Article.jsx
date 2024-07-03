import React, { FC, useState } from "react";
import PostCardSaveAction from "../PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "../../data/types";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "../PostFeaturedMedia/PostFeaturedMedia";
import Link from "../Link";
import Image from "../Image";

// export interface Card11Props {
//   className?: string;
//   post: PostDataType;
//   ratio?: string;
//   hiddenAuthor?: boolean;
// }

const Card11Article = ({
  className = "h-full",
  post,
  hiddenAuthor = true,
  ratio = "aspect-w-4 aspect-h-3",
}) => {
  const { title, guid, categories, pubDate, thumbnail } = post;
  const postType="standard";
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 ${ratio}`}
      >
        <div>
          {/* <PostFeaturedMedia post={post} isHover={isHover} /> */}
          <div className={`nc-PostFeaturedMedia relative ${className}`}>
      {postType !== "gallery" && (
        <Image
          alt="featured"
          fill
          className="object-cover"
          src={thumbnail}
          sizes="(max-width: 600px) 480px, 800px"
        />
      )}
      {postType !== "gallery" && (
        <Link
          href={`/article/p/${guid.split('/').pop()}`}
          className={`block absolute inset-0 ${
            !postType || postType === "standard"
              ? "bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
              : ""
          }`}
        />
      )}
    </div>
        </div>
      </div>
      <Link href={`/article/p/${guid.split('/').pop()}` ?? "#"} className="absolute inset-0"></Link>
      {/* <span className="absolute top-3 inset-x-3 z-10">
        <CategoryBadgeList categories={categories} />
      </span> */}

      <div className="p-4 flex flex-col space-y-3">

          <span className="text-xs text-neutral-500">{pubDate}</span>

        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <span className="line-clamp-2" title={title}>
            {title}
          </span>
        </h3>
        {/* <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" />
          <PostCardSaveAction className="relative" />
        </div> */}
      </div>
    </div>
  );
};

export default Card11Article;
