import { useNavigate } from "react-router-dom";
import Section from "./Section";

type Product = {
  id: number;
  image: string;
  title: string;
  name: string;

  rating: number;
  originalPrice:number;
  offerPrice:number;
  weight:string;
  time:string;
  reviews:number;
};

type Props = {
  products: Product[];
};

const ProductGrid = ({ products }: Props) => {

  const navigate=useNavigate()
  
  const handleView = (id: number) => {
        console.log("id",id)
       navigate(`/Section/${id}`);
  };
  
  return (
    <>
  <div className="flex flex-wrap gap-4 mt-6 mx-14">
  {products.length > 0 ? (
    products.map((item) => {
      const discount = item.originalPrice - item.offerPrice;

      return (
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
          
            <button onClick={()=>handleView(item.id)} className="text-[#d4006a] border border-[#d4006a] rounded-md px-4 py-1 text-sm font-semibold hover:bg-[#fff0f7] transition">
             view
           </button>

          </div>

          <div className="mt-3 text-sm font-semibold truncate">{item.title}</div>
          <div className="text-xs text-gray-600 truncate">{item.name}</div>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-base font-semibold">₹{item.offerPrice}</span>
            {discount > 0 && (
              <>
                <span className="text-sm line-through text-gray-400">
                  ₹{item.originalPrice}
                </span>
                <span className="text-green-600 text-xs font-semibold">
                  ₹{discount}  Off
                </span>
              </>
            )}
          </div>

          <div className="text-xs text-gray-500 mt-1">{item.weight}</div>
          <div className="text-xs text-gray-500">{item.time}</div>

          <div className="text-xs text-rose-600 mt-1">
            {item.rating} ({item.reviews})
          </div>
        </div>
      );
    })
  ) : (
    <p className="text-center col-span-full text-gray-400 mt-4">No products found.</p>
  )}
</div>
  <Section/>
</>
  );
};

export default ProductGrid;

