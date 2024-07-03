import React, { useState,useEffect } from "react";
import SingleContentMediumArticle from "../singles/SingleContentMediumArticle";
import Loading from "../../components/Button/Loading";

const Layout = ({ children,postContent }) => {
  const [loading,setLoading] = useState(true);
  console.log(postContent);
  return (
    <>
    {/* {loading?(<Loading type="bubbles" color="blue"/>):( */}
    <div>
      {children}

      {/* SINGLE MAIN CONTENT */}
      <div className="container mt-10">
        <SingleContentMediumArticle content={postContent}/>
      </div>
    </div>
    {/* )} */}
    </>
  );
};

export default Layout;
