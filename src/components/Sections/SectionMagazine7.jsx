import Card10 from "../../components/Card10/Card10";
import Card10V3 from "../../components/Card10/Card10V3";
import Heading from "../../components/Heading/Heading";
import PostData from "../../data/posts";
import { PostDataType } from "../../data/types";
import React, { FC } from "react";

const { DEMO_POSTS_GALLERY } = PostData();
const postsDemo = DEMO_POSTS_GALLERY.filter(
  (_, i) => i > 7 && i < 17
);

const SectionMagazine7 = ({
  posts = postsDemo,
  className = "",
}) => {
  return (
    <div className={`nc-SectionMagazine7 relative ${className}`}>
      <Heading desc={"Over 218 articles has gallery type"}>
        {"View more gallery articles"}
      </Heading>
      <div className={`grid grid-cols-1 gap-6 md:gap-8`}>
        <div className={`grid gap-6 md:gap-8 lg:grid-cols-2`}>
          <Card10V3 post={posts[0]} />
          <Card10V3 galleryType={2} post={posts[1]} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3">
          <Card10 post={posts[2]} />
          <Card10 post={posts[3]} />
          {posts[4] && <Card10 post={posts[4]} />}
          {posts[5] && <Card10 post={posts[5]} />}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine7;
