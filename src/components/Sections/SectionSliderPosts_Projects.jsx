import React, { FC } from "react";
import Heading from "../Heading/Heading";
import Card4 from "../Card4/Card4";
import Card7 from "../Card7/Card7";
import { PostDataType } from "../../data/types";
import Card9 from "../Card9/Card9";
import Card10 from "../Card10/Card10";
import Card11 from "../Card11/Card11";
import Card10V2 from "../Card10/Card10V2";
import Card7Projects from "../Card7/Card7_Projects";

const SectionSliderPostsProjects = ({
  heading,
  subHeading,
  className = "",
  posts,
  postCardName = "card11",
  perView = 3,
}) => {
  let CardComponent = Card4;

  switch (postCardName) {
    case "card4":
      CardComponent = Card4;
      break;
    case "card7":
      CardComponent = Card7;
      break;
    case "card9":
      CardComponent = Card9;
      break;
    case "card10":
      CardComponent = Card10;
      break;
    case "card10V2":
      CardComponent = Card10V2;
      break;
    case "card11":
      CardComponent = Card11;
      break;

    default:
      break;
  }

  return (
    <div className={`nc-SectionSliderPosts ${className}`}>
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-10">
            {posts.map((post) => (
              <Card7Projects key={post.id} post={post} />
            ))}
          </div>
    
    </div>
  );
};

export default SectionSliderPostsProjects;
