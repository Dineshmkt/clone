
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { useNavigate } from "react-router-dom"

const Submitted = () => {
  const navigate = useNavigate();
  const selector = useSelector((state: RootState) => state.checkout.TotalPrice);
  const select = useSelector((state: RootState) => state.checkout.TotalQuantity);
  const value = useSelector((state: RootState) => state.product.product); 
  const place = useSelector((state: RootState) => state.location.LocationValue);
  const LoginValue = useSelector((state: RootState) => state.LoginValue.name);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleBack = () => {
    navigate("/");
  }


  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-pink-600 mb-4">Thank You for Your Order!</h1>

        <div className="border p-4 rounded mb-4">
          <p><strong>Order ID:</strong> 456789012</p>
          <p><strong>Date:</strong> {formattedDate}</p>
          <p><strong>Total:</strong> ₹{selector} | Quantity: {select}</p>
          <p><strong>Address:</strong> {LoginValue}, {place}</p>
        </div>

        <ul className="border-b pb-2 divide-y">
         {value.map((item, index) => (
       <li key={index} className="flex justify-between py-2">
            <span>{item.title} ({item.weight})</span>
              <span>₹{item.originalPrice}</span>
    </li>
  ))}
 </ul>
        <div className="mt-4 text-green-600 font-medium">
           Expected Delivery: Today, 7:00 PM - 9:00 PM
        </div>

        <div className="mt-6 flex gap-4">
          <button className="bg-pink-600 text-white px-4 py-2 rounded">Track Order</button>
          <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded">Download Invoice</button>
        </div>

        <button
          onClick={handleBack}
          className="bg-black text-white px-2 py-2 rounded mt-4"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default Submitted;

