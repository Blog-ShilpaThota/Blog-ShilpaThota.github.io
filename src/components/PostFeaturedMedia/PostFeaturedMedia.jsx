import React, { FC } from "react";
import { PostDataType } from "../../data/types";
import GallerySlider from "./GallarySlider";
import MediaVideo from "./MediaVideo";
import PostTypeFeaturedIcon from "../../components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import MediaAudio from "./MediaAudio";
import Link from "../../components/Link";
import Image from "../../components/Image";

const PostFeaturedMedia = ({
  className = "w-full h-full",
  post,
}) => {
  const { thumbnail="",href } =
    post || {};
  const postType = "standard";
  return (
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
          href={href}
          className={`block absolute inset-0 ${
            !postType || postType === "standard"
              ? "bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
              : ""
          }`}
        />
      )}
    </div>
  );
};

export default PostFeaturedMedia;
