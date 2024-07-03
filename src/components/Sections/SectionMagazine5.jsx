import React,{useEffect, useState} from "react";
import HeaderFilter from "./HeaderFilter";
import Card12 from "../../components/Card12/Card12";
import Card13 from "../../components/Card13/Card13";
import { useItems } from "../../contains/ItemContext";

const SectionMagazine5 = ({
  heading = "Latest Articles 🎈 "}) => {
    const { items } = useItems();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filtered,setFiltered] = useState(items);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };
useEffect(()=>{
  if(items&&items.length>0){
  const filteredPosts = selectedCategory
  ? items.filter((post) =>
      post.categories.some((cat) => cat.id === selectedCategory.id)
    )
  : items;
  setFiltered(filteredPosts);
  }
},[selectedCategory,items]);
  
  return (
    <div className="nc-SectionMagazine5">
      <HeaderFilter heading={heading} onchange={handleCategoryChange}/>
      {!filtered.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
        {filtered[0] && <Card12 post={filtered[0]} />}
        <div className="flex flex-col gap-5 md:gap-7">
          {filtered
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <Card13 className="flex-1" key={index} post={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
