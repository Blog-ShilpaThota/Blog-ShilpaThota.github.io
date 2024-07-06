import React, { useEffect, useState } from "react";
import SingleHeaderMediumArticle from "../singles/SingleHeaderMediumArticle";
import Layout from "./Postlayout";
import { useParams } from "react-router-dom";
import { useItems } from "../../contains/ItemContext";
import LoadingPage from "../Loading";

const initialValues={
  link: "",
  guid:"0",
  pubDate: "",
  description:"",
  title: "",
  categories: [],
  author: {
    id: 1,
    href: '',
    name: '',
    avatar: ""
  },
  content:""
}

const PageSingleMediumArticles = () => {
  const { guid } = useParams();
  const {articles}=useItems();
  const [post,setpost] = useState(initialValues);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(()=>{
    console.log(guid);
    if(articles&&articles.length>0){

      articles.map((item) => {if(item.guid?.toString().split('/').pop()===guid.toString()){
        console.log(item);
        setpost(item);
      }});
        }
  },[articles]);
  useEffect(()=>{
    if(post.guid.toString()!=="0"){
      console.log(post);
      setLoading(false);
    }
  },[post]);
  return (
    <>
                 {loading ? (
        <LoadingPage type="bubbles" color="blue" />
      ) : (
    <Layout postContent={post.content}>
      <div className={`nc-PageSingle pt-8 lg:pt-16`}>
        <header className="container rounded-xl">
          <div className="max-w-screen-md mx-auto">
            <SingleHeaderMediumArticle title={post.title} />
          </div>
        </header>
      </div>
    </Layout>)}
    </>
  );
};

export default PageSingleMediumArticles;
