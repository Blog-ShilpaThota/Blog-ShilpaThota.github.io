import React, {  useEffect, useState } from "react";
import CardCategory1 from "../../components/CardCategory1/CardCategory1";
import NcModal from "../../components/NcModal/NcModal";
import Button from "../../components/Button/Button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import LoadingPage from "../Loading";

const ModalCategories= ({categories}) => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    if(categories&&categories.length>0){
      setLoading(false);
    }
  },[]);
  const renderModalContent = () => {

    return (
      <>
      {loading ? (
        <LoadingPage type="bubbles" color="blue" />
      ) : (
        <>
      <div className="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
        {categories.map((cat) => (
          <CardCategory1 key={cat.id} taxonomy={cat} size="normal" />
        ))}
      </div>
      </>)}
      </>
    );
  };

  return (
    <div className="nc-ModalCategories">
      <NcModal
        renderTrigger={(openModal) => (
          <Button
            pattern="third"
            fontSize="text-sm font-medium"
            onClick={openModal}
          >
            <div>
              <span className="hidden sm:inline">Other</span> Categories
            </div>
            <ChevronDownIcon
              className="w-4 h-4 ml-2 -mr-1"
              aria-hidden="true"
            />
          </Button>
        )}
        modalTitle="Discover other categories"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalCategories;
