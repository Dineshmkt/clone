// 


// import { useQuery } from "@tanstack/react-query"
// import { SectionData } from "../data/SectionData";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const fetchProduct = async () => {
//   return new Promise<typeof SectionData>((resolve) => {
//     setTimeout(() => resolve(SectionData), 500);
//   });
// };

// const SearchItems = () => {
//   const navigate = useNavigate()
//   const [search, setSearch] = useState("")
//   const [debouncedSearch, setDebouncedSearch] = useState("")

 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(search);
//     }, 300); 

//     return () => clearTimeout(timer);
//   }, [search]);

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["searchItems"],
//     queryFn: fetchProduct
//   })

//   if (isLoading) return <div className="text-center mt-10">Loading...</div>;
//   if (isError) return <div className="text-center mt-10 text-red-500">Error fetching product.</div>;

 
//   const filteredData = data ? 
//     (debouncedSearch ? data.filter((value) => 
//       value?.category?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//       value.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//       value.title.toLowerCase().includes(debouncedSearch.toLowerCase())
//     ) : data) : 
//     [];

//   const handleView = (id: number) => {
//     console.log("id", id)
//     navigate(`/Section/${id}`);
//   };

//   return (
//     <>
//       <input 
//         type="text"
//         placeholder="search over 5000 products"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full max-w-md px-4 py-2 m-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4006a] focus:border-transparent"
//       />
      
//       {search && search !== debouncedSearch && (
//         <div className="text-sm text-gray-500 mt-1">Searching...</div>
//       )}
//       <div className="flex flex-wrap gap-4 mt-6 mx-20">
//         <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/tr:w-1438,ar-1438-265,pr-true,f-auto,q-80//images/paan-corner/paan-corner-desktop.png" alt="" />
//         {filteredData.length > 0 ? (
//           filteredData.map((item) => {
//             const discount = item.originalPrice - item.offerPrice;
//             return (
//               <div
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
//                     onClick={() => handleView(item.id)} 
//                     className="text-[#d4006a] border border-[#d4006a] rounded-md px-4 py-1 text-sm font-semibold hover:bg-[#fff0f7] transition"
//                   >
//                     view
//                   </button>
//                 </div>
//                 <div className="mt-3 text-sm font-semibold truncate">{item.title}</div>
//                 <div className="text-xs text-gray-600 truncate">{item.name}</div>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="text-base font-semibold">₹{item.offerPrice}</span>
//                   {discount > 0 && (
//                     <>
//                       <span className="text-sm line-through text-gray-400">
//                         ₹{item.originalPrice}
//                       </span>
//                       <span className="text-green-600 text-xs font-semibold">
//                         ₹{discount} Off
//                       </span>
//                     </>
//                   )}
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">{item.weight}</div>
//                 <div className="text-xs text-gray-500">{item.time}</div>
//                 <div className="text-xs text-rose-600 mt-1">
//                   {item.rating} ({item.reviews})
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-center col-span-full text-gray-400 mt-4">No products found.</p>
//         )}
//       </div>
//     </>
//   )
// }

// export default SearchItems;