import React, { FC } from "react";
import { PostDataType } from "../../data/types";
import Link from "../../components/Link";
import ButtonPlayMusicPlayer from "../ButtonPlayMusicPlayer";
import Image from "../../components/Image";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

// export interface Card15PodcastProps {
//   className?: string;
//   post: PostDataType;
// }

const Card15Podcast= ({
  className = "h-full",
  post,
}) => {
  const { title, guid, thumbnail, pubDate } = post;
  const href = `/article/p/${guid.split('/').pop()}`;

  return (
    <div
      className={`nc-Card15Podcast relative flex group items-center p-3 rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 ${className}`}
    >
      <div className="w-1/4 flex-shrink-0">
        <Link
          href={href ?? "#"}
          className="block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg"
        >
          <Image
            className="object-cover w-full h-full"
            src={thumbnail}
            fill
            alt={title}
            sizes="100px"
          />
        </Link>
      </div>

      <div className="flex flex-col flex-grow ml-4">
        <h2 className={`nc-card-title block font-semibold text-sm sm:text-lg`}>
          <Link
            href={href ?? "#"}
            className={"line-clamp-2"}
            title={title}
          >
            {title}
          </Link>
        </h2>
        <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 ">
          {pubDate}
        </span>
      </div>
    </div>
  );
};

export default Card15Podcast;
