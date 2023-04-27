import React from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryDetail from "./CategoryDetail";

const Category = () => {
  return (
    <>
      <div className="h-screen bg-custom-gray justify-center">
        <CategoryHeader />
       
        <CategoryDetail />
      </div>
    </>
  );
};

export default Category;
