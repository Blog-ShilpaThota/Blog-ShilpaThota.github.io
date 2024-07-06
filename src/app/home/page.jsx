import React, { useEffect, useState } from "react";
import SectionHero2 from "../../components/Sections/SectionHero2"
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "../../components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionMagazine9 from "../../components/Sections/SectionMagazine9";
import { useItems } from "../../contains/ItemContext";
import LoadingPage from "../Loading";
import SectionMagazine5Articles from "../../components/Sections/SectionMagazine5Articles";

const Home= () => {
  const {categories,articles} = useItems();
  const [medArticles,setMedArticles] = useState([]);
  const [filteredCategories,setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  function getRandomItems(arr, numItems) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, numItems);
  }

  useEffect(()=>{
    // DEMO DATA
    if(articles&& articles.length>0){
    setMedArticles(articles);
    setLoading(false);

    }
  },[articles]);
  useEffect(()=>{
    if(categories&&categories.length>0){
      const cat = getRandomItems(categories,10);
      setFilteredCategories(cat);
    }
  },[categories]);
  return (
    <div className="nc-PageHomeDemo3 relative" style={{backgroundColor:'#e5e7eb',minWidth:'100%'}}>
       {loading ? (
        <LoadingPage type="bubbles" color="blue" />
      ) : (
      <div style={{minWidth:'100%'}}>
                <SectionHero2 />
        <SectionGridCategoryBox
          headingCenter={true}
          categoryCardType="card2"
          className="pb-16 lg:pb-28"
          categories={filteredCategories}
        />
        <div className="relative py-16">
          <SectionMagazine5Articles heading="🧩 Author Picks" posts={medArticles} />
        </div>
       
        <div className="relative py-16">
          <BackgroundSection />
          <SectionMagazine9
            posts={medArticles}
          />

        </div>
      </div>)}
    </div>
  );
};

export default Home;
