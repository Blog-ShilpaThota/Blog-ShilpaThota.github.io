import React, { FC, useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import Card11 from "../../components/Card11/Card11";
import Card9 from "../../components/Card9/Card9";
import PostData from "../../data/posts";
import { useItems } from "../../contains/ItemContext";



const SingleRelatedPosts= ({
}) => {
  const {articles}=useItems();
  const [relatedPosts,setRelatedPosts] = useState([]);
  const [moreFromAuthorPosts,setMoreFromAuthorPosts] = useState([]);

  useEffect(()=>{
// DEMO DATA
let demoRelated= articles.filter(
  (_, i) => i >= 10 && i < 14
);
// make differnt href demo, for user can click
demoRelated = demoRelated.map((item, index) => ({
  ...item,
  href: (item.href + index),
}));

let demoMoreFromAuthor = articles.filter(
  (_, i) => i >= 14 && i < 18
);
// make differnt href demo, for user can click
demoMoreFromAuthor = demoMoreFromAuthor.map((item, index) => ({
  ...item,
  href: (item.href + index + "-") ,
}));
setRelatedPosts(demoRelated);
setMoreFromAuthorPosts(demoMoreFromAuthor);
  },[items]);
  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28">
      {/* RELATED  */}
      <div className="container">
        <div>
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            Related posts
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {relatedPosts.map((post) => (
              <Card11 key={post.guid} post={post} />
            ))}
          </div>
        </div>

        {/* MORE FROM AUTHOR */}
        <div className="mt-20">
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            More from author
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {moreFromAuthorPosts.map((post) => (
              <Card9 key={post.guid} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRelatedPosts;
