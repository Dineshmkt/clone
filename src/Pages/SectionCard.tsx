
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  offerText?: string;
  rating?: number;
  reviews?: number;
  time?: string;
  weight:string;
  offerPrice:number;
  name:string;
}

interface Props {
  title: string;
  items: Product[];
}

const SectionCard: React.FC<Props> = ({ title, items }) => {
  const navigate=useNavigate()
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 6);

    const handleView = (id: number) => {
       console.log("id",id)
       navigate(`/Section/${id}`);
  };

return (
  <div className="my-8 px-4">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {items.length > 5 && (
        <button
          className="text-pink-600 font-medium"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Less More" : "See All"}
        </button>
      )}
    </div>

    {!showAll ? (
      // Horizontal  View
      <div className="flex gap-4 overflow-x-auto">
        {visibleItems.map((item:Product) => (
         
           <div
                key={item.id}
                className="w-[170px] border p-2 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-full object-contain"
                  />
                  <button 
                    onClick={() => handleView(item.id)} 
                    className="text-[#d4006a] border border-[#d4006a] rounded-md px-4 py-1 text-sm font-semibold hover:bg-[#fff0f7] transition"
                  >
                    view
                  </button>
                </div>
                <div className="mt-3 text-sm font-semibold truncate">{item.title}</div>
                <div className="text-xs text-gray-600 truncate">{item.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-semibold">₹{item.offerPrice}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.weight}</div>
                <div className="text-xs text-gray-500">{item.time}</div>
                <div className="text-xs text-rose-600 mt-1">
                  {item.rating} ({item.reviews})
                </div>
              </div>
        ))}
      </div>
    ) : (
      // Grid View
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
         
          <div
                key={item.id}
                className="w-[170px] border p-2 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 w-full object-contain"
                  />
                  <button 
                    onClick={() => handleView(item.id)} 
                    className="text-[#d4006a] border border-[#d4006a] rounded-md px-4 py-1 text-sm font-semibold hover:bg-[#fff0f7] transition"
                  >
                    view
                  </button>
                </div>
                <div className="mt-3 text-sm font-semibold truncate">{item.title}</div>
                <div className="text-xs text-gray-600 truncate">{item.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-semibold">₹{item.offerPrice}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.weight}</div>
                <div className="text-xs text-gray-500">{item.time}</div>
                <div className="text-xs text-rose-600 mt-1">
                  {item.rating} ({item.reviews})
                </div>
              </div>
        ))}
      </div>
    )}
  </div>
);

 };

export default SectionCard;
