
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeQuantity } from "../features/ProductSlice";
import type { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import {updateCheckoutValues} from '../features/UpdateSlice' ;
import Payment from "./Payment";
import { useNavigate } from "react-router-dom"; 
type Props = {
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
};


const Details = ({setShowProfile}:Props) => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const[payment,setPayment]=useState(false)
  const selector = useSelector((state: RootState) => state.product.product);

  useEffect(() => {
    console.log("page loaded");
  }, []);
 console.log("payment",setPayment)
  const totalQuantity = selector.reduce((total, item) => total + item.quantity, 0);

const totalPrice = selector.reduce(
  (total, item) => {
   
    const price = Number((item as { originalPrice?: number }).originalPrice) || 0;
    return total + (item.quantity || 0) * price;
  },
  0
);

const handleClick=()=>{
  console.log("show porfile")
   setShowProfile(false)
 }

  if (selector.length === 0) {
    return (
      <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-50 overflow-y-auto p-4">
       
       <h2 className="text-lg font-bold flex items-center justify-between">
        <span>Your Cart</span>
      <button
       onClick={handleClick}
       className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-500 bg-gray-100 hover:bg-red-100 rounded-full transition duration-200"
  >
    <IoClose />
  </button>
</h2>
        <p className="mt-4 text-gray-600">No data present on the cart</p>
      </div>
    );
  }


    const goToPayment = () => {
    dispatch(updateCheckoutValues({totalPrice,totalQuantity}))
    navigate("/payment", { state: { totalPrice } });
  };


  
 
  return (
    <>
    <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-50 overflow-y-auto p-4">
   
      <div className="flex items-center justify-between border-b pb-3">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <span className="text-green-600 font-medium">Saved ₹304</span>
         
          <button
        onClick={handleClick}
       className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-500 bg-gray-100 hover:bg-red-100 rounded-full transition duration-200"
       >   
          <IoClose />
      </button>

      </div>

     
      <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
        <span className="text-green-500 font-semibold">✓</span>
        Delivery in <span className="text-red-500 font-semibold">6 mins</span>
      </div>

   
      <div className="divide-y mt-4">
        {selector.map((value: any) => (
          <div key={value.id} className="flex items-center justify-between py-3">
            <img src={value.image} alt={value.title} className="w-16 h-16 rounded object-cover" />
            <div className="flex-1 ml-3">
              <h3 className="text-sm font-semibold line-clamp-2">{value.title}</h3>
              <p className="text-xs text-gray-500">₹{value.originalPrice}</p>
              <p className="text-xs text-gray-500">Rating: {value.rating}</p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => dispatch(decreaseQuantity({ id: value.id }))}
                >
                  -
                </button>
                <span>{value.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => dispatch(increaseQuantity({ id: value.id }))}
                >
                  +
                </button>
                <button
                  className="ml-2 text-red-500 text-xs"
                  onClick={() => dispatch(removeQuantity({ id: value.id }))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

   
      <div className="mt-4">
        <button className="w-full text-center bg-gray-100 py-2 rounded text-sm font-medium" onClick={handleClick}>
          + Add More Items
        </button>
      </div>

     
      <div className="mt-4 p-3 bg-yellow-50 border rounded text-sm">
        <p className="font-semibold text-green-600">✓ Free delivery above ₹99</p>
        <p className="text-gray-600">✓ Lowest prices on Fruits & Veggies</p>
        <p className="text-gray-500 text-xs mt-1">
          Added at ₹1 <del>₹199</del>
        </p>
        <button className="text-blue-500 text-xs mt-1">Remove</button>
      </div>

      
      <div className="mt-4 flex items-center gap-2">
        <input type="checkbox" id="freeCash"/>
        <label htmlFor="freeCash" className="text-sm">
          Apply ₹100 Free Cash
        </label>
      </div>

      
      <div className="mt-4">
        <h2 className="text-sm font-semibold">Total Quantity: {totalQuantity}</h2>
        <h2 className="text-sm font-semibold">Total Price: ₹{totalPrice}</h2>
      </div>

     
      <div className="mt-4">
        <button className="w-full bg-red-500 text-white py-2 rounded font-semibold"  onClick={goToPayment} >
          Add Address to proceed
        </button>
      </div>
    </div>
     {payment && <Payment />} 
    </>
  );
};


export default Details;

