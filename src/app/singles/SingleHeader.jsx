import React, { FC, useEffect, useState } from "react";
import CategoryBadgeList from "../../components/CategoryBadgeList/CategoryBadgeList";
import SingleTitle from "./SingleTitle";
import PostMeta2 from "../../components/PostMeta2/PostMeta2";
import SingleMetaAction2 from "./SingleMetaAction2";
import { DEMO_CATEGORIES } from "../../data/taxonomies";
import { CategoryType, PostDataType } from "../../data/types";
import { useItems } from "../../contains/ItemContext";

// export interface SingleHeaderProps {
//   hiddenDesc?: boolean;
//   titleMainClass?: string;
//   className?: string;
//   title?:string;
//   categories?:CategoryType[];
//   post?:PostDataType;
// }

const SingleHeader = ({
  titleMainClass,
  hiddenDesc = false,
  className = "",
  title="",
  description="",
}) => {
  hiddenDesc = false;
  return (
    <>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          {/* <CategoryBadgeList
            itemClass="!px-3"
            categories={category}
          /> */}
          <SingleTitle
            title={title}
          />
          {!hiddenDesc && (
            <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
              {description}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleHeader;
