import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalCategories from "./ModalCategories";
import Image from "../../components/Image";
import { useItems } from "../../contains/ItemContext";
import LoadingPage from "../Loading";
import Card11Article from "../../components/Card11/Card11Article";


const initialValue={
    id: "1",
    name: "Java",
    href: "/category/1",
    thumbnail:"https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg",
    color:"pink",
    subcategory:[
      {
        subid:"1",
        subname:"Tutorial",
        href:"/subcategory/1/1",
        thumbnail:"https://www.finoit.com/wp-content/uploads/2022/11/future-of-java-programming-language.jpg",

      }
    ]
  
}
const Category = () => {
  const { categoryId } = useParams();

    const {categories,articles} = useItems();
    const [articlesMatched,setArticlesMatched] = useState([]);
    const [category,setCategory]=useState(initialValue);
    const [categoryUpdated,setCategoryUpdated]=useState(false);
    const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(categories.length>0){
    const categoryDetails = categories.find(i => i.id.toString()===categoryId);
    setCategory(categoryDetails);
    setCategoryUpdated(true);
    setLoading(false);
    }
  }
  ,[categories]);
  useEffect(()=>{
    if(categoryUpdated){
      const normalizeCategory = (categor) => {
        console.log(categor);
        return categor.toLowerCase().replace(/[\s-]/g, "");
      };
      
      // Filter articles based on category
      const filteredArticles = articles.filter(article =>
        article.categories.length>0 && article.categories.some(artcategory =>
          normalizeCategory(artcategory).includes(normalizeCategory(category.name))
        )
      );
      setArticlesMatched(filteredArticles);
      console.log(filteredArticles);
    }
  },[category,articles]);
  return (

    <div className={`nc-PageArchive`}>
             {loading ? (
        <LoadingPage type="bubbles" color="blue" />
      ) : (
<>
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto flex-grow">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src={category.thumbnail}
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              {category.name}
            </h2>
            {/* <span className="block mt-4 text-neutral-300">115 Articles</span> */}
          </div>
        </div>
      </div>
      <div className="flex">
      {/* <SideBar category={category} subcategories={category.subcategory} /> */}
      <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>

          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories categories={categories}/>
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {articlesMatched.map((article) => (
              <Card11Article key={article.guid} post={article} />
            ))}
          </div>
        </div>
        </div>
        </div>
        </>)}
    </div>
  );
};

export default Category;
