
// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useMemo } from "react";
// import { DummyData } from "../data/DummyData";


// const CategoryFilter = () => {
//   const navigate=useNavigate()
//   const { title } = useParams(); 
//   const productsToShow = DummyData[title] || [];


//   const uniqueCategories = useMemo(() => {
//     const categories = new Set(productsToShow.map((item) => item.category));
//     return Array.from(categories); 
//   }, [productsToShow]);

  
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleClick=(id:string)=>{
//      navigate(`/Section/${id}`)
//   }

//   const filteredProducts = selectedCategory
//     ? productsToShow.filter((item) => item.category === selectedCategory)
//     : productsToShow;

//   return (
//     <div className="flex h-[calc(100vh-64px)]"> 
    
//       <div className="w-1/4 border-r p-4 bg-white sticky top-0 h-full">
//         <h2 className="font-bold mb-2">Categories</h2>
//         <ul className="space-y-1">
//           {uniqueCategories.map((cat) => (
//             <li
//               key={cat}
//               className={`cursor-pointer p-2 rounded ${
//                 selectedCategory === cat ? "bg-green-300" : "hover:bg-gray-200"
//               }`}
//               onClick={() => setSelectedCategory(cat)}
//             >
//               {cat}
//             </li>
//           ))}
          
//           <li
//             className="cursor-pointer p-2 mt-4 text-blue-600 hover:underline"
//             onClick={() => setSelectedCategory("")}
//           >
//             Show All
//           </li>
//         </ul>
//       </div>

    
//       <div className="w-3/4 p-4 overflow-y-auto h-full">
//         <h2 className="text-xl font-semibold mb-4">
//           {selectedCategory || "All"} Products
//         </h2>

//      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {filteredProducts.map((item) => (
//                 <div
//                 key={item.id}
//                 className="w-[170px] border p-2 rounded-xl shadow-sm hover:shadow-lg transition-all"
//               >
//                 <div className="relative">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="h-28 w-full object-contain"
//                   />
//                   <button 
//                     onClick={() => handleClick(item.id)} 
//                     className="text-[#d4006a] border border-[#d4006a] rounded-md px-4 py-1 text-sm font-semibold hover:bg-[#fff0f7] transition"
//                   >
//                     view
//                   </button>
//                 </div>
//                 <div className="mt-3 text-sm font-semibold truncate">{item.title}</div>
//                 <div className="text-xs text-gray-600 truncate">{item.name}</div>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="text-base font-semibold">₹{item.offerPrice}</span>
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">{item.weight}</div>
//                 <div className="text-xs text-gray-500">{item.time}</div>
//                 <div className="text-xs text-rose-600 mt-1">
//                   {item.rating} ({item.reviews})
//                 </div>
//               </div>
//          ))}
//     </div> 
//    </div>
//  </div>
//   );
// };

// export default CategoryFilter;



// import { useNavigate, useParams } from "react-router-dom";
// import { useState, useMemo } from "react";
// import { DummyData } from "../data/DummyData";

// const CategoryFilter = () => {
//   const navigate = useNavigate();
//   const { title } = useParams();
//   const productsToShow = DummyData[title] || [];

//   const uniqueCategories = useMemo(() => {
//     const categories = new Set(productsToShow.map((item) => item.category));
//     return Array.from(categories);
//   }, [productsToShow]);

//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

//   const handleCheckboxChange = (category: string) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const handleClick = (id: string) => {
//     navigate(`/Section/${id}`);
//   };

//   const filteredProducts =
//     selectedCategories.length > 0
//       ? productsToShow.filter((item) => selectedCategories.includes(item.category))
//       : productsToShow;

//   return (
//     <div className="flex h-[calc(100vh-64px)]">
//       {/* Sidebar */}
//       <div className="w-1/4 border-r p-4 bg-white sticky top-0 h-full">
//         <h2 className="text-xl font-bold mb-4">Filters</h2>

//         {/* Availability */}
//         <div className="mb-4">
//           <h3 className="font-semibold mb-2">Availability</h3>
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
//             <span>Include Out of stock</span>
//           </label>
//         </div>

//         <hr className="my-4" />

//         {/* Category Filters */}
//         <div>
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-semibold">Categories</h3>
//             <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//               {selectedCategories.length}
//             </span>
//           </div>

//           {uniqueCategories.map((cat) => (
//             <label key={cat} className="flex items-center space-x-2 my-2">
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.includes(cat)}
//                 onChange={() => handleCheckboxChange(cat)}
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//               <span>{cat}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Products Display */}
//       <div className="w-3/4 p-4 overflow-y-auto h-full">
//         <h2 className="text-xl font-semibold mb-4">
//           {selectedCategories.length > 0 ? selectedCategories.join(", ") : "All"} Products
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {filteredProducts.map((item) => (
//             <div
//               key={item.id}
//               className="w-[170px] border p-2 rounded-xl shadow-sm hover:shadow-lg transition-all"
//             >
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-28 w-full object-contain"
//                 />
//                 <button
//                   onClick={() => handleClick(item.id)}
//                   className="text-[#d4006a] border border-[#d4006a] rounded-md px-4 py-1 text-sm font-semibold hover:bg-[#fff0f7] transition"
//                 >
//                   view
//                 </button>
//               </div>
//               <div className="mt-3 text-sm font-semibold truncate">{item.title}</div>
//               <div className="text-xs text-gray-600 truncate">{item.name}</div>
//               <div className="flex items-center gap-2 mt-1">
//                 <span className="text-base font-semibold">₹{item.offerPrice}</span>
//               </div>
//               <div className="text-xs text-gray-500 mt-1">{item.weight}</div>
//               <div className="text-xs text-gray-500">{item.time}</div>
//               <div className="text-xs text-rose-600 mt-1">
//                 {item.rating} ({item.reviews})
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryFilter;


import { useNavigate, useParams } from "react-router-dom";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { DummyData } from "../data/DummyData";

const CategoryFilter = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const productsToShow = DummyData[title] || [];

  const uniqueCategories = useMemo(() => {
    const categories = new Set(productsToShow.map((item) => item.category));
    return Array.from(categories);
  }, [productsToShow]);

  const prices = productsToShow.map((p) => p.offerPrice || p.price || 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const [isDragging, setIsDragging] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const getPercentage = (value: number) =>
    ((value - minPrice) / (maxPrice - minPrice)) * 100;

  const getValueFromPercentage = (percentage: number) =>
    Math.round(minPrice + (percentage / 100) * (maxPrice - minPrice));

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(index);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging === null || !sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
      );
      const newValue = getValueFromPercentage(percentage);

      setPriceRange((prev) => {
        const newRange = [...prev];
        newRange[isDragging] = newValue;
        if (isDragging === 0 && newValue > prev[1]) newRange[1] = newValue;
        else if (isDragging === 1 && newValue < prev[0]) newRange[0] = newValue;
        return newRange;
      });
    },
    [isDragging, minPrice, maxPrice]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  useEffect(() => {
    if (isDragging !== null) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleClick = (id: string) => {
    navigate(`/Section/${id}`);
  };

  const filteredProducts = productsToShow.filter(
    (item) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)) &&
      (item.offerPrice || item.price) >= priceRange[0] &&
      (item.offerPrice || item.price) <= priceRange[1]
  );

  const leftPercentage = getPercentage(priceRange[0]);
  const rightPercentage = getPercentage(priceRange[1]);

  return (
    <div className="flex h-[calc(100vh-64px)]">
 
      <div className="w-1/4 border-r p-4 bg-white sticky top-0 h-full overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Filters</h2>


        <div className="mb-6">
          <h3 className="font-semibold mb-2">Availability</h3>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span>Include Out of stock</span>
          </label>
        </div>

      
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <div ref={sliderRef} className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-2 bg-blue-500 rounded-full"
              style={{
                left: `${leftPercentage}%`,
                width: `${rightPercentage - leftPercentage}%`,
              }}
            />
           
            <div
              className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
              style={{ left: `${leftPercentage}%`, top: "50%" }}
              onMouseDown={handleMouseDown(0)}
            />
            
            <div
              className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
              style={{ left: `${rightPercentage}%`, top: "50%" }}
              onMouseDown={handleMouseDown(1)}
            />
          </div>
   
          <div className="flex justify-between text-sm mt-4 font-medium text-gray-700">
            <span>{priceRange[0]}</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Categories</h3>
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {selectedCategories.length}
            </span>
          </div>
          {uniqueCategories.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 my-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCheckboxChange(cat)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Products Display */}
      <div className="w-3/4 p-4 overflow-y-auto h-full">
        <h2 className="text-xl font-semibold mb-4">
          {selectedCategories.length > 0
            ? selectedCategories.join(", ")
            : "All"}{" "}
          Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredProducts.map((item) => (
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
                  onClick={() => handleClick(item.id)}
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
      </div>
    </div>
  );
};

export default CategoryFilter;
