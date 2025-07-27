import { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CashOnDelievery = () => {
  const [selected, setSelected] = useState(false);
  const navigate=useNavigate()

  const handleSelect = () => {
    setSelected(!selected);
  };

  const handleClick=()=>{
   
       setTimeout(() => {
      alert('order successfully!');
    }, 2000);
     navigate("/submitted")
  }
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-md border border-gray-200 mt-10">
      <h2 className="text-xl font-semibold mb-4">Cash On Delivery</h2>
      <hr className="mb-6" />

      <div className="flex items-start justify-between gap-4">
    
        <div className="flex items-start gap-4 cursor-pointer" onClick={handleSelect}>
          <div className="p-2 border rounded-md bg-gray-50">
            <img
              src="https://assets.juspay.in/hyper/images/geddit/jp_ic_cod.png"
              alt="Cash Icon"
              className="w-10 h-10"
            />
          </div>
          <div>
            <p className="font-medium text-gray-800">Cash On Delivery</p>
            <p className="text-sm text-gray-600">Pay by Cash/UPI on delivery</p>
          </div>
        </div>

        
        <div className="text-pink-500 mt-2 cursor-pointer" onClick={handleSelect}>
          {selected ? (
            <CheckCircle size={20} strokeWidth={2.5} />
          ) : (
            <Circle size={20} strokeWidth={2.5} />
          )}
        </div>
      </div>

      {selected && (
        <div className="mt-8">
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-md font-semibold" onClick={handleClick}>
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default CashOnDelievery;
