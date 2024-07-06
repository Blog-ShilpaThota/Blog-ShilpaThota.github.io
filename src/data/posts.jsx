import { PostDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";
import { useItems } from "../contains/ItemContext";
import { useEffect, useState } from "react";

const PostData = () => {
  const { items,categories } = useItems();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [demoPosts, setDemoPosts] = useState([]);
  const [demoPostsNews, setDemoPostsNews] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      // Perform data processing and filtering here based on the items received from useContext
      const filteredPosts = items.map((post, index)=> {
        console.log(post);
        const categorie =Array.isArray(post.categories) && post.categories.length > 0 ? post.categories.map(
          (id) => categories.find((taxonomy) => taxonomy.id === id.id)
        ):[];

        return {
          ...post,
          id: `DEMO_POSTS_${index + 1}`,
          author: DEMO_AUTHORS.find((user) => user.id === post.authorId),
          categories: [categories[0]],
          date: post.date,
          href: post.href,
          readingTime: post.readingTime,
        };
      });

      // Update state variables with the processed data
      setDemoPosts(filteredPosts);
      setDataLoaded(true);
      const demopostNews = (items&&items.length>0)?items.map((post, index) => {
        //  ##########  GET CATEGORY BY CAT ID ######## //
        const categorie = Array.isArray(post.categories) && post.categories.length > 0 ?post.categories.map(
          (id) =>
            categorie.filter((taxonomy) => taxonomy.id === id.id)[0]
        ):[];

        return {
          ...post,
          id: `DEMO_POSTS_NEWS_${index + 1}`,
          author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
          categories: [categories[0]],
          date: post.date,
          href: "#",
        };
      }): [];
      setDemoPostsNews(demopostNews);
      // Similarly, perform data processing and state updates for other variables
    }
  }, [items]);

  if (!dataLoaded || !items) {
    return {
      DEMO_POSTS: [],
      DEMO_POSTS_AUDIO: [],
      DEMO_POSTS_GALLERY: [],
      DEMO_POSTS_VIDEO: [],
      DEMO_POSTS_NEWS: [],
    };
  }

  // FOR MAIN DEMO
  // const DEMO_POSTS_NEWS: PostDataType[] = items.map(
  //   (post, index): PostDataType => {
  //     //  ##########  GET CATEGORY BY CAT ID ######## //
  //     const categories = post.categories.map(
  //       (id) => DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id.id)[0]
  //     );

  //     return {
  //       ...post,
  //       id: `DEMO_POSTS_NEWS_${index + 1}`,
  //       author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
  //       categories: [categories[0]],
  //       date: post.date,
  //       href: "#",
  //     } as PostDataType;
  //   }
  // );

  // // FOR POST TYPE GALLERY
  // const DEMO_POSTS_GALLERY: PostDataType[] = items.map(
  //   (post: any, index: any): PostDataType => {
  //     //  ##########  GET CATEGORY BY CAT ID ######## //
  //     const categories = post.categories.map(
  //       (id: any) =>
  //         DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id.id)[0]
  //     );

  //     return {
  //       ...post,
  //       id: `DEMO_POSTS_GALLERY_${index + 1}`,
  //       author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
  //       categories: [categories[0]],
  //     } as PostDataType;
  //   }
  // );

  // // FOR POST TYPE VIDEO
  // const DEMO_POSTS_VIDEO: PostDataType[] = items.map(
  //   (post: any, index: any): PostDataType => {
  //     //  ##########  GET CATEGORY BY CAT ID ######## //
  //     const categories = post.categories.map(
  //       (id: any) =>
  //         DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id.id)[0]
  //     );

  //     return {
  //       ...post,
  //       id: `DEMO_POSTS_VIDEO_${index + 1}`,
  //       author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
  //       categories: [categories[0]],
  //     } as PostDataType;
  //   }
  // );

  // // FOR POST TYPE AUDIO
  // const DEMO_POSTS_AUDIO: PostDataType[] = items.map(
  //   (post: any, index: any): PostDataType => {
  //     //  ##########  GET CATEGORY BY CAT ID ######## //
  //     const categories = post.categories.map(
  //       (id: any) =>
  //         DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id.id)[0]
  //     );

  //     return {
  //       ...post,
  //       id: `DEMO_POSTS_AUDIO_${index + 1}`,
  //       author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
  //       categories: [categories[0]],
  //     } as PostDataType;
  //   }
  // );

  return {
    DEMO_POSTS: demoPosts,
    DEMO_POSTS_AUDIO: demoPosts,
    DEMO_POSTS_GALLERY: demoPosts,
    DEMO_POSTS_VIDEO: demoPosts,
    DEMO_POSTS_NEWS: demoPostsNews,
  };
};

export default PostData;
