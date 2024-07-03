import React, { useEffect, useState } from "react";
import Card15Podcast from "../../components/Card15Podcast/Card15Podcast";
import Card9 from "../../components/Card9/Card9";
import Heading from "../../components/Heading/Heading";
import { useItems } from "../../contains/ItemContext";
import ButtonThird from "../../components/Button/ButtonThird";
import Pagination from "../../components/Pagination/Pagination";

const SectionMagazine9 = ({
  className = "",
  gapClassName = "gap-6 md:gap-8",
  heading = "Knowledge is Divine",
}) => {
  const { articles } = useItems();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsToShow, setPostsToShow] = useState([]);

  const onPageChange = (i) => {
    setCurrentPage(i);
    const startIndex = (i - 1) * 6; // Adjust this to match your page size
    setPostsToShow(posts.slice(startIndex, startIndex + 6));
  };

  useEffect(() => {
    if (articles && articles.length > 0) {
      setPosts(articles);
      const startIndex = (currentPage - 1) * 6;
      setPostsToShow(articles.slice(startIndex, startIndex + 6));
    }
  }, [articles, currentPage]);

  return (
    <div className={`nc-SectionMagazine9 relative ${className}`}>
      {heading && (
        <Heading desc={"Infinite Wisdom, Infinite Technology"} isCenter='true'>
          {heading}
        </Heading>
      )}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClassName}`}
      >
        {postsToShow.slice(0, 3).map((post, index) => (
          <Card9 key={index} ratio="aspect-w-4 aspect-h-3" post={post} />
        ))}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClassName} mt-8`}
      >
        {postsToShow.slice(3, 6).map((post, index) => (
          <Card15Podcast key={index} post={post} />
        ))}
      </div>
      <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(posts.length / 6)}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default SectionMagazine9;
