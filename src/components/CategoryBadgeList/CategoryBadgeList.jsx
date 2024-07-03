import { CategoryType, PostDataType } from "../../data/types";
import React, { FC, useEffect, useState } from "react";
import Badge from "../../components/Badge/Badge";
import { DEMO_CATEGORIES } from "../../data/taxonomies";
import { useItems } from "../../contains/ItemContext";

// export interface CategoryBadgeListProps {
//   className?: string;
//   itemClass?: string;
//   categories: PostDataType["categories"];
// }

const CategoryBadgeList = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  categoriesList,
}) => {
  const {items,categories} = useItems();
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    if(categoriesList&&categoriesList.length>0&&categoriesList[0]!==undefined){
      const catList = [];
      console.log(categoriesList);

      categoriesList.forEach((categoryId) => {
        const dataForCategory = categories.filter((data) =>
          data.id===categoryId.id
        );
        catList.push(...dataForCategory);
      });  
      setCategoryList(catList);  
    }
  },[items]);
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      {categoryList.map((item, index) => (
        <Badge
          className={itemClass}
          key={index}
          name={item.name}
          href={item.href}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default CategoryBadgeList;
