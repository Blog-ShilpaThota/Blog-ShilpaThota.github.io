import React, { FC, useEffect } from "react";
import Heading from "../Heading/Heading";
import Card4 from "../Card4/Card4";
import Card7 from "../Card7/Card7";
import { PostDataType } from "../../data/types";
import Card9 from "../Card9/Card9";
import Card10 from "../Card10/Card10";
import Card11 from "../Card11/Card11";
import Card10V2 from "../Card10/Card10V2";
import Card7Articles from "../Card7/Card7_Articles";
import MySlider from "../MySlider";

const SectionSliderMediumArticles = ({
  heading,
  subHeading,
  className = "",
  posts,
  perView = 5,
}) => {
  let CardComponent = Card7Articles;

  useEffect(()=>{
    console.log(posts);
  });
  return (
    <div className={`nc-SectionSliderPosts ${className}`}>
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-10">
            {/* {posts.map((post) => (
              <Card7Articles key={post.guid} post={post} />
            ))} */}
                  <MySlider
        data={posts}
        renderItem={(item, indx) => <CardComponent key={indx} post={item} />}
        itemPerRow={perView}
      />
          </div>
    
    </div>
  );
};

export default SectionSliderMediumArticles;
