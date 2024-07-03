import Card16Podcast from "../../components/Card16Podcast/Card16Podcast";
import Card17Podcast from "../../components/Card17Podcast/Card17Podcast";
import Heading from "../../components/Heading/Heading";
import { useItems } from "../../contains/ItemContext";
import { PostDataType } from "../../data/types";
import React, { FC, useEffect, useState } from "react";

const SectionMagazine8 = ({
  className = "",
}) => {
  const { articles } = useItems();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (articles && articles.length>0) {
      // // Perform your data processing here based on items received from useContext
      // const demoPosts = articles
      //   .map((post, index) => {
      //     // Example data processing logic
      //     return {
      //       ...post,
      //       // Additional properties assignment
      //     };
      //   });
      
      setPosts(articles);
    }
  }, [articles]);

  return (
    !articles ? (
      <div>Loading...</div>
    ) : (<div className={`nc-SectionMagazine8 relative ${className}`}>
      <Heading
        desc={"Technology is creating wonders. Let us explore its endless possibilities."}
        className="mb-14 text-neutral-900 dark:text-neutral-50"
      >
        Read the most exciting content
      </Heading>
      <div className={`grid grid-cols-1 sm:grid-cols-6 gap-6 md:gap-8`}>
        <Card16Podcast
          className="sm:col-span-3 lg:col-span-2"
          post={posts[0]}
        />
        <Card16Podcast
          className="sm:col-span-3 lg:col-span-2"
          post={posts[1]}
        />
        <div className="flex flex-col space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2">
          {posts
          .filter((_,i)=>i<3)
            .map((p) => (
              <Card17Podcast key={p.guid} post={p} />
            ))}
        </div>
      </div>
    </div>)
  );
};

export default SectionMagazine8;
