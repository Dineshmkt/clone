import  { useState } from 'react';

import { DummyData } from "../data/DummyData";
import ProductGrid from "./ProductGrid";

const BuyAgainCategories = () => {
  const [activeCategory, setActiveCategory] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState("AllItems");
   const productsToShow = DummyData[selectedCategory] || [];

  const categories = [
    { id: 1, title: "AllItems", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/a0aef7cc-95a1-4d6b-b31f-b5d9f91e0194.png" },
    { id: 2, title: "Fruits", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/07d3b664-e7a2-4695-acf2-821e882a36d1.png" },
    { id: 3, title: "dairy", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/b633b9ea-b2d1-479d-a7e7-4171f687847d.png" },
    // { id: 4, title: "", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/b334da81-6302-47a7-bd60-41dd31e8b513.png" },
    { id: 5, title: "Atta", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/71b0c79b-710e-4eb2-8f27-c4c1500f55e9.png" },
    { id: 6, title: "Sweet", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/69d9774a-feed-4a21-9c0a-0c270ce3fd46.png" },
    { id: 7, title: "juices", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/d9a4e55f-ecaa-4ba3-baf6-5882508a2e93.png" },
    { id: 8, title: "Elevate", image: "https://cdn.zeptonow.com/production/tr:w-72,ar-144-144,pr-true,f-auto,q-80/inventory/banner/2408de5e-a5c2-4eb2-8db9-336c42443a89.png" }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="bg-white p-6">
    
      <div className="flex items-center mx-14 mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Buy <span className="text-purple-600">Again</span>
        </h2>
      </div>

     
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide mx-14">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-200 ${
              activeCategory === category.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
            }`}
          >
         
            <div
             onClick={()=>setSelectedCategory(category.title)}
              className={`w-16 h-16 gap-4 rounded-2xl flex items-center justify-center mb-2 transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-100 border-2 border-purple-500'
                  : 'bg-gray-100 border-2 border-transparent hover:bg-gray-200'
              }`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            
           
            <span
              className={`text-xs font-medium text-center leading-tight max-w-16 ${
                activeCategory === category.id ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              {category.title}
            </span>
            
          
            {activeCategory === category.id && (
              <div className="w-8 h-1 bg-purple-600 rounded-full mt-1"></div>
            )}
          </div>
        ))}
      </div>

      <ProductGrid products={productsToShow} />
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BuyAgainCategories;