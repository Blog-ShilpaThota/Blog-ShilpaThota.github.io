import CardLarge1 from "../../components/CardLarge1/CardLarge1";
import Heading from "../../components/Heading/Heading";
import React, { FC, useState } from "react";


const SectionLargeSlider = ({
  posts,
  heading = "Top Articles",
  className = "",
}) => {
  const [activePostID, setActivePostID] = useState(posts[0]?.postID); // Set the initial active post ID

  const handleClickNext = () => {
    const currentIndex = posts.findIndex(post => post.postID === activePostID);
    const nextIndex = (currentIndex + 1) % posts.length;
    setActivePostID(posts[nextIndex].postID);
  };

  const handleClickPrev = () => {
    const currentIndex = posts.findIndex(post => post.postID === activePostID);
    const prevIndex = (currentIndex - 1 + posts.length) % posts.length;
    setActivePostID(posts[prevIndex].postID);
  };
  return (
    <div className={`nc-SectionLargeSlider relative ${className}`}>
      {!!heading && <Heading>{heading}</Heading>}
      {posts.map((item) => {
        console.log(item.postID);
        console.log(activePostID);
        if (activePostID !== item.postID) return null;
        return (
          <CardLarge1
            key={item.postID}
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
            post={item}
          />
        );
      })}
    </div>
  );
};

export default SectionLargeSlider;
