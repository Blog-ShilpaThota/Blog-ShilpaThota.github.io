import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleContentDemo = ({ filePath }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(filePath);
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchData();
  }, [filePath]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default SingleContentDemo;
