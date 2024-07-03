import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Button from "../Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useItems } from "../../contains/ItemContext";
import LoadingPage from "../../app/Loading";
import { useNavigate } from "react-router-dom";

const HeaderFilter = ({ heading = "🎈 Latest Articles", onchange }) => {
  const { categories } = useItems();
  const [tabActive, setTabActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (categories && categories.length > 0) {
      if (!tabActive || !categories.find(cat => cat.id === tabActive.id)) {
        setTabActive(categories[0]); // Set the default active tab if tabActive is not set or does not exist in the new categories
      }
      setLoading(false);
        }
  }, [categories,tabActive]);

  const handleClickTab = (item) => {
    console.log("Clicked:", item); // Debugging: Check if handleClickTab is triggered
    console.log(tabActive);
    if (tabActive && item.id === tabActive.id) {
      console.log(item);
      onchange(item);
    } else {
      setTabActive(item);
      onchange(item);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage type={"bubbles"} color="blue" />
      ) : (
        <div className="flex flex-col mb-8 relative">
          <Heading isCenter='true'>{heading}</Heading>
          <div className="flex justify-between">
            <Nav
              className="sm:space-x-2"
              containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base"
            >
              {categories &&
                categories.map((item) => (
                  <NavItem
                    key={item.id}
                    isActive={tabActive && tabActive.id === item.id}
                    onClick={() => handleClickTab(item)}
                  >
                    {item.name}
                  </NavItem>
                ))}
            </Nav>
            <Button className="!hidden md:!flex" pattern="white" sizeClass="px-6" onClick={()=>{console.log("clicked");navigate('/category')}}>
              <span>View all</span>
              <ArrowRightIcon className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderFilter;
