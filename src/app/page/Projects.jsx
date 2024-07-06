import React, { useEffect, useState } from "react";
import { useItems } from "../../contains/ItemContext";
import SectionSliderPostsProjects from "../../components/Sections/SectionSliderPosts_Projects";


const Projects = () => {
 const items =[
    {
      id:'1',
      title:'Shilpa Blog',
      subtitle:'Blog by Shilpa with covering all technology topics',
      featuredImage:'/images/Project1.png'
    },
    {
      id:'2',
      title:'Shilpa Profile',
      subtitle:'Tried Innovative way to showcase my profile',
      featuredImage:'/images/Project2.png'
    },
    {
      id:'3',
      title:'Shree Nandi Interiors',
      subtitle:'Developed from scratch and used AWS end to end solution',
      featuredImage:'/images/Project3.png'
    },
    {
      id:'4',
      title:'BioInquiries',
      subtitle:'Used React and Bootstrap for end to end development',
      featuredImage:'/images/Project4.png'
    },
    {
      id:'5',
      title:'Resume',
      subtitle:'Developed Resume using HTML and CSS',
      featuredImage:'/images/Project5.png'
    }
  ];  
  return (
    <div className={`nc-Repositories `}>
      <div className="w-full">
        <div className="container -mt-10 lg:-mt-16">
        <SectionSliderPostsProjects
          className="py-16 lg:py-28"
          postCardName="card9"
          heading="My Projects"
          subHeading="Different Tech Stack | Various Environment | Multiple Domains"
          posts={items}
        />              </div>
              </div>
    </div>
  );
};

export default Projects;
