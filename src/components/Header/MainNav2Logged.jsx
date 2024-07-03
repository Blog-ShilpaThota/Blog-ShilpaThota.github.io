import React, { FC } from "react";
import Logo from "../../components/Logo/Logo";
import MenuBar from "../../components/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "../../components/Navigation/Navigation";
import { NAVIGATION_DEMO_2 } from "../../data/navigation";
import { useItems } from "../../contains/ItemContext";
import SearchModal from "./SearchModal";
import NotifyDropdown from "./NotifyDropdown";
const preprocessNavigationData = (categories) => {
  // Clone NAVIGATION_DEMO_2 to avoid modifying the original data
  const navigationDataClone = JSON.parse(JSON.stringify(NAVIGATION_DEMO_2));

  // Find the "Articles" menu item
  const articlesMenuItemIndex = navigationDataClone.findIndex(
    (item) => item.name === "Articles"
  );
  console.log(articlesMenuItemIndex);

  // If "Articles" menu item exists
  if (articlesMenuItemIndex !== -1) {
    // Insert categories under the "Articles" menu item
    navigationDataClone[articlesMenuItemIndex].children = categories.map(
      (category) => ({
        id: category.id,
        href: category.href,
        name: category.name,
      })
    );
  }
console.log(navigationDataClone);
  return navigationDataClone;
};

const MainNav2Logged= () => {
  const {categories} = useItems();
  const data = preprocessNavigationData(categories);
  const renderContent = () => {
    return (
      <div className="h-20 flex justify-between">
        <div className="flex items-center lg:hidden flex-1">
          <MenuBar data={data}/>
        </div>

        <div className="lg:flex-1 flex items-center">
          <Logo />
        </div>

        <div className="flex-[2] hidden lg:flex justify-center mx-4">
          <Navigation data={data}/>
        </div>

        <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
          {/* <SearchModal /> */}
          {/* <NotifyDropdown /> */}
          <AvatarDropdown />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-MainNav2Logged relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
      <div className="container ">{renderContent()}</div>
    </div>
  );
};

export default MainNav2Logged;
