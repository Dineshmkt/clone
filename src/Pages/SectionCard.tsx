
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

 // return (
//     <div className="my-8 px-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">{title}</h2>
//         {items.length > 5 && (
//           <button
//             className="text-pink-600 font-medium"
//             onClick={() => setShowAll(!showAll)}
//           >
//             {showAll ? "Less More" : "See All"}
//           </button>
//         )}
//       </div>

// {!showAll ? (
//  <div className="flex gap-4 overflow-x-auto">
//   {visibleItems.map((item) => (
//     <div
//       key={item.id}
//       className="min-w-[200px] max-w-[220px] bg-white border border-gray-200 rounded-xl shadow-md p-3 flex-shrink-0"
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className="h-32 w-full object-contain rounded"
//       />
//       <button
//         onClick={() => handleView(item.id)}
//         className="mt-2 mb-1 w-fit px-3 py-[2px] text-sm border border-pink-500 text-pink-600 rounded-full font-semibold"
//       >
//         view
//       </button>
//       <div className="text-sm font-bold mt-1 line-clamp-2">{item.title}</div>
//       <div className="text-xs text-gray-600">{item.description}</div>

//       <div className="mt-2">
//         <span className="text-lg font-bold text-black">₹{item.price}</span>
//         {item.originalPrice && (
//           <span className="text-sm text-gray-400 line-through ml-2">
//             ₹{item.originalPrice}
//           </span>
//         )}
//         {item.offerText && (
//           <span className="text-sm text-green-600 font-medium ml-2">
//             {item.offerText}
//           </span>
//         )}
//       </div>

//       <div className="text-xs text-gray-500 mt-1">{item.volume || "1L"}</div>
//       <div className="text-xs text-gray-500">{item.time || "20 mins"}</div>

//       {item.rating && (
//         <div className="text-sm text-pink-600 mt-1">
//           {item.rating}{" "}
//           <span className="text-gray-500 text-xs">({item.ratingCount})</span>
//         </div>
//       )}
//     </div>
//   ))}
// </div>
//   ))}
// </div>
// ) : (    
// <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//   {items.map((item) => (
//     <div
//       key={item.id}
//       className="bg-white border border-gray-200 rounded-xl shadow-sm p-3"
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className="h-32 w-full object-contain rounded"
//       />

     
//       <button
//         onClick={() => handleView(item.id)}
//         className="mt-2 mb-1 w-fit px-3 py-[2px] text-sm border border-pink-500 text-pink-600 rounded-full font-semibold"
//       >
//         view
//       </button>

      
//       <div className="text-sm font-bold mt-1 line-clamp-2">{item.title}</div>
//       <div className="text-xs text-gray-600">{item.description}</div>

     
//       <div className="mt-2">
//         <span className="text-lg font-bold text-black">₹{item.price}</span>
//         {item.originalPrice && (
//           <span className="text-sm text-gray-400 line-through ml-2">
//             ₹{item.originalPrice}
//           </span>
//         )}
//         {item.offerText && (
//           <span className="text-sm text-green-600 font-medium ml-2">
//             {item.offerText}
//           </span>
//         )}
//       </div>

   
//       <div className="text-xs text-gray-500 mt-1">{item.volume || "1L"}</div>
//       <div className="text-xs text-gray-500">{item.time || "20 mins"}</div>


//       {item.rating && (
//         <div className="text-sm text-pink-600 mt-1">
//           {item.rating}{" "}
//           <span className="text-gray-500 text-xs">({item.ratingCount})</span>
//         </div>
//       )}
//     </div>
//   ))}
// </div>
//  )}
//   </div>
//   );

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
      // Horizontal Scroll View
      <div className="flex gap-4 overflow-x-auto">
        {visibleItems.map((item) => (
          // <div
          //   key={item.id}
          //   className="min-w-[200px] max-w-[220px] bg-white border border-gray-200 rounded-xl shadow-md p-3 flex-shrink-0"
          // >
          //   <img
          //     src={item.image}
          //     alt={item.title}
          //     className="h-32 w-full object-contain rounded"
          //   />
          //   <button
          //     onClick={() => handleView(item.id)}
          //     className="mt-2 mb-1 w-fit px-3 py-[2px] text-sm border border-pink-500 text-pink-600 rounded-full font-semibold"
          //   >
          //     view
          //   </button>
          //   <div className="text-sm font-bold mt-1 line-clamp-2">{item.title}</div>
          //   <div className="text-xs text-gray-600">{item.description}</div>

          //   <div className="mt-2">
          //     <span className="text-lg font-bold text-black">₹{item.originalPrice}</span>
          //     {item.originalPrice && (
          //       <span className="text-sm text-gray-400 line-through ml-2">
          //         ₹{item.originalPrice}
          //       </span>
          //     )}
          //     {item.offerText && (
          //       <span className="text-sm text-green-600 font-medium ml-2">
          //         {item.offerText}
          //       </span>
          //     )}
          //   </div>

          //   <div className="text-xs text-gray-500 mt-1">{item.volume || "1L"}</div>
          //   <div className="text-xs text-gray-500">{item.time || "20 mins"}</div>

          //   {item.rating && (
          //     <div className="text-sm text-pink-600 mt-1">
          //       {item.rating}{" "}
          //       <span className="text-gray-500 text-xs">({item.reviews})</span>
          //     </div>
          //   )}
          // </div>
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
          // <div
          //   key={item.id}
          //   className="bg-white border border-gray-200 rounded-xl shadow-sm p-3"
          // >
          //   <img
          //     src={item.image}
          //     alt={item.title}
          //     className="h-32 w-full object-contain rounded"
          //   />
          //   <button
          //     onClick={() => handleView(item.id)}
          //     className="mt-2 mb-1 w-fit px-3 py-[2px] text-sm border border-pink-500 text-pink-600 rounded-full font-semibold"
          //   >
          //     view
          //   </button>
          //   <div className="text-sm font-bold mt-1 line-clamp-2">{item.title}</div>
          //   <div className="text-xs text-gray-600">{item.description}</div>

          //   <div className="mt-2">
          //     <span className="text-lg font-bold text-black">₹{item.price}</span>
          //     {item.originalPrice && (
          //       <span className="text-sm text-gray-400 line-through ml-2">
          //         ₹{item.originalPrice}
          //       </span>
          //     )}
          //     {item.offerText && (
          //       <span className="text-sm text-green-600 font-medium ml-2">
          //         {item.offerText}
          //       </span>
          //     )}
          //   </div>

          //   <div className="text-xs text-gray-500 mt-1">{item.volume || "1L"}</div>
          //   <div className="text-xs text-gray-500">{item.time || "20 mins"}</div>

          //   {item.rating && (
          //     <div className="text-sm text-pink-600 mt-1">
          //       {item.rating}{" "}
          //       <span className="text-gray-500 text-xs">({item.reviews})</span>
          //     </div>
          //   )}
          // </div>
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
    )}
  </div>
);

 };

export default SectionCard;
