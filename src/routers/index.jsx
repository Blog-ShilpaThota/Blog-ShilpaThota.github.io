import React from "react";
import { Route, Routes } from "react-router-dom";
import PageHome from "../app/home/page";
import PageLogin from "../app/page/LoginPage";
import SiteHeader from "../app/SiteHeader";
import DashboardEditCategory from "../app/dashboard/edit-category/page";
import Category from "../app/page/Category";
import PageSingle from "../app/page/Post";
import PageAuthor from "../app/page/AuthorPage";
import Page404 from "../app/not-found"; 
import Repositories from "../app/page/Repositories";
import Projects from "../app/page/Projects";
import Articles from "../app/page/Articles";
import CategoryHome from "../app/page/CategoryHome";
import PageSingleMediumArticles from "../app/page/PostMediumArticles";
import MediumArticles from "../app/page/MediumArticles";

export const pages= [

  // // archives page -------------------------------------------------------
  { path: "/category/:categoryId", component: Category },
 { path: "/category", component: CategoryHome },
  { path: "/authors/*", component: PageAuthor },
  // // single page ------------------------------------------------------
  { path: "/single/:postId", component: PageSingle },
  {path:"/article/p/:guid",component:PageSingleMediumArticles},
  { path: "/login", component: PageLogin },
  { path: "/dashboard/posts", component: DashboardEditCategory },
  { path: "/dashboard/edit-category", component: DashboardEditCategory },
  { path: "/dashboard", component: DashboardEditCategory },
  { path: "/repositories", component: Repositories },
  { path: "/projects", component: Projects },
  { path: "/articles", component: Articles },
  {path:"/posts",component:MediumArticles},
  { path: "/", component: PageHome },


];

const MyRoutes = () => {
  return (
    <>
      <SiteHeader />
      <Routes>
        {pages.map(({ component: Component, path }, index) => {
          return <Route exact={true} key={index} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>
      </>
  );
};

export default MyRoutes;
