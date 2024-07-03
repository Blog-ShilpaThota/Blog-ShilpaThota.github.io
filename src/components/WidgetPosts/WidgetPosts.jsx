import React, { useEffect, useState } from "react";
import Card3Small from "../../components/Card3Small/Card3Small";
import WidgetHeading1 from "../../components/WidgetHeading1/WidgetHeading1";
import { useItems } from "../../contains/ItemContext";

const WidgetPosts = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
}) => {
  const { items, articles } = useItems();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsDemo = articles;
    setPosts(postsDemo);
  }, [articles]);

  return (
    posts && (
      <div className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}>
        <WidgetHeading1
          title="🎯 Published Posts"
          // viewAll={{ label: "View all", href: "/#" }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {posts.map((post) => (
            <Card3Small
              className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl shadow-md"
              key={post.guid}
              post={post}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default WidgetPosts;
