import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { SectionData } from "../data/SectionData.ts";
import { AddProduct } from "../features/ProductSlice.tsx";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const fetchProduct = async () => {
  return new Promise<typeof SectionData>((resolve) => {
    setTimeout(() => resolve(SectionData), 500); 
  });
};

const FetchProductList: React.FC = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { id } = useParams();
 const numericId = Number(id);
 console.log("Route param ID:", numericId);
  const { data, isLoading, isError } = useQuery({
     queryKey: ["section", id],
    queryFn: fetchProduct,
  });
  useEffect(()=>(console.log(" Section component loaded")),[])
  
  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Error fetching product.</div>;
  if (!data) return null;

  const product = data.find((item) => item.id === numericId);
   console.log("data",product)
  if (!product) {
    return <div className="text-center mt-10 text-gray-500">Product not found.</div>;
  }
 
  const handleDispatch=(product)=>{
    console.log(product)
    dispatch(AddProduct(product))
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => {
      navigate("/")
    }, 3000);
  }

  return (
 <div className="flex h-screen overflow-hidden">

<div className="w-full mt-6 mx-6 h-[480px] lg:w-[280px] bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col justify-center items-center gap-6">
  <img
    src={product.image}
    alt={product.name}
    className="max-w-full h-[280px] object-contain"
  />
  <button
    onClick={() => handleDispatch(product)}
    className="w-full bg-rose-500 hover:bg-rose-600 text-white text-lg py-3 rounded-lg font-semibold transition"
  >
    Add To Cart
  </button>
</div>


  <div className="w-2/3 overflow-y-auto p-6 space-y-6 bg-white">
  
    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-white shadow-sm">
    <h1 className="text-xl font-semibold text-gray-800 leading-tight">
      {product.name || "Agaro Icon Gun Massager, 4 Heads, 6 Speed Percussion Muscle Massager For Full Body Pain Relief"}
    </h1>

 
    <div className="text-sm text-gray-600">
      Net Qty: <span className="font-medium text-gray-800">1 pc</span>
    </div>

  
    <div className="flex items-center gap-2">
      <span className="bg-green-600 text-white text-sm font-semibold px-2 py-0.5 rounded">
        ★ {product.rating || 4.3}
      </span>
      <span className="text-sm text-gray-600">({product.reviews || 278})</span>
    </div>


    <div className="text-sm text-green-600 font-medium">
      ⚡ Get in 26 minutes
    </div>

    
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-3xl font-bold text-gray-800">
        ₹{product.originalPrice || 1699}
      </span>
      <span className="text-green-600 text-lg font-medium">
        {product.discountPercent || 51}% Off
      </span>
      <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm font-medium ml-auto">
        SUPER SAVER
      </div>
    </div>

    {/* MRP */}
    <div className="text-sm text-gray-600">
      MRP <span className="line-through">₹{product.originalPrice || 3490}</span> (incl. of all taxes)
    </div>

    {/* Get it for section */}
    <div className="bg-gray-100 p-3 rounded">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
          <span className="text-blue-600 text-xs font-bold">D</span>
        </div>
        <span className="text-sm text-gray-800 font-medium">
          Get at ₹{(product.price || 1699) - 85} with coupon offers
        </span>
      </div>
      <div className="text-xs text-rose-500 cursor-pointer">View all offers</div>
    </div>

    {/* Coupons & Offers Section */}
    <div className="border-t pt-4">
      <h3 className="text-sm font-semibold mb-3 text-gray-700">Coupons & Offers</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-sm text-gray-600 p-2 bg-blue-50 rounded">
          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs font-bold">D</span>
          </div>
          <span>Get upto ₹200 off on orders above 1599</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600 p-2 bg-orange-50 rounded">
          <div className="w-6 h-6 bg-orange-500 text-white rounded flex items-center justify-center text-xs font-bold">
            AU
          </div>
          <span>Get 5% discount with AU Bank Credit Card</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600 p-2 bg-gray-50 rounded">
          <div className="w-6 h-6 bg-gray-800 text-white rounded flex items-center justify-center text-xs font-bold">
            pay
          </div>
          <span>Get upto ₹25 Cashback on using Amazon Pay UPI</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600 p-2 bg-gray-50 rounded">
          <div className="w-6 h-6 bg-gray-800 text-white rounded flex items-center justify-center text-xs font-bold">
            pay
          </div>
          <span>Get Upto ₹50 Cashback on using Amazon Pay Balance</span>
        </div>
      </div>
    </div>

    {/* View all coupons */}
    <div className="text-rose-600 text-sm font-medium cursor-pointer">
      View all coupons
   </div>
   </div>
    {/* Highlights Section */}
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Highlights</h2>
      <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
         <div className="font-medium">Brand</div>
        <div>Agaro</div>

        <div className="font-medium">Product Type</div>
        <div>Gun Massager</div>

        <div className="font-medium">Model Name</div>
        <div>Icon</div>

        <div className="font-medium">No Of Speed</div>
        <div>6</div>

        <div className="font-medium">Colour Name</div>
        <div>Black</div>

        <div className="font-medium">No Of Modes</div>
        <div>6</div>

        <div className="font-medium">Material Type</div>
        <div>Silicone</div>

        <div className="font-medium">Power Source</div>
        <div>Battery Powered</div>

        <div className="font-medium">Product Dimensions</div>
        <div>21 x 5 x 19 cm</div>

        <div className="font-medium">Key Features</div>
        <div>
          Deep tissue percussion gun massager, 4 interchangeable massage heads,
          6 speed settings, rechargeable 4000 mAh battery
        </div>

        <div className="font-medium">Item Included</div>
        <div>1 x Massager</div>
      </div>
    </div>

    {/* Information Section */}
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Information</h2>
      <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700">
         <div className="font-medium">Disclaimer</div>
        <div>
          All images are for representational purposes only. It is advised that you read the batch and manufacturing details...
        </div>

        <div className="font-medium">Customer Care Details</div>
        <div>
          In case of any issue, contact us E-mail address: <br />
          <span className="text-blue-600">support@zeptonow.com</span>
        </div>

        <div className="font-medium">Seller Name</div>
        <div>Geddit Convenience Private Limited</div>

        <div className="font-medium">Seller Address</div>
        <div>
          Geddit Convenience Private Limited, Unit 803...<br />
          <span className="text-blue-600">support+geddit@zeptonow.com</span>
        </div>

        <div className="font-medium">Seller License No.</div>
        <div>11521998000248</div>

        <div className="font-medium">Country Of Origin</div>
        <div>China</div>
      </div>
    </div>

  </div>
</div>
</div>
 )
};

export default FetchProductList;

