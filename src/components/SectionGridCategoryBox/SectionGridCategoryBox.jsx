import CardCategory1 from "../../components/CardCategory1/CardCategory1";
import CardCategory2 from "../../components/CardCategory2/CardCategory2";
import CardCategory3 from "../../components/CardCategory3/CardCategory3";
import CardCategory4 from "../../components/CardCategory4/CardCategory4";
import CardCategory5 from "../../components/CardCategory5/CardCategory5";
import Heading from "../../components/Heading/Heading";
import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary";


const SectionGridCategoryBox = ({
  categories,
  categoryCardType = "card2",
  headingCenter = true,
  className = "",
}) => {

  let CardComponentName = CardCategory2;
  switch (categoryCardType) {
    case "card1":
      CardComponentName = CardCategory1;
      break;
    case "card2":
      CardComponentName = CardCategory2;
      break;
    case "card3":
      CardComponentName = CardCategory3;
      break;
    case "card4":
      CardComponentName = CardCategory4;
      break;
    case "card5":
      CardComponentName = CardCategory5;
      break;

    default:
      CardComponentName = CardCategory2;
  }

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}` } style={{marginTop:'20px'}}>
      <Heading desc="Discover over 100 topics" isCenter={headingCenter}>
        Top trending topics
      </Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {categories.map((item, i) => (
          <CardComponentName
            index={`#${i + 1}`}
            key={item.id}
            taxonomy={item}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <ButtonPrimary href="/category">Discover More</ButtonPrimary>
      </div>    </div>
  );
};

export default SectionGridCategoryBox;
