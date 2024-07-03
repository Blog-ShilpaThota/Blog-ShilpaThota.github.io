import { useItems } from "../../contains/ItemContext";
import { useEffect, useState } from "react";
import LoadingPage from "../Loading";
import CardCategory1 from "../../components/CardCategory1/CardCategory1";
import Image
 from "../../components/Image";

 import Category from '../../images/OIG2.jpg';

const CategoryHome =()=>{
    const {categories} = useItems();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        if(categories && categories.length>0){
            setLoading(false);
        }
    },[categories]);
    return(
<>

<>
      {loading ? (
        <LoadingPage type="bubbles" color="blue" />
      ) : (
        <>
            <div className={`nc-PageArchive`}>
 {/* HEADER */}
 <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src={Category}
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              Categories
            </h2>
            {/* <span className="block mt-4 text-neutral-300">115 Articles</span> */}
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">

      <div className="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
        {categories.map((cat) => (
          <CardCategory1 key={cat.id} taxonomy={cat} size="normal" />
        ))}
      </div>
      </div>
      </div>
      </>)}
      </></>
    );
}

export default CategoryHome;