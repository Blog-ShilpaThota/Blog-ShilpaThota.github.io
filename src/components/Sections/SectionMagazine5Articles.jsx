import React,{useEffect, useState} from "react";
import HeaderFilter from "./HeaderFilter";
import Card12 from "../Card12/Card12";
import Card13 from "../Card13/Card13";
import { useItems } from "../../contains/ItemContext";

const SectionMagazine5Articles = ({
  heading = "Latest Articles 🎈 "}) => {
    const { articles } = useItems();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filtered,setFiltered] = useState(articles);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };
useEffect(()=>{
  if(articles&&articles.length>0 && selectedCategory){
    const normalizeCategory = (categor) => {
      console.log(categor);
      return categor.toLowerCase().replace(/[\s-]/g, "");
    };
    
    // Filter articles based on category
    const filteredArticles = articles.filter(article =>
      article.categories.length>0 && article.categories.some(artcategory =>
        normalizeCategory(artcategory).includes(normalizeCategory(selectedCategory.name))
      )
    );
    console.log(filteredArticles);
  setFiltered(filteredArticles);
  }
},[selectedCategory,articles]);
  
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

export default SectionMagazine5Articles;
