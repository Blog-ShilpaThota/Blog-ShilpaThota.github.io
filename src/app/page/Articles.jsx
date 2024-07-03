import React, { useEffect, useState } from "react";
import ModalCategories from "./ModalCategories";
import Image from "../../components/Image";
import Article from '../../data/images/taxonomy/Article.jpg';
import { useItems } from "../../contains/ItemContext";
import Card9 from "../../components/Card9/Card9";

const Articles = () => {
    const {articles, categories} = useItems();
    const [posts,setPosts] = useState([]);
  useEffect(()=>{
    console.log(articles);
    setPosts(articles);
  },[articles]);
  return (
    <div className={`nc-PageArchive`}>
      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src={Article}
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              Articles
            </h2>
            {/* <span className="block mt-4 text-neutral-300">115 Articles</span> */}
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories categories={categories} />
              {/* <ModalTags tags={DEMO_TAGS} /> */}
            </div>
            <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            {/* <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div> */}
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {posts.map((post) => (
              <Card9 key={post.guid} post={post} />
            ))}
          </div>
          </div>
      </div>
    </div>
  );
};

export default Articles;
